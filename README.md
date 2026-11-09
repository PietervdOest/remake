# Remake

Studie-remakes van drie referentiesites en een Dearly-homepage die de lessen daaruit toepast. Gemaakt op 9 november 2026.

| Map | Wat | Openen |
| --- | --- | --- |
| `parentsquare/` | Remake van de homepage van parentsquare.com: structuur, typografie, kleur, componenten | `parentsquare/index.html` |
| `thinkcompany/` | Remake van de homepage van thinkcompany.com | `thinkcompany/index.html` |
| `inuka/` | Remake van de homepage van inukacoaching.com/nl | `inuka/index.html` |
| `dearly/` | De Dearly-site in de gekozen cleane richting: acht pagina's, gebouwd met `dearly/build.py` uit `dearly/src/` | `dearly/index.html` |
| `REPORT.md` | Wat er per site is nagebouwd, wat de lessen zijn en hoe ze in de Dearly-versie zitten | |

Alles is statische HTML en CSS. Openen kan direct vanaf schijf, of met een simpele server:

```bash
python3 -m http.server 8080
```

## Spelregels

- De remakes bouwen de **vorm** na: opbouw van de pagina, typografische hiërarchie, kleurgebruik, componenten en beweging. Teksten zijn geparafraseerd of plaatshouders, beelden zijn plaatshouders, logo's zijn woordmerken. Niets van de originele sites is gekopieerd of hergebruikt.
- De Dearly-versie gebruikt alleen eigen foto's en logo's van dearly.nl en alleen cijfers met bron. Er staan geen ballonfoto's in. Eén citaat staat als zichtbaar gemarkeerde plaatshouder.
- De Dearly-versie is een homepage; de links in menu en footer wijzen naar de bestaande pagina's op dearly.nl.
