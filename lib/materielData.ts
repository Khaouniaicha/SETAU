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
    value: string;
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
    precisionAr: 'دقة أفقية : 8 ملم + 1 ppm | دقة شاقولية : 15 ملم + 1 ppm',
    specs: [
      { labelFr: 'Canaux de réception', labelAr: 'قنوات الرصد', value: '555 canaux matériels' },
      { labelFr: 'Constellations', labelAr: 'الأقمار المدعومة', value: 'GPS, GLONASS, Galileo, BeiDou' },
      { labelFr: 'Technologie de calcul', labelAr: 'تقنية المعالجة', value: 'Leica RTKplus & SmartCheck' },
      { labelFr: 'Étanchéité & Résistance', labelAr: 'مقاومة الصدمات والظروف', value: 'Norme IP68 (chocs, poussière, immersion)' },
      { labelFr: 'Autonomie & Connexions', labelAr: 'الاتصال والبطارية', value: 'UHF Radio, Modem 4G LTE, Bluetooth' },
    ],
    descriptionFr: `Le récepteur Leica Viva GS16 est une antenne intelligente GNSS ultra-compacte et autonome dotée de 555 canaux. Équipé de la technologie innovante Leica RTKplus, il s'adapte automatiquement et en continu aux conditions satellites changeantes en sélectionnant les meilleurs signaux disponibles. La technologie SmartCheck effectue une double vérification continue de la position en arrière-plan pour garantir une fiabilité métrologique de 99.99%. Cet instrument permet au bureau SETAU d'opérer des levés parcellaires, des délimitations cadastrales et des polygonales de base sur de vastes étendues (voies ferrées, autoroutes, réseaux d'irrigation) avec une précision centimétrique instantanée, même sous une végétation dense ou en environnement urbain complexe.`,
    descriptionAr: `يُعد جهاز Leica Viva GS16 الهوائي الذكي الأكثر تطوراً في العالم لتحديد المواقع الفضائية بدقة مليمترية وسنتيمترية فورية. يحتوي على 555 قناة رصد تدعم جميع الأقمار الصناعية العالمية (GPS الأمريكي، GLONASS الروسي، Galileo الأوروبي، و BeiDou الصيني). مزود بتقنية Leica RTKplus التي تتعرف تلقائياً على أنقى الإشارات الفضائية وتقلل التشويش في البيئات الصعبة. تستخدمه فرق مكتب SETAU في تثبيت النقاط المرجعية للشبكات المثلثية، مسح المساحات الشاسعة لمشاريع السكك الحديدية والطرق السريعة، والتقسيم العقاري الميداني بدقة مطلقة معتمدة قانونياً لدى مصالح مسح الأراضي والمحافظة العقارية.`,
    applicationsFr: [
      'Levés topographiques de grande envergure (infrastructures linéaires, voies ferrées, autoroutes)',
      'Implantation rapide et géoréférencement absolu en coordonnées Lambert / UTM',
      'Bornage contradictoire de parcelles agricoles et lotissements urbains',
      'Création et densification de réseaux géodésiques de base'
    ],
    applicationsAr: [
      'الرفع الطوبوغرافي للمشاريع الخطية الكبرى (السكك الحديدية، الطرق الوطنية، وقنوات المياه)',
      'التوقيع الميداني الفوري والإسناد الجغرافي بنظام الإحداثيات الرسمي (Lambert / UTM)',
      'تثبيت وتحديد حدود العقارات الفلاحية والحضرية والتجزئات السكنية',
      'إنشاء وتكثيف شبكات الرصد المثلثية الجيوديسية ذات الدقة العالية'
    ]
  },
  {
    id: 'leica-ts03',
    name: 'Station Totale Manuelle Leica FlexLine TS03',
    nameAr: 'محطة الرصد الشاملة اليدوية عالية الدقة Leica FlexLine TS03',
    brand: 'Leica Geosystems (Suisse)',
    model: 'FlexLine TS03 Manual Total Station',
    category: 'Mesure Angulaire & Électro-optique',
    categoryAr: 'محطات القياس الزاوي والمسافي المتكاملة',
    src: '/materiel/leica-ts03.jpg',
    precision: 'Prisme : 1 mm + 1.5 ppm | Angulaire : 2" (seconde d\'arc)',
    precisionAr: 'على العاكس : 1 ملم + 1.5 ppm | دقة الزوايا : 2 ثانية قوسية',
    specs: [
      { labelFr: 'Précision angulaire', labelAr: 'الدقة الزاوية', value: '2" (seconde d\'arc)' },
      { labelFr: 'Portée sans prisme (EDM)', labelAr: 'مدى القياس بدون عاكس', value: 'Jusqu\'à 500 mètres (R500)' },
      { labelFr: 'Portée sur prisme standard', labelAr: 'مدى القياس مع عاكس', value: '3 500 mètres (GPR1)' },
      { labelFr: 'Logiciel de terrain embarqué', labelAr: 'البرمجيات الميدانية', value: 'Leica FlexField intuitif & puissant' },
      { labelFr: 'Mémoire & Transfert', labelAr: 'الذاكرة والمنافذ', value: 'Clé USB, Bluetooth, RS232' },
    ],
    descriptionFr: `La station totale Leica FlexLine TS03 est un instrument de mesure tachéométrique de haute volée conçu pour relever les défis quotidiens de l'arpentage et du génie civil. Dotée d'un distancemètre électro-optique (EDM) ultra-rapide capable de mesurer des cibles distantes sans réflecteur jusqu'à 500 m, elle combine une précision angulaire de 2 secondes à une optique d'une clarté remarquable. Son logiciel embarqué Leica FlexField guide les opérateurs pas à pas dans toutes les opérations géométriques : cheminement polygonal, relèvement dans l'espace, calcul de surfaces et de volumes (MNT), alignements d'axes et calculs de déports. Elle constitue le pilier de précision du bureau SETAU sur les chantiers de construction de bâtiments, ouvrages d'art et aménagements VRD.`,
    descriptionAr: `تعتبر المحطة الشاملة Leica FlexLine TS03 مرجعاً عالمياً في دقة وموثوقية القياسات الميدانية للبناء والهندسة المدنية. تجمع بين قياس المسافات عالي السرعة بواسطة الليزر بدون عاكس حتى 500 متر والقياس على العواكس حتى 3500 متر بدقة مليمترية (1 ملم + 1.5 جزء في المليون). مزودة ببرنامج Leica FlexField الغني بالوظائف الحسابية الميدانية مثل توقيع النقاط، الرفع الطوبوغرافي، حساب الإحداثيات بالتقاطع، وتوقيع المنحنيات والقواعد الخرسانية. يعتمد عليها مكتب SETAU في ضبط استقامة الهياكل الخرسانية والمعدنية المعقدة، متابعة مناسيب الطرقات، وحساب كميات الحفر والردم بدقة متناهية.`,
    applicationsFr: [
      'Implantation micrométrique d\'axes de bâtiments, semelles et voiles béton',
      'Calage d\'éléments préfabriqués et structures métalliques industrielles',
      'Levés topographiques de détail urbain et architectural haute définition',
      'Calcul immédiat de cubatures et de nivellement de plateformes'
    ],
    applicationsAr: [
      'التوقيع المليمتر لمحاور البنايات، القواعد الخرسانية والجدران الحاملة',
      'ضبط وتثبيت الهياكل المعدنية والصناعية الثقيلة ميكرومترياً',
      'الرفع الطوبوغرافي التفصيلي للنسيج العمراني والمعالم المعمارية',
      'الحساب الميداني الفوري لمناسيب التسوية ومكعبات الأتربة'
    ]
  },
  {
    id: 'leica-station-totale',
    name: 'Tachéomètre Électronique Leica Geosystems',
    nameAr: 'محطة الرصد الطوبوغرافي الإلكترونية الشاملة Leica Geosystems',
    brand: 'Leica Geosystems (Suisse)',
    model: 'Station Totale Électronique Professionnelle',
    category: 'Métrologie & Auscultation d\'Ouvrages',
    categoryAr: 'القياسات المترولوجية ومراقبة المنشآت',
    src: '/materiel/leica-station.jpg',
    precision: 'Compensation quadri-axiale automatique (précision 0.5")',
    precisionAr: 'تسوية آلية رباعية المحاور (بدقة 0.5 ثانية)',
    specs: [
      { labelFr: 'Compensateur', labelAr: 'نظام الموازنة الآلي', value: 'Quadri-axial électronique continu' },
      { labelFr: 'Plombage de station', labelAr: 'التمركز والتسامت', value: 'Plomb laser coaxial de précision' },
      { labelFr: 'Formats d\'export DAO', labelAr: 'صيغ تصدير البيانات', value: 'DXF, DWG, ASCII, LandXML, GSI' },
      { labelFr: 'Accessoires de support', labelAr: 'ملحقات التثبيت', value: 'Trépied lourd bois stabilisé, embases prismatiques' },
      { labelFr: 'Télescope & Grossissement', labelAr: 'المنظار وقوة التكبير', value: 'Optique multicouche 30x à haute luminosité' },
    ],
    descriptionFr: `Cette station totale électronique Leica Geosystems est conçue pour les missions requérant une stabilité thermique et mécanique sans compromis. Équipée d'un compensateur quadri-axial automatique et d'un plomb laser haute précision, elle élimine les erreurs de calage même sur des sols instables ou soumis aux vibrations d'engins de chantier. Elle permet des exportations directes vers les logiciels de CAO/DAO du bureau (AutoCAD, Covadis, Mensura) sans risque d'erreur de saisie manuelle. C'est l'outil privilégié par l'ingénieur Karim Salhi pour le contrôle métrologique des ouvrages d'art, le suivi géométrique de barrages, les relevés de réseaux d'assainissement et la vérification des tassements différentiels.`,
    descriptionAr: `محطة رصد إلكترونية متطورة مخصصة للأعمال التي تتطلب استقراراً ميكانيكياً ومناخياً صارماً في الميدان. مزودة بنظام تعويض وتوازن إلكتروني رباعي المحاور يصحح ميل الجهاز تلقائياً وبشكل مستمر، بالإضافة إلى شاقول ليزري لتمركز الجهاز بدقة متناهية فوق المعالم الأرضية. تتيح تصدير ملفات القياس المباشرة بصيغ متوافقة مع برمجيات التصميم الهندسي (AutoCAD و Covadis) لضمان تدفق رقمي آمن بنسبة 100%. يستخدمها مكتب SETAU في مراقبة تشوهات المنشآت الكبرى، مسارات شبكات التطهير ومياه الشرب، والتأكد من مطابقة الأشغال للمخططات المعتمدة.`,
    applicationsFr: [
      'Contrôle de verticalité et auscultation géométrique périodique des structures',
      'Levés de plans de recollement souterrains et réseaux sous concession',
      'Implantation fine de gabarits ferroviaires et ponts',
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
