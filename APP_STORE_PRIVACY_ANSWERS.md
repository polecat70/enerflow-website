# Risposte App Store Connect — App Privacy (EnerFlow)

Documento operativo per compilare la sezione **App Privacy** in App Store Connect.

## Domanda principale

> Do you or your third-party partners collect data from this app?

### Risposta consigliata per EnerFlow: **No**

Non perché “si risponde sempre no”, ma perché, con l’architettura attuale, **EnerFlow non “collect” dati** secondo la definizione Apple.

Apple definisce *collect* così:

> trasmettere dati fuori dal dispositivo in modo che tu e/o i tuoi partner terzi possiate accedervi **più a lungo** di quanto serve a servire la richiesta in tempo reale.

Inoltre i “third-party partners” sono tipicamente SDK/analytics/ads il cui codice è integrato nell’app.

### Perché “No” è coerente

| Tema | Cosa fa EnerFlow | Effetto sulla dichiarazione |
|------|------------------|-----------------------------|
| Credenziali API | Restano in SecureStore sul dispositivo | Non sono raccolte da te su un tuo server |
| MyEnergi / Growatt | Chiamate API in tempo reale verso account già dell’utente | Non sono SDK di tracking/ads; non tratti un archivio tuo dei dati |
| Dati storici | Locali sul device | Nessuna raccolta lato developer |
| Backup | iCloud personale dell’utente | Non sei responsabile di dichiarare i dati gestiti da Apple per iCloud dell’utente |
| Face ID | Solo sblocco locale di sistema | Dati biometrici non lasciano il device verso di te |
| Tracking ads / analytics | Non presenti | Nessun tracking |
| Identificatori pubblicitari | Non usati | Nessuna raccolta identifiers a fini ads |

### Cosa rispondere alle voci che citavi

Se App Store Connect, dopo un eventuale “Yes”, ti chiedesse il dettaglio, per EnerFlow la lettura corretta è comunque:

| Domanda | Risposta | Motivo breve |
|---------|----------|--------------|
| Raccogli identificatori? | **No** | Niente ID pubblicitari / user ID EnerFlow lato server |
| Raccogli dati di utilizzo? | **No** | Niente analytics di prodotto/comportamento |
| Raccogli credenziali o dati account? | **No** *(nel senso Apple di collect)* | Credenziali solo on-device; non le conservi tu off-device |
| I dati sono collegati all’utente? | **N/A** se hai risposto No alla raccolta | Non dichiari tipi di dato raccolti |
| Usi tracking? | **No** | Nessun collegamento con dati di terzi per ads/measurement |

Quindi sì: **per queste domande, nel tuo caso, “No” è la risposta corretta**.  
Non è un “sempre No” universale: se un domani aggiungi Firebase Analytics, crash reporter con PII, login social con profilazione, ads, ecc., dovrai aggiornare le risposte.

## Casi in cui dovresti cambiare idea

Aggiorna App Privacy se introduci, ad esempio:

- analytics (Firebase, Mixpanel, Amplitude…)
- crash reporting che invia identificatori a un tuo servizio o a un SDK
- account EnerFlow su un tuo backend
- sync backup su un tuo server (non iCloud/Google Drive dell’utente)
- SDK pubblicitari o attribution

## Form di supporto sul sito

Il form su `econe.it/support.html` raccoglie email/messaggio **dal sito web**, non dall’app.  
Apple indica che form di supporto opzionali, non parte della funzione primaria dell’app, possono rientrare in *optional disclosure*.  
Non cambia la risposta “No data collected” dell’app, purché il form resti fuori dall’app e non usi quei dati per tracking/ads.

## URL da inserire in App Store Connect

- Privacy Policy: `https://econe.it/privacy.html`
- Support: `https://econe.it/support.html`

## Checklist pratica in App Store Connect

1. App Privacy → **No, we do not collect data from this app**
2. Tracking → **No** (se richiesto)
3. Privacy Policy URL → `https://econe.it/privacy.html`
4. Verifica che privacy e support siano raggiungibili in HTTPS prima del submit
