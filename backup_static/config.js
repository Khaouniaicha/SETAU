/**
 * Configuration Officielle du Cabinet d'Ingénierie et d'Expertise Foncière
 * Géomètre-Expert Foncier Agréé OGEF : Farid Khelil (خليل فريد)
 * Agrément OGEF N° 865
 */
const CABINET_CONFIG = {
  // Identité Officielle
  name: "Cabinet d'Ingénierie et d'Expertise Foncière",
  nameAr: "مكتب الهندسة والخبرة العقارية",
  expertName: "Farid Khelil",
  expertNameAr: "خليل فريد",
  title: "Géomètre-Expert Foncier Agréé OGEF",
  titleAr: "مهندس خبير عقاري معتمد",
  agrementOgef: "865",
  agrementText: "Agrément OGEF N° 865",
  agrementTextAr: "رقم الاعتماد لدى هيئة OGEF : 865",

  // Téléphones
  phoneFixe: "024 06 13 19",
  phoneFixeRaw: "+21324061319",
  phoneFixeDisplay: "+213 (0) 24 06 13 19",

  mobile1: "0558 56 71 38",
  mobile1Raw: "+213558567138",

  mobile2: "0699 37 84 44",
  mobile2Raw: "+213699378444",

  // WhatsApp officiel
  whatsappNumber: "213699378444",

  // Messagerie & Localisation
  email: "faridkhelil16@gmail.com",
  
  // Adresse
  addressShort: "Kerkouba, Koléa, Tipaza",
  addressShortAr: "كركوبة - القليعة - تيبازة",
  addressFull: "Résidence El Sahel Kerkouba, Derrière la banque CPA, Koléa, Wilaya de Tipaza",
  addressFullAr: "إقامة الساحل كركوبة، خلف بنك CPA، كركوبة - القليعة - تيبازة",
  city: "Koléa (القليعة)",
  wilaya: "Tipaza (ولاية تيبازة)",
  country: "Algérie",

  // Horaires de travail
  officeHours: "Tous les jours sauf le vendredi : 9h00 – 16h30",
  officeHoursAr: "يومياً عدا الجمعة من الساعة 09:00 إلى 16:30",

  // Localisation Google Maps
  mapsUrl: "https://maps.app.goo.gl/wJWnDGQdRsHwPk6o6?g_st=aw",
  facebookUrl: "https://facebook.com",
  linkedinUrl: "https://linkedin.com",

  // Service d'envoi de formulaire en ligne (optionnel)
  formEndpoint: ""
};

if (typeof window !== 'undefined') {
  window.CABINET_CONFIG = CABINET_CONFIG;
}
