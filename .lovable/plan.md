## Urlaubs-Popup einrichten

Ein Popup, das beim Laden der Seite erscheint und die Gäste über die Betriebsferien informiert. Ab dem **20.08.** sind wir wieder für euch da.

### Was passiert

1. **Neues Bild generieren** (`src/assets/urlaub-popup.jpg`)
   - Stil passend zur Seite: dunkel, elegant, Bernstein-Akzente
   - Motiv: "Wir machen Urlaub – ab 20.08. wieder für Sie da"
   - Enthält Restaurantname "Alte Brauerei Rußheim"
   - Hochformat/Flyer-Style (wie damals der Spanferkel-Flyer)

2. **Neue Komponente** `src/components/UrlaubPopup.tsx`
   - Basiert auf dem bewährten `SpanferkelPopup`-Muster (Dialog aus shadcn, Auto-Öffnen nach 800 ms)
   - Zeigt das neue Urlaubsbild
   - Screenreader-Titel: "Betriebsferien – ab 20. August wieder geöffnet"

3. **Einbinden in `src/pages/Index.tsx`**
   - Import ergänzen und `<UrlaubPopup />` rendern (dort, wo früher `<SpanferkelPopup />` stand)

### Offene Frage vor Umsetzung

Damit das Bild stimmt: Soll ich einen konkreten Zeitraum („vom … bis 19.08.") anzeigen, oder reicht die Aussage **„Wir sind im Urlaub – ab 20.08. wieder für Sie da"**?
