/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProductItem, ProjectItem, TestimonialItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'cctv',
    iconName: 'Camera',
    title: {
      ar: 'تركيب كاميرات المراقبة CCTV',
      fr: 'Installation de caméras CCTV'
    },
    description: {
      ar: 'حلول مراقبة احترافية ومستمرة بأحدث تقنيات Hikvision و EZVIZ مع البث المباشر والمتابعة عبر الهاتف.',
      fr: 'Solutions de surveillance professionnelles et continues avec les technologies Hikvision et EZVIZ avec flux en direct.'
    },
    details: {
      ar: [
        'كاميرات عالية الدقة (IP & Analog) بدقة تصل إلى 8 ميجابكسل',
        'رؤية ليلية ملونة ذكية (Smart Hybrid Light)',
        'ربط كامل وشبكي مع هواتف العملاء لمتابعة البث في أي وقت',
        'عقود صيانة دورية للمؤسسات والشركات والمنازل'
      ],
      fr: [
        'Caméras haute définition (IP et analogiques) jusqu\'à 8 MP',
        'Vision nocturne couleur intelligente (Smart Hybrid Light)',
        'Liaison réseau complète avec les smartphones pour un accès en direct',
        'Contrats de maintenance périodique pour entreprises et résidences'
      ]
    }
  },
  {
    id: 'ezviz-smart',
    iconName: 'Cpu',
    title: {
      ar: 'أنظمة EZVIZ الذكية',
      fr: 'Systèmes intelligents EZVIZ'
    },
    description: {
      ar: 'أجهزة أمان ذكية لاسلكية سهلة التحكم تشمل الحساسات، الأقفال، وكاميرات الواي فاي الداخلية والخارجية.',
      fr: 'Dispositifs de sécurité sans fil faciles à contrôler comprenant capteurs, verrous et caméras Wi-Fi.'
    },
    details: {
      ar: [
        'كاميرات متحركة تتبع الحركة بدقة فائقة 360 درجة',
        'اتصال لاسلكي بالكامل بشبكة الواي فاي المنزلية',
        'تنبيهات فورية على الهاتف عند رصد أي حركة مشبوهة',
        'دعم التخزين السحابي الآمن وتخزين كرت الذاكرة SD'
      ],
      fr: [
        'Caméras rotatives avec suivi intelligent à 360 degrés',
        'Connexion 100% sans fil au Wi-Fi domestique',
        'Alertes instantanées sur smartphone lors de détection',
        'Support du stockage cloud sécurisé et carte microSD locale'
      ]
    }
  },
  {
    id: 'solar',
    iconName: 'Sun',
    title: {
      ar: 'أنظمة الطاقة الشمسية المتكاملة',
      fr: 'Installations Solaires Intégrées'
    },
    description: {
      ar: 'تصميم وتركيب شبكات طاقة شمسية ذكية ومستدامة تلبي احتياجات الطاقة للمنازل والمزارع والشركات بدقة عالية.',
      fr: 'Conception et installation de panneaux solaires performantes pour répondre à vos besoins résidentiels ou commerciaux.'
    },
    details: {
      ar: [
        'ألواح شمسية عالية الكفاءة (Tier 1 Mono PERC)',
        'عواكس هجينة مع ذكاء اصطناعي (Hybrid Smart Inverters)',
        'أنظمة بطاريات ليتيوم بموثوقية فائقة وعمر افتراضي طويل',
        'هياكل تثبيت معدنية مجلفنة مقاومة لأشد الظروف الجوية'
      ],
      fr: [
        'Panneaux solaires monocristallins à haute efficacité (Tier 1)',
        'Onduleurs hybrides intelligents avec gestion optimisée',
        'Banques de batteries au Lithium haute durabilité',
        'Structures en acier galvanisé de haute résistance thermique'
      ]
    }
  },
  {
    id: 'smarthome',
    iconName: 'Home',
    title: {
      ar: 'أنظمة المنازل الذكية',
      fr: 'Systèmes de Smart Home'
    },
    description: {
      ar: 'تحويل منزلك الكلاسيكي إلى بيئة ذكية تفاعلية تمكنك من السيطرة التامة على الإضاءة، التكييف، والستائر بلمسة واحدة.',
      fr: 'Transformez votre domicile en un espace connecté pour contrôler l\'éclairage, la climatisation et les stores.'
    },
    details: {
      ar: [
        'لوحات جدارية تعمل باللمس وبتصميم فاخر يتناغم مع الهدوء البصري للمنزل',
        'التحكم الصوتي المتكامل عبر مساعد Google و Alexa',
        'سيناريوهات أتمتة مبرمجة مسبقاً (مثال: نمط السفر، نمط السينما)',
        'أنظمة توفير الطاقة الذكية للتحكم التلقائي بالأحمال'
      ],
      fr: [
        'Interrupteurs tactiles haut de gamme au design épuré',
        'Contrôle vocal transparent via Google Assistant et Alexa',
        'Triggers d\'ambiance (Scénario de départ, Mode Cinéma)',
        'Gestion d\'énergie optimale avec régulation automatique'
      ]
    }
  },
  {
    id: 'repairs',
    iconName: 'Wrench',
    title: {
      ar: 'صيانة الحاسبات والهواتف',
      fr: 'Réparation PC et Smartphones'
    },
    description: {
      ar: 'مركز صيانة متخصص ومجهز بأدق الأدوات لفحص وإصلاح اللابتوبات، الحواسيب الشخصية، والهواتف الذكية باحترافية وسرعة.',
      fr: 'Centre de réparation équipé pour diagnostiquer et réparer vos ordinateurs, PC portables et smartphones.'
    },
    details: {
      ar: [
        'إصلاح الأعطال الدقيقة على مستوى البورد والـ IC والدوائر الإلكترونية',
        'تبديل شاشات أصلية، وبطاريات معتمدة لضمان الأداء',
        'تنصيب وتثبيت أنظمة التشغيل وحل مشاكل السيرفرات والبرمجيات للشركات',
        'استعادة البيانات وتأمين الملفات الحساسة بأعلى مستويات الخصوصية'
      ],
      fr: [
        'Microsoudure et réparation carte mère/IC de haute précision',
        'Remplacement d\'écrans d\'origine et batteries homologuées',
        'Installation d\'OS et dépannage système pour entreprises',
        'Récupération de données perdues avec stricte confidentialité'
      ]
    }
  },
  {
    id: 'networking',
    iconName: 'Network',
    title: {
      ar: 'تأثيث وتجهيز الشبكات المتكاملة',
      fr: 'Câblage et Réseaux Informatiques'
    },
    description: {
      ar: 'تخطيط، تركيب، وصيانة شبكات الإنترنت والاتصال السلكية واللاسلكية للمنازل والمباني الإدارية الكبرى ومقرات العمل.',
      fr: 'Planification, câblage et déploiement de réseaux locaux et Wi-Fi pour résidences et infrastructures commerciales.'
    },
    details: {
      ar: [
        'تمديد كابلات الفايبر والـ Ethernet الفئة السادسة (Cat6) بأعلى مستويات التنظيم',
        'تركيب وتجهيز موجهات وموزعات الشبكة الذكية من كبرى الشركات',
        'أتمتة وتغطية شبكة Wi-Fi موحدة (Mesh) تضمن عدم انقطاع الإرسال في أي ركن',
        'تأمين جدران الحماية لحماية البيانات والأعمال من الاختراق الداخلي والخارجي'
      ],
      fr: [
        'Câblage structuré Ethernet Cat6 et fibre optique ultra ordonné',
        'Configuration de switchs et routeurs des plus grandes marques',
        'Déploiement de Wi-Fi Mesh unifié pour une couverture totale sans coupure',
        'Sécurisation des pare-feu contre les cyberattaques et accès non autorisés'
      ]
    }
  },
  {
    id: 'audio-systems',
    iconName: 'Volume2',
    title: {
      ar: 'أنظمة الصوتيات والنداء العام',
      fr: 'Systèmes Audio Professionnels'
    },
    description: {
      ar: 'تركيب أنظمة صوتية داخلية وخارجية في المساجد، المدارس، الفنادق، والحدائق بنقاء صوتي ودقة توزيع لا تضاهى.',
      fr: 'Conception et pose de systèmes de sonorisation haut de gamme pour édifices, mosquées, écoles et hôtels.'
    },
    details: {
      ar: [
        'مكبرات صوت ومضخمات صوتية (Amplifiers) ذات طاقة عالية ومقاومة للظروف الاستثنائية',
        'موزعات رقمية ذكية تضمن نقاوة الصوت وخلوه من التشويش أو الصدى المزعج',
        'أنظمة نداء مركبي مدمجة مع أنظمة الحريق لمزيد من الأمان والسلامة في المنشآت',
        'توزيع الصوت في مساحات متعددة مع إمكانية التحكم بمستوى كل منطقة على حدة'
      ],
      fr: [
        'Enceintes et amplificateurs haute puissance résistants aux intempéries',
        'Filtres numériques pour éliminer l\'écho et saturer la clarté sonore',
        'Systèmes d\'annonces intégrés aux alarmes d\'incendie pour la sûreté',
        'Multi-room audio avec réglage de volume séparé par zone'
      ]
    }
  },
  {
    id: 'three-d-print',
    iconName: 'Layers',
    title: {
      ar: 'الطباعة ثلاثية الأبعاد وصيانتها',
      fr: 'Impression 3D et Maintenance'
    },
    description: {
      ar: 'تأثيث وتوفير طابعات 3D وقطع الغيار المناسبة لها، بالإضافة لتقديم استشارات وتصميم النماذج وتصنيعها.',
      fr: 'Fourniture d\'imprimantes 3D, pièces de rechange, conseil en modélisation et impression de prototypes.'
    },
    details: {
      ar: [
        'طابعات ثلاثية الأبعاد عالية الدقة للنماذج الهندسية والطبية',
        'صيانة لوحات التحكم ومعايرة الرأس الصهر (Nozzle) بدقة ميكرومترية',
        'توفير مستهلكات الطباعة الصديقة للبيئة PLA و ABS و PETG بألوان متنوعة',
        'تحويل تصاميم CAD ثنائية الأبعاد لكتل فيزيائية ملموسة بجودة تشطيب راقية'
      ],
      fr: [
        'Imprimantes 3D de précision pour prototypes industriels et médicaux',
        'Maintenance de carte-mère 3D et calibration du plateau micrométrique',
        'Fourniture de filaments écologiques PLA, ABS, PETG de divers coloris',
        'Conversion dynamique de fichiers CAD en objets réels d\'excellente finition'
      ]
    }
  },
  {
    id: 'graduation-support',
    iconName: 'GraduationCap',
    title: {
      ar: 'دعم ومشاريع التخرج الهندسية',
      fr: 'Support et Projets de Fin d\'Études'
    },
    description: {
      ar: 'مرافقة وتوفير الدعم التقني لطلبة كليات الهندسة وعلوم الحاسبات لتنفيذ مشاريعهم الابتكارية من الألف إلى الياء.',
      fr: 'Accompagnement théorique et pratique des étudiants en ingénierie et informatique pour accomplir leurs projets.'
    },
    details: {
      ar: [
        'توفير وتجميع القطع الإلكترونية النادرة كـ Arduino أو Raspberry Pi وغيرها',
        'برمجة النظم المدمجة والأكواد المعقدة تحت إشراف مهندسين مختصين',
        'تصنيع واجهات ومتحكمات الروبوتات وتطبيقات الويب التجريبية المصاحبة للمشروع',
        'جلسات مراجعة تدريبية لمساعدة الطلاب على مناقشة وثيقة تخرجهم بجدارة وثقة'
      ],
      fr: [
        'Approvisionnement de modules électroniques rares (Arduino, Raspberry Pi)',
        'Codage de systèmes embarqués complexes encadré par des ingénieurs experts',
        'Impression de châssis de robots et développement d\'apps d\'accompagnement',
        'Séances de simulation de soutenance pour renforcer la confiance des étudiants'
      ]
    }
  }
];

export const productsData: ProductItem[] = [
  {
    id: 'ds-2cd1043g2-liu',
    category: 'cctv',
    title: {
      ar: 'كاميرا Hikvision IP بدقة 4MP مدمجة الصوت',
      fr: 'Caméra Hikvision IP 4MP Micro Intégré'
    },
    description: {
      ar: 'كاميرا خارجية احترافية بدقة 4 ميجابكسل، تتميز بتقنية الإضاءة الهجينة الذكية للحصول على رؤية ليلية ملونة وفلترة ذكية للحد من الإنذارات الكاذبة.',
      fr: 'Caméra extérieure de pointe 4MP avec technologie Smart Hybrid Light pour une vision nocturne en couleur filtrant intelligemment les fausses alertes.'
    },
    price: 51000,
    oldPrice: 58000,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=85',
    tags: {
      ar: ['كاميرا خارجية', 'صوت مدمج', 'مقاوم للماء IP67'],
      fr: ['Extérieur', 'Audio', 'Étanche IP67']
    },
    specs: [
      { label: { ar: 'الدقة', fr: 'Résolution' }, value: { ar: '4 ميجابكسل (2560 × 1440)', fr: '4 Megapixels (2560 x 1440)' } },
      { label: { ar: 'تقنية الإضاءة', fr: 'Technologie d\'éclairage' }, value: { ar: 'ضوء هجين ذكي (رؤية ليلية ملونة 30 متر)', fr: 'Smart Hybrid Light (Couleur 30m)' } },
      { label: { ar: 'الصوت', fr: 'Audio' }, value: { ar: 'مايكروفون مدمج عالي الوضوح وصوت تفاعلي', fr: 'Microphone haute fidélité intégré' } },
      { label: { ar: 'التحمل والتغذية', fr: 'Protection / Alim' }, value: { ar: 'مقاومة الماء والغبار عيار IP67 ومغذاة عبر PoE', fr: 'Étanche IP67 et support PoE intelligent' } }
    ],
    isPopular: true
  },
  {
    id: 'ds-2cd2043g2-liu',
    category: 'cctv',
    title: {
      ar: 'كاميرا Hikvision IP 4MP ذكية ألترا لايت',
      fr: 'Caméra Hikvision IP 4MP Ultra-Lite Pro'
    },
    description: {
      ar: 'أعلى دقة وثبات لفرز الأشخاص والمركبات مع دعم تقنية AcuSense، وفتحة لتثبيت كرت ذاكرة وضوء هجين فائق السطوع.',
      fr: 'Précision maximale pour classifier humains/véhicules avec la technologie AcuSense, fente pour carte SD et lumière blanche intégrée.'
    },
    price: 77000,
    oldPrice: 85000,
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=85',
    tags: {
      ar: ['تقنية AcuSense', 'رؤية ليلية 40م', 'كاربون ومعدن'],
      fr: ['AcuSense Pro', 'Vision 40m', 'Boîtier Métal/Carbone']
    },
    specs: [
      { label: { ar: 'الدقة', fr: 'Résolution' }, value: { ar: '4 ميجابكسل فائقة التباين', fr: '4 MP Contrast élevé' } },
      { label: { ar: 'الذكاء الاصطناعي', fr: 'IA embarquée' }, value: { ar: 'كشف الحركة والفرز والتمييز الذكي', fr: 'Classification Humains/Véhicules' } },
      { label: { ar: 'التخزين المحلي', fr: 'Stockage SD' }, value: { ar: 'دعم منفذ كرت الذاكرة حتى 256 جيجابايت', fr: 'Emplacement carte micro SD jusqu\'à 256GB' } },
      { label: { ar: 'الرؤية الليلية', fr: 'Vision Nocturne' }, value: { ar: 'ملونة حتى مسافة 40 متر بالضوء التكميلي الدافئ', fr: 'Couleur intégrale jusqu\'à 40 mètres' } }
    ]
  },
  {
    id: 'ezviz-c6n',
    category: 'smart',
    title: {
      ar: 'كاميرا EZVIZ C6N الذكية الدوارة',
      fr: 'Caméra EZVIZ C6N Robotisée Wi-Fi'
    },
    description: {
      ar: 'كاميرا مراقبة ذكية داخلية ممتازة لحماية الأطفال ومتابعة منزلك بفضل التغطية الكاملة 360 درجة والصوت ثنائي الاتجاه.',
      fr: 'Excellente caméra rotative de surveillance intérieure, idéale pour surveiller les enfants avec communication bidirectionnelle.'
    },
    price: 38000,
    oldPrice: 45000,
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=85',
    tags: {
      ar: ['دوران 360°', 'تتبع ذكي', 'صوت ثنائي الاتجاه'],
      fr: ['Rotation 360°', 'Suivi IA', 'Audio Bidirectionnel']
    },
    specs: [
      { label: { ar: 'الدقة والعدسة', fr: 'Optique et Résolution' }, value: { ar: 'دقة واضحة 1080P ومجال رؤية واسع', fr: 'Full HD 1080P grand angle' } },
      { label: { ar: 'زاوية الدوران', fr: 'Modes Rotation' }, value: { ar: '340° أفقي و 55° رأسي لراحة بال مطلقة', fr: '340° Horizontal et 55° Vertical' } },
      { label: { ar: 'الاتصال والمتابعة', fr: 'Connectivité' }, value: { ar: 'اتصال واي فاي لاسلكي، مع تطبيق غني بالميزات', fr: 'Wi-Fi 2.4GHz et application cloud ultra rapide' } },
      { label: { ar: 'الخصوصية التامة', fr: 'Mode Confidentialité' }, value: { ar: 'وضع غلق العدسة الميكانيكية بلمسة واحدة لخصوصيتك', fr: 'Obturateur de confidentialité physique en un clic' } }
    ],
    isPopular: false
  },
  {
    id: 'smart-intercom-92',
    category: 'access',
    title: {
      ar: 'جهاز الإنتركم الذكي ذو الشاشة IPS',
      fr: 'Interphone Intercom Écran IPS'
    },
    description: {
      ar: 'انتركم ذكي متدرج الحجم ذو شاشة لمس ملونة يمنحك الأمان في معرفة هوية الزوار من أي مكان بالعالم والتحكم بالقفل جهاراً.',
      fr: 'Interphone de luxe avec écran tactile IPS coloré, liaison Wi-Fi sur smartphone pour autoriser ou rejeter les visites à distance.'
    },
    price: 92000,
    oldPrice: 95000,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=85',
    tags: {
      ar: ['اتصال بالهاتف', 'شاشة IPS 7 إنش', 'فتح القفل عن بعد'],
      fr: ['Connecté Wi-Fi', 'Écran IPS 7"', 'Déverrouillage distant']
    },
    specs: [
      { label: { ar: 'مقاس الشاشة', fr: 'Taille Écran' }, value: { ar: 'شاشة ملونة عالية الدقة IPS مقاس 7 إنش جدارية', fr: 'Écran IPS mural 7 pouces ultra lumineux' } },
      { label: { ar: 'كاميرا الباب الخارجية', fr: 'Caméra Portail' }, value: { ar: 'بدقة عالية وزاوية رؤية عريضة مع رؤية ليلية', fr: 'Objectif HD grand angle résistant avec LED' } },
      { label: { ar: 'الاتصال المحمول', fr: 'Intégration Mobile' }, value: { ar: 'تنبيه ورنين فوري على هاتفك الذكي بالواي فاي', fr: 'Notifications PUSH et appel direct sur mobile' } }
    ],
    isPopular: true
  },
  {
    id: 'solar-system-pack',
    category: 'solar',
    title: {
      ar: 'منظومة طاقة شمسية هجينة متكاملة 20 أمبير',
      fr: 'Système Solaire Hybride 20A Complet'
    },
    description: {
      ar: 'الحل النهائي لمشاكل انقطاع الكهرباء في كربلاء ومحيطها. تشمل المنظومة ألواح شمسية عالية الجودة أحادية الكريستال، بطارية ليثيوم عملاقة ذات عمر افتراضي 10 سنوات، وعاكس (Inverter) ذكي مع تمديد كامل ومقاوم لحرارة الصيف الكثيفة.',
      fr: 'Solution définitive contre les pannes d\'électricité. Comprend panneaux solaires haute performance, batterie de stockage Lithium avec 10 ans de durée de vie et onduleur intelligent.'
    },
    price: 7822000,
    oldPrice: 8500000,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=85',
    tags: {
      ar: ['سعة 20 أمبير كاملة', 'بطارية ليثيوم LiFePO4', 'ضمان 5 سنوات'],
      fr: ['Capacité 20A', 'Stockage Lithium LiFePO4', 'Garantie 5 ans']
    },
    specs: [
      { label: { ar: 'العاكس الهجين', fr: 'Onduleur Hybride' }, value: { ar: 'عاكس بقوة 5KW مع منظم شحن ذكي مدمج MPPT', fr: 'Smart Inverter 5KW avec contrôleur MPPT' } },
      { label: { ar: 'الألواح الشمسية', fr: 'Panneaux solaires' }, value: { ar: 'أحدث طراز أحادي البلورة (Mono) مقاوم للحرارة العالية', fr: 'Panneaux haute efficacité de technologie Mono' } },
      { label: { ar: 'خزان الطاقة الليثيوم', fr: 'Batterie au Lithium' }, value: { ar: 'بطارية ليثيوم بسعة تخزين عملاقة تمنحك تبريداً وخدمة طوال الليل', fr: 'Accumulateur intelligent LiFePO4 pour décharge lente' } },
      { label: { ar: 'الهياكل والتمديدات', fr: 'Structures et Montage' }, value: { ar: 'هياكل تثبيت معالجة حرارياً، كابلات ألمانية مقاومة للحرية والتلف', fr: 'Pieds galvanisés et câbles solaires isolés UV' } }
    ],
    isPopular: true
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-solar-karbala-1',
    category: 'solar',
    title: {
      ar: 'مشروع طاقة شمسية متكامل لمنزل فخم',
      fr: 'Installation Solaire Résidentielle de Luxe'
    },
    location: {
      ar: 'كربلاء المقدسة، حي الحسين',
      fr: 'Karbala, Quartier Al-Hussein'
    },
    description: {
      ar: 'تنصيب منظومة شمسية هجينة بقدرة 24 أمبير لتأمين تشغيل أجهزة التكييف والإنارة على مدار 24 ساعة دون أي انقطاع من الشبكة الوطنية.',
      fr: 'Déploiement d\'une installation solaire hybride 24A pour assurer le fonctionnement autonome de la climatisation et de l\'éclairage.'
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'proj-cctv-mall',
    category: 'cctv',
    title: {
      ar: 'شبكة مراقبة متكاملة لمجمع تجاري كبير',
      fr: 'Surveillance Sécurisée d\'un Centre Commercial'
    },
    location: {
      ar: 'كربلاء المقدسة، شارع السناتر',
      fr: 'Karbala, Rue des Sénateurs'
    },
    description: {
      ar: 'تنصيب أكثر من 64 كاميرا Hikvision IP بدقة 8 ميجابكسل فائقة الوضوح مع نظام خوادم تسجيل وحماية NVR للفرز والتعرف التلقائي على الحركة.',
      fr: 'Pose de 64 caméras IP Hikvision 8MP très haute résolution, serveurs de stockage NVR avec technologie de tri IA.'
    },
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'proj-smart-lock-hotel',
    category: 'smart',
    title: {
      ar: 'أتمتة الغرف والتحكم بالدخول الإلكتروني لفندق سياحي',
      fr: 'Contrôle d\'Accès Électronique pour Hôtel'
    },
    location: {
      ar: 'كربلاء المقدسة، شارع المجمع',
      fr: 'Karbala, Rue Al-Majma'
    },
    description: {
      ar: 'تأمين غرف النزلاء عن طريق أقفال ذكية متصلة بشبكة واي فاي موحدة مع تفعيل بطاقات الملامسة السريعة والمتابعة من كاونتر الاستقبال الرئيسي بشكل مؤتمت.',
      fr: 'Équipement de chambres d\'hôtel avec des serrures connectées par Wi-Fi et gérées par cartes magnétiques décentralisées.'
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: {
      ar: 'المهندس مصطفى الخفاجي',
      fr: 'Ing. Mustafa Al-Khafaji'
    },
    role: {
      ar: 'صاحب فيلا سكنية',
      fr: 'Propriétaire de Villa'
    },
    comment: {
      ar: 'قمة الاحترافية والالتزام بالوقت! قمت بشراء وتركيب منظومة طاقة شمسية سعة 20 أمبير من شركة MUSILM TECH، والجهاز يعمل بكفاءة قصوى حتى في حر الصيف اللاهب. التمديدات غاية في التنسيق والدقة.',
      fr: 'Le sommet du professionnalisme ! J\'ai fait confiance à MUSILM TECH pour un système solaire hybride, et tout fonctionne parfaitement sous forte chaleur. Câblage extrêmement soigné.'
    },
    rating: 5
  },
  {
    id: 'testi-2',
    name: {
      ar: 'الحاج أبو علي المعموري',
      fr: 'Haj Abou Ali Al-Maamouri'
    },
    role: {
      ar: 'مدير مجمعات وأسواق تجارية',
      fr: 'Gérant de Supermarchés'
    },
    comment: {
      ar: 'ركبنا لديهم منظومة كاميرات هيكفجن IP لثلاثة طوابق. دقة الصور مبهرة بالليل والنهار، ونتابع البث مباشرة عبر الهواتف بطلاقة تامة. فريق الدعم الفني يستحق الشكر والتقدير المستمر لسرعة استجابتهم.',
      fr: 'Nous avons équipé nos commerces de caméras Hikvision IP. La qualité de vision nocturne est irréprochable et nous suivons tout sur mobile. Un service client au top !'
    },
    rating: 5
  },
  {
    id: 'testi-3',
    name: {
      ar: 'الدكتورة زهراء الكربلائي',
      fr: 'Dr. Zahra Al-Karbalai'
    },
    role: {
      ar: 'أستاذة جامعية',
      fr: 'Chercheuse Universitaire'
    },
    comment: {
      ar: 'ساعدني فريق هندسة مشاريع التخرج بالشركة في توفير مبرمج ذو كفاءة وسرعة فائقة لقراءة المعالجات وتنفيذ روبوت تتبع الخط بالـ Arduino. تجربة ممتازة ملأت الفراغ ويسرت مناقشة بحثي بامتياز.',
      fr: 'L\'équipe de MUSILM TECH m\'a grandement aidée à paramétrer mon projet de robotique Arduino. Une assistance précieuse qui a facilité l\'obtention de mon diplôme !'
    },
    rating: 5
  }
];

export const dictionary = {
  ar: {
    appName: 'MUSILM TECH | فريق التقني',
    brandName: 'MUSILM TECH',
    brandSubtitle: 'فريق التقني - خدمات هندسية وتقنية متكاملة',
    navHome: 'الرئيسية',
    navServices: 'خدماتنا',
    navProducts: 'منتجاتنا',
    navCalculator: 'حاسبة فنية',
    navAbout: 'من نحن',
    navProjects: 'أعمالنا',
    navContact: 'اتصل بنا',
    heroHeadline: 'حلول تقنية وأمنية متكاملة',
    heroSubtitle: 'فريق مهندسين وفنيين متخصصين لخدمتكم بأحدث تقنيات المراقبة الذكية، الأنظمة الأمنية، والطاقة الشمسية المستدامة بصيانة فائقة الدعم.',
    heroCtaContact: 'اتصل بنا الآن',
    heroCtaWhatsapp: 'تواصل عبر واتساب',
    heroCtaServices: 'استكشف خدماتنا',
    heroTrustBadge: 'وكيل معتمد وخدمات مضمونة بالكامل بكربلاء المقدسة وباقي المحافظات',
    servicesTitle: 'خدماتنا الاحترافية',
    servicesSubtitle: 'نقدم لعملائنا مجموعة شاملة من الخدمات الهندسية والتقنية المطابقة لأعلى المواصفات والضوابط الفنية العالمية.',
    servicesDetailTitle: 'تشمل الميزات الرئيسية:',
    productsTitle: 'معرض المنتجات المميزة',
    productsSubtitle: 'اختر بين كبرى العلامات التجارية العالمية مثل Hikvision و EZVIZ بضمان رسمي من الوكيل وأسعار منافسة.',
    prodBtnOrder: 'اطلب الآن عبر واتساب',
    prodBtnSpecs: 'المواصفات الفنية',
    prodCategoryAll: 'كل المنتجات',
    prodCategoryCctv: 'كاميرات المراقبة',
    prodCategorySmart: 'أنظمة ذكية EZVIZ',
    prodCategorySolar: 'منظومات الطاقة الشمسية',
    prodCategoryAccess: 'الأقفال والإنتركم',
    whyTitle: 'لماذا يختارنا الجميع؟',
    whySubtitle: 'نحن لا نقدم مجرد قطع تقنية، بل نبني علاقات وطيدة ونفخر بنجاحنا في تأثيث الحماية المطلقة في كل مكان.',
    statClients: 'عميل سعيد ومحمي',
    statExp: 'سنوات من الخبرة العملية',
    statWarranty: 'ضمان كامل للمعدات',
    statInstallSpeed: 'سرعة تركيب لا تضاهى',
    galleryTitle: 'معرض أعمالنا ومشاريعنا',
    gallerySubtitle: 'شاهد جوانب من لمساتنا الهندسية وبراعة تنفيذنا في المنازل والفنادق والمتاجر بمحافظة كربلاء المقدسة.',
    galleryFiltersAll: 'الكل',
    galleryFiltersSolar: 'طاقة شمسية',
    galleryFiltersCctv: 'كاميرات مراقبة',
    galleryFiltersSmart: 'أتمتة ومنازل ذكية',
    testimonialsTitle: 'ماذا يقول عملائنا؟',
    testimonialsSubtitle: 'آراء عملائنا الأوفياء هي الدافع المستمر لفريقنا لتقديم الأفضل والمحافظة على معايير الجودة العالية.',
    contactTitle: 'دعنا نبدأ مشروعك القادم',
    contactSubtitle: 'تواصل معنا اليوم وسنقوم بتقديم استشارات تخطيطية وعروض أسعار متكاملة تروق لذوقكم وتلبي احتياجكم الفني.',
    contactAddress: 'العنوان الرسمي: العراق، كربلاء المقدسة، حولي 100، قرب تقاطع المجمع',
    contactPhone: 'الهواتف الرسمية للشركة:',
    contactHours: 'أوقات الدوام والعمل:',
    contactHoursVal: 'يومياً من الساعة 9:00 صباحاً وحتى 10:00 مساءً',
    contactFollowUs: 'تواصل وتابعنا على مواقع التواصل:',
    contactFormName: 'الاسم الكامل الكافي',
    contactFormPhone: 'رقم الهاتف الفعال',
    contactFormService: 'نوع الخدمة المطلوبة',
    contactFormMessage: 'تفاصيل طلبكم بالتفصيل',
    contactFormBtn: 'إرسال طلب الاستشارة الفورية',
    contactFormSending: 'جاري إرسال طلبكم...',
    contactFormSuccess: 'تم إرسال طلبكم بنجاح! فريقنا التقني سيتواصل معكم خلال دقائق قليلة.',
    calcTitle: 'الحاسبة الذكية للأجهزة الفنية',
    calcSubtitle: 'قم بحساب تكلفة وعائد توفير نظام الطاقة الشمسية مباشرة، أو احصل على حجم التخزين التقديري المطلوب لكاميرات مراقبتك.',
    calcTabSolar: 'حاسبة توفير الطاقة الشمسية',
    calcTabCctv: 'حجم تخزين الكاميرات DVR/NVR',
    solarCalcLabelAmps: 'سعة الأمبير المستهدفة لممتلكاتك (أمبير)',
    solarCalcSavingText: 'التوفير السنوي التقديري من فواتير المولدات والخدمات المساعدة:',
    solarCalcBatteryText: 'سعة البطارية الليثيوم الموصى بها لتوفير الخدمة الليلة جهاراً:',
    solarCalcPlatesText: 'عدد الألواح الشمسية المثالية (قدرة 550W للألواح والمنظومة):',
    cctvCalcLabelCameras: 'عدد الكاميرات الفعالة بالنظام:',
    cctvCalcLabelRez: 'دقة تصوير الكاميرات المطلوبة:',
    cctvCalcLabelDays: 'عدد أيام التسجيل المستمر المطلوبة:',
    cctvResultSiz: 'الحجم التقديري للقرص الصلب (Hard Disk System) المطلوب:',
    currencyLabelToWatermark: 'دينار عراقي د.ع',
    interactiveSimulator: 'شاشة تفاعلية تظهر دقة وحصانة النظام',
    viewSpecs: 'مشاهدة المواصفات',
    closeBtn: 'إغلاق',
    fastDeliveryWarranty: 'صيانة دورية فورية وضمان وكالة مع توفر قطع الغيار الأصلية',
    whatsappTooltip: 'راسلنا مباشرة على واتساب',
    footerRights: 'حقوق الطبع محفوظة لدى شركة وفريق التقني MUSILM TECH © 2026',
    footerDeveloper: 'صمم بكل دقة وامتياز لموثوقية باهرة'
  },
  fr: {
    appName: 'MUSILM TECH | L\'Équipe Technique',
    brandName: 'MUSILM TECH',
    brandSubtitle: 'Solutions techniques et énergétiques globales',
    navHome: 'Accueil',
    navServices: 'Services',
    navProducts: 'Produits',
    navCalculator: 'Calculateur',
    navAbout: 'À Propos',
    navProjects: 'Projets',
    navContact: 'Contact',
    heroHeadline: 'Solutions Technologiques & Sécurité Intégrée',
    heroSubtitle: 'Ingénieurs et techniciens accrédités spécialisés en caméras haut de gamme, domotique et énergie solaire intelligente.',
    heroCtaContact: 'Contacter l\'Équipe',
    heroCtaWhatsapp: 'Message sur WhatsApp',
    heroCtaServices: 'Découvrir nos services',
    heroTrustBadge: 'Distributeur certifié avec d\'excellentes garanties à Karbala et dans tout l\'Irak',
    servicesTitle: 'Nos Services Professionnels',
    servicesSubtitle: 'Nous proposons une gamme complète de services d\'ingénierie et de technologie répondant aux normes internationales les plus exigeantes.',
    servicesDetailTitle: 'Avantages clés :',
    productsTitle: 'Showroom de Produits d\'Exception',
    productsSubtitle: 'Faites votre choix parmi de grandes marques telles que Hikvision et EZVIZ avec une garantie officielle complète.',
    prodBtnOrder: 'Commander via WhatsApp',
    prodBtnSpecs: 'Spécifications Techniques',
    prodCategoryAll: 'Tous',
    prodCategoryCctv: 'Caméras & CCTV',
    prodCategorySmart: 'Domotique EZVIZ',
    prodCategorySolar: 'Systèmes Solaires',
    prodCategoryAccess: 'Serrures & Intercoms',
    whyTitle: 'Pourquoi nous choisir ?',
    whySubtitle: 'Nous ne fournissons pas seulement du matériel, nous bâtissons des liaisons solides et concevons la protection absolue de vos biens.',
    statClients: 'Clients Heureux',
    statExp: 'Années d\'Expérience',
    statWarranty: 'Garantie Authentique',
    statInstallSpeed: 'Installation Express',
    galleryTitle: 'Galerie de Nos Réalisations',
    gallerySubtitle: 'Explorez nos finitions minutieuses et nos installations solaires et de sécurité à Karbala Irak.',
    galleryFiltersAll: 'Tous',
    galleryFiltersSolar: 'Solaire',
    galleryFiltersCctv: 'Vidéosécurité',
    galleryFiltersSmart: 'Domotique Connectée',
    testimonialsTitle: 'Ce que pensent nos fidèles clients',
    testimonialsSubtitle: 'Les avis clients sont la clé de notre motivation permanente à perfectionner nos installations et finitions.',
    contactTitle: 'Démarrez Votre Projet Aujourd\'hui',
    contactSubtitle: 'Prenez contact avec notre équipe technique pour obtenir un devis personnalisé clé en main sous 24h.',
    contactAddress: 'Adresse officielle : Irak, Karbala, Hawli 100, Près du Carrefour Al-Majma',
    contactPhone: 'Téléphones officiels de l\'établissement :',
    contactHours: 'Heures d\'ouverture :',
    contactHoursVal: 'Tous les jours de 9h00 à 22h00 sans interruption',
    contactFollowUs: 'Suivez nos démonstrations sur nos réseaux sociaux :',
    contactFormName: 'Votre Nom Complet',
    contactFormPhone: 'Votre Numéro de Téléphone',
    contactFormService: 'Service qui vous intéresse',
    contactFormMessage: 'Décrivez brièvement votre besoin',
    contactFormBtn: 'Envoyer la Demande de Conseil',
    contactFormSending: 'Envoi en cours...',
    contactFormSuccess: 'Demande envoyée avec succès ! Notre pôle d\'ingénieurs vous contactera très rapidement.',
    calcTitle: 'Calculateurs Scientifiques',
    calcSubtitle: 'Estimez et calculez directement vos économies d\'énergie solaire ou votre capacité de disque de stockage DVR/NVR.',
    calcTabSolar: 'Calculateur Solaire / Photovoltaïque',
    calcTabCctv: 'Stockage Requis pour Vidéosécurité',
    solarCalcLabelAmps: 'Ampérage cible pour vos besoins (Ampères) :',
    solarCalcSavingText: 'Économie annuelle estimée sur les charges de générateurs et factures :',
    solarCalcBatteryText: 'Stockage Batterie Lithium conseillé pour la continuité nocturne :',
    solarCalcPlatesText: 'Nombre idéal de panneaux solaires requis (Standard 550W) :',
    cctvCalcLabelCameras: 'Nombre total de caméras installées :',
    cctvCalcLabelRez: 'Résolution des caméras choisie :',
    cctvCalcLabelDays: 'Nombre de jours d\'historique requis :',
    cctvResultSiz: 'Taille recommandée du disque dur spécial NVR/DVR :',
    currencyLabelToWatermark: 'Dinars Irakiens (IQD)',
    interactiveSimulator: 'Visualisez la résolution optimale en direct',
    viewSpecs: 'Voir la fiche technique',
    closeBtn: 'Fermer',
    fastDeliveryWarranty: 'Maintenance express incluse et pièces de rechange certifiées constructeur',
    whatsappTooltip: 'Envoyer un message WhatsApp pour un rendez-vous',
    footerRights: 'Tous droits réservés à MUSILM TECH © 2026',
    footerDeveloper: 'Conçu avec précision et excellence pour des prestations fiables'
  }
};
