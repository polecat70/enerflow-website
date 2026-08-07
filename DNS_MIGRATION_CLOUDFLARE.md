# Piano definitivo DNS — Aruba → Cloudflare (versione sicura)

Obiettivo: spostare il DNS di `econe.it` su Cloudflare **senza rompere la posta**, poi pubblicare i siti su GitHub Pages.

## Perché è sicuro

Parti da un **export BIND completo** della zona Aruba (38 record). Su Cloudflare importi quella zona intera (MX, TXT SPF/DKIM, A, ecc.). Solo dopo cambi i nameserver. Il rischio email è minimo se MX/TXT restano identici.

---

## Passo 0 — Backup Aruba

Nel pannello Aruba **Gestione DNS** (come nello screenshot):

1. Sezione **Esporta** → **ESPORTA**
2. Formato **BIND**
3. Salva il file sul PC (es. `econe.it-bind-backup-YYYYMMDD.txt`)

Ancore di sicurezza Aruba:
- **IMPORTA** (ripristino da file)
- **Ripristina predefiniti** / punto di ripristino

Non procedere senza questo file.

---

## Passo 1 — Cloudflare + import zona

1. Crea account Cloudflare Free
2. **Add a site** → `econe.it`
3. Cloudflare scansiona i record esistenti
4. In più: **DNS → Import and Export → Import DNS records** e carica il file BIND di Aruba

Così i ~38 record entrano uguali, **MX e email inclusi**. Niente copia a mano.

Scegli piano **Free**. Cloudflare ti mostrerà i **2 nameserver** da usare al Passo 3 — **non cambiarli ancora su Aruba**.

---

## Passo 2 — Verifica email (obbligatoria)

In Cloudflare → **DNS → Records**, controlla che ci siano almeno:

- record **MX** (posta Aruba / provider attuale)
- **TXT** SPF (spesso `v=spf1 ...`)
- eventuali **TXT** DKIM / DMARC

Con l’import BIND dovrebbero esserci già. Confronta a occhio con Aruba (tab **Record MX** + TXT).

Solo se MX/TXT coincidono, passa al Passo 3.

---

## Passo 3 — Cambia i nameserver su Aruba

Quando Cloudflare è pronto:

1. Copia i 2 nameserver Cloudflare (es. `xxx.ns.cloudflare.com`)
2. Su Aruba → sezione **Name Server** → **SOSTITUISCI RECORD**
3. Incolla i nameserver Cloudflare al posto di:
   - `dns.technorail.com`
   - `dns2.technorail.com`
   - `dns3.arubadns.net`
   - `dns4.arubadns.cz`
4. Salva

Propagazione: da pochi minuti a qualche ora (a volte fino a 24–48h).  
Da quel momento **comanda Cloudflare**, non più il DNS Aruba.

Nel frattempo la posta continua a funzionare se MX/TXT sono corretti su Cloudflare.

---

## Passo 4 — Pubblica i siti (GitHub Pages)

### 4.1 Repo GitHub

Esempi:

| Sito | Dominio | Repo tipico |
|------|---------|-------------|
| Landing / brand | `econe.it` (+ `www`) | es. `econe-it` |
| App EnerFlow | `enerflow.econe.it` | es. `enerflow-website` (contenuto di `website/`) |

Per ogni repo: **Settings → Pages** → branch `main` → `/ (root)`.  
Poi in **Custom domain** inserisci il dominio scelto e attiva **Enforce HTTPS**.

### 4.2 Record DNS su Cloudflare (verso GitHub)

**Importante:** non lasciare i vecchi A Aruba (`62.149.128.x`) su `@` se vuoi che `econe.it` punti a GitHub. Dopo l’import, **sostituisci/rimuovi** gli A root Aruba che servivano al vecchio hosting, oppure crea record dedicati ai siti.

#### A) Apex `econe.it` → GitHub Pages

Due modi validi su Cloudflare:

**Modo consigliato (semplice, Cloudflare):**
| Tipo | Nome | Contenuto | Proxy |
|------|------|-----------|--------|
| CNAME | `@` | `TUOUSER.github.io` | Proxied (arancione) o DNS only |

Cloudflare fa **CNAME flattening** sull’apex: va bene.

**Modo classico GitHub (A record):**
| Tipo | Nome | Contenuto |
|------|------|-----------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

#### B) `www.econe.it`
| Tipo | Nome | Contenuto |
|------|------|-----------|
| CNAME | `www` | `TUOUSER.github.io` |

oppure CNAME `www` → `econe.it`

#### C) `enerflow.econe.it` → repo EnerFlow
| Tipo | Nome | Contenuto |
|------|------|-----------|
| CNAME | `enerflow` | `TUOUSER.github.io` |

Nel repo EnerFlow, file `CNAME` (o Custom domain in Pages) = `enerflow.econe.it`.

HTTPS: GitHub + Cloudflare lo gestiscono; attendi che Pages mostri il lucchetto e “Certificate ready”.

---

## Ordine operativo consigliato (checklist)

- [ ] Passo 0: export BIND salvato
- [ ] Passo 1: sito su Cloudflare + import BIND
- [ ] Passo 2: MX/TXT verificati
- [ ] Repo GitHub creati e Pages attivi (anche solo su `*.github.io`)
- [ ] Passo 3: nameserver Aruba → Cloudflare
- [ ] Aspetta propagazione (Cloudflare: dominio “Active”)
- [ ] Passo 4: record CNAME/A per i siti + Custom domain in Pages
- [ ] Test: `https://econe.it`, `https://enerflow.econe.it`, invio/ricezione email

---

## Cosa non fare

- Non cambiare nameserver **prima** dell’import e della verifica MX
- Non cancellare MX/TXT “per pulizia” senza sapere a cosa servono
- Non puntare `@` a GitHub lasciando ancora gli A Aruba del vecchio hosting (conflitto)
- Non mettere la access key Web3Forms in un commit pubblico se preferisci; oppure usa una key dedicata e ruotabile

---

## URL finali utili (App Store / sito)

Se EnerFlow sta su subdomain:

- Marketing: `https://enerflow.econe.it/`
- Privacy: `https://enerflow.econe.it/privacy.html`
- Support: `https://enerflow.econe.it/support.html`

Se invece metti EnerFlow direttamente su `econe.it`, aggiorna di conseguenza il file `CNAME` del sito e i custom domain in Pages.
