// Elenco delle moto in vendita. Per AGGIUNGERE una moto: copia un blocco, cambia i dati,
// metti le foto in img/. Per TOGLIERLA: cancella il blocco (o metti stato:"venduta").
// L'ordine qui è l'ordine nella pagina. Vedi README.md.
// Versione delle foto: cambia questo valore (es. la data) ogni volta che SOSTITUISCI una foto con lo stesso nome,
// altrimenti i browser mostrano la vecchia copia in cache.
const VER="20261013b";
const MOTO=[
{
  id:"lambretta-j50",              // univoco, minuscolo, senza spazi (è il link #lambretta-j50)
  nav:"Lambretta",                  // voce nel menu in alto
  titolo:"Lambretta J50", corsivo:"del 1967",
  eyebrow:"In vetrina · Innocenti · 50 cc",
  lead:"Prima immatricolazione giugno 1967. Ristrutturazione completa, tutti i pezzi originali, motore originale revisionato. Funzionante, con libretto originale e bolli d'epoca pagati.",
  prezzo:"€ 3.150", prezzoNota:"trattabile · Bussolengo (VR) · consegna entro 150 km",
  stato:"disponibile",             // "disponibile" | "riservata" | "venduta"
  dettagli:[
    ["Modello","Innocenti Lambretta J50"],
    ["Immatricolazione","30/06/1967"],
    ["Cilindrata","50 cc"],
    ["Colore","Azzurro, sella blu"],
    ["Stato","Funzionante"],
    ["Documenti","Libretto originale con bolli d'epoca"],
    ["Luogo","Bussolengo (VR)"],
    ["Consegna","Consegna a cura del venditore entro 150 km"]
  ],
  punti:[
    "Ristrutturazione completa",
    "Tutti i pezzi originali",
    "Motore originale revisionato, funzionante",
    "Portapacchi originale",
    "Portaruota originale con ruota di scorta",
    "Libretto originale con i bolli d'epoca pagati",
    "Portabollo d'epoca con santino di Papa Giovanni XXIII",
    "Sella biposto blu, adesivo d'epoca Tamoil sullo scudo"
  ],
  // foto: [file in img/, didascalia, true se verticale]. La prima è la copertina.
  foto:[
    ["lato-sinistro.jpg","Lambretta J50, lato sinistro"],
    ["tre-quarti.jpg","Lambretta J50, tre quarti posteriore"],
    ["frontale.jpg","Lambretta J50, frontale",true],
    ["lato-destro.jpg","Lambretta J50, lato destro"],
    ["posteriore.jpg","Lambretta J50, posteriore e sella"],
    ["bollo.jpg","Lambretta J50, portaruota originale e portabollo con santino di Papa Giovanni XXIII"]
  ]
},
{
  id:"morini-corsarino",
  nav:"Corsarino",
  titolo:"Moto Morini Corsarino", corsivo:"del 1968",
  eyebrow:"In vetrina · Moto Morini · 50 cc 4 tempi",
  lead:"Motore 4 tempi a benzina (niente miscela), cambio a 4 marce a pedale. Restaurata, già immatricolata.",
  prezzo:"€ 2.100", prezzoNota:"Bussolengo (VR)",
  stato:"disponibile",
  dettagli:[
    ["Modello","Moto Morini Corsarino 50"],
    ["Anno","1968"],
    ["Cilindrata","50 cc"],
    ["Motore","4 tempi, benzina (no miscela)"],
    ["Cambio","4 marce a pedale"],
    ["Colore","Rosso, serbatoio con pannelli bianchi"],
    ["Stato","Restaurato, già immatricolato"],
    ["Luogo","Bussolengo (VR)"]
  ],
  punti:[
    "Restauro completo",
    "Già immatricolata",
    "Motore 4 tempi: benzina, niente miscela",
    "Cambio a 4 marce a pedale",
    "Revisione a carico del venditore in caso di vendita",
    "Passaggio di proprietà a carico dell'acquirente"
  ],
  foto:[
    ["corsarino-lato.jpg","Corsarino, lato destro con scarico"],
    ["corsarino-posteriore.jpg","Corsarino, lato sinistro"],
    ["corsarino-frontale.jpg","Corsarino, tre quarti anteriore"]
  ]
}
];
