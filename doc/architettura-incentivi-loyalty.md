# Architettura Strategica degli Incentivi: Loyalty & Cause-Related Marketing Evoluto
**Progetto:** Illiria Coffee Impact  
**Data:** 10 Novembre 2026  
**Stato:** Documento Strategico e Tecnico di Riprogettazione (Codice sorgente del sito invariato)

---

## 1. Il Nodo Centrale: Perché il Semplice "Regalo dei Biglietti" Non Basta

In un programma di **Cause-Related Marketing B2B2C** come quello di Illiria con la Startup, la classica regalia di biglietti teatrali manifesta subito due forti limiti se non integrata:

1. **Il Disallineamento di Agenzia (Chi Decide/Paga vs Chi Consuma):**
   - **OCS (Uffici):** È l'azienda (titolare, HR, facility manager) che sceglie il fornitore, firma il contratto e paga le fatture delle capsule/cialde e dei prodotti agroalimentari a Km 0. I dipendenti consumano.
   - **Distributori Automatici (Vending):** L'azienda mette a disposizione lo spazio aziendale e la corrente elettrica; i dipendenti pagano la singola consumazione con chiavetta o contanti.
   - *Conclusione:* L'incentivo deve premiare in modo prioritario e tangibile **l'Impresa Cliente**, fornendole leve economiche (risparmio/ammortamento) e di posizionamento/reputazione, altrimenti l'acquirente non ha motivo di preferire Illiria.

2. **L'Asimmetria di Interesse dei Dipendenti:**
   - I biglietti per spettacoli di performing art nei borghi delle Aree Interne (Marche) attraggono fortemente una quota di dipendenti amanti della cultura e del teatro, ma lasciano fredda un'altra parte del personale.
   - Per coinvolgere tutti serve combinare:
     - **Biglietti Omaggio** (esperienziali, per chi li desidera);
     - **Convenzioni e benefit ricettivi/gastronomici** (soggiorni, cene, tempo libero nei borghi);
     - **Coinvolgimento etico/partecipativo (Governance dei Punti):** poter decidere e votare a quale iniziativa territoriale destinare i fondi generati dall'azienda.

---

## 2. Il Loyalty Framework a 4 Dimensioni

Un programma di Loyalty B2B/B2C che regge e crea forte fidelizzazione deve attivare 4 leve contemporaneamente:

### 1. Leva Economica (Per l'Impresa)
- **Credito di Riacquisto / Sconti Fornitura:** Una quota dei consumi accumulati nel Borsellino si traduce in agevolazioni concrete sul riordino del paniere di prodotti tipici a Km 0 o su canoni/accessori OCS. L'impresa vede che bere caffè con Illiria riduce le spese vive aziendali.

### 2. Leva di Status & Comunicazione (Per l'Impresa e per l'HR)
- **Certificati di Impatto Asseverati:** Documenti nominali con hash e marcatura temporale che attestano l'impatto ambientale (prodotti a Km 0) e sociale (Aree Interne).
- **Amplificazione Social & Relazioni Pubbliche:** La Startup rilancia pubblicamente l'azienda sui propri canali e nei comunicati stampa delle rassegne culturali; per le fasce alte di consumo, l'azienda viene inserita tra i Main Partner del festival (visibilità B2B sul territorio).

### 3. Leva Etica e Governance Partecipata (Per i Dipendenti)
- I dipendenti non sono spettatori passivi: accedendo alla Web App aziendale vedono i **Punti Impatto** maturati dal gruppo e possono **esprimere il proprio voto** per decidere quale festival itinerante (tra i 4 circuiti marchigiani da 6 Comuni) finanziare. Più l'azienda consuma, più il peso del voto del team cresce.

### 4. Leva Esperienziale & Territoriale (Startup $\rightarrow$ Dipendenti)
- **Regola fissa: Ogni 1.000 consumazioni = 5 Biglietti Omaggio** messi a disposizione dalla Startup per spettacoli dal vivo, teatro e concerti nei borghi delle Aree Interne.
- **Convenzioni diffuse:** Pacchetto sconti per pernottamenti, agriturismi e botteghe tipiche nei 24 Comuni delle Aree Interne marchigiane per tutti i dipendenti dell'azienda.
- **Pacchetto Speciale:** Vedi le 4 Strategie di engagement indicate nella sottosezione **5. Logica Incentivante**.
---

## 3. Parametrizzazione Distributori (Vending) vs OCS e la Funzione dello "Zero"

> [!IMPORTANT]
> **Chiarimento sul Ruolo dello "Zero":**  
> Lo zero nel simulatore non significa "viaggi aggiuntivi zero" (quello è un principio sempre vero per entrambi, perché sia OCS sia i Distributori viaggiano sempre su tratte di rifornimento ordinarie).  
> **Lo zero serve per disaccoppiare la simulazione e consentire all'utente di valutare:**
> - Solo i Distributori Automatici (impostando OCS = 0);
> - Solo l'OCS per uffici (impostando Distributori = 0);
> - La combinazione ibrida di entrambi i canali.

### Confronto Strutturale:

| Caratteristica | OCS (Macchine Ufficio) | Grandi Distributori (Vending) |
| :--- | :--- | :--- |
| **Soggetto Acquirente** | L'Impresa (ordina le scatole di caffè e i prodotti a Km 0) | I singoli dipendenti (pagano con chiavetta/monete) |
| **Frequenza di Rifornimento** | Variabile: da un ordine ogni 3 settimane fino a un ordine ogni 2 mesi | Costante: visite calendarizzate fisse (settimanali/quindicinali, ~24–48 cicli/anno) |
| **Tasso di Penetrazione Consumi** | Basso-Medio ($30\%\text{--}50\%$ dei dipendenti d'ufficio) | Medio-Alto ($50\%\text{--}70\%$ dei lavoratori di stabilimento/sede) |
| **Accredito degli Incentivi** | **Nel Borsellino Aziendale** | **Nel Borsellino Aziendale** |

---

## 4. Meccanica di Calcolo del Borsellino e Livelli di Impatto (Tiering)

L'azienda gestisce un unico conto trasparente sulla Web App: il **Borsellino Aziendale**.

### La Regola Base:
$$\mathbf{1.000\ \text{Erogazioni Totali}} \Longrightarrow \begin{cases} \mathbf{5\ \text{Biglietti Omaggio}}\ \text{(erogati dalla Startup)} \\ \mathbf{10\ \text{Punti Impatto}}\ \text{(1 Punto ogni 100 erogazioni)} \end{cases}$$

---

### Scala dei Livelli di Impatto (Tiering Gamificato)

| Soglia Punti | Livello Raggiunto | Vantaggi per l'Impresa (B2B) | Vantaggi per i Collaboratori (B2C) |
| :---: | :--- | :--- | :--- |
| **10 Punti**<br>*(1.000 caffè)* | **Livello Partecipante** | - **Certificato d'Impatto Livello 1** generato.<br>- Menziore di benvenuto sui canali della Startup. | - Assegnazione dei primi **5 Biglietti Omaggio**.<br>- Accesso alla Web App per consultare il cartellone. |
| **20 Punti**<br>*(2.000 caffè)* | **Livello Territorio Attivo** | - Sconto riservato sul riordino del paniere a Km 0.<br>- Kit di comunicazione interna per l'area break. | - **10 Biglietti Omaggio totali**.<br>- **Diritto di Voto Base:** scelta del festival marchigiano da sostenere. |
| **30 Punti**<br>*(3.000 caffè)* | **Livello Impatto Condiviso** | - **Certificato di Valorizzazione Locale** asseverato.<br>- Scheda dati precompilata per il fascicolo ESG dell'azienda. | - **15 Biglietti Omaggio totali**.<br>- **Voto Ponderato x1.5:** la preferenza del team vale di più nell'assegnazione fondi. |
| **50 Punti**<br>*(5.000 caffè)* | **Livello Best Practice** | - Comunicato stampa congiunto e pubblicazione della Best Practice aziendale sui media partner della Startup.<br>- Logo aziendale nel catalogo ufficiale degli eventi. | - **25 Biglietti Omaggio totali**.<br>- **Voto Ponderato x2** + Convenzioni pernottamento e ristorazione nei 24 Comuni partner. |
| **100 Punti**<br>*(10.000 caffè)* | **Main Partner Aree Interne** | - Targa d'impatto fisica per la sede aziendale.<br>- Invito del management a tavole rotonde con sindaci e operatori culturali. | - **50 Biglietti Omaggio totali**.<br>- Posti d'onore riservati e incontri esclusivi con gli artisti. |

---

## 5. **Logica Incentivante**

### 5.1 Il Modello Economico e i Dati Fattuali di Sostenibilità
Per comprendere la solidità del sistema premiante, occorre ribadire una distinzione netta tra i perimetri economici di Illiria e della Startup:
- **Illiria S.p.A.** gestisce la fornitura OCS/Vending e incassa circa 0,50 € a erogazione (500 € ogni 1.000 consumazioni). **Illiria non sostiene alcun onere finanziario per il piano premi e incentivi.**
- **La Startup** gestisce in piena autonomia, a proprio rischio e con propria marginalità, l'intero ecosistema di rewarding culturale, convenzioni territoriali ed eventi.
- **La Matrice dei Costi e dei Ricavi della Startup:**
  - *Costo industriale dei biglietti teatrali:* La Startup acquista dai festival/consorzi i biglietti a forfait concordato di **10 € cad.** (a fronte di un valore facciale al pubblico di 15–20 €).
  - *Costo pacchetto 5 Biglietti (2 VIP + 3 Standard):* 50 € ogni 1.000 erogazioni.
  - *La Macchina da Margine — Aperitivo-Cena nei Borghi:* Prezzo al pubblico di **25 € a persona**, con un costo vivo di produzione di circa 5 € e un **margine dell'80% (20 € di margine netto a coperto)**.
  - *Principio di sostenibilità:* I biglietti omaggio costituiscono il costo di acquisizione di ospiti qualificati ed alto-spendenti (imprenditori, manager, collaboratori e famiglie) che convertono naturalmente nell'Aperitivo-Cena pre-spettacolo e nei servizi turistici dei borghi, generando utile netto per la Startup e indotto per le comunità locali.

---

### 5.2 Le 4 Strategie Alternative di Attuazione

Tutte le 4 alternative sono modulari, perfettamente sostenibili e integrabili a seconda del profilo dell'impresa aderente e del festival di riferimento:

#### Alternativa A: "Il Protocollo del Posto Riservato al Banchetto" (Effetto Tavolo Aziendale)
- **Meccanica:** L'impresa riceve i suoi 5 titoli d'accesso (2 Biglietti Invito VIP + 3 Biglietti Standard). Ai 2 Biglietti VIP è abbinata la prelazione d'onore al pre-spettacolo: i posti a tavola con sindaci e artisti sono riservati e la cena è concordata alla tariffa convenzionata di 25 € cad. (non regalata).
- **Perché funziona:** Il biglietto VIP è un regalo di prestigio; la cena ha un prezzo popolare per un contesto esclusivo. Se i 2 VIP partecipano con accompagnatori o colleghi (es. 5 coperti = 125 € di incasso), la Startup genera 100 € di margine, coprendo i 50 € di biglietti e chiudendo con un attivo di cassa netto di +50 €.

#### Alternativa B: "Premio di Reparto & Team Offsite" (Micro-Eventi Aziendali)
- **Meccanica:** Pensata per evitare la dispersione di singoli biglietti e la lotteria interna. L'impresa cumula i pacchetti per organizzare un'uscita di gruppo del reparto o del team premiato. I biglietti teatrali sono offerti dal programma; la cena conviviale viene fatturata all'azienda (spesa di rappresentanza deducibile al 100%) a 25 € a persona.
- **Perché funziona:** Per 10 partecipanti (2 pacchetti da 1.000 erogazioni, costo biglietti Startup 100 €), la cena genera 250 € di incasso con 200 € di margine per la Startup (+100 € di utile netto). L'imprenditore ottiene un team building ad altissimo impatto sociale a budget minimo.

#### Alternativa C: "Diritto di Prelazione e Accoglienza Dedicata" (Status a Costo Industriale Zero)
- **Meccanica:** L'accento è posto sullo status e sui servizi di accoglienza che per il festival hanno costo zero ma enorme valore percepito: pass parcheggio riservato nel centro storico, accredito prioritario e un **Calice di Benvenuto DOC con degustazione di prodotti tipici marchigiani** nel chiostro (costo vivo per la Startup: 2-3 €).
- **Perché funziona:** La degustazione nel chiostro è adiacente ai tavoli dell'Aperitivo-Cena. Oltre il 60% degli invitati VIP si ferma per la cena completa a 25 €, compensando ampiamente i costi vivi e massimizzando la soddisfazione dell'ospite.

#### Alternativa D: "Corporate Sponsorship & Visibilità Istituzionale" (Leva B2B e Relazioni Istituzionali)
- **Meccanica:** Risponde al bisogno primario dell'imprenditore: visibilità pubblica, reputazione territoriale e accredito istituzionale con sindaci e associazioni di categoria delle Marche.
- **Perché funziona:** I 2 Biglietti VIP permettono all'imprenditore di presenziare come "Azienda Sostenitrice della Rassegna", sedendosi al tavolo delle autorità. La spesa della cena diventa un investimento di pubbliche relazioni a costo irrisorio, fidelizzando in modo blindato il contratto OCS/Vending.

---

### 5.3 Scala di Proporzionalità dei Premi e Crescita dello Status Istituzionale

La soglia di **1.000 erogazioni è puramente esemplificativa**: il modello è perfettamente scalare e proporzionale per scaglioni di 500 erogazioni.  
All'aumentare dei consumi, non aumentano solo i titoli d'accesso ma **cresce esponenzialmente la visibilità e il prestigio istituzionale dell'imprenditore e dell'azienda**:

| Erogazioni Annue | Biglietti VIP d'Onore | Biglietti Standard | Punti Borsellino | Benefici di Status, Sponsorizzazione e Relazioni Pubbliche |
| :---: | :---: | :---: | :---: | :--- |
| **1.000** | **2 VIP** | **3 Standard** | 10 pt | **Attestato di Partecipazione Livello 1**; prelazione accoglienza chiostro. |
| **1.500** | **3 VIP** | **4 Standard** | 15 pt | Menzione nei canali social della Startup e nel cartellone digitale. |
| **2.000** | **4 VIP** | **6 Standard** | 20 pt | **Tavolo Riservato Delegazione**; Diritto di Voto del team sul festival; inserimento del nome aziendale nel Colophon del programma di sala cartaceo. |
| **2.500** | **5 VIP** | **7 Standard** | 25 pt | Menzione d'onore come *"Azienda Amica del Borgo"*; pass parcheggio VIP garantito per 2 vetture aziendali. |
| **3.000** | **6 VIP** | **9 Standard** | 30 pt | **Certificato di Valorizzazione Locale con consegna ufficiale** sul palco durante la serata inaugurale della rassegna. |
| **3.500** | **7 VIP** | **10 Standard** | 35 pt | Invito al tavolo istituzionale con il Sindaco del Comune ospitante e il Direttore Artistico per 2 persone. |
| **4.000** | **8 VIP** | **12 Standard** | 40 pt | Spazio logo nel materiale promozionale diffuso nei 6 Comuni della rassegna; intervista/pillola video aziendale nei canali del festival. |
| **4.500** | **9 VIP** | **13 Standard** | 45 pt | Partecipazione come relatore invitato alle tavole rotonde territoriali su sostenibilità e sviluppo delle Aree Interne. |
| **5.000** | **10 VIP** | **15 Standard** | 50 pt | **Status di "Main Partner delle Aree Interne"**; targa d'impatto in ceramica/legno d'autore per l'azienda; **invito ufficiale per l'imprenditore al Convegno Annuale di Presentazione delle Marche con dibattito pubblico e rassegna stampa dedicata**. |

---

## 6. Esempio di Simulazione Realistica: Azienda da 50 Dipendenti

- **Dipendenti totali:** 50
- **Consumatori effettivi (penetrazione 30%):** 15 persone
- **Consumo medio:** 2 caffè/giorno su 220 giorni lavorativi
- **Consumo totale annuo:** $15 \times 2 \times 220 = \mathbf{6.600\ \text{erogazioni annue}}$

### Risultati Generati:
1. **Biglietti Omaggio Performing Art:**  
   $$\frac{6.600}{1.000} \times 5 = \mathbf{33\ \text{Biglietti Omaggio all'anno}}$$  
   *(Permette di premiare tutti i consumatori più assidui con più di 2 ingressi omaggio, oppure di coprire gran parte dell'organico aziendale).*
2. **Punti Impatto nel Borsellino:**  
   $$\frac{6.600}{100} = \mathbf{66\ \text{Punti Impatto}}$$  
   *(L'azienda raggiunge il **Livello Best Practice**, ottenendo sconti sul paniere a Km 0, visibilità istituzionale e voto raddoppiato per i propri dipendenti).*
3. **Impatto Logistico e Ambientale:**  
   La ricezione combinata dei prodotti agroalimentari a Km 0 sul giro di rifornimento Illiria evita 12–24 spedizioni dedicate di corrieri, togliendo dalla strada circa **600–1.200 km** e risparmiando oltre **200–350 kg di $\text{CO}_2$**.

