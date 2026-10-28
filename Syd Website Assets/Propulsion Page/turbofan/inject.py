import re
p='c:/Users/thabe/Desktop/Main PC content/Fun Projects/Syd Website 2026/propulsion.html'
f=open('c:/Users/thabe/Desktop/Main PC content/Fun Projects/Syd Website 2026/Syd Website Assets/Propulsion Page/turbofan/fragment.html',encoding='utf-8').read()
s=open(p,encoding='utf-8').read()
a=s.index('<!--TF-START-->')+len('<!--TF-START-->'); b=s.index('<!--TF-END-->')
open(p,'w',encoding='utf-8').write(s[:a]+'\n'+f+'\n'+s[b:])
print('injected',len(f))
