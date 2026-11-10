"""Vector figures for the guide.

Every figure is drawn with reportlab.graphics, so it is crisp at any zoom and uses the book's own fonts.
A chapter file places one with:

    @figure name  Caption text

`name` is a key in FIGS. Run this file on its own to write a contact sheet of every figure to
Guide/figures-preview.pdf, which is the quickest way to check them.
"""
import math

from reportlab.graphics.shapes import Circle, Drawing, Ellipse, Group, Line, Polygon, PolyLine, Rect, String, Wedge
from reportlab.lib.colors import HexColor

INK = HexColor('#2b2b2b')
MUTED = HexColor('#6f6f6b')
GRID = HexColor('#d2d2cc')
FILL = HexColor('#f1f1ee')
FILL2 = HexColor('#dddcd5')
FILL3 = HexColor('#c6c5bd')
ACC = HexColor('#5a4fa6')        # the book's one accent, a muted violet
ACC_F = HexColor('#e4e0f3')      # pale accent fill
BLUE = HexColor('#2f6f9f')       # the second series colour
BLUE_F = HexColor('#dfeaf2')
RED = HexColor('#b03a2e')
W = 451                          # usable width of the page in points

FIGS = {}


def fig(name, h):
    """Register a figure of height h. The function receives an empty Drawing."""
    def deco(f):
        def make():
            d = Drawing(W, h)
            f(d)
            return d
        FIGS[name] = make
        return f
    return deco


# ------------------------------------------------------------------ helpers
def txt(d, x, y, s, size=9, font='TNR', anchor='start', color=INK):
    d.add(String(x, y, s, fontName=font, fontSize=size, textAnchor=anchor, fillColor=color))


def ctext(d, x, y, s, **k):
    txt(d, x, y, s, anchor='middle', **k)


def rtext(d, x, y, s, **k):
    txt(d, x, y, s, anchor='end', **k)


def box(d, x, y, w, h, lines=(), fill=FILL, stroke=INK, size=9.5, font='TNR', sw=0.8, r=3, color=INK):
    d.add(Rect(x, y, w, h, rx=r, ry=r, fillColor=fill, strokeColor=stroke, strokeWidth=sw))
    if isinstance(lines, str):
        lines = [lines]
    n = len(lines)
    lead = size * 1.25
    y0 = y + h / 2 + (n - 1) * lead / 2 - size * 0.36
    for i, s in enumerate(lines):
        ctext(d, x + w / 2, y0 - i * lead, s, size=size, font=font, color=color)


def line(d, x1, y1, x2, y2, color=INK, w=0.9, dash=None):
    ln = Line(x1, y1, x2, y2, strokeColor=color, strokeWidth=w)
    if dash:
        ln.strokeDashArray = dash
    d.add(ln)


def arrow(d, x1, y1, x2, y2, color=INK, w=0.9, head=5, dash=None, both=False):
    ang = math.atan2(y2 - y1, x2 - x1)
    ex, ey = x2 - head * math.cos(ang), y2 - head * math.sin(ang)
    sx, sy = (x1 + head * math.cos(ang), y1 + head * math.sin(ang)) if both else (x1, y1)
    line(d, sx, sy, ex, ey, color, w, dash)
    for (px, py, a) in ([(x2, y2, ang)] + ([(x1, y1, ang + math.pi)] if both else [])):
        d.add(Polygon([px, py, px - head * math.cos(a - 0.4), py - head * math.sin(a - 0.4),
                       px - head * math.cos(a + 0.4), py - head * math.sin(a + 0.4)], fillColor=color, strokeColor=color, strokeWidth=0.5))


def dot(d, x, y, r=3, color=ACC, stroke=None):
    d.add(Circle(x, y, r, fillColor=color, strokeColor=stroke or color, strokeWidth=0.6))


def axes(d, x, y, w, h, xlim, ylim, xt=(), yt=(), xl='', yl='', grid=True, xfmt=None, yfmt=None, size=8):
    """A plot area. Returns (X, Y): functions mapping data values to drawing coordinates."""
    X = lambda v: x + (v - xlim[0]) / (xlim[1] - xlim[0]) * w
    Y = lambda v: y + (v - ylim[0]) / (ylim[1] - ylim[0]) * h
    xfmt = xfmt or (lambda v: f'{v:g}')
    yfmt = yfmt or (lambda v: f'{v:g}')
    for v in xt:
        if grid:
            line(d, X(v), y, X(v), y + h, GRID, 0.5)
        line(d, X(v), y, X(v), y - 3, INK, 0.6)
        ctext(d, X(v), y - 11, xfmt(v), size=size, color=MUTED)
    for v in yt:
        if grid:
            line(d, x, Y(v), x + w, Y(v), GRID, 0.5)
        line(d, x, Y(v), x - 3, Y(v), INK, 0.6)
        rtext(d, x - 5, Y(v) - 3, yfmt(v), size=size, color=MUTED)
    d.add(Rect(x, y, w, h, fillColor=None, strokeColor=INK, strokeWidth=0.8))
    if xl:
        ctext(d, x + w / 2, y - 24, xl, size=size + 0.5)
    if yl:
        g = Group(String(0, 0, yl, fontName='TNR', fontSize=size + 0.5, textAnchor='middle', fillColor=INK))
        g.translate(x - 30, y + h / 2)
        g.rotate(90)
        d.add(g)
    return X, Y


def curve(d, X, Y, xs, ys, color=ACC, w=1.3, dash=None):
    pts = []
    for a, b in zip(xs, ys):
        pts += [X(a), Y(b)]
    pl = PolyLine(pts, strokeColor=color, strokeWidth=w)
    if dash:
        pl.strokeDashArray = dash
    d.add(pl)


def legend(d, x, y, items, size=8):
    for i, (label, color, dash) in enumerate(items):
        yy = y - i * 12
        ln = Line(x, yy + 3, x + 18, yy + 3, strokeColor=color, strokeWidth=1.4)
        if dash:
            ln.strokeDashArray = dash
        d.add(ln)
        txt(d, x + 23, yy, label, size=size)


def samples(f, a=0.0, b=1.0, n=120):
    xs = [a + (b - a) * i / n for i in range(n + 1)]
    return xs, [f(v) for v in xs]


def bezier(x1, y1, x2, y2, n=100):
    xs, ys = [], []
    for i in range(n + 1):
        t = i / n
        u = 1 - t
        xs.append(3 * u * u * t * x1 + 3 * u * t * t * x2 + t ** 3)
        ys.append(3 * u * u * t * y1 + 3 * u * t * t * y2 + t ** 3)
    return xs, ys


def bar(d, x, y, w, h, fill=FILL2, stroke=INK, label='', size=8, font='TNR', color=INK):
    d.add(Rect(x, y, w, h, fillColor=fill, strokeColor=stroke, strokeWidth=0.6))
    if label:
        ctext(d, x + w / 2, y + h / 2 - size * 0.35, label, size=size, font=font, color=color)


def tree_node(d, x, y, label, w=None, fill=FILL, font='CN', size=8.5):
    w = w or max(26, 6.2 * len(label) + 12)
    box(d, x - w / 2, y - 9, w, 18, label, fill=fill, font=font, size=size, r=3)
    return w


# ------------------------------------------------------------------ Part I: Chapter 1
@fig('http-conversation', 250)
def _(d):
    cols = {'Browser': 60, 'DNS': 225, 'Server': 390}
    for name, x in cols.items():
        box(d, x - 36, 222, 72, 22, name, fill=FILL2, size=10)
        line(d, x, 222, x, 182 if name == 'DNS' else 12, MUTED, 0.8, dash=(3, 3))
    steps = [
        (205, 'Browser', 'DNS', 'Where is example.com?'),
        (190, 'DNS', 'Browser', '93.184.216.34'),
        (170, 'Browser', 'Server', 'TCP: open a connection'),
        (155, 'Server', 'Browser', 'TCP: agreed'),
        (135, 'Browser', 'Server', 'TLS: agree on encryption keys'),
        (120, 'Server', 'Browser', 'TLS: agreed'),
        (98, 'Browser', 'Server', 'GET /flight-dynamics.html'),
        (78, 'Server', 'Browser', '200 OK  +  the HTML file'),
        (52, 'Browser', 'Server', 'GET style.css, GET app.js, GET font.woff2 ...'),
        (32, 'Server', 'Browser', '200 OK  +  each file'),
    ]
    for y, a, b, label in steps:
        x1, x2 = cols[a], cols[b]
        col = ACC if label.startswith(('GET', '200')) else INK
        arrow(d, x1 + (6 if x2 > x1 else -6), y, x2 - (6 if x2 > x1 else -6), y, col, 0.9)
        ctext(d, (x1 + x2) / 2, y + 4, label, size=8, color=col)
    txt(d, 8, 212, 'round trip 1', size=7.5, color=MUTED)
    txt(d, 8, 176, 'round trip 2', size=7.5, color=MUTED)
    txt(d, 8, 141, 'round trip 3', size=7.5, color=MUTED)
    txt(d, 8, 104, 'round trip 4', size=7.5, color=MUTED)
    txt(d, 8, 58, 'and so on', size=7.5, color=MUTED)


@fig('load-time-bar', 95)
def _(d):
    parts = [('DNS', 80, FILL3), ('TCP', 80, FILL3), ('TLS', 80, FILL3), ('request', 80, FILL3), ('transfer of 686 kB at 10 Mbit/s', 549, ACC_F)]
    total = sum(p[1] for p in parts)
    x = 30
    scale = 390 / total
    for name, ms, fill in parts:
        w = ms * scale
        bar(d, x, 40, w, 26, fill, INK, name if w > 40 else '', size=8)
        if w <= 40:
            pass
        x += w
    txt(d, 30, 76, 'first visit, 80 ms round trip', size=8.5)
    arrow(d, 30, 28, 30 + 320 * scale, 28, INK, 0.8, both=True)
    ctext(d, 30 + 160 * scale, 15, 'set-up: 4 × 80 = 320 ms', size=8)
    arrow(d, 30 + 320 * scale, 28, 420, 28, ACC, 0.8, both=True)
    ctext(d, 30 + 320 * scale + 549 * scale / 2, 15, 'download: 549 ms', size=8, color=ACC)
    rtext(d, 425, 76, 'total 869 ms', size=8.5)


@fig('static-vs-dynamic', 120)
def _(d):
    box(d, 20, 70, 90, 36, ['Browser'], fill=FILL2)
    box(d, 160, 70, 110, 36, ['Static server:', 'finds the file'], size=9)
    box(d, 320, 70, 110, 36, ['The file, as is'], fill=ACC_F, size=9)
    arrow(d, 110, 88, 160, 88); arrow(d, 270, 88, 320, 88)
    box(d, 20, 12, 90, 36, ['Browser'], fill=FILL2)
    box(d, 130, 12, 90, 36, ['Program', 'runs'], size=9)
    box(d, 240, 12, 90, 36, ['Database', 'answers'], size=9)
    box(d, 350, 12, 80, 36, ['A page built', 'for this visit'], fill=ACC_F, size=8.5)
    arrow(d, 110, 30, 130, 30); arrow(d, 220, 30, 240, 30); arrow(d, 330, 30, 350, 30)
    txt(d, 20, 112, 'Static site', size=9, font='TNR-B'); txt(d, 20, 54, 'Dynamic site', size=9, font='TNR-B')


# ------------------------------------------------------------------ Chapter 2
@fig('rendering-pipeline', 150)
def _(d):
    box(d, 10, 100, 60, 30, 'HTML', fill=FILL2)
    box(d, 95, 100, 60, 30, 'DOM')
    box(d, 10, 30, 60, 30, 'CSS', fill=FILL2)
    box(d, 95, 30, 60, 30, 'CSSOM')
    arrow(d, 70, 115, 95, 115); arrow(d, 70, 45, 95, 45)
    box(d, 180, 65, 64, 30, ['Render', 'tree'], size=9)
    arrow(d, 155, 112, 180, 86); arrow(d, 155, 48, 180, 74)
    box(d, 270, 65, 50, 30, 'Layout', fill=ACC_F)
    box(d, 336, 65, 46, 30, 'Paint', fill=ACC_F)
    box(d, 398, 65, 50, 30, 'Composite', fill=ACC_F, size=8)
    arrow(d, 244, 80, 270, 80); arrow(d, 320, 80, 336, 80); arrow(d, 382, 80, 398, 80)
    box(d, 95, 2, 60, 22, 'JavaScript', size=8.5, fill=BLUE_F)
    arrow(d, 110, 24, 110, 30, BLUE); arrow(d, 140, 24, 140, 100, BLUE, dash=(2, 2))
    txt(d, 160, 8, 'scripts read and change both trees', size=8, color=BLUE)
    txt(d, 270, 112, 'geometry', size=8, color=MUTED); txt(d, 336, 112, 'pixels', size=8, color=MUTED); txt(d, 398, 112, 'layers, on the GPU', size=8, color=MUTED)
    txt(d, 10, 138, 'bytes to pixels: the critical rendering path', size=9, font='TNR-I')


@fig('dom-tree', 170)
def _(d):
    def node(x, y, label, fill=FILL, font='CN'):
        tree_node(d, x, y, label, fill=fill, font=font)
    def edge(x1, y1, x2, y2):
        line(d, x1, y1 - 9, x2, y2 + 9, INK, 0.7)
    node(225, 150, 'html', FILL2)
    node(120, 110, 'head', FILL2); node(330, 110, 'body', FILL2)
    edge(225, 150, 120, 110); edge(225, 150, 330, 110)
    node(120, 70, 'title'); edge(120, 110, 120, 70)
    node(120, 30, '"Patrick"', ACC_F, 'TNR-I'); edge(120, 70, 120, 30)
    node(250, 70, 'h1'); node(400, 70, 'p')
    edge(330, 110, 250, 70); edge(330, 110, 400, 70)
    node(250, 30, '"Patrick"', ACC_F, 'TNR-I'); edge(250, 70, 250, 30)
    node(340, 30, '"A "', ACC_F, 'TNR-I'); node(400, 30, 'em'); node(445, 30, '"."', ACC_F, 'TNR-I')
    edge(400, 70, 340, 30); edge(400, 70, 400, 30); edge(400, 70, 445, 30)
    node(400, -2 + 2, '"robot"', ACC_F, 'TNR-I'); line(d, 400, 21, 400, 9, INK, 0.7)
    txt(d, 10, 150, 'grey: element nodes', size=8, color=MUTED)
    txt(d, 10, 138, 'violet, in quotes: text nodes', size=8, color=MUTED)


@fig('script-loading', 165)
def _(d):
    x0, scale = 110, 2.1
    rows = [('<script>', [('parse', 0, 40, FILL2), ('download', 40, 80, BLUE_F), ('run', 80, 100, ACC_F), ('parse', 100, 140, FILL2)]),
            ('async', [('parse', 0, 100, FILL2), ('download', 40, 80, BLUE_F), ('run', 100, 120, ACC_F), ('parse', 120, 160, FILL2)]),
            ('defer', [('parse', 0, 140, FILL2), ('download', 40, 80, BLUE_F), ('run', 140, 160, ACC_F)])]
    for i, (name, segs) in enumerate(rows):
        y = 108 - i * 44
        txt(d, 10, y + 6, name, size=9, font='CN')
        for label, a, b, fill in segs:
            yy = y + (18 if fill is BLUE_F else 0)
            bar(d, x0 + a * scale, yy, (b - a) * scale, 16, fill, INK, label, size=7.5)
        line(d, x0, y - 6, x0 + 165 * scale, y - 6, MUTED, 0.5)
    arrow(d, x0, 4, x0 + 165 * scale, 4, INK, 0.7)
    txt(d, x0 + 165 * scale - 26, 8, 'time', size=8, color=MUTED)
    txt(d, 10, 152, 'a plain script stops the parser while it downloads and runs; async runs the moment it lands; defer waits until parsing is done', size=7.8, color=MUTED)


@fig('frame-budget', 120)
def _(d):
    def budget(y, total, segs, label):
        txt(d, 10, y + 6, label, size=9)
        x = 110
        scale = 320 / 16.67
        for name, ms, fill in segs:
            bar(d, x, y, ms * scale, 20, fill, INK, name if ms * scale > 40 else name[:4] + '.', size=7.5)
            x += ms * scale
        d.add(Rect(110, y, total * scale, 20, fillColor=None, strokeColor=INK, strokeWidth=1.2))
        rtext(d, 110 + total * scale, y + 25, f'{total:.2f} ms', size=8)
    budget(80, 16.67, [('your script', 4, ACC_F), ('style', 1.5, FILL2), ('layout', 2.5, FILL2), ('paint', 2.5, FILL2), ('composite', 1.5, FILL3), ('spare', 4.67, HexColor('#ffffff'))], '60 Hz')
    budget(30, 6.94, [('script', 4, ACC_F), ('browser', 2.94, FILL2)], '144 Hz')
    txt(d, 110, 12, 'the same work that fits comfortably at 60 Hz overruns the frame at 144 Hz', size=8, color=MUTED)


# ------------------------------------------------------------------ Chapter 3
@fig('three-jobs', 160)
def _(d):
    box(d, 170, 60, 110, 40, ['The document tree', '(DOM)'], fill=ACC_F, size=9.5)
    box(d, 20, 110, 110, 36, ['HTML', 'creates it'], fill=FILL2)
    box(d, 320, 110, 110, 36, ['CSS', 'describes it'], fill=FILL2)
    box(d, 170, 6, 110, 36, ['JavaScript', 'changes it'], fill=FILL2)
    arrow(d, 130, 122, 172, 100); arrow(d, 320, 122, 278, 100); arrow(d, 225, 42, 225, 60, both=True)
    txt(d, 20, 100, 'what a thing is', size=8, font='TNR-I', color=MUTED)
    txt(d, 320, 100, 'what it looks like', size=8, font='TNR-I', color=MUTED)
    txt(d, 290, 20, 'what it does', size=8, font='TNR-I', color=MUTED)


@fig('cascade-order', 95)
def _(d):
    steps = ['all matching', 'declarations', ' ', '!important', 'wins', ' ', 'later layer', 'wins', ' ', 'higher', 'specificity', ' ', 'later in', 'source']
    labels = [['every matching', 'declaration'], ['importance', '(!important)'], ['cascade', 'layer'], ['specificity', '(a, b, c)'], ['source', 'order']]
    x = 10
    for i, lab in enumerate(labels):
        box(d, x, 30, 74, 40, lab, fill=FILL2 if i == 0 else FILL, size=8.5)
        if i < 4:
            arrow(d, x + 74, 50, x + 88, 50)
        x += 88
    box(d, x - 2, 30, 48, 40, ['one', 'winner'], fill=ACC_F, size=8.5)
    txt(d, 10, 80, 'the referee works left to right and stops at the first step that settles the argument', size=8, color=MUTED)
    txt(d, 10, 14, 'ties at every step are settled by the last rule in the file', size=8, color=MUTED)


@fig('specificity', 80)
def _(d):
    rows = [('p', '0, 0, 1'), ('.panel p', '0, 1, 1'), ('a:hover', '0, 1, 1'), ('#main .panel', '1, 1, 0')]
    x = 10
    for sel, score in rows:
        box(d, x, 30, 100, 22, sel, font='CN', size=8.5)
        ctext(d, x + 50, 14, score, size=9, font='TNR-B')
        x += 110
    txt(d, 10, 64, 'count IDs, then classes/attributes/pseudo-classes, then elements; compare left to right', size=8, color=MUTED)


# ------------------------------------------------------------------ Chapter 4
@fig('box-model', 190)
def _(d):
    cx, cy = 225, 95
    d.add(Rect(cx - 190, cy - 85, 380, 170, fillColor=HexColor('#fbfbf9'), strokeColor=MUTED, strokeWidth=0.6, strokeDashArray=(3, 3)))
    d.add(Rect(cx - 150, cy - 62, 300, 124, fillColor=FILL3, strokeColor=INK, strokeWidth=0.8))
    d.add(Rect(cx - 138, cy - 50, 276, 100, fillColor=FILL2, strokeColor=INK, strokeWidth=0.6))
    d.add(Rect(cx - 108, cy - 28, 216, 56, fillColor=ACC_F, strokeColor=INK, strokeWidth=0.6))
    ctext(d, cx, cy - 3, 'content  (the text, the picture)', size=9)
    txt(d, cx - 185, cy + 72, 'margin: transparent, keeps the neighbours away', size=8.5, color=MUTED)
    txt(d, cx - 146, cy + 53, 'border (2 px)', size=8.5)
    txt(d, cx - 133, cy + 36, 'padding (20 px): shows the box\u2019s own background', size=8.5)
    arrow(d, cx - 108, cy - 36, cx + 108, cy - 36, INK, 0.7, both=True)
    ctext(d, cx, cy - 46, 'content width: 300 with content-box, or 300 \u2212 2\u00d720 \u2212 2\u00d72 = 256 with border-box', size=7.6)
    arrow(d, cx - 150, cy - 70, cx + 150, cy - 70, ACC, 0.7, both=True)
    ctext(d, cx, cy - 81, 'what you see: 300 + 40 + 4 = 344 with content-box, exactly 300 with border-box', size=7.6, color=ACC)


@fig('css-pixels-dpr', 128)
def _(d):
    def grid(x, y, n, cell, label, fill):
        for i in range(n):
            for j in range(n):
                d.add(Rect(x + i * cell, y + j * cell, cell, cell, fillColor=fill, strokeColor=INK, strokeWidth=0.5))
        for k, s in enumerate(label):
            ctext(d, x + n * cell / 2, y - 14 - k * 11, s, size=8)
    grid(40, 36, 3, 24, ('3 \u00d7 3 CSS pixels', 'at DPR 1'), FILL2)
    grid(190, 36, 6, 12, ('the same 3 \u00d7 3 CSS pixels', 'at DPR 2: 6 \u00d7 6 device pixels'), FILL2)
    grid(340, 36, 3, 24, ('a 3 \u00d7 3 bitmap stretched', 'to fit: blurred'), FILL3)
    arrow(d, 122, 72, 184, 72, INK, 0.8)
    txt(d, 40, 116, 'a CSS pixel is a unit of length; a device pixel is a dot on the screen', size=8.5, color=MUTED)


@fig('flex-grid', 150)
def _(d):
    # flex row
    txt(d, 10, 138, 'display: flex', size=9, font='CN')
    d.add(Rect(10, 80, 200, 50, fillColor=None, strokeColor=INK, strokeWidth=0.8))
    for i, w in enumerate((44, 60, 36)):
        x = 18 + sum((44, 60, 36)[:i]) + i * 12
        bar(d, x, 90, w, 30, FILL2, INK, f'item {i + 1}', size=7.5)
    arrow(d, 14, 72, 206, 72, ACC, 0.8); txt(d, 120, 62, 'main axis', size=7.5, color=ACC)
    arrow(d, 216, 84, 216, 126, BLUE, 0.8); txt(d, 220, 102, 'cross', size=7.5, color=BLUE)
    txt(d, 10, 50, 'gap: 12px between items; justify-content shares the spare room', size=7.5, color=MUTED)
    # grid
    txt(d, 260, 138, 'display: grid', size=9, font='CN')
    gx, gy = 260, 60
    cols, rows, gap = (50, 50, 50), (30, 30), 8
    for r in range(2):
        for c in range(3):
            bar(d, gx + c * (50 + gap), gy + (1 - r) * (30 + gap), 50, 30, FILL2, INK, f'{r * 3 + c + 1}', size=7.5)
    d.add(Rect(gx - 4, gy - 4, 3 * 50 + 2 * gap + 8, 2 * 30 + gap + 8, fillColor=None, strokeColor=INK, strokeWidth=0.8))
    txt(d, 260, 42, 'grid-template-columns: repeat(3, 1fr)', size=7.5, font='CN', color=MUTED)
    txt(d, 260, 30, 'rows and columns at once; gap on both axes', size=7.5, color=MUTED)


@fig('clamp-curve', 150)
def _(d):
    X, Y = axes(d, 60, 35, 350, 95, (300, 1400), (2, 4.6), xt=(300, 640, 1120, 1400), yt=(2.4, 4.2), xl='viewport width, CSS px', yl='font size, rem', yfmt=lambda v: f'{v:g} rem')
    xs = [300, 640, 1120, 1400]
    ys = [2.4, 2.4, 4.2, 4.2]
    curve(d, X, Y, xs, ys, ACC, 1.6)
    curve(d, X, Y, [2 * 16 / 0.06, 4.6 * 16 / 0.06], [2, 4.6], MUTED, 0.8, dash=(3, 3))
    txt(d, X(700), Y(2.5), '6vw', size=8, color=MUTED)
    txt(d, X(320), Y(2.55), 'min 2.4rem', size=8, color=ACC)
    txt(d, X(1130), Y(4.3), 'max 4.2rem', size=8, color=ACC)
    txt(d, 60, 138, 'font-size: clamp(2.4rem, 6vw, 4.2rem)', size=9, font='CN')


# ------------------------------------------------------------------ Chapter 5
@fig('event-loop', 200)
def _(d):
    # call stack
    txt(d, 20, 186, 'call stack', size=9, font='TNR-B')
    d.add(Rect(20, 80, 100, 100, fillColor=None, strokeColor=INK, strokeWidth=0.8))
    bar(d, 24, 84, 92, 22, ACC_F, INK, 'handler()', size=8, font='CN')
    bar(d, 24, 110, 92, 22, FILL2, INK, 'update()', size=8, font='CN')
    bar(d, 24, 136, 92, 22, FILL2, INK, 'clamp()', size=8, font='CN')
    txt(d, 20, 68, 'what is running now', size=7.5, color=MUTED)
    # queues
    txt(d, 170, 186, 'microtask queue', size=9, font='TNR-B')
    for i, s in enumerate(('then #1', 'then #2')):
        bar(d, 170 + i * 58, 158, 54, 20, ACC_F, INK, s, size=8, font='CN')
    txt(d, 170, 146, 'promise follow-ups: all run before the next task', size=7.5, color=MUTED)
    txt(d, 170, 126, 'task queue', size=9, font='TNR-B')
    for i, s in enumerate(('click', 'timer', 'message')):
        bar(d, 170 + i * 58, 98, 54, 20, FILL2, INK, s, size=8, font='CN')
    txt(d, 170, 86, 'one at a time, oldest first', size=7.5, color=MUTED)
    # loop
    box(d, 300, 20, 130, 50, ['1 run a task', '2 run every microtask', '3 render if it is time'], size=8)
    arrow(d, 230, 96, 320, 70, INK, 0.8); arrow(d, 300, 38, 130, 38, INK, 0.8, dash=(3, 2))
    arrow(d, 70, 38, 70, 80, INK, 0.8, dash=(3, 2))
    txt(d, 140, 26, 'the next job is pushed on the stack', size=7.5, color=MUTED)
    txt(d, 300, 76, 'the event loop', size=9, font='TNR-B')


@fig('event-propagation', 180)
def _(d):
    levels = [('html', 160), ('body', 125), ('div.panel', 90), ('button', 55)]
    for name, y in levels:
        fill = ACC_F if name == 'button' else FILL
        tree_node(d, 225, y, name, w=90, fill=fill)
    for i in range(3):
        line(d, 225, levels[i][1] - 9, 225, levels[i + 1][1] + 9, INK, 0.7)
    arrow(d, 150, 165, 150, 62, BLUE, 1.0); txt(d, 70, 115, 'capture phase', size=8.5, color=BLUE); txt(d, 70, 104, 'root to target', size=7.5, color=MUTED)
    arrow(d, 300, 48, 300, 152, ACC, 1.0); txt(d, 312, 115, 'bubble phase', size=8.5, color=ACC); txt(d, 312, 104, 'target to root', size=7.5, color=MUTED)
    txt(d, 225 + 50, 52, 'target', size=8, color=MUTED)
    txt(d, 20, 20, 'a normal addEventListener handler listens on the way back up, so one listener on div.panel hears every button inside it', size=7.8, color=MUTED)


@fig('state-render', 110)
def _(d):
    box(d, 20, 40, 100, 40, ['events', '(click, drag, timer)'], fill=FILL2, size=8.5)
    box(d, 175, 40, 100, 40, ['state', 'one object'], fill=ACC_F, size=9)
    box(d, 330, 40, 100, 40, ['screen', '= render(state)'], fill=FILL2, size=8.5)
    arrow(d, 120, 60, 175, 60); arrow(d, 275, 60, 330, 60)
    txt(d, 128, 66, 'change a fact', size=7.5, color=MUTED); txt(d, 283, 66, 'redraw it all', size=7.5, color=MUTED)
    arrow(d, 380, 40, 380, 22, INK, 0.7); line(d, 380, 22, 70, 22, INK, 0.7); arrow(d, 70, 22, 70, 40, INK, 0.7)
    ctext(d, 225, 10, 'the visitor sees the screen and acts again', size=7.5, color=MUTED)


# ------------------------------------------------------------------ Chapter 6
@fig('easing-curves', 190)
def _(d):
    X, Y = axes(d, 60, 40, 240, 130, (0, 1), (0, 1.05), xt=(0, 0.25, 0.5, 0.75, 1), yt=(0, 0.5, 1), xl='progress of time, t', yl='progress of motion')
    xs, ys = samples(lambda t: t); curve(d, X, Y, xs, ys, MUTED, 1.0, dash=(3, 3))
    xs, ys = samples(lambda t: 3 * t * t - 2 * t ** 3); curve(d, X, Y, xs, ys, ACC, 1.5)
    bx, by = bezier(0.16, 1, 0.3, 1); curve(d, X, Y, bx, by, BLUE, 1.5)
    xs, ys = samples(lambda t: t * t); curve(d, X, Y, xs, ys, RED, 1.2)
    legend(d, 320, 160, [('linear', MUTED, (3, 3)), ('smoothstep 3t\u00b2 \u2212 2t\u00b3', ACC, None), ('cubic-bezier(.16,1,.3,1)', BLUE, None), ('ease-in t\u00b2', RED, None)])
    txt(d, 320, 100, 'flat at both ends: starts', size=8, color=MUTED); txt(d, 320, 89, 'and stops gently', size=8, color=MUTED)
    txt(d, 320, 70, 'the bezier rushes to 90%', size=8, color=MUTED); txt(d, 320, 59, 'then settles slowly', size=8, color=MUTED)


@fig('exp-smoothing', 170)
def _(d):
    X, Y = axes(d, 60, 40, 250, 110, (0, 2), (0, 1.05), xt=(0, 0.5, 1, 1.5, 2), yt=(0, 0.5, 0.95, 1), xl='time, s', yl='x (target = 1)')
    for s, col in ((2, RED), (5, ACC), (10, BLUE)):
        xs, ys = samples(lambda t, s=s: 1 - math.exp(-s * t), 0, 2)
        curve(d, X, Y, xs, ys, col, 1.4)
    curve(d, X, Y, [0, 2], [1, 1], MUTED, 0.7, dash=(3, 3))
    legend(d, 330, 140, [('s = 2 /s', RED, None), ('s = 5 /s', ACC, None), ('s = 10 /s', BLUE, None)])
    txt(d, 330, 92, 'the gap closes by the same', size=8, color=MUTED); txt(d, 330, 81, 'fraction each second,', size=8, color=MUTED)
    txt(d, 330, 70, 'whatever the frame rate', size=8, color=MUTED)
    txt(d, 330, 50, '95% there at t = 3/s', size=8, color=MUTED)


@fig('raf-timing', 120)
def _(d):
    x0, per = 160, 17.5   # 16.67 ms -> 17.5 pt
    txt(d, 10, 104, 'screen refresh (vsync)', size=8.5)
    for i in range(16):
        line(d, x0 + i * per, 92, x0 + i * per, 102, INK, 1.0)
    txt(d, 10, 72, 'setInterval(draw, 16)', size=8.5, font='CN')
    for i in range(16):
        x = x0 + i * 16 / 16.67 * per + 4
        dot(d, x, 76, 2.4, RED)
    txt(d, 10, 44, 'requestAnimationFrame', size=8.5, font='CN')
    for i in range(16):
        dot(d, x0 + i * per - 3, 48, 2.4, ACC)
    arrow(d, x0, 24, x0 + 15.5 * per, 24, INK, 0.7); txt(d, x0 + 15.5 * per - 30, 12, 'time, ms', size=8, color=MUTED)
    txt(d, 10, 12, 'the timer drifts against the refresh and sometimes lands two frames in one refresh', size=7.5, color=MUTED)


# ------------------------------------------------------------------ Chapter 7
@fig('canvas-axes', 150)
def _(d):
    d.add(Rect(30, 20, 200, 110, fillColor=HexColor('#fbfbf9'), strokeColor=INK, strokeWidth=0.8))
    arrow(d, 30, 130, 110, 130, ACC, 1.0); txt(d, 112, 126, 'x', size=9, font='TNR-I', color=ACC)
    arrow(d, 30, 130, 30, 70, ACC, 1.0); txt(d, 34, 66, 'y increases downward', size=8, color=ACC)
    dot(d, 30, 130, 3, ACC); txt(d, 36, 134, '(0, 0)', size=8, color=ACC)
    dot(d, 150, 60, 3, INK); txt(d, 156, 56, '(120, 70)', size=8)
    txt(d, 30, 8, 'canvas: origin top-left', size=8.5, font='TNR-B')
    X, Y = axes(d, 290, 40, 130, 80, (0, 10), (0, 5), xt=(0, 5, 10), yt=(0, 5), xl='time, s', yl='speed, m/s', grid=False)
    dot(d, X(6), Y(3.5), 3, INK); txt(d, X(6) + 5, Y(3.5) - 3, '(6, 3.5)', size=8)
    txt(d, 290, 8, 'chart: origin bottom-left, y up', size=8.5, font='TNR-B')
    txt(d, 260, 128, 'Y = top + h \u2212 (v \u2212 ymin) / (ymax \u2212 ymin) \u00d7 h', size=8, font='CN', color=MUTED)
    txt(d, 260, 140, 'the mapping flips the axis:', size=8, color=MUTED)


@fig('projection-pipeline', 110)
def _(d):
    names = [['Model', 'space'], ['World', 'space'], ['Camera', 'space'], ['Clip space', 'NDC \u22121..1'], ['Screen', 'pixels']]
    mats = ['model matrix', 'view matrix', 'projection', 'viewport']
    x = 6
    for i, n in enumerate(names):
        box(d, x, 40, 60, 36, n, fill=ACC_F if i in (0, 4) else FILL, size=8.5)
        if i < 4:
            arrow(d, x + 60, 58, x + 98, 58)
            ctext(d, x + 79, 63, mats[i], size=6.8, color=MUTED)
        x += 98
    txt(d, 10, 90, 'a point travels through five coordinate spaces; each arrow is one matrix multiplication', size=8, color=MUTED)
    txt(d, 10, 20, 'the projection step divides by depth, which is the whole of perspective', size=8, color=ACC)


@fig('perspective', 170)
def _(d):
    cx, cy = 60, 50
    dot(d, cx, cy, 3.5, INK); txt(d, cx - 8, cy - 16, 'camera', size=8.5)
    line(d, cx, cy, 420, cy, MUTED, 0.6, dash=(3, 3)); txt(d, 400, cy - 12, '\u2212z', size=8, color=MUTED)
    f = 110
    line(d, cx + f, cy - 10, cx + f, cy + 100, ACC, 1.0); txt(d, cx + f + 6, cy + 92, 'image plane', size=8, color=ACC)
    px, py = cx + 330, cy + 95
    dot(d, px, py, 3, BLUE); txt(d, px + 6, py - 3, 'point (y, \u2212z)', size=8.5, color=BLUE)
    line(d, cx, cy, px, py, INK, 0.8)
    yi = f * (py - cy) / (px - cx)
    dot(d, cx + f, cy + yi, 3, ACC); txt(d, cx + f + 6, cy + yi + 4, 'y\u2032 = f \u00b7 y / (\u2212z)', size=8.5, color=ACC)
    arrow(d, px + 14, cy, px + 14, py, INK, 0.6, both=True); txt(d, px + 18, (cy + py) / 2, 'y', size=8, font='TNR-I')
    arrow(d, cx, cy - 28, px, cy - 28, INK, 0.6, both=True); ctext(d, (cx + px) / 2, cy - 40, 'distance \u2212z', size=8)
    arrow(d, cx, cy - 8, cx + f, cy - 8, ACC, 0.6, both=True); ctext(d, cx + f / 2, cy - 20, 'f', size=8, font='TNR-I', color=ACC)
    txt(d, 10, 2, 'similar triangles: y\u2032 / f = y / (\u2212z).  Double the distance and the point lands half as far from the centre.', size=8, color=MUTED)


@fig('lambert', 150)
def _(d):
    sx, sy = 120, 40
    d.add(Polygon([sx - 90, sy, sx + 90, sy, sx + 110, sy + 14, sx - 70, sy + 14], fillColor=FILL2, strokeColor=INK, strokeWidth=0.7))
    arrow(d, sx, sy + 7, sx, sy + 95, INK, 1.1); txt(d, sx + 5, sy + 92, 'n (normal)', size=8.5)
    ang = math.radians(50)
    lx, ly = sx + 90 * math.sin(ang), sy + 7 + 90 * math.cos(ang)
    arrow(d, sx, sy + 7, lx, ly, ACC, 1.1); txt(d, lx + 4, ly, 'l (to the light)', size=8.5, color=ACC)
    d.add(Wedge(sx, sy + 7, 28, 90 - 50, 90, fillColor=None, strokeColor=MUTED, strokeWidth=0.6))
    txt(d, sx + 10, sy + 36, '\u03b8', size=9, font='TNR-I')
    txt(d, 260, 110, 'brightness = max(0, n \u00b7 l) = cos \u03b8', size=9.5)
    X, Y = axes(d, 290, 30, 130, 60, (0, 90), (0, 1), xt=(0, 45, 90), yt=(0, 0.5, 1), xl='\u03b8, degrees', yl='brightness', grid=False)
    xs, ys = samples(lambda a: math.cos(math.radians(a)), 0, 90); curve(d, X, Y, xs, ys, ACC, 1.4)
    txt(d, 10, 8, 'a matt surface is brightest when it faces the light and dark when the light grazes it', size=8, color=MUTED)


@fig('depth-precision', 160)
def _(d):
    n, f = 0.05, 9.0
    X, Y = axes(d, 60, 40, 300, 100, (0, 9), (-1, 1), xt=(0, 0.5, 1, 2, 5, 9), yt=(-1, 0, 0.81, 1), xl='distance from the camera, m', yl='depth value', yfmt=lambda v: f'{v:.2f}' if v not in (-1, 0, 1) else f'{v:g}')
    xs = [0.05 + i * (9 - 0.05) / 400 for i in range(401)]
    ys = [(f + n) / (f - n) - 2 * f * n / ((f - n) * x) for x in xs]
    curve(d, X, Y, xs, ys, ACC, 1.5)
    curve(d, X, Y, [0.5, 0.5], [-1, 0.81], MUTED, 0.6, dash=(3, 3)); curve(d, X, Y, [0, 0.5], [0.81, 0.81], MUTED, 0.6, dash=(3, 3))
    txt(d, 380, 100, 'near = 0.05, far = 9', size=8, color=MUTED)
    txt(d, 380, 86, '90% of the depth values', size=8, color=MUTED); txt(d, 380, 75, 'are spent on the first', size=8, color=MUTED); txt(d, 380, 64, 'half metre', size=8, color=MUTED)


@fig('scene-tree', 150)
def _(d):
    def n(x, y, label, fill=FILL):
        tree_node(d, x, y, label, fill=fill, font='TNR', size=8.5)
    def e(x1, y1, x2, y2):
        line(d, x1, y1 - 9, x2, y2 + 9, INK, 0.7)
    n(225, 135, 'scene', FILL2)
    n(90, 95, 'camera'); n(225, 95, 'robot (Group)', ACC_F); n(360, 95, 'light')
    e(225, 135, 90, 95); e(225, 135, 225, 95); e(225, 135, 360, 95)
    n(150, 55, 'wheel L'); n(225, 55, 'arm (Group)', ACC_F); n(300, 55, 'wheel R')
    e(225, 95, 150, 55); e(225, 95, 225, 55); e(225, 95, 300, 55)
    n(185, 15, 'bar'); n(265, 15, 'claw (Group)', ACC_F)
    e(225, 55, 185, 15); e(225, 55, 265, 15)
    txt(d, 330, 40, 'move the arm and the claw', size=8, color=MUTED); txt(d, 330, 29, 'comes with it; move the robot', size=8, color=MUTED); txt(d, 330, 18, 'and everything does', size=8, color=MUTED)


# ------------------------------------------------------------------ Chapter 8
@fig('srgb-linear', 150)
def _(d):
    X, Y = axes(d, 60, 40, 220, 95, (0, 1), (0, 1), xt=(0, 0.25, 0.5, 0.75, 1), yt=(0, 0.5, 1), xl='channel value c (0 to 1)', yl='linear light')
    def lin(c):
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    xs, ys = samples(lin); curve(d, X, Y, xs, ys, ACC, 1.5)
    curve(d, X, Y, [0, 1], [0, 1], MUTED, 0.7, dash=(3, 3))
    txt(d, 300, 120, 'a mid-grey of 0.5 carries', size=8, color=MUTED); txt(d, 300, 109, 'only 21% of the light', size=8, color=MUTED)
    txt(d, 300, 88, 'L = 0.2126 R + 0.7152 G', size=8.5, font='CN'); txt(d, 300, 76, '    + 0.0722 B (linear)', size=8.5, font='CN')
    txt(d, 300, 54, 'contrast = (L1 + 0.05)', size=8.5, font='CN'); txt(d, 300, 42, '         / (L2 + 0.05)', size=8.5, font='CN')
    curve(d, X, Y, [0.5, 0.5], [0, lin(0.5)], MUTED, 0.6, dash=(2, 2)); curve(d, X, Y, [0, 0.5], [lin(0.5), lin(0.5)], MUTED, 0.6, dash=(2, 2))


@fig('vitals-timeline', 110)
def _(d):
    x0, x1 = 40, 420
    arrow(d, x0, 40, x1, 40, INK, 0.8); txt(d, x1 - 30, 28, 'time', size=8, color=MUTED)
    marks = [(x0, 'navigation', 'the visitor taps the link'), (x0 + 110, 'FCP', 'first text or picture'), (x0 + 220, 'LCP \u2264 2.5 s', 'the biggest thing is on screen'), (x0 + 330, 'INP \u2264 200 ms', 'a tap is answered')]
    for x, a, b in marks:
        line(d, x, 34, x, 60, ACC, 1.0)
        txt(d, x - 2, 64, a, size=8.5, font='TNR-B')
        txt(d, x - 2, 78, b, size=7.5, color=MUTED)
    bar(d, x0 + 150, 10, 60, 14, FILL2, INK, 'CLS: jumps', size=7)
    txt(d, x0 + 215, 13, 'layout shift is counted the whole time the page is open', size=7.5, color=MUTED)


# ------------------------------------------------------------------ Part II figures
@fig('html-anatomy', 100)
def _(d):
    s = '<a href="about.html" class="chip">About me</a>'
    txt(d, 40, 60, s, size=12, font='CN')
    # approximate character positions: Courier 12 pt is 7.2 pt per char
    cw = 7.2
    def mark(a, b, label, y=48, col=INK):
        x1, x2 = 40 + a * cw, 40 + b * cw
        line(d, x1, y, x2, y, col, 0.9); line(d, x1, y, x1, y + 4, col, 0.9); line(d, x2, y, x2, y + 4, col, 0.9)
        ctext(d, (x1 + x2) / 2, y - 12, label, size=8, color=col)
    mark(1, 2, 'tag name', 48, ACC)
    mark(3, 19, 'attribute', 48)
    mark(20, 32, 'attribute', 48)
    mark(34, 42, 'content', 48, BLUE)
    mark(42, 46, 'end tag', 48, ACC)
    mark(0, 46, 'one element', 20, MUTED)


@fig('html-landmarks', 180)
def _(d):
    d.add(Rect(100, 10, 250, 160, fillColor=HexColor('#fbfbf9'), strokeColor=INK, strokeWidth=0.8))
    bar(d, 106, 140, 238, 24, FILL2, INK, '<header>  logo, <nav> links', size=8, font='CN')
    bar(d, 106, 60, 160, 74, ACC_F, INK, '', size=8)
    ctext(d, 186, 110, '<main>', size=8.5, font='CN'); ctext(d, 186, 94, '<article> ... </article>', size=7.5, font='CN', color=MUTED); ctext(d, 186, 80, '<section> ... </section>', size=7.5, font='CN', color=MUTED)
    bar(d, 272, 60, 72, 74, FILL2, INK, '<aside>', size=8, font='CN')
    bar(d, 106, 16, 238, 38, FILL2, INK, '<footer>', size=8, font='CN')
    txt(d, 360, 150, 'one per page', size=8, color=MUTED); txt(d, 360, 100, 'the content', size=8, color=MUTED); txt(d, 360, 88, 'a reader came for', size=8, color=MUTED); txt(d, 360, 30, 'small print, links', size=8, color=MUTED)
    txt(d, 10, 150, 'a screen reader', size=8, color=MUTED); txt(d, 10, 139, 'jumps between', size=8, color=MUTED); txt(d, 10, 128, 'these regions', size=8, color=MUTED)


@fig('css-rule-anatomy', 100)
def _(d):
    txt(d, 40, 62, '.panel-head .t { color: var(--accent); letter-spacing: 0.16em; }', size=11, font='CN')
    cw = 6.6
    def mark(a, b, label, y=50, col=INK):
        x1, x2 = 40 + a * cw, 40 + b * cw
        line(d, x1, y, x2, y, col, 0.9); line(d, x1, y, x1, y + 4, col, 0.9); line(d, x2, y, x2, y + 4, col, 0.9)
        ctext(d, (x1 + x2) / 2, y - 12, label, size=8, color=col)
    mark(0, 14, 'selector', 50, ACC)
    mark(17, 37, 'declaration: property, value', 50)
    mark(39, 60, 'declaration', 50)
    mark(15, 63, 'declaration block', 22, BLUE)


@fig('position-schemes', 170)
def _(d):
    def panel(x, title, note):
        d.add(Rect(x, 30, 130, 110, fillColor=HexColor('#fbfbf9'), strokeColor=INK, strokeWidth=0.7))
        txt(d, x, 146, title, size=8.5, font='CN')
        txt(d, x, 16, note, size=7.3, color=MUTED)
    panel(10, 'position: relative', 'moved from its own slot; the slot stays')
    bar(d, 18, 112, 114, 18, FILL2, INK, 'A', size=8); d.add(Rect(18, 88, 114, 18, fillColor=None, strokeColor=MUTED, strokeWidth=0.5, strokeDashArray=(2, 2))); bar(d, 30, 80, 114, 18, ACC_F, INK, 'B (top: 8, left: 12)', size=7); bar(d, 18, 62, 114, 18, FILL2, INK, 'C', size=8)
    panel(160, 'position: absolute', 'taken out of flow; placed in the nearest')
    txt(d, 160, 6, 'positioned ancestor', size=7.3, color=MUTED)
    bar(d, 168, 112, 114, 18, FILL2, INK, 'A', size=8); bar(d, 168, 90, 114, 18, FILL2, INK, 'C (moves up)', size=8); bar(d, 236, 40, 46, 18, ACC_F, INK, 'B', size=8)
    arrow(d, 290, 140, 290, 58, ACC, 0.6, dash=(2, 2)); txt(d, 170, 36, 'right: 8, bottom: 10', size=7, color=ACC)
    panel(310, 'position: sticky', 'scrolls until it reaches top: 0, then sticks')
    bar(d, 318, 118, 114, 16, ACC_F, INK, 'B sticks here', size=7.5)
    for i, y in enumerate((96, 76, 56)):
        bar(d, 318, y, 114, 16, FILL2, INK, 'content scrolls by', size=7)
    arrow(d, 440, 100, 440, 50, MUTED, 0.6)


@fig('stacking', 130)
def _(d):
    for i, (x, y, label, fill) in enumerate([(60, 20, 'z-index: 0', FILL2), (100, 45, 'z-index: 1', FILL), (140, 70, 'z-index: 2', ACC_F)]):
        bar(d, x, y, 120, 44, fill, INK, '', size=8, font='CN')
        txt(d, x + 6, y + 6, label, size=8, font='CN')
    txt(d, 300, 100, 'later in the source paints on top', size=8.5)
    txt(d, 300, 88, 'unless z-index says otherwise', size=8.5)
    txt(d, 300, 66, 'z-index only works on positioned', size=8, color=MUTED); txt(d, 300, 55, 'elements (or flex/grid items),', size=8, color=MUTED)
    txt(d, 300, 44, 'and only within the same', size=8, color=MUTED); txt(d, 300, 33, 'stacking context', size=8, color=MUTED)


@fig('js-value-reference', 130)
def _(d):
    txt(d, 20, 112, 'numbers, strings, booleans: copied', size=9, font='TNR-B')
    box(d, 20, 60, 60, 26, 'a', font='CN', size=9); box(d, 90, 60, 50, 26, '5', fill=ACC_F, font='CN')
    box(d, 20, 24, 60, 26, 'b', font='CN', size=9); box(d, 90, 24, 50, 26, '5', fill=ACC_F, font='CN')
    txt(d, 150, 68, 'let b = a; a = 8;', size=8.5, font='CN', color=MUTED); txt(d, 150, 54, 'b is still 5', size=8.5, color=MUTED)
    txt(d, 260, 112, 'objects and arrays: shared', size=9, font='TNR-B')
    box(d, 260, 60, 60, 26, 'o1', font='CN', size=9); box(d, 260, 24, 60, 26, 'o2', font='CN', size=9)
    box(d, 360, 36, 70, 40, ['{ n: 9 }'], fill=ACC_F, font='CN')
    arrow(d, 320, 73, 360, 60); arrow(d, 320, 37, 360, 52)
    txt(d, 260, 8, 'o2 = o1; o1.n = 9;  o2.n is 9 too', size=8.5, font='CN', color=MUTED)


@fig('js-scope-chain', 150)
def _(d):
    d.add(Rect(20, 20, 410, 118, fillColor=HexColor('#fbfbf9'), strokeColor=INK, strokeWidth=0.7))
    txt(d, 26, 126, 'global:  const RATE = 0.15;', size=8.5, font='CN')
    d.add(Rect(40, 30, 370, 88, fillColor=FILL, strokeColor=INK, strokeWidth=0.7))
    txt(d, 46, 106, 'function price(base) {           // base, tax live here', size=8.5, font='CN')
    d.add(Rect(60, 40, 330, 56, fillColor=ACC_F, strokeColor=INK, strokeWidth=0.7))
    txt(d, 66, 84, 'const tax = base * RATE;', size=8.5, font='CN')
    txt(d, 66, 70, 'return () => base + tax;   // this inner function', size=8.5, font='CN')
    txt(d, 66, 56, '                           // can see tax, base, RATE', size=8.5, font='CN', color=MUTED)
    txt(d, 46, 36, '}', size=8.5, font='CN')
    arrow(d, 400, 66, 400, 112, ACC, 0.8); arrow(d, 420, 100, 420, 130, ACC, 0.8)
    txt(d, 300, 8, 'a name is looked up inward to outward', size=7.5, color=ACC)


@fig('js-closure', 120)
def _(d):
    box(d, 20, 50, 130, 44, ['makeCounter()', 'runs and returns'], font='CN', size=8.5)
    box(d, 190, 50, 90, 44, ['the arrow', 'function'], fill=ACC_F, size=8.5)
    box(d, 320, 50, 100, 44, ['n: 2', '(kept alive)'], fill=FILL2, font='CN', size=8.5)
    arrow(d, 150, 72, 190, 72); arrow(d, 280, 72, 320, 72)
    txt(d, 20, 30, 'the local n would normally vanish when makeCounter returns;', size=8.5, color=MUTED)
    txt(d, 20, 18, 'the inner function still refers to it, so it is kept, privately, for as long as the function lives', size=8.5, color=MUTED)
    txt(d, 150, 104, 'c1 = makeCounter(); c1(); c1();', size=8.5, font='CN')


@fig('js-promise-states', 120)
def _(d):
    box(d, 20, 50, 100, 36, ['pending'], fill=FILL2, size=9.5)
    box(d, 200, 80, 100, 32, ['fulfilled', 'has a value'], fill=ACC_F, size=8.5)
    box(d, 200, 14, 100, 32, ['rejected', 'has a reason'], fill=FILL2, size=8.5)
    arrow(d, 120, 72, 200, 96); arrow(d, 120, 64, 200, 30)
    txt(d, 130, 94, 'resolve(value)', size=7.5, font='CN', color=MUTED); txt(d, 130, 36, 'reject(error)', size=7.5, font='CN', color=MUTED)
    txt(d, 320, 96, '.then(f) runs f', size=8.5, font='CN'); txt(d, 320, 84, 'await gives the value', size=8.5, font='CN')
    txt(d, 320, 30, '.catch(g) runs g', size=8.5, font='CN'); txt(d, 320, 18, 'await throws', size=8.5, font='CN')
    txt(d, 20, 30, 'settled once;', size=8, color=MUTED); txt(d, 20, 19, 'never changes again', size=8, color=MUTED)


@fig('js-prototype-chain', 110)
def _(d):
    box(d, 20, 40, 100, 40, ['patrick', 'name: "Patrick"'], fill=ACC_F, font='CN', size=8)
    box(d, 170, 40, 110, 40, ['Robot.prototype', 'drive(), stop()'], font='CN', size=8)
    box(d, 330, 40, 100, 40, ['Object.prototype', 'toString()'], font='CN', size=8)
    arrow(d, 120, 60, 170, 60); arrow(d, 280, 60, 330, 60)
    txt(d, 125, 66, '[[Prototype]]', size=7, color=MUTED); txt(d, 285, 66, '[[Prototype]]', size=7, color=MUTED)
    txt(d, 20, 18, 'patrick.drive(): not found on patrick, so the search walks the chain to the right until it finds drive', size=8, color=MUTED)
    txt(d, 20, 94, 'class Robot { drive() {} }  new Robot("Patrick")', size=8.5, font='CN')


@fig('react-data-flow', 170)
def _(d):
    def n(x, y, label, fill=FILL, w=92):
        box(d, x - w / 2, y - 12, w, 24, label, fill=fill, font='CN', size=8.5)
    n(225, 145, 'App', FILL2); n(120, 95, 'FilterBar'); n(330, 95, 'Gallery'); n(280, 45, 'Card'); n(380, 45, 'Card')
    for (x1, y1, x2, y2) in ((225, 145, 120, 95), (225, 145, 330, 95), (330, 95, 280, 45), (330, 95, 380, 45)):
        line(d, x1, y1 - 12, x2, y2 + 12, INK, 0.7)
    txt(d, 300, 125, '↓ props down: items, tag', size=7.5, color=ACC)
    txt(d, 40, 125, 'events up: onPick(tag) ↑', size=7.5, color=BLUE)
    txt(d, 20, 20, 'the state (which tag is picked) lives in App, the one component both branches share; children never change their props', size=7.8, color=MUTED)


@fig('react-render-cycle', 110)
def _(d):
    labels = [['state changes', 'setTag("aero")'], ['your component', 'runs again'], ['new description', 'of the screen'], ['diff against', 'the last one'], ['the smallest', 'DOM edits']]
    x = 10
    for i, lab in enumerate(labels):
        box(d, x, 40, 78, 40, lab, fill=ACC_F if i == 0 else FILL, size=8, font='TNR' if i else 'CN')
        if i < 4:
            arrow(d, x + 78, 60, x + 90, 60)
        x += 90
    txt(d, 10, 94, 'a render is a calculation, not a drawing; React does the drawing afterwards', size=8, color=MUTED)
    txt(d, 10, 20, 'an effect runs after step 5, which is why it can see the real DOM', size=8, color=MUTED)


@fig('canvas-transform', 150)
def _(d):
    d.add(Rect(20, 20, 180, 110, fillColor=HexColor('#fbfbf9'), strokeColor=INK, strokeWidth=0.7))
    dot(d, 20, 130, 2.5, MUTED); txt(d, 24, 134, 'canvas origin', size=7.5, color=MUTED)
    ox, oy = 110, 75
    dot(d, ox, oy, 3, ACC); txt(d, ox + 5, oy - 12, 'translate(x, y)', size=7.5, font='CN', color=ACC)
    ang = math.radians(25)
    arrow(d, ox, oy, ox + 60 * math.cos(ang), oy + 60 * math.sin(ang), ACC, 0.9); arrow(d, ox, oy, ox - 30 * math.sin(ang), oy + 30 * math.cos(ang), ACC, 0.9)
    txt(d, ox + 20, oy + 40, 'rotate(\u03b8)', size=7.5, font='CN', color=ACC)
    # aircraft symbol
    pts = [(-26, 0), (26, 0), (10, 7), (-10, 7), (-26, 0), (0, -3), (26, 0)]
    poly = []
    for px, py in pts:
        poly += [ox + px * math.cos(ang) - py * math.sin(ang), oy + px * math.sin(ang) + py * math.cos(ang)]
    d.add(Polygon(poly, fillColor=BLUE, strokeColor=BLUE))
    txt(d, 220, 120, 'ctx.save();', size=8.5, font='CN'); txt(d, 220, 108, 'ctx.translate(x, y);', size=8.5, font='CN'); txt(d, 220, 96, 'ctx.rotate(theta);', size=8.5, font='CN')
    txt(d, 220, 84, 'drawSymbol(ctx);   // drawn upright at (0, 0)', size=8.5, font='CN'); txt(d, 220, 72, 'ctx.restore();', size=8.5, font='CN')
    txt(d, 220, 50, 'order matters: translate then rotate turns the symbol', size=8, color=MUTED); txt(d, 220, 39, 'about its own centre; rotate then translate swings it', size=8, color=MUTED); txt(d, 220, 28, 'around the canvas origin', size=8, color=MUTED)


@fig('svg-viewbox', 130)
def _(d):
    d.add(Rect(20, 20, 100, 60, fillColor=HexColor('#fbfbf9'), strokeColor=INK, strokeWidth=0.7))
    txt(d, 20, 86, 'viewBox="0 0 100 60"', size=8, font='CN'); txt(d, 20, 98, 'the drawing\u2019s own units', size=8, color=MUTED)
    d.add(Circle(80, 45, 8, fillColor=ACC_F, strokeColor=INK, strokeWidth=0.6)); d.add(Rect(30, 30, 30, 18, fillColor=FILL2, strokeColor=INK, strokeWidth=0.6))
    arrow(d, 130, 50, 170, 50)
    d.add(Rect(180, 10, 250, 110, fillColor=HexColor('#fbfbf9'), strokeColor=INK, strokeWidth=0.7))
    txt(d, 180, 124, 'shown at width="300": every unit becomes 3 px', size=8, font='CN')
    s = 250 / 100
    d.add(Circle(180 + 80 * s, 10 + 45 * s * 110 / 150, 8 * s * 0.73, fillColor=ACC_F, strokeColor=INK, strokeWidth=0.6)); d.add(Rect(180 + 30 * s, 10 + 30 * 0.73 * s, 30 * s, 18 * s * 0.73, fillColor=FILL2, strokeColor=INK, strokeWidth=0.6))


@fig('gsap-timeline', 130)
def _(d):
    X = lambda t: 60 + t * 90
    for t in range(5):
        line(d, X(t), 30, X(t), 110, GRID, 0.5); ctext(d, X(t), 16, f'{t} s', size=8, color=MUTED)
    bar(d, X(0), 86, 90, 18, ACC_F, INK, 'a: 1 s', size=8)
    bar(d, X(0), 62, 180, 18, BLUE_F, INK, "b: 2 s, at '<' (start of a)", size=8)
    bar(d, X(2.5), 38, 90, 18, FILL2, INK, "c: at '+=0.5'", size=8)
    arrow(d, X(2), 48, X(2.5), 48, RED, 0.8); txt(d, X(2) - 60, 30, '0.5 s after the end so far', size=7, color=RED)
    txt(d, 10, 92, 'tween', size=8, color=MUTED)
    rtext(d, 440, 100, 'total 3.5 s', size=8.5, font='TNR-B')


@fig('camera-frustum', 170)
def _(d):
    cx, cy = 50, 85
    dot(d, cx, cy, 3.5, INK); txt(d, cx - 10, cy - 16, 'camera', size=8.5)
    n, f = 60, 300
    hn, hf = 14, 68
    line(d, cx, cy, cx + f, cy + hf, INK, 0.7); line(d, cx, cy, cx + f, cy - hf, INK, 0.7)
    line(d, cx + n, cy - hn, cx + n, cy + hn, ACC, 1.2); line(d, cx + f, cy - hf, cx + f, cy + hf, ACC, 1.2)
    txt(d, cx + n - 10, cy + hn + 6, 'near', size=8, color=ACC); txt(d, cx + f - 8, cy + hf + 6, 'far', size=8, color=ACC)
    d.add(Polygon([cx + n, cy - hn, cx + f, cy - hf, cx + f, cy + hf, cx + n, cy + hn], fillColor=ACC_F, strokeColor=None))
    d.add(Wedge(cx, cy, 40, -math.degrees(math.atan2(hf, f)), math.degrees(math.atan2(hf, f)), fillColor=None, strokeColor=MUTED, strokeWidth=0.6))
    txt(d, cx + 44, cy - 3, 'fov', size=8, font='TNR-I')
    dot(d, cx + 200, cy + 20, 3, BLUE); txt(d, cx + 206, cy + 24, 'visible', size=7.5, color=BLUE)
    dot(d, cx + 30, cy + 5, 3, RED); txt(d, cx + 10, cy - 20, 'too close: clipped', size=7.5, color=RED)
    dot(d, cx + 340, cy - 30, 3, RED); txt(d, cx + 300, cy - 44, 'too far: clipped', size=7.5, color=RED)
    txt(d, 10, 158, 'PerspectiveCamera(fov, aspect, near, far): only what lies inside the frustum is drawn', size=8.5, color=MUTED)


@fig('orbit-camera', 170)
def _(d):
    tx, ty = 150, 70
    dot(d, tx, ty, 3.5, INK); txt(d, tx - 8, ty - 16, 'target', size=8.5)
    r = 100
    dist = r
    az = math.radians(-50 + 90); el = math.radians(22)
    # draw a schematic: ground ellipse and elevated camera
    d.add(Ellipse(tx, ty, r * 0.95, r * 0.33, fillColor=None, strokeColor=GRID, strokeWidth=0.6))
    cxp, cyp = tx + r * math.cos(el) * math.cos(az), ty + r * math.sin(el) + r * math.cos(el) * math.sin(az) * 0.35
    line(d, tx, ty, cxp, cyp, ACC, 1.0); dot(d, cxp, cyp, 4, ACC); txt(d, cxp + 6, cyp, 'camera', size=8.5, color=ACC)
    gx, gy = tx + r * math.cos(el) * math.cos(az), ty + r * math.cos(el) * math.sin(az) * 0.35
    line(d, tx, ty, gx, gy, MUTED, 0.6, dash=(2, 2)); line(d, gx, gy, cxp, cyp, MUTED, 0.6, dash=(2, 2))
    txt(d, (tx + gx) / 2 + 4, gy - 16, 'azimuth a', size=8, font='TNR-I'); txt(d, gx + 6, (gy + cyp) / 2, 'elevation e', size=8, font='TNR-I')
    txt(d, 290, 130, 'x = d cos e cos a', size=9, font='CN'); txt(d, 290, 116, 'y = d sin e', size=9, font='CN'); txt(d, 290, 102, 'z = d cos e sin a', size=9, font='CN')
    txt(d, 290, 76, 'three numbers the visitor can', size=8, color=MUTED); txt(d, 290, 65, 'drag or scroll: a, e and d', size=8, color=MUTED)
    txt(d, 290, 44, 'the camera never moves except', size=8, color=MUTED); txt(d, 290, 33, 'through this formula', size=8, color=MUTED)


@fig('pbr-roughness', 110)
def _(d):
    for i, (rough, label) in enumerate(((0.05, 'roughness 0.05'), (0.3, '0.3'), (0.6, '0.6'), (1.0, '1.0'))):
        cx = 60 + i * 110
        d.add(Circle(cx, 55, 32, fillColor=FILL2, strokeColor=INK, strokeWidth=0.6))
        rad = 4 + rough * 16
        g = int(0xff - rough * 0x16)
        d.add(Circle(cx - 6, 64, rad, fillColor=HexColor(f'#{g:02x}{g:02x}{g:02x}'), strokeColor=None))
        d.add(Circle(cx - 6, 64, rad * 0.5, fillColor=HexColor('#ffffff'), strokeColor=None))
        ctext(d, cx, 10, label, size=8)
    txt(d, 10, 98, 'the same light on four spheres: a smooth surface gives a tight bright highlight, a rough one spreads it out', size=8, color=MUTED)


@fig('git-graph', 150)
def _(d):
    def commit(x, y, label, fill=FILL2):
        d.add(Circle(x, y, 9, fillColor=fill, strokeColor=INK, strokeWidth=0.8)); ctext(d, x, y - 3, label, size=7, font='CN')
    ys_main, ys_feat = 95, 45
    xs = [60, 130, 200, 270, 340]
    for i in range(4):
        line(d, xs[i] + 9, ys_main, xs[i + 1] - 9, ys_main, INK, 0.9)
    for i, x in enumerate(xs):
        commit(x, ys_main, f'c{i + 1}', ACC_F if i == 4 else FILL2)
    line(d, xs[1] + 7, ys_main - 6, xs[2] - 7, ys_feat + 6, INK, 0.9); line(d, xs[2] + 9, ys_feat, xs[3] - 9, ys_feat, INK, 0.9)
    commit(xs[2], ys_feat, 'e1'); commit(xs[3], ys_feat, 'e2')
    line(d, xs[3] + 7, ys_feat + 6, xs[4] - 7, ys_main - 6, INK, 0.9, dash=(3, 2))
    txt(d, 395, ys_main - 3, 'main', size=8.5, font='TNR-B'); txt(d, 310, ys_feat - 3, 'experiment', size=8.5, font='TNR-B')
    txt(d, 60, 125, 'each circle is a commit: a snapshot plus a message; a branch is just a name that points at one', size=8, color=MUTED)
    txt(d, 60, 18, 'c5 is a merge commit: it has two parents and brings the experiment back', size=8, color=MUTED)


@fig('bundler-flow', 128)
def _(d):
    for i, (name, y) in enumerate((('main.js', 96), ('model.js', 68), ('robot.js', 40), ('three (npm)', 12))):
        box(d, 20, y - 11, 80, 22, name, font='CN', size=8.5, fill=FILL2 if 'npm' in name else FILL)
        arrow(d, 100, y, 230, 62, INK, 0.7)
    box(d, 230, 40, 100, 44, ['esbuild', '--bundle --minify'], font='CN', size=8)
    arrow(d, 330, 62, 350, 62)
    box(d, 350, 48, 90, 28, 'patrick.js', fill=ACC_F, font='CN', size=8.5)
    txt(d, 350, 36, 'one file, one request', size=7.5, color=MUTED)
    txt(d, 20, 116, 'the bundler follows every import from the entry file', size=8, color=MUTED)


@fig('semver', 80)
def _(d):
    txt(d, 30, 44, '0', size=22, font='CN-B'); txt(d, 45, 44, '.', size=22, font='CN'); txt(d, 58, 44, '186', size=22, font='CN-B'); txt(d, 100, 44, '.', size=22, font='CN'); txt(d, 113, 44, '1', size=22, font='CN-B')
    ctext(d, 37, 28, 'major', size=8, color=ACC); ctext(d, 78, 28, 'minor', size=8, color=ACC); ctext(d, 120, 28, 'patch', size=8, color=ACC)
    txt(d, 30, 12, 'major: may break your code.  minor: adds, does not break.  patch: fixes only', size=7.5, color=MUTED)
    txt(d, 240, 56, '^0.186.1  allows  0.186.1 \u2264 v < 0.187.0', size=8, font='CN')
    txt(d, 240, 42, '^1.2.3    allows  1.2.3 \u2264 v < 2.0.0', size=8, font='CN')
    txt(d, 240, 28, '~1.2.3    allows  1.2.3 \u2264 v < 1.3.0', size=8, font='CN')


# ------------------------------------------------------------------ C++ and robot figures
@fig('cpp-build', 110)
def _(d):
    labels = [['hello.cpp', 'your text'], ['preprocessor', '#include pasted'], ['compiler', 'to machine code'], ['linker', 'joins the pieces'], ['hello.exe', 'runs']]
    x = 10
    for i, lab in enumerate(labels):
        box(d, x, 40, 78, 40, lab, fill=ACC_F if i in (0, 4) else FILL, size=8, font='CN' if i in (0, 4) else 'TNR')
        if i < 4:
            arrow(d, x + 78, 60, x + 90, 60)
        x += 90
    txt(d, 10, 94, 'g++ hello.cpp -o hello  runs all three steps; errors from each read differently', size=8, color=MUTED)
    txt(d, 10, 20, 'JavaScript skips this: the browser reads the text and runs it straight away', size=8, color=MUTED)


@fig('cpp-stack-heap', 170)
def _(d):
    txt(d, 40, 156, 'the stack', size=9, font='TNR-B')
    d.add(Rect(40, 20, 130, 128, fillColor=None, strokeColor=INK, strokeWidth=0.8))
    bar(d, 44, 24, 122, 30, FILL2, INK, 'main(): n = 3, v', size=8, font='CN')
    bar(d, 44, 58, 122, 30, FILL2, INK, 'go(): d = 0.5', size=8, font='CN')
    bar(d, 44, 92, 122, 30, ACC_F, INK, 'step(): x, y', size=8, font='CN')
    txt(d, 40, 8, 'automatic: freed when the function returns', size=7.5, color=MUTED)
    txt(d, 240, 156, 'the heap', size=9, font='TNR-B')
    d.add(Rect(240, 20, 190, 128, fillColor=None, strokeColor=INK, strokeWidth=0.8, strokeDashArray=(3, 3)))
    bar(d, 250, 100, 170, 26, ACC_F, INK, 'vector data: 1000 doubles', size=8, font='CN')
    bar(d, 250, 50, 90, 26, FILL2, INK, 'a string', size=8, font='CN')
    arrow(d, 166, 36, 250, 113, ACC, 0.8); txt(d, 180, 60, 'v holds a pointer', size=7.5, color=ACC)
    txt(d, 240, 8, 'sized at run time; a vector frees it for you', size=7.5, color=MUTED)


@fig('cpp-pointer', 110)
def _(d):
    box(d, 40, 40, 90, 40, ['x', '3.0'], font='CN', size=9, fill=ACC_F); txt(d, 40, 86, 'address 0x7ffc10', size=7.5, font='CN', color=MUTED)
    box(d, 240, 40, 110, 40, ['p', '0x7ffc10'], font='CN', size=9); txt(d, 240, 86, 'double* p = &x;', size=8, font='CN', color=MUTED)
    arrow(d, 240, 60, 130, 60, ACC, 1.0)
    txt(d, 150, 66, '*p reads or writes x', size=8, color=ACC)
    txt(d, 40, 18, 'a pointer is a variable whose value is an address; & gives the address, * follows it', size=8, color=MUTED)


@fig('pid-loop', 130)
def _(d):
    d.add(Circle(70, 70, 11, fillColor=FILL, strokeColor=INK, strokeWidth=0.8)); ctext(d, 70, 66, '\u03a3', size=10)
    arrow(d, 10, 70, 59, 70); txt(d, 8, 78, 'setpoint r', size=8)
    box(d, 110, 50, 90, 40, ['PID', 'Kp e + Ki\u222be + Kd de/dt'], size=7.5)
    arrow(d, 81, 70, 110, 70); ctext(d, 95, 76, 'e', size=8, font='TNR-I')
    box(d, 240, 50, 80, 40, ['plant', '(robot, drone)'], size=8, fill=FILL2)
    arrow(d, 200, 70, 240, 70); ctext(d, 220, 76, 'u', size=8, font='TNR-I')
    arrow(d, 320, 70, 420, 70); txt(d, 380, 78, 'output y', size=8)
    line(d, 370, 70, 370, 25, INK, 0.8); line(d, 370, 25, 70, 25, INK, 0.8); arrow(d, 70, 25, 70, 59, INK, 0.8)
    txt(d, 52, 44, '\u2212', size=10); txt(d, 180, 30, 'the measurement is fed back and subtracted: e = r \u2212 y', size=8, color=MUTED)
    txt(d, 10, 112, 'one loop, three terms: P acts on the error now, I on its history, D on its trend', size=8.5, color=MUTED)


@fig('state-machine', 150)
def _(d):
    states = [('IDLE', 50, 100), ('APPROACH', 150, 100), ('BRAKE', 250, 100), ('REACH', 350, 100), ('GRIP', 350, 40), ('LIFT', 250, 40), ('CARRY', 150, 40)]
    for name, x, y in states:
        box(d, x - 38, y - 12, 76, 24, name, font='CN', size=8, fill=ACC_F if name == 'IDLE' else FILL)
    arrow(d, 88, 100, 112, 100); arrow(d, 188, 100, 212, 100); arrow(d, 288, 100, 312, 100)
    arrow(d, 350, 88, 350, 52); arrow(d, 312, 40, 288, 40); arrow(d, 212, 40, 188, 40)
    txt(d, 90, 116, 'START', size=6.5, color=MUTED); txt(d, 180, 116, 'sonar < 0.108 m', size=6.5, color=MUTED); txt(d, 286, 116, 'speed \u2248 0', size=6.5, color=MUTED)
    txt(d, 354, 70, 'arm down', size=6.5, color=MUTED); txt(d, 290, 46, 'jaw closed', size=6.5, color=MUTED); txt(d, 190, 46, 'arm up', size=6.5, color=MUTED)
    txt(d, 10, 136, 'one variable holds the phase; each tick does only what that phase says and checks one condition to move on', size=8, color=MUTED)
    txt(d, 10, 14, '... PLACE, RETREAT, SHIFT, back to APPROACH for the next item, DONE after the fifth', size=8, color=MUTED)


@fig('site-map', 180)
def _(d):
    box(d, 160, 135, 130, 30, 'portfolio.html', fill=ACC_F, font='CN', size=8.5)
    pages = ['cfd', 'applied-aero', 'flight-dyn', 'aerostructures', 'propulsion', 'mechatronics', 'downloads']
    for i, p in enumerate(pages):
        x = 10 + i * 63
        box(d, x, 75, 58, 28, p, font='CN', size=6.5)
        line(d, 225, 135, x + 29, 103, INK, 0.6)
    box(d, 325, 25, 100, 26, 'mechatronics-2', font='CN', size=7, fill=FILL2); arrow(d, 354, 75, 365, 51, INK, 0.6, both=True)
    txt(d, 10, 50, 'every page is one self-contained HTML file; three of them load a built script next to them', size=8, color=MUTED)
    txt(d, 10, 36, '(stability.js, patrick.js, drone.js)', size=8, color=MUTED, font='CN')


@fig('patrick-data-flow', 150)
def _(d):
    box(d, 20, 90, 110, 40, ['model.js', 'physics, numbers'], font='CN', size=8, fill=ACC_F)
    box(d, 170, 90, 110, 40, ['mission.js', 'the run, 1 ms steps'], font='CN', size=8)
    box(d, 320, 90, 110, 40, ['graphs.js', 'charts read the run'], font='CN', size=8)
    box(d, 95, 20, 110, 40, ['robot.js', 'geometry, pose()'], font='CN', size=8)
    box(d, 245, 20, 110, 40, ['main.js / kitchen.js', 'page, camera, buttons'], font='CN', size=7.5)
    arrow(d, 130, 110, 170, 110); arrow(d, 280, 110, 320, 110)
    arrow(d, 75, 90, 130, 60); arrow(d, 225, 90, 180, 60); arrow(d, 225, 90, 280, 60)
    txt(d, 20, 6, 'arrows point from the thing that knows to the thing that asks; nothing on the right is typed in by hand', size=8, color=MUTED)


@fig('subscribers', 110)
def _(d):
    box(d, 20, 40, 100, 40, ['state', 'M, Kn, gains'], fill=ACC_F, font='CN', size=8)
    box(d, 160, 40, 90, 40, ['changed()', 'recompute'], font='CN', size=8)
    arrow(d, 120, 60, 160, 60)
    for i, name in enumerate(('pole map', 'Routh table', 'step response')):
        y = 88 - i * 30
        box(d, 320, y - 10, 110, 22, name, size=8)
        arrow(d, 250, 60, 320, y + 1, INK, 0.7)
    txt(d, 20, 4, 'every panel adds its redraw function to a list; a slider sets one field and calls changed(), which calls them all', size=7.8, color=MUTED)


if __name__ == '__main__':
    import os
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import ParagraphStyle
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer
    FONTS = os.environ.get('WINFONTS', r'C:\Windows\Fonts')
    for name, f in (('TNR', 'times.ttf'), ('TNR-B', 'timesbd.ttf'), ('TNR-I', 'timesi.ttf'), ('CN', 'cour.ttf'), ('CN-B', 'courbd.ttf')):
        pdfmetrics.registerFont(TTFont(name, os.path.join(FONTS, f)))
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'figures-preview.pdf')
    story = []
    for name, make in FIGS.items():
        dr = make(); dr.hAlign = 'CENTER'
        story += [Paragraph(name, ParagraphStyle('n', fontName='CN', fontSize=9)), dr, Spacer(1, 14)]
    SimpleDocTemplate(out, pagesize=A4, leftMargin=72, rightMargin=72, topMargin=50, bottomMargin=50).build(story)
    print('wrote', out, len(FIGS), 'figures')
