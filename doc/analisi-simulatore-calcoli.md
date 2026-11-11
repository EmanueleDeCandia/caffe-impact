# Analisi Critica e Riprogettazione del Modello di Calcolo del Simulatore
**Progetto:** Illiria Coffee Impact  
**Data:** 10 Novembre 2026  
**File di Riferimento:** [`src/lib/data.ts`](file:///c:/Users/user/Documents/illiria-coffee-impact-landing-page-glm-cause-related-marketing-con-biglietti/src/lib/data.ts) e [`src/sections/Simulator.tsx`](file:///c:/Users/user/Documents/illiria-coffee-impact-landing-page-glm-cause-related-marketing-con-biglietti/src/sections/Simulator.tsx)  
**Stato:** Analisi e Schema Matematico Proposto (Nessuna modifica al codice del sito)

---

## 1. Audit del Codice Attuale: Come Calcola Oggi il Simulatore

Nel file `src/lib/data.ts` (righe 353–398):

```typescript
export const MODEL = {
  giorniLavorativi: 220,
  kmPerCiclo: 50,
  cicliPerPresidioAnno: 48,
  kgCo2PerKm: 0.28,
  kgCo2PerErogazione: 0.011,      // Errore concettuale di fondo
  euroWelfarePerErogazione: 0.02,
  erogazioniPerCredito: 12,        // Divisore arbitrario privo di significato tangibile
  kgCo2PerAlbero: 20,
  quotaTerritorio: 0.38,
};

export function calcolaImpatto(dipendenti, caffeGiorno, presidi) {
  const erogazioni = Math.round(dipendenti * caffeGiorno * MODEL.giorniLavorativi);
  const cicli = presidi * MODEL.cicliPerPresidioAnno;
  const km = cicli * MODEL.kmPerCiclo;
  const co2 = km * MODEL.kgCo2PerKm + erogazioni * MODEL.kgCo2PerErogazione;
  const welfare = erogazioni * MODEL.euroWelfarePerErogazione;
  const crediti = Math.round(erogazioni / MODEL.erogazioniPerCredito);
  const alberi = co2 / MODEL.kgCo2PerAlbero;
  const territorio = welfare * MODEL.quotaTerritorio;
  ...
}
```

---

## 2. Risposte Puntuali alle Domande sulle Ipotesi di Modello

### 1. 220 giorni lavorativi/anno
- **Valutazione:** **Corretto.**
- **Motivazione:** Lo standard contabile e contrattuale per il lavoro dipendente in Italia è pari a $52\text{ settimane} \times 5\text{ giorni} = 260\text{ giorni}$ meno ferie ($20\text{--}25\text{ gg}$) e festività infrasettimanali ($10\text{--}12\text{ gg}$), che determina una presenza effettiva in ufficio tra 215 e 225 giorni annui.

---

### 2. −50 km per ciclo · 48 cicli/presidio (Vending vs OCS)
- **Valutazione:** **È corretto per i grandi distributori automatici (Vending), ma COMPLETAMENTE SFALSATO per l'OCS.**
- **Perché è sfalsato per l'OCS:**
  - I distributori automatici a moneta richiedono frequenza settimanale o quindicinale (~48 visite l'anno per caricare caffè in grani, latte, bicchieri, palette e svuotare i fondi).
  - L'**OCS** (macchine a cialde/capsule per uffici) non riceve 48 visite l'anno. Gli uffici ordinano kit da 150–500 capsule ogni 1–3 mesi (da 4 a 12 consegne all'anno), oppure le consegne avvengono a cadenza programmata.
  - Inoltre, la formula attuale `cicli = presidi * 48` disaccoppia completamente i chilometri dal numero di dipendenti o dai consumi effettivi: se un'azienda ha 20 dipendenti su 2 presidi calcola $2 \times 48 = 96$ cicli; se ha 500 dipendenti su 2 presidi calcola sempre 96 cicli.
- **Risoluzione richiesta:**
  - Separare la logica logistica tra **Distributori Automatici (Vending)** e **OCS**.
  - Permettere di impostare **"0 cicli aggiuntivi"** per l'OCS, poiché la consegna delle cialde e dei prodotti agroalimentari a Km 0 sfrutta tragitti e giri già operativi.

---

### 3. $0.28\text{ kg CO}_2/\text{km} + 0.011\text{ kg}/\text{erogazione}$: è corretto?
- **$0.28\text{ kg CO}_2/\text{km}$:** **Corretto.** Corrisponde a $280\text{ g CO}_2/\text{km}$, fattore medio ufficiale (ISPRA/DEFRA) per veicoli commerciali leggeri (furgoni diesel/ibridi fino a 3,5 t a medio-pieno carico).
- **$+0.011\text{ kg CO}_2/\text{erogazione}$:** **NON È CORRETTO.**
  - Questo valore era un residuo della vecchia tesi (errata) della "tostatura a km 0", ipotizzando che tostare il caffè vicino al cliente risparmiasse 11 grammi di $\text{CO}_2$ a tazzina.
  - Nella nuova logica strategica, la $\text{CO}_2$ evitata deriva **esclusivamente dai viaggi azzerati per i prodotti agroalimentari a Km 0**: se il produttore locale consegna tramite la flotta Illiria già in transito anziché fare un viaggio dedicato in furgone, i chilometri tolti dalla strada moltiplicati per il fattore emissivo generano il reale risparmio di $\text{CO}_2$.

---

### 4. € 0.02 di welfare per erogazione: è calcolato correttamente?
- **Valutazione:** **Sì, il calcolo è perfetto.**
- Formula: $\text{Welfare Annuo} = \text{Erogazioni} \times 0{,}02\ \text{€}$.
- **Sostenibilità economica:** 2 centesimi di euro per singola consumazione corrispondono a circa il $5\text{--}8\%$ del prezzo della capsula/cialda OCS, una quota di Cause-Related Marketing perfettamente sostenibile per Illiria e la Startup e altamente remunerativa in termini di fidelizzazione e differenziazione commerciale.

---

### 5. 1 credito ogni 12 erogazioni: cosa intende?
- **Valutazione:** **Nel codice attuale è solo un numero astratto privo di senso per l'utente.**
  - $12\text{ erogazioni} \times 0{,}02\ \text{€} = \mathbf{0{,}24\ \text{€}}$.
  - Nessun dipendente sa che farsene di "un credito" che vale 24 centesimi di euro; non consente di acquistare un biglietto né rappresenta un premio tangibile.
- **Risoluzione:** Eliminare il concetto astratto di "credito da 12 caffè" e sostituirlo con la conversione reale in **Biglietti Omaggio** ed **Esperienze di Welfare Culturale** gestite dalla Startup.

---

## 3. La Nuova Logica di Conversione Interna (Sotto il Cofano)

> **Obiettivo espresso dall'utente:**  
> $$1.000\text{ consumazioni OCS} \longrightarrow X\text{ dipendenti/anno} \longrightarrow N\text{ Biglietti Omaggio} + \text{Servizi Welfare Startup}$$

### Parametrizzazione Economica per la Startup e Illiria:
1. **Ogni 1.000 consumazioni OCS:**
   - Valore economico CRM generato: $1.000 \times 0{,}02\ \text{€} = \mathbf{20{,}00\ \text{€}}$.
2. **Costo convenzionato di 1 Biglietto Omaggio per la Performing Art nelle Marche:**
   - Grazie ad accordi diretti di partenariato della Startup con le rassegne e i festival delle Aree Interne (6 Comuni per rete), il costo di convenzione unitario di un biglietto omaggio o quota d'ingresso riservata è fissato a forfait (es. **10,00 €** o **12,00 €** a fronte di un valore facciale nominale di 18–25 €).
3. **Fattore di Conversione Operativo:**
   - **1 Biglietto Omaggio ogni 500–600 consumazioni** (pari a 10–12 € di monte-valore).
   - Di conseguenza:  
     $$\mathbf{1.000\ \text{consumazioni OCS}} = \mathbf{1{,}6\text{--}2\ \text{Biglietti Omaggio Spettacolo}} + \text{Convenzioni Pernottamento/Esperienze}.$$
4. **Esempio su una Rete Aziendale Tipica (50 Dipendenti):**
   - Consumo: 50 dipendenti $\times$ 2 caffè/giorno $\times$ 220 giorni = **22.000 consumazioni/anno**.
   - Monte-valore welfare CRM generato: $22.000 \times 0{,}02\ \text{€} = \mathbf{440{,}00\ \text{€/anno}}$.
   - **Risultato concreto erogato dalla Startup:**
     - **Circa 35–44 Biglietti Omaggio nominativi all'anno** distribuiti tra i dipendenti per gli spettacoli nei borghi delle Marche;
     - Catalogo convenzioni per tutti i dipendenti per alloggi e cene nei 24 Comuni delle Aree Interne marchigiane.

---

## 4. Architettura Tecnica del Nuovo Simulatore

### Parametri di Input:
1. **Dipendenti** (slider: 20 – 3000 persone).
2. **Caffè/giorno pro capite** (slider: 1 – 4 caffè).
3. **Tipologia Servizio:** *OCS (Macchine ufficio)* oppure *Distributori Automatici (Vending)* — con cicli logistici differenziati (o pari a 0 per OCS).

### Indicatori di Output (Mostrati al Cliente):
1. **Consumi & Erogazioni annue tracciate**
2. **Biglietti Omaggio Performing Art generati** (il dato tangibile di rewarding)
3. **Valore complessivo del Welfare Territoriale** (€)
4. **Km e $\text{CO}_2$ risparmiati** sui prodotti agroalimentari a Km 0
5. **Social Impact Index (A++ / A+ / A)** per il fascicolo di sostenibilità

