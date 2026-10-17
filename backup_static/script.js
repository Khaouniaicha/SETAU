/**
 * Cabinet Géomètre Expert Foncier Agréé OGEF - Interactive Scripts
 * Features:
 * - Multilingual Engine (Français, العربية, English) with instant RTL switching
 * - QR Code Scanner & vCard / Social Networks Modal
 * - Form Submission linked directly to Email (mailto) & WhatsApp message
 * - Interactive FAQ accordion
 * - Mobile Navigation Drawer
 * - ScrollSpy active link highlighter
 * - Animated numerical statistics
 * - Toast notifications & Clipboard copy
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  initQrFeatures();
  initFaqAccordion();
  initMobileMenu();
  initScrollSpy();
  initStatsCounter();
  initFormValidationAndEmailLinking();
  initAndroidBottomBar();
  initPrestationCategoryFilters();
  initFileUploadDropzone();
  applyCabinetConfig();
  initBackToTop();
});

/**
 * Multilingual Engine
 */
let currentLang = 'fr';

function initLanguageEngine() {
  const savedLang = localStorage.getItem('cabinet_lang') || 'fr';
  setLanguage(savedLang);

  // Attach event listeners to all language switcher buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });
}

function setLanguage(lang) {
  if (!window.translations || !window.translations[lang]) {
    lang = 'fr';
  }
  currentLang = lang;
  localStorage.setItem('cabinet_lang', lang);

  // Set HTML direction and lang attribute
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
  } else {
    html.setAttribute('dir', 'ltr');
  }

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const t = window.translations[lang];

  // Update document title
  if (t.pageTitle) {
    document.title = t.pageTitle;
  }

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      elem.textContent = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      elem.setAttribute('placeholder', t[key]);
    }
  });

  // Update WhatsApp pre-filled messages
  updateWhatsAppLinks(lang);
}
window.setLanguage = setLanguage;

function updateWhatsAppLinks(lang) {
  const phone = '21300000000';
  let message = 'Bonjour, je souhaite obtenir un devis pour des travaux fonciers.';
  if (lang === 'ar') {
    message = 'السلام عليكم، أود الحصول على استشارة وعرض سعر بخصوص خدماتكم العقارية والطبوغرافية.';
  } else if (lang === 'en') {
    message = 'Hello, I would like to request a quote for land surveying services.';
  }

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phone}?text=${encoded}`;

  const heroBtn = document.getElementById('heroWhatsAppBtn');
  if (heroBtn) heroBtn.href = waUrl;

  const floatingWa = document.querySelector('.floating-btn.whatsapp-btn');
  if (floatingWa) floatingWa.href = waUrl;

  const emergencyWa = document.querySelector('.emergency-btns .btn-whatsapp');
  if (emergencyWa) emergencyWa.href = waUrl;
}

/**
 * QR Code Scanner & Modal Features
 */
function initQrFeatures() {
  const qrModal = document.getElementById('qrModal');
  const closeQrModalBtn = document.getElementById('closeQrModalBtn');

  const openBtns = [
    document.getElementById('openQrBtnTop'),
    document.getElementById('openQrBtnMobile'),
    document.getElementById('openQrBtnHero'),
    document.getElementById('floatingQrBtn'),
    document.getElementById('bnavQr')
  ];

  function openQrModal() {
    if (qrModal) {
      qrModal.classList.add('open');
      qrModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQrModal() {
    if (qrModal) {
      qrModal.classList.remove('open');
      qrModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', openQrModal);
  });

  if (closeQrModalBtn) {
    closeQrModalBtn.addEventListener('click', closeQrModal);
  }

  if (qrModal) {
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) closeQrModal();
    });
  }

  // QR Code Tab switching logic
  function setupQrTabs(containerSelector, imgSelector, textSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const img = document.querySelector(imgSelector);
    const helpText = document.querySelector(textSelector);
    const tabBtns = container.querySelectorAll('.qr-tab-btn');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const target = btn.getAttribute('data-qrtarget');
        const t = window.translations[currentLang] || window.translations.fr;

        if (target === 'whatsapp') {
          if (img) img.src = 'assets/qr-whatsapp.png';
          if (helpText) helpText.textContent = t.qrWhatsappHelp || 'Scannez pour démarrer une conversation WhatsApp.';
        } else {
          if (img) img.src = 'assets/qr-vcard.png';
          if (helpText) helpText.textContent = t.qrVcardHelp || 'Pointez votre appareil photo pour enregistrer le cabinet dans vos contacts.';
        }
      });
    });
  }

  // Setup tabs on in-page card and in modal
  setupQrTabs('#qrScannerCard', '#mainQrImg', '#mainQrHelpText');
  setupQrTabs('#qrModal', '#modalQrImg', '#modalQrHelpText');
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const btn = otherItem.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && 
        !drawer.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

/**
 * ScrollSpy: Highlights active link in navbar during scroll
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], body[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const bnavHome = document.getElementById('bnavHome');
  const bnavServices = document.getElementById('bnavServices');
  const bnavDevis = document.getElementById('bnavDevis');

  function onScroll() {
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });

        // Android bottom bar active state synchronization
        if (id === 'accueil' && bnavHome) {
          [bnavHome, bnavServices, bnavDevis].forEach(el => el && el.classList.remove('active'));
          bnavHome.classList.add('active');
        } else if ((id === 'cadastre' || id === 'services' || id === 'realisations') && bnavServices) {
          [bnavHome, bnavServices, bnavDevis].forEach(el => el && el.classList.remove('active'));
          bnavServices.classList.add('active');
        } else if (id === 'contact' && bnavDevis) {
          [bnavHome, bnavServices, bnavDevis].forEach(el => el && el.classList.remove('active'));
          bnavDevis.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/**
 * Pre-select Prestation in the Quote Form and smooth scroll
 */
function selectPrestation(prestationValue) {
  const selectElem = document.getElementById('prestation');
  if (selectElem) {
    for (let i = 0; i < selectElem.options.length; i++) {
      const optVal = selectElem.options[i].value;
      if (optVal.toLowerCase() === prestationValue.toLowerCase() || 
          optVal.toLowerCase().includes(prestationValue.toLowerCase()) ||
          prestationValue.toLowerCase().includes(optVal.toLowerCase())) {
        selectElem.selectedIndex = i;
        break;
      }
    }
    selectElem.classList.add('pulse-focus');
    setTimeout(() => {
      selectElem.classList.remove('pulse-focus');
    }, 1500);

    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
window.selectPrestation = selectPrestation;

/**
 * Animated Numerical Counters in the Cabinet Stats section
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1400; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('cabinet');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/**
 * Form Validation linked directly to Email (mailto) & WhatsApp Dispatch Modal
 */
function initFormValidationAndEmailLinking() {
  const form = document.getElementById('devisForm');
  const submitBtn = document.getElementById('submitBtn');
  const dispatchModal = document.getElementById('quoteDispatchModal');
  const closeDispatchModalBtn = document.getElementById('closeDispatchModalBtn');
  const quoteSummaryText = document.getElementById('quoteSummaryText');
  const modalDirectMailBtn = document.getElementById('modalDirectMailBtn');
  const modalDirectWaBtn = document.getElementById('modalDirectWaBtn');
  const copyQuoteBtn = document.getElementById('copyQuoteBtn');

  if (!form) return;

  const nomInput = document.getElementById('nomComplet');
  const telInput = document.getElementById('telephone');
  const emailInput = document.getElementById('email');
  const prestationSelect = document.getElementById('prestation');
  const localInput = document.getElementById('localisation');
  const messageInput = document.getElementById('message');

  function clearErrors() {
    form.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('has-error');
    });
    form.querySelectorAll('.is-invalid').forEach(input => {
      input.classList.remove('is-invalid');
    });
  }

  function validateField(input, errorId, condition) {
    const group = input.closest('.form-group');
    if (!condition) {
      group.classList.add('has-error');
      input.classList.add('is-invalid');
      return false;
    } else {
      group.classList.remove('has-error');
      input.classList.remove('is-invalid');
      return true;
    }
  }

  [nomInput, telInput, prestationSelect].forEach(element => {
    if (element) {
      element.addEventListener('input', () => {
        const group = element.closest('.form-group');
        group.classList.remove('has-error');
        element.classList.remove('is-invalid');
      });
      element.addEventListener('change', () => {
        const group = element.closest('.form-group');
        group.classList.remove('has-error');
        element.classList.remove('is-invalid');
      });
    }
  });

  function closeDispatchModal() {
    if (dispatchModal) {
      dispatchModal.classList.remove('open');
      dispatchModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (closeDispatchModalBtn) {
    closeDispatchModalBtn.addEventListener('click', closeDispatchModal);
  }
  if (dispatchModal) {
    dispatchModal.addEventListener('click', (e) => {
      if (e.target === dispatchModal) closeDispatchModal();
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Validate Nom complet
    const nomVal = nomInput.value.trim();
    if (!nomVal) {
      validateField(nomInput, 'errorNom', false);
      isValid = false;
    }

    // Validate Téléphone (at least 8 digits)
    const telVal = telInput.value.trim();
    const telClean = telVal.replace(/[\s\-\.]/g, '');
    if (!telClean || telClean.length < 8) {
      validateField(telInput, 'errorTel', false);
      isValid = false;
    }

    // Validate Prestation
    if (!prestationSelect.value) {
      validateField(prestationSelect, 'errorPrestation', false);
      isValid = false;
    }

    // Validate Email format if filled
    const emailVal = emailInput.value.trim();
    if (emailVal) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailVal)) {
        validateField(emailInput, 'errorEmail', false);
        isValid = false;
      }
    }

    if (!isValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // Selected prestation label
    const selectedPrestationText = prestationSelect.options[prestationSelect.selectedIndex].text;
    const localVal = localInput.value.trim() || 'Non précisée';
    const msgVal = messageInput.value.trim() || 'Aucun message spécifique.';

    // Construct Formatted Summary for Email & WhatsApp
    let summaryText = '';
    let emailSubject = '';

    if (currentLang === 'ar') {
      emailSubject = `[طلب عرض سعر / خبرة عقارية] - ${selectedPrestationText} - ${nomVal}`;
      summaryText = 
`طلب عرض سعر / خبرة عقارية
--------------------------------------------------
• الاسم واللقب : ${nomVal}
• رقم الهاتف : ${telVal}
• البريد الإلكتروني : ${emailVal || 'غير محدد'}
• نوع الخدمة المطلوبة : ${selectedPrestationText}
• موقع العقار : ${localVal}

• تفاصيل المشروع :
${msgVal}
--------------------------------------------------
موجّه إلى: مكتب الهندسة والخبرة العقارية - خليل فريد (معتمد OGEF رقم 865)
إقامة الساحل كركوبة، القليعة، ولاية تيبازة`;
    } else if (currentLang === 'en') {
      emailSubject = `[Quote Request / Land Survey] - ${selectedPrestationText} - ${nomVal}`;
      summaryText = 
`REQUEST FOR QUOTATION & LAND SURVEYING
--------------------------------------------------
• Client Full Name: ${nomVal}
• Phone Number: ${telVal}
• Email Address: ${emailVal || 'Not provided'}
• Requested Service: ${selectedPrestationText}
• Land Location: ${localVal}

• Project Description:
${msgVal}
--------------------------------------------------
To: Land Engineering & Surveying Office - Farid Khelil (OGEF #865)
Koléa, Tipaza`;
    } else {
      emailSubject = `[Demande de Devis / Expertise] - ${selectedPrestationText} - ${nomVal}`;
      summaryText = 
`DEMANDE DE DEVIS & EXPERTISE FONCIÈRE
--------------------------------------------------
• Demandeur : ${nomVal}
• Téléphone : ${telVal}
• Email : ${emailVal || 'Non renseigné'}
• Prestation souhaitée : ${selectedPrestationText}
• Localisation du terrain : ${localVal}

• Description du projet :
${msgVal}
--------------------------------------------------
Destinataire : Cabinet d'Ingénierie & d'Expertise Foncière - Farid Khelil
Agréé OGEF N° 865 • Résidence El Sahel Kerkouba, Koléa, Tipaza`;
    }

    // File attachment info
    const fileInput = document.getElementById('pieceJointe');
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      if (currentLang === 'ar') {
        summaryText += `\n• وثيقة مرفقة : ${fileName}`;
      } else if (currentLang === 'en') {
        summaryText += `\n• Attached Document: ${fileName}`;
      } else {
        summaryText += `\n• Document joint : ${fileName}`;
      }
    }

    // Reference number
    const refNum = `REF-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    summaryText += `\n• Réf. Dossier : ${refNum}`;

    // Read configured Email & WhatsApp from config.js if available
    const cfg = window.CABINET_CONFIG || {};
    const cabinetEmail = cfg.email || 'faridkhelil16@gmail.com';
    const cabinetPhone = cfg.whatsappNumber || '213699378444';

    // Build mailto Link
    const mailtoUrl = `mailto:${cabinetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(summaryText)}`;

    // Build WhatsApp Link
    const waUrl = `https://wa.me/${cabinetPhone}?text=${encodeURIComponent(summaryText)}`;

    // Optional online form backend dispatch (Formspree, Web3Forms, etc.)
    if (cfg.formEndpoint && cfg.formEndpoint.trim() !== '') {
      try {
        const formData = new FormData(form);
        formData.append('dossier_reference', refNum);
        fetch(cfg.formEndpoint, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).catch(e => console.warn('Online endpoint notification error:', e));
      } catch (err) {
        console.warn('Endpoint error:', err);
      }
    }

    // Update dispatch modal content
    if (quoteSummaryText) {
      quoteSummaryText.textContent = summaryText;
    }
    if (modalDirectMailBtn) {
      modalDirectMailBtn.href = mailtoUrl;
    }
    if (modalDirectWaBtn) {
      modalDirectWaBtn.href = waUrl;
    }

    // Copy to clipboard handler
    if (copyQuoteBtn) {
      copyQuoteBtn.onclick = () => {
        navigator.clipboard.writeText(summaryText).then(() => {
          const t = window.translations[currentLang] || window.translations.fr;
          showToast(t.copiedQuoteToast || 'Détails du devis copiés dans le presse-papier !');
        });
      };
    }

    // Open user's email client automatically via mailto
    window.location.href = mailtoUrl;

    // Open Dispatch Modal to offer WhatsApp & text copy
    if (dispatchModal) {
      dispatchModal.classList.add('open');
      dispatchModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    // Reset Form
    form.reset();
  });
}

/**
 * Toast Notification Utility
 */
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/**
 * Back to Top smooth scroll
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Android Bottom App Navigation Bar logic
 */
function initAndroidBottomBar() {
  const bnavItems = document.querySelectorAll('.android-bottom-bar .bottom-nav-item:not(#bnavQr):not(#bnavWhatsApp)');
  bnavItems.forEach(item => {
    item.addEventListener('click', () => {
      bnavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}


/**
 * Category Filter Pills for Unified Prestations
 */
function initPrestationCategoryFilters() {
  const filterBtns = document.querySelectorAll('#prestationFilters .filter-pill');
  const cards = document.querySelectorAll('#prestationsGrid .prest-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * File Upload Dropzone in Quote Form
 */
function initFileUploadDropzone() {
  const input = document.getElementById('pieceJointe');
  const badge = document.getElementById('fileSelectedBadge');
  const badgeName = document.getElementById('badgeFileName');
  const clearBtn = document.getElementById('clearFileBtn');
  const label = document.getElementById('fileUploadLabel');
  if (!input) return;

  input.addEventListener('change', () => {
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      if (badgeName) badgeName.textContent = `${file.name} (${sizeMb} Mo)`;
      if (badge) badge.style.display = 'flex';
      if (label) label.style.display = 'none';
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      input.value = '';
      if (badge) badge.style.display = 'none';
      if (label) label.style.display = 'flex';
    });
  }
}

/**
 * Apply dynamic Cabinet configuration from config.js
 */
function applyCabinetConfig() {
  const cfg = window.CABINET_CONFIG;
  if (!cfg) return;

  // Update telephone links
  const primaryPhone = cfg.phoneFixe || cfg.phone || '024 06 13 19';
  const primaryPhoneRaw = cfg.phoneFixeRaw || '+21324061319';
  const mobilePhone = cfg.mobile2 || cfg.mobile1 || '0699 37 84 44';

  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.href = `tel:${primaryPhoneRaw}`;
    if (a.classList.contains('detail-link') || a.classList.contains('footer-phone')) {
      a.textContent = `${primaryPhone} / ${mobilePhone}`;
    }
  });

  // Update email links
  if (cfg.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      if (!a.id || a.id !== 'modalDirectMailBtn') {
        a.href = `mailto:${cfg.email}`;
        if (a.textContent.includes('@')) {
          a.textContent = cfg.email;
        }
      }
    });
  }

  // Update WhatsApp links
  if (cfg.whatsappNumber) {
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
      const currentHref = a.getAttribute('href');
      const textParam = currentHref.includes('?text=') ? currentHref.substring(currentHref.indexOf('?text=')) : '';
      a.href = `https://wa.me/${cfg.whatsappNumber}${textParam}`;
    });
  }

  // Update Social & Maps links
  if (cfg.mapsUrl) {
    document.querySelectorAll('a.chip-map').forEach(a => a.href = cfg.mapsUrl);
  }
}

