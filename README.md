# Le moto di Mauro

Sito statico (GitHub Pages). Si pubblica da solo a ogni push su `main`.

## Aggiungere una moto
1. Metti le foto (jpg) nella cartella `img/`.
2. In `moto.js` copia un blocco `{ ... }` dell'elenco, incollalo (con la virgola tra un blocco e l'altro) e cambia i dati: `id` (unico, senza spazi), titolo, prezzo, `dettagli`, `punti`, `foto`. La prima foto è la copertina; il terzo valore `true` segna una foto verticale.
3. Fatto: la sezione, il menu e il visualizzatore foto si creano da soli.

## Togliere una moto
Cancella il suo blocco da `moto.js` (le foto in `img/` si possono cancellare). Per tenerla visibile ma segnarla, imposta `stato:"venduta"` oppure `"riservata"`.

## Contatti
Numero WhatsApp ed email sono in `index.html`, nello script "contatti montati via script".
