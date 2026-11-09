"""Bouwt de Dearly-pagina's in de cleane stijl: src/<pagina>.html (alleen <main>) + gedeelde kop, header en footer."""
import pathlib, re
R = pathlib.Path(__file__).parent
PAGES = {"index": ("Dearly | Het leven gebeurt. Ook op het werk.", ""),
 "voor-organisaties": ("Voor organisaties | Dearly", "org"), "voor-medewerkers": ("Voor medewerkers | Dearly", "mw"),
 "begeleiders": ("Begeleiders | Dearly", "beg"), "over-ons": ("Over ons | Dearly", "over"), "kennisbank": ("Kennisbank | Dearly", "kb"),
 "plan-een-kennismaking": ("Plan een kennismaking | Dearly", "demo"), "inloggen": ("Inloggen | Dearly", "login")}
def head(title, cur, kop):
    a = lambda k: ' aria-current="page"' if k == cur else ''
    logo = "logo-licht.svg" if kop == "donker" else "logo.svg"
    return f'''<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title><link rel="icon" href="assets/img/beeldmerk.svg">
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/clean.css"></head><body data-kop="{kop}">
<header><div class="wrap"><nav><a href="voor-organisaties.html"{a("org")}>Voor organisaties</a><a href="voor-medewerkers.html"{a("mw")}>Voor medewerkers</a><a href="begeleiders.html"{a("beg")}>Begeleiders</a><a href="kennisbank.html"{a("kb")}>Kennisbank</a><a href="over-ons.html"{a("over")}>Over ons</a></nav><a class="logo" href="index.html"><img src="assets/img/{logo}" alt="Dearly"></a><div class="acties"><a href="inloggen.html">Inloggen</a><a class="btn licht" href="plan-een-kennismaking.html">Plan een kennismaking</a></div></div></header>
'''
FOOT = '''<footer><div class="wrap"><div class="rij"><img src="assets/img/logo.svg" alt="Dearly" style="height:20px"><nav><a href="voor-organisaties.html">Voor organisaties</a><a href="voor-medewerkers.html">Voor medewerkers</a><a href="begeleiders.html">Begeleiders</a><a href="kennisbank.html">Kennisbank</a><a href="over-ons.html">Over ons</a><a href="plan-een-kennismaking.html">Contact</a><a href="inloggen.html">Inloggen</a><a href="https://dearly.nl/privacyverklaring/">Privacy</a></nav></div><div class="onder"><span>© 2026 Dearly</span><span>Prototype. Niet live.</span></div></div></footer>
</body></html>
'''
for name, (title, cur) in PAGES.items():
    src = R / "src" / f"{name}.html"
    if not src.exists(): continue
    body = src.read_text()
    kop = re.search(r'<main data-kop="(\w+)"', body).group(1)
    (R / f"{name}.html").write_text(head(title, cur, kop) + body + FOOT)
    print(f"{name}.html ok ({len(re.sub(r'<[^>]+>',' ',body).split())} woorden)")
