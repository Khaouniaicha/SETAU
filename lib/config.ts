/**
 * Configuration Officielle du Bureau d'Études SETAU
 * Bureau d'Études Techniques Travaux Topographie et Aménagement Urbain
 * Responsable : Salhi Karim (صالحي كريم) - مهندس معتمد لدى الدولة
 * Localisation : Oued Athmania, Wilaya de Mila, Algérie
 */

export interface CabinetConfig {
  name: string;
  nameAr: string;
  shortName: string;
  leadName: string;
  leadNameAr: string;
  qualification: string;
  qualificationAr: string;
  title: string;
  titleAr: string;
  phone1: string;
  phone1Raw: string;
  phone2: string;
  phone2Raw: string;
  phone: string;
  phoneRaw: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  addressShort: string;
  addressShortAr: string;
  addressFull: string;
  addressFullAr: string;
  address: string;
  addressAr: string;
  city: string;
  cityAr: string;
  wilaya: string;
  wilayaAr: string;
  country: string;
  countryAr: string;
  officeHours: string;
  officeHoursAr: string;
  messengerUrl: string;
  facebookUrl: string;
  mapsSearchQuery: string;
}

export const CABINET_CONFIG: CabinetConfig = {
  name: "Bureau d'Études Techniques SETAU - Topographie & Aménagement Urbain",
  nameAr: "مكتب الأعمال والدراسات في الطوبوغرافيا والتهيئة العمرانية SETAU",
  shortName: "SETAU Topographie",
  leadName: "Salhi Karim",
  leadNameAr: "صالحي كريم",
  qualification: "Ingénieur Agréé par l'État",
  qualificationAr: "مهندس معتمد لدى الدولة",
  title: "Bureau d'Études Techniques Travaux Topographie GNSS GEO Survey",
  titleAr: "مكتب دراسات وأعمال طبوغرافية وهندسة مدنية بنظام GNSS",

  // Téléphones officiels (d'après la carte de visite)
  phone1: "0670 20 58 47",
  phone1Raw: "+213670205847",
  phone2: "0663 77 43 05",
  phone2Raw: "+213663774305",
  
  phone: "0670 20 58 47",
  phoneRaw: "+213670205847",
  phoneDisplay: "0670 20 58 47 / 0663 77 43 05",
  whatsappNumber: "213670205847",

  // Messagerie & Email
  email: "karimsalhitopo1@gmail.com",
  messengerUrl: "https://web.facebook.com/messages/t/100092332731640/",
  facebookUrl: "https://web.facebook.com/100092332731640/",

  // Localisation
  addressShort: "Oued Athmania, Mila",
  addressShortAr: "وادي العثمانية، ولاية ميلة",
  addressFull: "Centre Ville, Oued Athmania, Wilaya de Mila, Algérie",
  addressFullAr: "وادي العثمانية، ولاية ميلة، الجزائر",
  address: "Centre Ville, Oued Athmania, Wilaya de Mila",
  addressAr: "وادي العثمانية، ولاية ميلة",
  city: "Oued Athmania",
  cityAr: "وادي العثمانية",
  wilaya: "Mila (43)",
  wilayaAr: "ميلة (43)",
  country: "Algérie",
  countryAr: "الجزائر",

  // Horaires
  officeHours: "Tous les jours : 8h00 – 17h00 (Interventions terrain sur RDV)",
  officeHoursAr: "يومياً من الساعة 08:00 إلى 17:00 (تدخلات ميدانية حسب الموعد)",

  // Maps
  mapsSearchQuery: "https://www.google.com/maps/search/?api=1&query=Oued+Athmania+Mila+Algerie",
};
