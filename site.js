/**
 * EnerFlow website — i18n + 3D screenshot carousel
 * Default language: English. Italian available via toggle.
 */
(function () {
  const STORAGE_KEY = "enerflow-lang";
  const DEFAULT_LANG = "en";

  // Replace with the real listing URLs, then regenerate QR codes:
  // python3 scripts/fetch_store_assets.py
  const STORE_LINKS = {
    apple: "https://apps.apple.com/",
    play: "https://play.google.com/store/apps/",
  };

  const I18N = {
    en: {
      meta_title: "EnerFlow — Home energy, EV and solar control",
      meta_desc:
        "EnerFlow: monitor EV charging, solar production, home energy and backups. Built for MyEnergi today, designed for more public API integrations over time.",
      nav_features: "Features",
      nav_screens: "Screenshots",
      nav_privacy: "Privacy",
      nav_support: "Support",
      eyebrow: "by econe.it",
      hero_lead:
        "Control EV charging, follow solar production and home use, and manage energy costs. Built around MyEnergi and Growatt today, with room for more devices and inverters with public APIs.",
      cta_store: "Get it on the App Store",
      cta_play: "Get it on Google Play",
      cta_support: "Contact support",
      download_title: "Get the app",
      download_lead: "Scan the QR code with your phone, or tap a store badge.",
      download_appstore: "Download on the App Store",
      download_playstore: "Get it on Google Play",
      download_qr_apple: "QR code for the App Store",
      download_qr_play: "QR code for Google Play",
      trust_title: "Built around your privacy",
      trust_ads_title: "No advertising",
      trust_ads_text: "Zero ads, zero sponsored content, zero tracking pixels.",
      trust_data_title: "No personal data harvested",
      trust_data_text:
        "We don’t collect personal data for analytics, marketing, or resale. Credentials stay on your phone.",
      features_title: "Made for home energy, EVs and solar",
      features_lead:
        "EnerFlow connects the services you already use. It works great with MyEnergi and Growatt today, and is designed to grow with more inverters and devices that expose public APIs.",
      feat_wallbox_title: "EV charging today",
      feat_wallbox_text: "Status, charge modes and history for your Zappi via official MyEnergi APIs, with a broader EV-energy view over time.",
      feat_solar_title: "Open to more inverters",
      feat_solar_text: "Growatt is supported today, and other inverter brands with public APIs can be added in future releases.",
      feat_privacy_title: "Privacy by design",
      feat_privacy_text: "On-device credentials, no ad tracking, optional backup to your iCloud.",
      shots_title: "A look inside the app",
      shots_lead: "Infinite carousel — swipe or use the arrows. The active screen stays in front; others fade into the distance on both sides.",
      shots_empty: "No screenshots found yet. Add PNGs under assets/screenshots/en/.",
      footer_privacy: "Privacy policy",
      footer_support: "Support",
      lang_label: "Language",
      caption_dashboard: "Live dashboard",
      desc_dashboard: "See solar, home use, EV charging and battery in real time, and control your Zappi.",
      caption_dashboard_alt: "Dashboard overview",
      desc_dashboard_alt: "A clear snapshot of grid draw, energy flows and charge modes when the car is idle.",
      caption_stats: "Statistics",
      desc_stats: "Monthly home energy, EV charging mix and costs in one glance.",
      caption_stats_period: "Statistics — period",
      desc_stats_period: "Jump between months or years to review your production and import history.",
      caption_inverter: "Inverter integrations",
      desc_inverter: "Growatt is the first live integration, and the same area is designed to welcome more inverter brands with public APIs.",
      caption_inverter_setup: "Growatt setup",
      desc_inverter_setup: "Today you can link Growatt via the official Open API; tomorrow this setup flow can extend to other public-API inverters.",
      caption_gse: "Energy sale income",
      desc_gse: "Log payments from selling surplus solar energy and keep yearly totals tidy.",
      caption_menu: "App menu",
      desc_menu: "Reach history sync, stats, tariffs, mileage, charging and cloud backup in one place.",
      caption_mileage: "Mileage log",
      desc_mileage: "Save odometer readings and track how many kilometres you drive over time.",
      caption_external: "External charging",
      desc_external: "Record charge sessions away from home with kWh and cost for each stop.",
      caption_settings: "Settings",
      desc_settings: "Tune data range, battery reserve, tariffs CSV import and iCloud backup.",
      caption_icons: "App icons",
      desc_icons: "Pick a preinstalled icon style that fits your home screen.",
      support_title: "Support",
      support_lead:
        "Need help with EnerFlow? Send us a message. We usually reply to the email you provide.",
      support_name: "Name",
      support_email: "Email",
      support_topic: "Topic",
      support_message: "Message",
      support_send: "Send request",
      support_note: "We use form data only to reply. Details:",
      support_before: "Before you write",
      support_tip1: "Check that your MyEnergi serial and API token are correct.",
      support_tip2: "If you use Growatt, confirm the account is set up in Settings.",
      support_tip3: "For iCloud backup, make sure iCloud Drive is enabled on the device.",
      support_ph_name: "Your name",
      support_ph_email: "you@email.com",
      support_ph_msg: "Describe the issue or request…",
      support_topic_placeholder: "Select…",
      support_sending: "Sending…",
      support_sent: "Message sent. We’ll reply by email.",
      support_cfg_err: "Form not configured yet: add your Web3Forms access key in support.html.",
      support_fail: "Could not send the message. Please try again later.",
    },
    it: {
      meta_title: "EnerFlow — Controllo energia, EV e fotovoltaico",
      meta_desc:
        "EnerFlow: monitora ricarica EV, produzione FV, energia di casa e backup. Oggi parte da MyEnergi e Growatt, ma è pensata per estendersi ad altre integrazioni con API pubbliche.",
      nav_features: "Funzioni",
      nav_screens: "Screenshot",
      nav_privacy: "Privacy",
      nav_support: "Supporto",
      eyebrow: "by econe.it",
      hero_lead:
        "Controlla ricarica EV, produzione FV e consumi di casa, e gestisci i costi energia. Oggi parte da MyEnergi e Growatt, ma è pensata per accogliere altri dispositivi e inverter con API pubbliche.",
      cta_store: "Disponibile su App Store",
      cta_play: "Disponibile su Google Play",
      cta_support: "Contatta il supporto",
      download_title: "Scarica l’app",
      download_lead: "Inquadra il QR con il telefono, oppure tocca il badge dello store.",
      download_appstore: "Scarica su App Store",
      download_playstore: "Disponibile su Google Play",
      download_qr_apple: "QR code per App Store",
      download_qr_play: "QR code per Google Play",
      trust_title: "Pensata per la tua privacy",
      trust_ads_title: "Nessuna pubblicità",
      trust_ads_text: "Zero ads, zero contenuti sponsorizzati, zero pixel di tracking.",
      trust_data_title: "Nessun dato personale raccolto",
      trust_data_text:
        "Non raccogliamo dati personali per analytics, marketing o rivendita. Le credenziali restano sul telefono.",
      features_title: "Pensata per energia di casa, EV e fotovoltaico",
      features_lead:
        "EnerFlow collega i servizi che già usi. Oggi funziona molto bene con MyEnergi e Growatt, ma è progettata per crescere con altri inverter e dispositivi che espongono API pubbliche.",
      feat_wallbox_title: "Ricarica EV oggi",
      feat_wallbox_text: "Stato, modalità di carica e storico della tua Zappi con le API ufficiali MyEnergi, dentro una visione energetica più ampia.",
      feat_solar_title: "Aperta ad altri inverter",
      feat_solar_text: "Growatt è supportato oggi, ma in futuro potranno essere integrati altri inverter con API pubbliche.",
      feat_privacy_title: "Privacy by design",
      feat_privacy_text: "Credenziali sul dispositivo, nessun tracking pubblicitario, backup opzionale su iCloud.",
      shots_title: "Uno sguardo all’app",
      shots_lead: "Carosello infinito — scorri o usa le frecce. La schermata attiva resta davanti; le altre si allontanano a destra e a sinistra.",
      shots_empty: "Nessuno screenshot trovato. Aggiungi i PNG in assets/screenshots/it/.",
      footer_privacy: "Informativa privacy",
      footer_support: "Supporto",
      lang_label: "Lingua",
      caption_dashboard: "Dashboard live",
      desc_dashboard: "Vedi in tempo reale solare, casa, ricarica auto e batteria, e controlla la Zappi.",
      caption_dashboard_alt: "Panoramica dashboard",
      desc_dashboard_alt: "Uno sguardo chiaro a prelievo, flussi energetici e modalità di carica a veicolo fermo.",
      caption_stats: "Statistiche",
      desc_stats: "Energia di casa, composizione della ricarica e costi del mese in un colpo d’occhio.",
      caption_stats_period: "Statistiche — periodo",
      desc_stats_period: "Passa tra mesi o anni per rileggere produzione e import dalla rete.",
      caption_inverter: "Integrazioni inverter",
      desc_inverter: "Growatt è la prima integrazione attiva, ma questa area è pensata per accogliere anche altri inverter con API pubbliche.",
      caption_inverter_setup: "Setup Growatt",
      desc_inverter_setup: "Oggi puoi configurare Growatt via Open API ufficiale; domani lo stesso flusso potrà estendersi ad altri inverter con API pubbliche.",
      caption_gse: "Entrate GSE",
      desc_gse: "Registra i pagamenti SSP / Ritiro Dedicato e tieni i totali per anno solare GSE.",
      caption_menu: "Menu app",
      desc_menu: "Accedi a sync storico, statistiche, tariffe, km, ricariche e backup cloud.",
      caption_mileage: "Chilometraggio",
      desc_mileage: "Salva le letture del contachilometri e segui i km percorsi nel tempo.",
      caption_external: "Ricariche esterne",
      desc_external: "Annota le ricariche fuori casa con kWh e costo per ogni sessione.",
      caption_settings: "Impostazioni",
      desc_settings: "Imposta periodo dati, riserva batteria, import CSV tariffe e backup iCloud.",
      caption_icons: "Icone app",
      desc_icons: "Scegli uno stile di icona preinstallato per la home del telefono.",
      support_title: "Supporto",
      support_lead:
        "Hai bisogno di aiuto con EnerFlow? Inviaci un messaggio. Di solito rispondiamo all’email che indichi.",
      support_name: "Nome",
      support_email: "Email",
      support_topic: "Argomento",
      support_message: "Messaggio",
      support_send: "Invia richiesta",
      support_note: "Usiamo i dati del form solo per risponderti. Dettagli:",
      support_before: "Prima di scrivere",
      support_tip1: "Verifica che seriale e token API MyEnergi siano corretti.",
      support_tip2: "Se usi Growatt, controlla che l’account sia configurato nelle impostazioni.",
      support_tip3: "Per il backup iCloud, assicurati che iCloud Drive sia attivo sul dispositivo.",
      support_ph_name: "Il tuo nome",
      support_ph_email: "tu@email.com",
      support_ph_msg: "Descrivi il problema o la richiesta…",
      support_topic_placeholder: "Seleziona…",
      support_sending: "Invio in corso…",
      support_sent: "Messaggio inviato. Ti risponderemo via email.",
      support_cfg_err: "Form non ancora configurato: inserisci la Web3Forms access key in support.html.",
      support_fail: "Non è stato possibile inviare il messaggio. Riprova più tardi.",
    },
  };

  // Tutte le immagini uniche (niente duplicati numerati 01–05).
  // La prima è la scheda principale all’apertura.
  const SCREENSHOTS = [
    { file: "Dashboard02.png", captionKey: "caption_dashboard", descKey: "desc_dashboard" },
    { file: "Stat01.png", captionKey: "caption_stats", descKey: "desc_stats" },
    { file: "Menu01.png", captionKey: "caption_menu", descKey: "desc_menu" },
    { file: "Inverter01.png", captionKey: "caption_inverter", descKey: "desc_inverter" },
    { file: "SellEnergy01.png", captionKey: "caption_gse", descKey: "desc_gse" },
    { file: "Km01.png", captionKey: "caption_mileage", descKey: "desc_mileage" },
    { file: "ExternalRecharge.png", captionKey: "caption_external", descKey: "desc_external" },
    { file: "Dashboard01.png", captionKey: "caption_dashboard_alt", descKey: "desc_dashboard_alt" },
    { file: "Inverter02.png", captionKey: "caption_inverter_setup", descKey: "desc_inverter_setup" },
    { file: "Stat02.png", captionKey: "caption_stats_period", descKey: "desc_stats_period" },
    { file: "Settings01.png", captionKey: "caption_settings", descKey: "desc_settings" },
    { file: "icon01.png", captionKey: "caption_icons", descKey: "desc_icons" },
  ];

  function circularOffset(i, index, n) {
    let offset = i - index;
    const half = n / 2;
    if (offset > half) offset -= n;
    if (offset < -half) offset += n;
    return offset;
  }

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "it") return saved;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    rebuildCarousel(lang);
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      // format: attr:key,attr2:key2
      spec.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":");
        if (attr && key) el.setAttribute(attr, t(lang, key));
      });
    });

    const title = t(lang, "meta_title");
    if (title) document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(lang, "meta_desc"));

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.querySelectorAll(".lang-block").forEach((block) => {
      block.hidden = block.getAttribute("data-lang") !== lang;
    });
  }

  /* ── 3D carousel (infinite loop) ── */
  let carouselState = { index: 0, items: [] };

  function rebuildCarousel(lang) {
    const stage = document.getElementById("carousel-stage");
    const caption = document.getElementById("carousel-caption");
    const hint = document.getElementById("shots-hint");
    if (!stage) return;

    stage.innerHTML = "";
    carouselState = { index: 0, items: [] };

    const folder = lang === "it" ? "it" : "en";
    let pending = SCREENSHOTS.length;
    let loaded = 0;

    SCREENSHOTS.forEach((shot, i) => {
      const slide = document.createElement("figure");
      slide.className = "carousel-slide";
      slide.dataset.index = String(i);

      const img = document.createElement("img");
      img.src = `assets/screenshots/${folder}/${shot.file}`;
      img.alt = t(lang, shot.captionKey);
      img.draggable = false;
      img.loading = i < 3 ? "eager" : "lazy";

      img.addEventListener("error", () => {
        pending -= 1;
        slide.remove();
        finish();
      });
      img.addEventListener("load", () => {
        loaded += 1;
        pending -= 1;
        finish();
      });

      slide.appendChild(img);
      stage.appendChild(slide);
    });

    function finish() {
      if (pending > 0) return;
      if (hint) {
        hint.hidden = loaded > 0;
        if (loaded === 0) hint.textContent = t(lang, "shots_empty");
      }
      if (loaded === 0) {
        const titleEl = document.getElementById("carousel-caption-title");
        const textEl = document.getElementById("carousel-caption-text");
        if (titleEl) titleEl.textContent = "";
        if (textEl) textEl.textContent = "";
        if (caption) caption.hidden = true;
        return;
      }

      carouselState.items = [...stage.querySelectorAll(".carousel-slide")].map((el) => {
        const original = Number(el.dataset.index);
        const shot = SCREENSHOTS[original];
        return {
          el,
          captionKey: shot?.captionKey || "caption_dashboard",
          descKey: shot?.descKey || "desc_dashboard",
          original,
        };
      });

      carouselState.items.forEach((item, i) => {
        item.el.onclick = () => goTo(i);
      });

      // Scheda principale (Dashboard live) al centro all’apertura
      const mainIdx = carouselState.items.findIndex((it) => it.original === 0);
      carouselState.index = mainIdx >= 0 ? mainIdx : 0;
      renderCarousel();
    }

    function renderCarousel() {
      const n = carouselState.items.length;
      if (!n) return;
      const maxVisible = 4; // schede visibili per lato (oltre al centro)

      carouselState.items.forEach((item, i) => {
        const offset = circularOffset(i, carouselState.index, n);
        const abs = Math.abs(offset);
        const el = item.el;
        const visible = abs <= maxVisible;

        el.classList.toggle("is-active", offset === 0);
        el.style.pointerEvents = visible ? "auto" : "none";
        el.style.zIndex = String(200 - abs);
        el.style.opacity = visible ? String(Math.max(0.2, 1 - abs * 0.18)) : "0";
        el.style.filter = offset === 0
          ? "brightness(1) saturate(1)"
          : `brightness(${Math.max(0.4, 1 - abs * 0.22)}) saturate(${Math.max(0.5, 1 - abs * 0.15)})`;
        el.style.transform =
          `translate(-50%, -50%)` +
          ` translateX(${offset * 28}%)` +
          ` translateZ(${-abs * 160}px)` +
          ` rotateY(${offset * -22}deg)` +
          ` scale(${Math.max(0.55, 1 - abs * 0.11)})`;
        el.setAttribute("aria-hidden", offset === 0 ? "false" : "true");
      });

      if (caption) {
        const active = carouselState.items[carouselState.index];
        const titleEl = document.getElementById("carousel-caption-title");
        const textEl = document.getElementById("carousel-caption-text");
        if (active && titleEl && textEl) {
          titleEl.textContent = t(lang, active.captionKey);
          textEl.textContent = t(lang, active.descKey);
          caption.hidden = false;
        } else if (active) {
          caption.textContent = t(lang, active.captionKey);
        } else {
          if (titleEl) titleEl.textContent = "";
          if (textEl) textEl.textContent = "";
          caption.hidden = true;
        }
      }

      const dots = document.getElementById("carousel-dots");
      if (dots) {
        dots.innerHTML = "";
        carouselState.items.forEach((_, i) => {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "carousel-dot" + (i === carouselState.index ? " is-active" : "");
          b.setAttribute("aria-label", `Slide ${i + 1}`);
          b.addEventListener("click", () => goTo(i));
          dots.appendChild(b);
        });
      }
    }

    function goTo(i) {
      const n = carouselState.items.length;
      if (!n) return;
      carouselState.index = ((i % n) + n) % n;
      renderCarousel();
    }

    function next() {
      goTo(carouselState.index + 1);
    }
    function prev() {
      goTo(carouselState.index - 1);
    }

    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    if (prevBtn) prevBtn.onclick = prev;
    if (nextBtn) nextBtn.onclick = next;

    let startX = 0;
    stage.ontouchstart = (e) => {
      startX = e.changedTouches[0].clientX;
    };
    stage.ontouchend = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) next();
      else prev();
    };

    // freccia tastiera
    document.onkeydown = (e) => {
      if (!document.getElementById("carousel-stage")) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.__enerflowCarousel = { goTo, next, prev, renderCarousel };
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang === "en" || lang === "it") setLang(lang);
      });
    });
  }

  function applyStoreLinks() {
    document.querySelectorAll("[data-store]").forEach((el) => {
      const url = STORE_LINKS[el.getAttribute("data-store")];
      if (url) el.setAttribute("href", url);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
    applyStoreLinks();
    initLangToggle();
    const lang = getLang();
    applyLang(lang);
    rebuildCarousel(lang);
  });
})();
