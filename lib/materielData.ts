export interface MaterielItem {
  id: string;
  name: string;
  nameAr: string;
  brand: string;
  model: string;
  category: string;
  categoryAr: string;
  src: string;
  precision: string;
  precisionAr: string;
  specs: {
    labelFr: string;
    labelAr: string;
    valueFr: string;
    valueAr: string;
  }[];
  descriptionFr: string;
  descriptionAr: string;
  applicationsFr: string[];
  applicationsAr: string[];
}

export const SETAU_MATERIEL: MaterielItem[] = [
  {
    id: 'leica-gs16',
    name: 'Récepteur GNSS RTK SmartAntenna Leica Viva GS16',
    nameAr: 'نظام الاستقبال الفضائي الذكي GNSS RTK Leica Viva GS16',
    brand: 'Leica Geosystems (Suisse)',
    model: 'Viva GS16 GNSS RTK SmartAntenna',
    category: 'Positionnement Satellitaire GNSS',
    categoryAr: 'أنظمة الرصد الفضائي والأقمار الصناعية',
    src: '/materiel/leica-gs16.jpg',
    precision: 'RTK Horizontale : 8 mm + 1 ppm | Verticale : 15 mm + 1 ppm',
    precisionAr: 'دقة RTK أفقية : 8 ملم + 1 ppm | دقة شاقولية : 15 ملم + 1 ppm',
    specs: [
      { labelFr: 'Canaux de réception', labelAr: 'قنوات الرصد', valueFr: '555 canaux matériels multi-constellations', valueAr: '555 قناة رصد متزامنة' },
      { labelFr: 'Constellations', labelAr: 'الأقمار المدعومة', valueFr: 'GPS, GLONASS, Galileo, BeiDou', valueAr: 'GPS، GLONASS، Galileo، BeiDou' },
      { labelFr: 'Technologie de calcul', labelAr: 'تقنية المعالجة', valueFr: 'Leica RTKplus & SmartCheck', valueAr: 'خوارزمية RTKplus وتدقيق SmartCheck' },
      { labelFr: 'Étanchéité & Résistance', labelAr: 'مقاومة الصدمات والظروف', valueFr: 'Norme IP68 (chocs, poussière, immersion)', valueAr: 'معيار IP68 المقاوم للغبار والغمر المائي' },
      { labelFr: 'Autonomie & Connexions', labelAr: 'الاتصال والبطارية', valueFr: 'UHF Radio, Modem 4G LTE, Bluetooth', valueAr: 'راديو UHF ومودم 4G وبلوتوث مدمج' },
    ],
    descriptionFr: `Le récepteur Leica Viva GS16 est une antenne intelligente GNSS ultra-compacte dotée de 555 canaux. Équipé de la technologie innovante Leica RTKplus, il s'adapte automatiquement et en continu aux conditions satellites changeantes en sélectionnant les meilleurs signaux disponibles. La technologie SmartCheck effectue une double vérification continue de la position en arrière-plan pour garantir une fiabilité métrologique de 99.99%. Cet instrument permet au bureau SETAU d'opérer des levés parcellaires, des délimitations cadastrales et des polygonales de base sur de vastes étendues avec une précision centimétrique instantanée (8 mm en horizontal).`,
    descriptionAr: `يُعد جهاز Leica Viva GS16 هوائياً ذكياً فائق التطور لتحديد المواقع الفضائية بدقة سنتيمترية فورية (8 ملم أفقياً و15 ملم عمودياً في وضع RTK). يحتوي على 555 قناة رصد تدعم جميع المجموعات الفضائية العالمية (GPS، GLONASS، Galileo، BeiDou). مزود بتقنية RTKplus التي تتعرف تلقائياً على أنقى الإشارات الفضائية وتقلل التشويش. تستخدمه فرق مكتب SETAU في تثبيت النقاط المرجعية للشبكات الجيوديسية، مسح المساحات الشاسعة لمشاريع الطرق والسكك والري، والمسح العقاري الميداني المعتمد لدى مصالح مسح الأراضي والمحافظة العقارية.`,
    applicationsFr: [
      'Levés topographiques de grande envergure (routes, voies ferrées, conduites)',
      'Implantation rapide et géoréférencement absolu en coordonnées Lambert / UTM',
      'Bornage contradictoire de parcelles agricoles et lotissements urbains',
      'Création et densification de réseaux géodésiques de base'
    ],
    applicationsAr: [
      'الرفع الطوبوغرافي للمشاريع الخطية الكبرى (الطرق، السكك الحديدية، وشبكات الري)',
      'التوقيع الميداني السريع والإسناد الجغرافي بنظام الإحداثيات الرسمي (Lambert / UTM)',
      'تثبيت وتحديد حدود العقارات الفلاحية والحضرية والتجزئات السكنية',
      'إنشاء وتكثيف شبكات الرصد المثلثية الجيوديسية المرجعية'
    ]
  },
  {
    id: 'leica-ts07',
    name: 'Station Totale Électronique Leica FlexLine TS07',
    nameAr: 'محطة الرصد الشاملة الإلكترونية Leica FlexLine TS07',
    brand: 'Leica Geosystems (Suisse)',
    model: 'FlexLine TS07 High-Precision Total Station',
    category: 'Métrologie & Auscultation d\'Ouvrages',
    categoryAr: 'القياسات المترولوجية ومراقبة المنشآت',
    src: '/materiel/leica-station.jpg',
    precision: 'Prisme : 1 mm + 1.5 ppm | AutoHeight intégrée | Précision 1"',
    precisionAr: 'على العاكس : 1 ملم + 1.5 ppm | قياس آلي لارتفاع الجهاز | دقة 1 ثانية',
    specs: [
      { labelFr: 'Compensateur', labelAr: 'نظام الموازنة الآلي', valueFr: 'Quadri-axial électronique continu (0.5")', valueAr: 'موازنة إلكترونية رباعية المحاور مستمرة' },
      { labelFr: 'Mesure de hauteur', labelAr: 'قياس ارتفاع المحطة', valueFr: 'Fonction AutoHeight laser intégrée', valueAr: 'قياس ليزري آلي لارتفاع المحطة (AutoHeight)' },
      { labelFr: 'Formats d\'export DAO', labelAr: 'صيغ تصدير البيانات', valueFr: 'DXF, DWG, LandXML, ASCII, GSI', valueAr: 'DXF، DWG، LandXML، ASCII متوافقة مع Covadis' },
      { labelFr: 'Accessoires de support', labelAr: 'ملحقات التثبيت', valueFr: 'Trépied lourd bois stabilisé, embases prismatiques', valueAr: 'حامل خشبي ثقيل معالج وقواعد عواكس معتمدة' },
      { labelFr: 'Télescope & Grossissement', labelAr: 'المنظار وقوة التكبير', valueFr: 'Optique multicouche 30x à haute luminosité', valueAr: 'منظار عالي السطوع بقوة تكبير 30 ضعفاً' },
    ],
    descriptionFr: `La station totale électronique Leica FlexLine TS07 est conçue pour les missions exigeant une stabilité thermique et mécanique rigoureuse. Équipée de la technologie AutoHeight (mesure automatique de la hauteur d'instrument par laser), d'un compensateur quadri-axial et d'une précision angulaire de 1 à 2 secondes, elle élimine les risques d'erreurs humaines lors de la mise en station. Elle exporte directement les nuages de points vers Covadis et AutoCAD. C'est l'outil privilégié par l'ingénieur Karim Salhi pour l'auscultation d'ouvrages d'art, le suivi géométrique de barrages et le contrôle de conformité des réseaux d'assainissement.`,
    descriptionAr: `محطة رصد إلكترونية متطورة مخصصة للأعمال التي تتطلب استقراراً ميكانيكياً ومناخياً صارماً في الميدان. مزودة بتقنية AutoHeight لقياس ارتفاع الجهاز ليزرياً بشكل آلي، ونظام تعويض رباعي المحاور يصحح ميل الجهاز تلقائياً. تتيح تصدير ملفات القياس المباشرة بصيغ متوافقة مع برمجيات التصميم الهندسي (AutoCAD و Covadis). يستخدمها مكتب SETAU في مراقبة تشوهات المنشآت الهندسية، مسارات شبكات التطهير ومياه الشرب، والتأكد من مطابقة الأشغال للمخططات المعتمدة.`,
    applicationsFr: [
      'Contrôle de verticalité et auscultation géométrique périodique des structures',
      'Levés de plans de recollement souterrains et réseaux sous concession',
      'Implantation fine de gabarits ferroviaires, tabliers de ponts et dalots',
      'Polygonales de haute précision et fermetures tachéométriques strictes'
    ],
    applicationsAr: [
      'مراقبة الشاقولية ورصد أي انزياح أو هبوط في المباني والمنشآت الهندسية',
      'إعداد مخططات المطابقة (Plans de récolement) للشبكات تحت الأرضية',
      'التوقيع الدقيق لمنشآت السكك الحديدية والجسور والمحولات',
      'حساب المضلعات الطوبوغرافية المغلقة بأعلى معاملات الدقة'
    ]
  }
];
