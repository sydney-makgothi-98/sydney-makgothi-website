#!/usr/bin/env python3
"""Builds the guide PDF from the chapter files in Guide/src (alphabetical order).

    python build_guide.py              ->  Guide/Building-the-Portfolio-Website.pdf

Typography (as specified): Times New Roman, body 11 pt, section headers 13 pt, subheaders 12 pt, line spacing 1.5,
all running text justified. Code listings (Courier New) and tables are set tighter and left-aligned so that they stay legible.

Chapter-file markup (one blank line between paragraphs):
    @part Title              a part page (listed in the contents)
    # Title                  a numbered chapter          #! Title   an unnumbered chapter (preface, appendices)
    ## Section   ### Subsection   #### Run-in label
    - bullet     1. numbered item (continuation lines indented by two spaces)
    ``` ... ```              a code listing
    | a | b |                a table (first row is the header; a |---| row is ignored)
    :::worked Title / :::check / :::problems / :::note Title   ...   :::     boxed teaching blocks
    :::tip / :::warning / :::remember / :::technical / :::why Title   callout boxes (the 'why' box has four labelled lines)
    :::answers ... :::       answers for the chapter, collected into the Answer Key appendix
    **bold**  *italic*  `code`  ^{superscript}  _{subscript}
    @toc  @answerkey  @titlepage  @pagebreak
"""
import glob
import os
import re
import sys
from xml.sax.saxutils import escape

from reportlab.lib.colors import HexColor, black
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, CondPageBreak, Frame, HRFlowable, KeepTogether, PageBreak, PageTemplate,
                                Paragraph, Preformatted, Spacer, Table, TableStyle)
from reportlab.platypus.tableofcontents import TableOfContents

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'src')
ROOT = os.path.dirname(HERE)
OUT = os.path.join(HERE, 'Building-the-Portfolio-Website.pdf')
TITLE = 'Building an Interactive Engineering Portfolio'
SUBTITLE = 'A Textbook and Guided Build of the Website, from the Theory of the Frontend to the Last Line of Code'
AUTHOR = 'Gopolang Makgothi'
EDITION = 'Edition 0.2, living document'

# ------------------------------------------------------------------ fonts
FONTS = os.environ.get('WINFONTS', r'C:\Windows\Fonts')
for name, f in (('TNR', 'times.ttf'), ('TNR-B', 'timesbd.ttf'), ('TNR-I', 'timesi.ttf'), ('TNR-BI', 'timesbi.ttf'), ('CN', 'cour.ttf'), ('CN-B', 'courbd.ttf'), ('CN-I', 'couri.ttf'), ('CN-BI', 'courbi.ttf')):
    pdfmetrics.registerFont(TTFont(name, os.path.join(FONTS, f)))
pdfmetrics.registerFontFamily('TNR', normal='TNR', bold='TNR-B', italic='TNR-I', boldItalic='TNR-BI')
pdfmetrics.registerFontFamily('CN', normal='CN', bold='CN-B', italic='CN-I', boldItalic='CN-BI')

# ------------------------------------------------------------------ styles: 11 pt body, 13 pt headers, 12 pt subheaders, 1.5 spacing
BODY, HEAD, SUB = 11, 13, 12
def lead(pt): return pt * 1.5
S = {
    'body': ParagraphStyle('body', fontName='TNR', fontSize=BODY, leading=lead(BODY), alignment=TA_JUSTIFY, spaceAfter=4, hyphenationLang=None),
    'h1': ParagraphStyle('h1', fontName='TNR-B', fontSize=HEAD, leading=lead(HEAD), alignment=TA_LEFT, spaceBefore=0, spaceAfter=10),
    'h2': ParagraphStyle('h2', fontName='TNR-B', fontSize=HEAD, leading=lead(HEAD), alignment=TA_LEFT, spaceBefore=12, spaceAfter=3, keepWithNext=1),
    'h3': ParagraphStyle('h3', fontName='TNR-B', fontSize=SUB, leading=lead(SUB), alignment=TA_LEFT, spaceBefore=8, spaceAfter=2, keepWithNext=1),
    'h4': ParagraphStyle('h4', fontName='TNR-BI', fontSize=BODY, leading=lead(BODY), alignment=TA_LEFT, spaceBefore=4, spaceAfter=0, keepWithNext=1),
    'part': ParagraphStyle('part', fontName='TNR-B', fontSize=HEAD, leading=lead(HEAD), alignment=TA_CENTER, spaceAfter=8),
    'partsub': ParagraphStyle('partsub', fontName='TNR-I', fontSize=BODY, leading=lead(BODY), alignment=TA_CENTER),
    'title': ParagraphStyle('title', fontName='TNR-B', fontSize=HEAD, leading=lead(HEAD), alignment=TA_CENTER, spaceAfter=8),
    'center': ParagraphStyle('center', fontName='TNR', fontSize=BODY, leading=lead(BODY), alignment=TA_CENTER, spaceAfter=4),
    'box': ParagraphStyle('box', fontName='TNR-B', fontSize=SUB, leading=lead(SUB), alignment=TA_LEFT, spaceBefore=10, spaceAfter=2, keepWithNext=1),
    'code': ParagraphStyle('code', fontName='CN', fontSize=8.5, leading=10.8, alignment=TA_LEFT, backColor=HexColor('#f1f1ef'), borderPadding=(5, 5, 5, 5),
                           leftIndent=8, rightIndent=8, spaceBefore=6, spaceAfter=10),
    'cell': ParagraphStyle('cell', fontName='TNR', fontSize=10, leading=13, alignment=TA_LEFT),
    'cellh': ParagraphStyle('cellh', fontName='TNR-B', fontSize=10, leading=13, alignment=TA_LEFT),
    'calllabel': ParagraphStyle('calllabel', fontName='TNR-B', fontSize=BODY, leading=lead(BODY), alignment=TA_LEFT, spaceAfter=0, keepWithNext=1),
    'foot': ParagraphStyle('foot', fontName='TNR', fontSize=9, leading=12, alignment=TA_CENTER),
}
LISTIND, BULLETIND = 24, 8

# ------------------------------------------------------------------ inline markup
def inline(t):
    codes = []
    def keep(m): codes.append(m.group(1)); return f'\x00{len(codes) - 1}\x00'
    t = re.sub(r'`([^`]+)`', keep, t)
    t = escape(t)
    t = re.sub(r'\*\*([^*]+)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'(?<![\w*])\*([^*\s][^*]*)\*(?![\w*])', r'<i>\1</i>', t)
    t = re.sub(r'\^\{([^}]*)\}', r'<super>\1</super>', t)
    t = re.sub(r'_\{([^}]*)\}', r'<sub>\1</sub>', t)
    return re.sub(r'\x00(\d+)\x00', lambda m: f'<font name="CN" size="9.6">{escape(codes[int(m.group(1))])}</font>', t)

# ------------------------------------------------------------------ flowables
class Heading(Paragraph):
    def __init__(self, text, style, level, label=''):
        super().__init__(text, style)
        self.toc_level, self.toc_text = level, text
        self.toc_key = f'h{abs(hash((text, label))) % 10**8}'

class Doc(BaseDocTemplate):
    def __init__(self, path, **kw):
        super().__init__(path, pagesize=A4, leftMargin=2.54 * cm, rightMargin=2.54 * cm, topMargin=2.54 * cm, bottomMargin=2.3 * cm,
                         title=TITLE, author=AUTHOR, subject=SUBTITLE, **kw)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id='f', leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
        self.addPageTemplates([PageTemplate(id='plain', frames=[frame], onPage=self.plain), PageTemplate(id='body', frames=[frame], onPageEnd=self.body_page)])
        self.running = ''
    def handle_documentBegin(self):
        super().handle_documentBegin(); self._lvl = -1; self.running = ''
    def plain(self, c, d): pass
    def body_page(self, c, d):
        c.saveState(); c.setFont('TNR', 9); c.setFillColor(HexColor('#555555'))
        c.drawString(self.leftMargin, A4[1] - 1.7 * cm, TITLE)
        c.drawRightString(A4[0] - self.rightMargin, A4[1] - 1.7 * cm, self.running)
        c.setStrokeColor(HexColor('#999999')); c.setLineWidth(0.4); c.line(self.leftMargin, A4[1] - 1.85 * cm, A4[0] - self.rightMargin, A4[1] - 1.85 * cm)
        c.drawCentredString(A4[0] / 2, 1.3 * cm, str(d.page)); c.restoreState()
    def afterFlowable(self, f):
        if isinstance(f, Heading):
            self.notify('TOCEntry', (f.toc_level, f.toc_text, self.page, f.toc_key))
            lvl = min(f.toc_level, getattr(self, '_lvl', -1) + 1); self._lvl = lvl
            self.canv.bookmarkPage(f.toc_key); self.canv.addOutlineEntry(re.sub('<[^>]+>', '', f.toc_text), f.toc_key, lvl, 0)
            if f.toc_level == 1: self.running = re.sub('<[^>]+>', '', f.toc_text)

class Switch(Paragraph):
    """Zero-height marker that switches the page template (so front pages carry no header and no number)."""
    def __init__(self, name): super().__init__('', S['body']); self.name = name
    def wrap(self, a, b): return (0, 0)
    def draw(self): pass

# ------------------------------------------------------------------ parsing
class Builder:
    def __init__(self):
        self.story, self.answers = [], []
        self.ch = self.sec = self.sub = 0
        self.chlabel = ''
        self.have_part = False

    # -- headings
    def chapter(self, title, numbered):
        self.sec = self.sub = 0
        if numbered:
            self.ch += 1; label = f'Chapter {self.ch}'; text = f'{label}. {inline(title)}'
        else:
            label = ''; text = inline(title)
        self.chlabel = label or title
        self.story += [PageBreak(), Heading(text, S['h1'], 1, label)]
    def section(self, title):
        self.sec += 1; self.sub = 0
        txt = (f'{self.ch}.{self.sec}  ' if self.ch and self.chlabel.startswith('Chapter') else '') + inline(title)
        self.story += [CondPageBreak(3.2 * cm), Heading(txt, S['h2'], 2, self.chlabel + txt)]
    def subsection(self, title):
        self.sub += 1
        txt = (f'{self.ch}.{self.sec}.{self.sub}  ' if self.ch and self.chlabel.startswith('Chapter') and self.sec else '') + inline(title)
        self.story.append(Paragraph(txt, S['h3']))

    # -- block parsing
    def parse(self, lines, out):
        i, para = 0, []
        def flush():
            if para: out.append(Paragraph(inline(' '.join(para)), S['body'])); para.clear()
        while i < len(lines):
            ln = lines[i]
            if ln.startswith('```'):
                flush(); i += 1; code = []
                while i < len(lines) and not lines[i].startswith('```'): code.append(lines[i].rstrip('\n')); i += 1
                out.append(Preformatted('\n'.join(code), S['code'])); i += 1; continue
            if ln.startswith(':::'):
                flush(); head = ln[3:].strip(); kind, _, title = head.partition(' '); inner = []; i += 1
                while i < len(lines) and lines[i].strip() != ':::': inner.append(lines[i]); i += 1
                i += 1; self.block(kind, title, inner, out); continue
            if ln.startswith('@'):
                flush(); self.directive(ln.strip(), out); i += 1; continue
            if ln.startswith('#'):
                flush(); m = re.match(r'^(#!|#{1,4})\s+(.*)$', ln.rstrip())
                tag, title = m.group(1), m.group(2)
                if tag == '#': self.chapter(title, True)
                elif tag == '#!': self.chapter(title, False)
                elif tag == '##': self.section(title)
                elif tag == '###': self.subsection(title)
                else: out.append(Paragraph(inline(title), S['h4']))
                i += 1; continue
            if ln.startswith('|'):
                flush(); rows = []
                while i < len(lines) and lines[i].startswith('|'):
                    cells = [c.strip() for c in lines[i].strip().strip('|').split('|')]
                    if not all(re.fullmatch(r':?-{2,}:?', c) for c in cells): rows.append(cells)
                    i += 1
                out.append(self.table(rows)); continue
            m = re.match(r'^(\s*)([-*]|\d+\.)\s+(.*)$', ln)
            if m and len(m.group(1)) < 2:
                flush(); bullet = '\u2022' if m.group(2) in '-*' else m.group(2); text = [m.group(3)]; i += 1
                while i < len(lines) and lines[i].startswith('  ') and lines[i].strip() and not re.match(r'^\s*([-*]|\d+\.)\s', lines[i]): text.append(lines[i].strip()); i += 1
                st = ParagraphStyle('li', parent=S['body'], leftIndent=LISTIND, bulletIndent=BULLETIND, spaceAfter=2, bulletFontName='TNR', bulletFontSize=BODY)
                out.append(Paragraph(inline(' '.join(text)), st, bulletText=bullet)); continue
            if not ln.strip(): flush(); i += 1; continue
            para.append(ln.strip()); i += 1
        flush()

    def table(self, rows):
        n = max(len(r) for r in rows)
        data = [[Paragraph(inline(c), S['cellh'] if r == 0 else S['cell']) for c in row + [''] * (n - len(row))] for r, row in enumerate(rows)]
        t = Table(data, colWidths=None, repeatRows=1, hAlign='LEFT')
        t.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, 0), HexColor('#e6e6e3')), ('GRID', (0, 0), (-1, -1), 0.4, HexColor('#8a8a86')), ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                               ('LEFTPADDING', (0, 0), (-1, -1), 5), ('RIGHTPADDING', (0, 0), (-1, -1), 5), ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]))
        return KeepTogether([Spacer(1, 4), t, Spacer(1, 8)]) if len(rows) < 10 else t

    def block(self, kind, title, inner, out):
        if kind == 'answers':
            self.answers.append((self.chlabel, inner)); return
        callouts = {'tip': 'TIP', 'warning': 'WARNING', 'remember': 'REMEMBER', 'technical': 'TECHNICAL STUFF', 'why': 'WHY DO IT THIS WAY?'}
        if kind in callouts:
            self.callout(callouts[kind] + (f' {title}' if title and kind == 'why' else (f': {title}' if title else '')), inner, out); return
        names = {'check': 'Check Your Knowledge', 'problems': 'Review Problems', 'worked': 'Worked Example', 'note': 'Note', 'quiz': 'Check Yourself'}
        head = names.get(kind, kind.title()) + (f': {title}' if title else '')
        rule = HRFlowable(width='100%', thickness=0.6, color=HexColor('#666666'), spaceBefore=0, spaceAfter=2)
        out.append(Paragraph(inline(head), S['box'])); out.append(rule)
        self.parse(inner, out)
        out.append(HRFlowable(width='100%', thickness=0.6, color=HexColor('#666666'), spaceBefore=2, spaceAfter=8))

    def callout(self, label, inner, out):
        flows = [Paragraph(inline(label), S['calllabel'])]
        self.parse(inner, flows)
        t = Table([[f] for f in flows], colWidths=[A4[0] - 5.08 * cm], splitByRow=1)
        t.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), HexColor('#f2f2ef')), ('LINEBEFORE', (0, 0), (0, -1), 3, HexColor('#4a4a4a')),
                               ('LEFTPADDING', (0, 0), (-1, -1), 10), ('RIGHTPADDING', (0, 0), (-1, -1), 8), ('TOPPADDING', (0, 0), (-1, -1), 1),
                               ('BOTTOMPADDING', (0, 0), (-1, -1), 1), ('TOPPADDING', (0, 0), (0, 0), 6), ('BOTTOMPADDING', (0, -1), (-1, -1), 6)]))
        out += [Spacer(1, 4), t, Spacer(1, 8)]

    def directive(self, d, out):
        name, _, arg = d[1:].partition(' ')
        if name == 'code':
            # @code path/from/repo/root first-last : a verbatim excerpt of a real file, with line numbers, wrapped to fit the page
            path, rng = arg.rsplit(' ', 1)
            first, last = [int(x) for x in rng.split('-')]
            real = path.replace('~skills/', os.path.expanduser('~').replace(chr(92), '/') + '/.claude/skills/')
            with open(os.path.join(ROOT, real), encoding='utf8') as fh: src = fh.read().split(chr(10))[first - 1:last]
            rows = []
            for n, line in enumerate(src, first):
                line = line.rstrip().replace(chr(9), '    ')
                chunks = [line[i:i + 80] for i in range(0, max(len(line), 1), 80)] or ['']
                rows.append(f'{n:>4}  ' + chunks[0])
                rows += ['      ' + c for c in chunks[1:]]
            out.append(Preformatted(chr(10).join(rows), S['code']))
            out.append(Paragraph(inline(f'*Listing from `{path}`, lines {first} to {last}.*'), ParagraphStyle('cap', parent=S['cell'], fontName='TNR-I', fontSize=9.5, leading=13, spaceAfter=8)))
        elif name == 'include':
            with open(os.path.join(SRC, arg), encoding='utf8') as fh: self.parse(fh.read().split(chr(10)), out)
        elif name == 'pagebreak': out.append(PageBreak())
        elif name == 'part':
            out += [PageBreak(), Switch('body'), Spacer(1, 7 * cm), Heading(inline(arg), S['part'], 0, arg)]
            self.ch = self.ch  # chapter numbers continue across parts
        elif name == 'partsub': out.append(Paragraph(inline(arg), S['partsub']))
        elif name == 'toc': out.append(self.toc)
        elif name == 'body': out.append(Switch('body'))
        elif name == 'heading': out += [Switch('body'), PageBreak(), Paragraph(inline(arg), S['h1']), Spacer(1, 4)]
        elif name == 'titlepage': self.titlepage(out)
        elif name == 'answerkey': self.answer_key(out)

    def titlepage(self, out):
        out += [Switch('plain'), Spacer(1, 6.2 * cm), Paragraph(inline(TITLE.upper()), S['title']), Spacer(1, 6),
                Paragraph(inline(SUBTITLE), S['center']), Spacer(1, 3 * cm), Paragraph(AUTHOR, S['title']),
                Spacer(1, 1.2 * cm), Paragraph(EDITION, S['center']), Paragraph('Revised as the website grows', S['center'])]

    def answer_key(self, out):
        self.chapter('Answer Key', False)
        out.append(Paragraph('Answers to the Check Your Knowledge questions and the Review Problems, by chapter. Try every question before you look: the value of a problem is in the attempt.', S['body']))
        for label, lines in self.answers:
            out.append(Paragraph(inline(label), S['h3'])); self.parse(lines, out)

    def build(self):
        files = sorted(glob.glob(os.path.join(SRC, '*.md')))
        self.toc = TableOfContents(dotsMinLevel=0)
        base = dict(fontName='TNR', fontSize=BODY, leading=lead(BODY))
        self.toc.levelStyles = [ParagraphStyle('t0', leftIndent=0, firstLineIndent=0, fontName='TNR-B', fontSize=BODY, leading=lead(BODY), spaceBefore=6),
                                ParagraphStyle('t1', leftIndent=14, firstLineIndent=0, **base, spaceBefore=1),
                                ParagraphStyle('t2', leftIndent=34, firstLineIndent=0, fontName='TNR', fontSize=BODY, leading=lead(BODY))]
        self.story = []
        for f in files:
            with open(f, encoding='utf8') as fh: lines = fh.read().split('\n')
            self.parse(lines, self.story)
        # the template switches: flowable markers become NextPageTemplate calls
        from reportlab.platypus import NextPageTemplate
        story = []
        for fl in self.story:
            story.append(NextPageTemplate(fl.name) if isinstance(fl, Switch) else fl)
        doc = Doc(OUT)
        doc.multiBuild(story)
        print('wrote', OUT)

if __name__ == '__main__':
    Builder().build()
