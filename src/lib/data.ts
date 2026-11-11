export const IMG = {
  arena:
    "https://images.pexels.com/photos/35635285/pexels-photo-35635285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  majella:
    "https://images.pexels.com/photos/38520877/pexels-photo-38520877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  azzurri:
    "https://images.pexels.com/photos/24644684/pexels-photo-24644684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  labro:
    "https://images.pexels.com/photos/35655977/pexels-photo-35655977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  filiera: "/cestino-filiera-corta.jpg",
  tostatura:
    "https://images.pexels.com/photos/36129983/pexels-photo-36129983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  break: "/pausa-caffe-area-break.jpg",
  sentiero:
    "https://images.pexels.com/photos/29078811/pexels-photo-29078811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

export const TICKER = [
  "EROGAZIONE #48291 · PRESIDIO ASCOLI-02 · SPEDIZIONE KM 0 AZZERATA · CO₂ EVITATA",
  "ATTESTATO WELFARE RILASCIATO · MATR. AGGREGATA · SHA 9f3c…a41d",
  "CONSEGNA AGROALIMENTARE A KM 0 (L. 61/2022) · PRODUTTORE LOCALE → SEDE AZIENDALE",
  "FESTIVAL DELLE VALLI MARCHIGIANE · OBIETTIVO RASSEGNA 74% · BIGLIETTI DISPONIBILI",
  "RISCATTO BORSELLINO · 5 BIGLIETTI TEATRO · DIP. LOGISTICA",
  "DATASET CSRD ESRS E1 · PRECOMPILATO ORE 06:12",
  "FESTIVAL DEI BORGHI SIBILLINI · RETE 6 COMUNI PARTNER · ACCESSO VIP RISERVATO",
];

export type LiveKpi = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals: number;
  note: string;
};

export const LIVE_KPIS: LiveKpi[] = [
  { label: "Erogazioni tracciate", value: 486200, suffix: "", decimals: 0, note: "dal 01.01 · presidi OCS e Vending" },
  { label: "Km di trasporto evitati", value: 62400, suffix: "", decimals: 0, note: "prodotti a Km 0 su flotta Illiria" },
  { label: "CO₂ evitata", value: 17472, suffix: " kg", decimals: 0, note: "consegne dedicate azzerate" },
  { label: "Valore complessivo", value: 248900, prefix: "€ ", decimals: 0, note: "welfare, comunicazione e indotto" },
];

export type Benefit = {
  n: string;
  titolo: string;
  testo: string;
  perVoi: string;
  metrica: string;
  metricLabel: string;
};

export const BENEFITS: Benefit[] = [
  {
    n: "01",
    titolo: "Una sezione importante per il bilancio di sostenibilità",
    testo:
      "Il saldo delle erogazioni viene letto, inviato con un trigger alla web app e aggregato per presidio. La Dashboard Manager produce gli indicatori conformi agli standard di Reporting ESRS con le rispettive metriche di impatto ambientale - km evitati per la filiera corta - e sociale - valorizzazione delle comunità locali - predisposti per l'audit di sostenibilità e la rendicontazione.",
    perVoi: "Report ESG pronti in un clic · export PDF e CSV",
    metrica: "−92%",
    metricLabel: "ore-uomo sulla raccolta dati non finanziari",
  },
  {
    n: "02",
    titolo: "Welfare aziendale generato dal consumo che già fate",
    testo:
      "Il caffè che i vostri dipendenti bevono ogni mattina viene convertito in crediti di welfare culturale: biglietti agevolati per teatro, concerti, percorsi naturalistici e siti recuperati nei borghi. Il piano welfare si alimenta da un'abitudine esistente, senza una voce di budget aggiuntiva.",
    perVoi: "Budget welfare incrementale: € 0 · crediti non monetari",
    metrica: ">45%",
    metricLabel: "tasso di riscatto target entro 6 mesi",
  },
  {
    n: "03",
    titolo: "La pausa caffè diventa un rituale con un significato",
    testo:
      "Sull'app i vostri collaboratori vedono il bilancio personale di impatto, collezionano badge e certificati numerati, seguono le iniziative che stanno sostenendo. È gamification etica: non premia chi consuma di più, ma rende visibile il valore che il gruppo produce insieme.",
    perVoi: "Engagement misurabile · clima interno e retention",
    metrica: "3,4×",
    metricLabel: "frequenza di accesso all'app rispetto ai portali welfare tradizionali",
  },
  {
    n: "04",
    titolo: "Chilometri tolti dalla strada, non promesse",
    testo:
      "I prodotti agroalimentari a Km 0 (L. 61/2022) viaggiano a bordo della flotta Illiria già attiva per il rifornimento OCS e Vending. Nessun furgone aggiuntivo sulla strada: azzeriamo i chilometri delle consegne dedicate dei produttori locali, tagliando costi di trasporto ed emissioni climalteranti.",
    perVoi: "Riduzione Scope 3 tracciabile e pronta per il bilancio",
    metrica: "100%",
    metricLabel: "di percorrenza logistica dedicata evitata",
  },
  {
    n: "05",
    titolo: "Il vostro nome accanto alla rinascita dei borghi",
    testo:
      "Dalle Valli del Metauro ai Monti Sibillini, fino al Piceno e ai Monti Azzurri: sostenete rassegne e festival di Performing Art in reti di almeno 6 Comuni delle Aree Interne. La Startup fornisce kit di comunicazione, earned media sui quotidiani regionali e visibilità ufficiale.",
    perVoi: "Storytelling territoriale · earned media e rassegna stampa",
    metrica: "24",
    metricLabel: "Comuni delle Aree Interne marchigiane in rete",
  },
  {
    n: "06",
    titolo: "Adesione senza progetto IT e senza rischi sulla privacy",
    testo:
      "I distributori sono già connessi: l'attivazione è configurazione, non integrazione. L'app è una PWA installabile, l'accesso avviene con SSO aziendale e i consumi sono trattati solo in forma aggregata per matricola o reparto, secondo il perimetro GDPR che firmiamo con voi.",
    perVoi: "Nessun ticket al vostro reparto sistemi informativi",
    metrica: "2 ore",
    metricLabel: "impegno richiesto al vostro referente HR",
  },
];

export const LEDGER = {
  voi: [
    "Il consumo di caffè e presidi che già avete nella vostra sede",
    "Un referente HR o Facility (≈ 2 ore di configurazione iniziale)",
    "Le credenziali SSO per l'accesso dei collaboratori alla Web App",
    "La scelta dei festival e delle rassegne da sostenere",
    "La disponibilità a valorizzare le Best Practice aziendali",
  ],
  noi: [
    "Logistica combinata con paniere agroalimentare a Km 0 (L. 61/2022)",
    "Borsellino Aziendale e Web App con sistema di voto per il team",
    "Attestati digitali di partecipazione con hash e marcatura temporale",
    "Biglietteria omaggio Performing Art e convenzioni fornite dalla Startup",
    "Dataset precompilato GRI / CSRD e supporto all'audit di sostenibilità",
    "Kit di comunicazione: totem area break, locandine e rassegna stampa",
  ],
};

export const FILIERA = [
  {
    n: "I",
    titolo: "Paniere Prodotti Agroalimentari a Km 0",
    testo: "Specialità locali selezionate entro 70 km dalla vostra sede (L. 61/2022), integrate nei percorsi ordinari di fornitura Illiria senza spese di trasporto.",
    sforzo: "Sforzo cliente: nessuno",
    tag: "Km 0 (L. 61/2022) · Raggio 70 km",
  },
  {
    n: "II",
    titolo: "Flotta combinata, percorsi a impatto zero",
    testo: "I prodotti tipici viaggiano sul mezzo di rifornimento OCS/Vending già attivo: si azzerano le consegne dedicate su gomma e le emissioni dei produttori.",
    sforzo: "Sforzo cliente: conferma sedi",
    tag: "100% km dedicati evitati",
  },
  {
    n: "III",
    titolo: "Consumi e ricarica del Borsellino",
    testo: "I consumi di sede confluiscono nel Borsellino Aziendale sulla Web App: ogni 100 erogazioni maturano 1 Punto Impatto e ogni 1.000 generano 5 Biglietti.",
    sforzo: "Sforzo cliente: spazio area break",
    tag: "Dato aggregato e privacy safe",
  },
  {
    n: "IV",
    titolo: "Biglietti Omaggio e Welfare Territoriale",
    testo: "La Startup eroga ai dipendenti biglietti omaggio per spettacoli dal vivo e convenzioni di soggiorno nei borghi delle Marche finanziati dai consumi.",
    sforzo: "Sforzo cliente: comunicazione interna",
    tag: "Performing art nelle Marche",
  },
  {
    n: "V",
    titolo: "Reporting d'Impatto e Visibilità Istituzionale",
    testo: "Dati primari pronti per il bilancio ESG forniti dalla Startup, attestati nominali per il team e visibilità come Main Partner sui media regionali.",
    sforzo: "Sforzo cliente: download dossier",
    tag: "Audit ready · GRI / CSRD",
  },
];

export type Project = {
  codice: string;
  titolo: string;
  sottotitolo: string;
  luogo: string;
  coord: string;
  categoria: string;
  stato: string;
  progresso: number;
  caffe: string;
  img: string;
  anno: string;
};

export const PROJECTS: Project[] = [
  {
    codice: "ICI-RPA-01",
    titolo: "Rassegna Performing Art delle Valli Marchigiane",
    sottotitolo: "Spettacoli dal vivo, teatro contemporaneo e concerti diffusi in 6 Comuni: Urbino, Fossombrone, Cagli, Acqualagna, Urbania, Pergola",
    luogo: "Valle del Metauro e Montefeltro · Marche",
    coord: "43.7262° N / 12.6366° E",
    categoria: "Rassegna Teatrale Itinerante",
    stato: "In corso",
    progresso: 74,
    caffe: "182.400 caffè",
    img: IMG.arena,
    anno: "2025—2026",
  },
  {
    codice: "ICI-FNS-02",
    titolo: "Festival Itinerante dei Borghi Sibillini",
    sottotitolo: "Arti sceniche, musica d'alta quota e narrazione in 6 Comuni montani: Amandola, Visso, Sarnano, Castelsantangelo, Comunanza, Montefortino",
    luogo: "Parco Nazionale dei Monti Sibillini · Marche",
    coord: "42.8714° N / 13.2536° E",
    categoria: "Festival delle Arti dal Vivo",
    stato: "Attivo",
    progresso: 61,
    caffe: "96.750 caffè",
    img: IMG.majella,
    anno: "2026",
  },
  {
    codice: "ICI-MAZ-03",
    titolo: "Circuito Spettacoli Monti Azzurri",
    sottotitolo: "Residenze performative e teatro di piazza in 6 Comuni: San Ginesio, Caldarola, Belforte, Cessapalombo, Camporotondo, Ripe San Ginesio",
    luogo: "Unione Montana Monti Azzurri · Marche",
    coord: "43.1342° N / 13.2407° E",
    categoria: "Circuito Teatrale Diffuso",
    stato: "Attivo",
    progresso: 43,
    caffe: "74.120 caffè",
    img: IMG.azzurri,
    anno: "2026",
  },
  {
    codice: "ICI-MDM-04",
    titolo: "Montalto delle Marche — Festival della Scena Picena",
    sottotitolo: "Drammaturgia comunitaria e rassegna diffusa in 6 Comuni del Piceno: Montalto delle Marche, Offida, Castignano, Ripatransone, Cossignano, Montefiore",
    luogo: "Entroterra Piceno · Marche",
    coord: "42.9886° N / 13.6089° E",
    categoria: "Festival delle Arti Sceniche",
    stato: "Avviato",
    progresso: 28,
    caffe: "41.980 caffè",
    img: IMG.labro,
    anno: "2026—2027",
  },
];

export const DOCUMENTS = [
  {
    codice: "DOC-01",
    titolo: "Report d'Impatto Annuale",
    formato: "PDF · 4,2 MB",
    standard: "GRI 305-1 / 305-4 · doppia materialità",
    sha: "a3f91c07d5b8e24f6c119a70bd4e5f2817c3a96d04ef2b71c5d8a3f60192be44",
    scaricabile: false,
  },
  {
    codice: "DOC-02",
    titolo: "Registro Prodotti a Km 0 e Sinergia Flotta",
    formato: "PDF · 8,7 MB",
    standard: "L. 61/2022 · mappatura consegne e km evitati",
    sha: "7c21ab9504e6d1f83b0c97ae45d208f61b3ce7a905d14f8b2c6e0a93f71d4820",
    scaricabile: false,
  },
  {
    codice: "DOC-03",
    titolo: "Dataset ESG del vostro presidio",
    formato: "CSV · generato ora",
    standard: "CSRD ESRS E1 · esportazione per audit",
    sha: "generato dalla simulazione corrente",
    scaricabile: true,
  },
  {
    codice: "DOC-04",
    titolo: "Attestato di adesione e perimetro privacy",
    formato: "PDF + SVG · 1,1 MB",
    standard: "GDPR art. 6 · dati aggregati per reparto",
    sha: "e05d8b3c17fa2964c0b8e5d317af9604c2b8d15ea03f97c64b1d28e50a73fc91",
    scaricabile: false,
  },
];

export const ROADMAP = [
  {
    fase: "Fase 1",
    titolo: "Adesione e censimento presidi",
    mesi: "Mese 1—2",
    cliente: "Firma del patto di valore condiviso e anagrafica dei presidi OCS / Vending.",
    noi: "Configurazione Borsellino, mappa agroalimentare Km 0, kit di lancio interno.",
    impegno: "2 ore",
    stato: "attivo",
  },
  {
    fase: "Fase 2",
    titolo: "Consumi e paniere a Km 0",
    mesi: "Mese 3—4",
    cliente: "Attivazione SSO per i dipendenti e abilitazione ordini combinati.",
    noi: "Connessione dati consumi, rilascio Web App, primi attestati con hash.",
    impegno: "1 giornata",
    stato: "attivo",
  },
  {
    fase: "Fase 3",
    titolo: "Ticketing rassegne e convenzioni",
    mesi: "Mese 5",
    cliente: "Scelta delle rassegne territoriali e voto del team sulle iniziative.",
    noi: "Erogazione biglietti omaggio da parte della Startup e convenzioni borghi.",
    impegno: "2 ore",
    stato: "programma",
  },
  {
    fase: "Fase 4",
    titolo: "Dossier d'impatto e Best Practice",
    mesi: "Mese 6",
    cliente: "Download del dossier ESG per i revisori e condivisione comunicati stampa.",
    noi: "Dataset attestabile, supporto in sede e comunicazione Best Practice sui media.",
    impegno: "5 ore",
    stato: "programma",
  },
];

export const FAQ = [
  {
    q: "Quanto costa attivare Illiria Coffee Impact?",
    a: "Nessun costo o canone aggiuntivo. La fornitura dei prodotti agroalimentari a Km 0, l'accesso al Borsellino Aziendale, i biglietti omaggio erogati dalla Startup e il dataset per la rendicontazione ESG sono integrati nella partnership di fornitura OCS e Vending.",
  },
  {
    q: "È necessario essere già clienti di Gruppo Illiria per partecipare?",
    a: "No, il programma è aperto a ogni tipo di impresa che desidera valorizzare le Aree Interne marchigiane e rafforzare il proprio profilo di sostenibilità, sia per soluzioni OCS (uffici e studi) sia per distributori Vending. L'iniziativa accoglie clienti attuali, nuove realtà aziendali ed ex clienti (campagna Win-Back) che intendono riattivare o qualificare la fornitura su basi etiche. Verrà inviata una presentazione con invito prioritario a tutte le imprese situate nei bacini degli spettacoli, in particolare nelle province di Macerata, Fermo e Ascoli Piceno.",
  },
  {
    q: "Come funziona la filiera dei produttori a Km 0 e perché è a impatto logistico zero?",
    a: "I prodotti agroalimentari a filiera corta (L. 61/2022, entro 70 km) vengono valorizzati senza alcun ricarico o margine aggiuntivo da parte di Gruppo Illiria né dei promotori: l'intero valore sostiene direttamente i coltivatori e i trasformatori del territorio marchigiano. I cestini vengono recapitati in azienda sfruttando esclusivamente i tragitti ordinari della flotta Illiria già programmati per i rifornimenti di caffè. In questo modo le persone ricevono le eccellenze del territorio senza fare una mossa dall'azienda, azzerando le emissioni di corrieri dedicati ed evitando decine di chilometri di trasporto su gomma per ogni consegna.",
  },
  {
    q: "Come funzionano i biglietti omaggio e gli incentivi per i collaboratori?",
    a: "Ogni 1.000 erogazioni maturate nel Borsellino, la Startup mette a disposizione 2 Biglietti Invito VIP e 3 Biglietti normali per le rassegne e i festival di Performing Art nelle Marche, con proporzione analoga per volumi crescenti (1.500, 2.000, 3.000+ erogazioni). A questi si affiancano convenzioni ricettive nei 24 Comuni partner e la possibilità di partecipare agli speciali Aperitivi-Cena pre-spettacolo insieme agli artisti, trasformando la pausa caffè in autentico welfare culturale condiviso.",
  },
  {
    q: "Perché il progetto sostiene le Performing Art e i Comuni delle Aree Interne?",
    a: "Le Aree Interne marchigiane custodiscono un patrimonio straordinario di borghi, teatri storici e comunità che raramente beneficiano dei flussi promozionali e turistici concentrati lungo la costa. Sostenere le Performing Art (teatro contemporaneo, circo d'innovazione, musica dal vivo) significa unire la convivialità e il divertimento alla rigenerazione territoriale: portiamo pubblico, visibilità e indotto economico diretto nell'entroterra montano e collinare.",
  },
  {
    q: "Perché un imprenditore dovrebbe dedicare tempo ad una Rassegna locale?",
    a: "L'imprenditore è importante che prenda posizione nelle politiche che riguardano lo sviluppo delle aree interne. Per questo prevediamo la sua partecipazione e un particolare riconoscimento istituzionale nei luoghi della cultura. Non è tanto la presenza del logo o le menzioni d'onore nel colophon ufficiale dei festival che ogni partecipante avrà, nonché la consegna sul palco dell'Attestato Istituzionale di Impatto Territoriale durante le serate di gala. I posti d'onore riservati sono per chi vuole essere relatore al Convegno Annuale: dal dibattito sullo sviluppo socio-economico delle Aree Interne nascono politiche di condivisione del valore come questa, spesso più efficaci rispetto a molte altre forme di sostegno.",
  },
  {
    q: "Come vengono trattati i dati di consumo dei nostri dipendenti?",
    a: "I consumi sono aggregati a livello aziendale o di singolo presidio. Nessun dato individuale viene monitorato, profilato né ceduto: il sistema rileva unicamente il saldo consumi complessivo dell'impresa per assegnare punti impatto e biglietti, operando nel pieno rispetto del GDPR e della tutela della riservatezza dei lavoratori.",
  },
  {
    q: "Possiamo scegliere quali rassegne sostenere nelle Marche?",
    a: "Sì. Tramite l'App Impresa ad accesso unico, i collaboratori possono consultare il cartellone dei 4 circuiti regionali attivi e orientare i Punti Impatto maturati a favore dei festival e dei borghi del proprio comprensorio o verso cui l'azienda nutre un legame speciale.",
  },
  {
    q: "Quale supporto riceve l'azienda per la comunicazione e il reporting ESG?",
    a: "La Startup fornisce un supporto editoriale e strategico continuativo (valore convenzionale di 1.000 €, con valore effettivo di mercato ampiamente superiore): produzione di contenuti dedicati per ogni canale aziendale, media kit per comunicati stampa, redazione delle Best Practice aziendali, attestati digitali con hash crittografico asseverabile e supporto alla redazione del reporting d'impatto CSRD/GRI.",
  },
];

export const CASE_STUDY = {
  citazione:
    "Cercavamo un'iniziativa che andasse oltre la solita fornitura e creasse valore tangibile sia per il nostro bilancio di sostenibilità sia per le nostre persone. Con Illiria Coffee Impact e la Startup abbiamo unito prodotti agroalimentari a Km 0 a costo di trasporto zero con biglietti omaggio per il teatro nei borghi marchigiani: il 58% dei colleghi ha già partecipato alle rassegne.",
  nome: "Elena D.",
  ruolo: "Head of People & Sustainability",
  azienda: "Azienda del Piceno · 240 dipendenti · Presidi OCS & Vending",
  stats: [
    { v: "58%", l: "partecipazione del team agli eventi" },
    { v: "4.800", l: "km di trasporto dedicati evitati" },
    { v: "100%", l: "prodotti locali entro 70 km" },
    { v: "A++", l: "Social Impact Index" },
  ],
};

/* ------- modello di calcolo del nuovo simulatore d'impatto ------- */
export const MODEL = {
  giorniLavorativi: 220,
  kgCo2PerKm: 0.28,
  consegneKm0Anno: 24,
  valoreBigliettoEuro: 15,
  valoreServiziStartupEuro: 1000,
  moltiplicatoreIndottoLocale: 2.4,
};

export type ImpattoInput = {
  presidiOcs: number;
  presidiVending: number;
  dipendenti: number;
  penetrazionePct: number;
  caffeGiorno: number;
  distanzaKm0: number;
  clientiAttuali?: number;
  clientiNuovi?: number;
  clientiWinBack?: number;
};

export function calcolaImpattoAvanzato({
  presidiOcs,
  presidiVending,
  dipendenti,
  penetrazionePct,
  caffeGiorno,
  distanzaKm0,
  clientiAttuali = 50,
  clientiNuovi = 30,
  clientiWinBack = 70,
}: ImpattoInput) {
  const consumatoriAttiviSito = Math.round((dipendenti * penetrazionePct) / 100);
  const erogazioniSito = Math.round(consumatoriAttiviSito * caffeGiorno * MODEL.giorniLavorativi);

  const presidiAttiviSito = presidiOcs + presidiVending;
  const kmPerViaggioAr = distanzaKm0 * 2;
  const consegneTotaliSito = presidiAttiviSito > 0 ? MODEL.consegneKm0Anno : 0;
  const kmEvitatiSito = consegneTotaliSito * kmPerViaggioAr;
  const co2EvitataSito = Math.round(kmEvitatiSito * MODEL.kgCo2PerKm);

  const totaleImpreseTarget = Math.max(1, clientiAttuali + clientiNuovi + clientiWinBack);
  const moltiplicatoreImprese = totaleImpreseTarget;

  // Calcolo aggregato sull'intero portafoglio imprese target
  const erogazioni = erogazioniSito * moltiplicatoreImprese;
  const consumatoriAttivi = consumatoriAttiviSito * moltiplicatoreImprese;
  const kmEvitati = kmEvitatiSito * moltiplicatoreImprese;
  const co2Evitata = co2EvitataSito * moltiplicatoreImprese;

  const biglietti = Math.floor(erogazioni / 1000) * 5;
  const puntiBorsellino = Math.floor(erogazioni / 100);

  const valoreBiglietti = biglietti * MODEL.valoreBigliettoEuro;
  const valoreServizi = erogazioni > 0 ? MODEL.valoreServiziStartupEuro * moltiplicatoreImprese : 0;
  const indottoLocale = Math.round(valoreBiglietti * MODEL.moltiplicatoreIndottoLocale);
  const valoreTotale = valoreBiglietti + valoreServizi + indottoLocale;

  let livelloTier = "Partecipante";
  if (puntiBorsellino >= 1000) livelloTier = "Main Partner Aree Interne";
  else if (puntiBorsellino >= 500) livelloTier = "Best Practice Territoriale";
  else if (puntiBorsellino >= 250) livelloTier = "Impatto Condiviso";
  else if (puntiBorsellino >= 100) livelloTier = "Territorio Attivo";

  const punteggio =
    Math.min(35, (biglietti / Math.max(consumatoriAttivi, 1)) * 12) +
    Math.min(30, (co2Evitata / Math.max(consumatoriAttivi, 1)) * 3) +
    Math.min(20, Math.min(20, (totaleImpreseTarget / 150) * 20)) +
    Math.min(15, presidiAttiviSito >= 2 ? 15 : presidiAttiviSito * 7.5);
  const indice = Math.min(100, Math.max(10, Math.round(punteggio)));
  const rating =
    indice >= 82 ? "A++" : indice >= 68 ? "A+" : indice >= 54 ? "A" : indice >= 40 ? "BBB+" : "BBB";

  return {
    erogazioni,
    erogazioniSito,
    consumatoriAttivi,
    consumatoriAttiviSito,
    kmEvitati,
    co2Evitata,
    biglietti,
    puntiBorsellino,
    valoreBiglietti,
    valoreServizi,
    indottoLocale,
    valoreTotale,
    livelloTier,
    indice,
    rating,
    kmPerViaggioAr,
    totaleImpreseTarget,
    perConsumatore: consumatoriAttivi > 0 ? Math.round(valoreTotale / consumatoriAttivi) : 0,
  };
}

/* Retrocompatibilità per chiamate sintetiche */
export function calcolaImpatto(dipendenti: number, caffeGiorno: number, presidi: number) {
  const res = calcolaImpattoAvanzato({
    presidiOcs: presidi,
    presidiVending: 0,
    dipendenti,
    penetrazionePct: 30,
    caffeGiorno,
    distanzaKm0: 45,
  });
  return {
    erogazioni: res.erogazioni,
    cicli: MODEL.consegneKm0Anno,
    km: res.kmEvitati,
    co2: res.co2Evitata,
    welfare: res.valoreTotale,
    crediti: res.biglietti,
    alberi: Math.round(res.co2Evitata / 20),
    territorio: res.indottoLocale,
    indice: res.indice,
    rating: res.rating,
    perDipendente: res.perConsumatore,
  };
}

export function fmt(n: number): string {
  return n.toLocaleString("it-IT", { maximumFractionDigits: 0 });
}
