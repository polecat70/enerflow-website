# Sito EnerFlow (econe.it) — hosting gratis

Sito statico in questa cartella:

- `index.html` — landing (con sezione screenshot)
- `privacy.html` — informativa privacy (URL da mettere in App Store Connect)
- `support.html` — form supporto
- `styles.css` — stile
- `assets/logo-enerflow.png` — logo (EnerFlowSquareBlue1)
- `assets/screenshots/` — metti qui gli screenshot da iPhone SE 3

## Screenshot (bilingual)

- `assets/screenshots/en/` — English (site default)
- `assets/screenshots/it/` — Italian

Carousel selection is in `site.js` (`SCREENSHOTS` array). Files missing for a language are skipped automatically.

## Opzione consigliata: GitHub Pages + Cloudflare DNS (tutto gratis)

### Perché questa combo

- **GitHub Pages**: hosting HTTPS gratis per siti statici
- **Cloudflare**: DNS gratis + possibilità di puntare `econe.it` e `www.econe.it`
- Nessun server da gestire

### 1. Metti il sito su GitHub

Puoi usare:

**A)** un repository dedicato, es. `econe-website` con solo i file di `website/`, oppure  
**B)** questo stesso repo, pubblicando la cartella `website/` come source di GitHub Pages

Per la strada più pulita (A):

1. Crea un nuovo repository GitHub (es. `econe-it`)
2. Carica i file di questa cartella `website/` nella root del nuovo repo
3. In GitHub → **Settings** → **Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / cartella `/ (root)`
4. Attendi qualche minuto: otterrai un URL tipo `https://TUOUSER.github.io/econe-it/`

### 2. Collega il dominio `econe.it`

1. Nella stessa pagina GitHub Pages, in **Custom domain**, inserisci `econe.it`
2. GitHub creerà/userà un file `CNAME` (è già presente in questa cartella come `CNAME`)
3. Attiva **Enforce HTTPS** quando disponibile

### 3. DNS presso il registrar (o Cloudflare)

Al gestore del dominio `econe.it` crea questi record (valori tipici GitHub Pages):

| Tipo | Nome | Valore | Note |
|------|------|--------|------|
| `A` | `@` | `185.199.108.153` | GitHub Pages |
| `A` | `@` | `185.199.109.153` | GitHub Pages |
| `A` | `@` | `185.199.110.153` | GitHub Pages |
| `A` | `@` | `185.199.111.153` | GitHub Pages |
| `CNAME` | `www` | `TUOUSER.github.io` | sostituisci TUOUSER |

Se usi Cloudflare come DNS:

1. Aggiungi il sito su Cloudflare (piano Free)
2. Cambia i nameserver dal registrar a quelli Cloudflare
3. Inserisci gli stessi record A/CNAME
4. Proxy Cloudflare: per GitHub Pages molti usano **DNS only** (grigio) sugli A record, oppure seguono la guida Cloudflare+GitHub Pages

Propagazione DNS: da pochi minuti a 24–48 ore.

### 4. URL da usare in App Store Connect

Quando il dominio risponde:

- **Privacy Policy URL:** `https://econe.it/privacy.html`
- **Support URL:** `https://econe.it/support.html`
- **Marketing URL (opzionale):** `https://econe.it/`

## Alternative gratis altrettanto valide

| Servizio | Pro | Contro |
|----------|-----|--------|
| **Cloudflare Pages** | ottimo con dominio su Cloudflare, deploy facile | va collegato a un repo Git |
| **Netlify** | form nativi, deploy drag&drop | meno “di casa” se DNS è altrove |
| **Vercel** | semplice | pensato più per framework JS |

Per EnerFlow, **GitHub Pages** o **Cloudflare Pages** bastano.

## Configurare il form di supporto (gratis)

Il form in `support.html` usa **Web3Forms** (piano free):

1. Vai su [https://web3forms.com](https://web3forms.com)
2. Inserisci la tua email personale (o `support@…` se ce l’hai)
3. Ricevi una **Access Key**
4. In `support.html` sostituisci:

```html
value="REPLACE_WITH_WEB3FORMS_ACCESS_KEY"
```

con la tua key.

I messaggi arriveranno alla email che hai registrato su Web3Forms.  
Non serve database né backend.

### Email `support@econe.it` (opzionale, gratis)

Se vuoi un indirizzo professionale senza casella a pagamento:

1. Metti il DNS su **Cloudflare**
2. Attiva **Email Routing** (gratis)
3. Inoltra `support@econe.it` → la tua Gmail/Outlook
4. Usa quella email anche su Web3Forms

## Verifica rapida dopo il deploy

- [ ] `https://econe.it` apre la landing
- [ ] `https://econe.it/privacy.html` apre la privacy
- [ ] `https://econe.it/support.html` apre il form
- [ ] HTTPS attivo (lucchetto)
- [ ] Form inviato di test arriva in inbox
- [ ] URL privacy e support inseriti in App Store Connect

## Nota sul link App Store

In `index.html` il bottone punta ancora a un placeholder generico App Store.  
Quando Apple assegna l’URL della scheda EnerFlow, aggiorna l’`href` del bottone.
