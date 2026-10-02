export const phoneDisplay = "+212 681 718 600";
export const phoneHref = "tel:+212681718600";
export const whatsappHref = (message: string) =>
  `https://wa.me/212681718600?text=${encodeURIComponent(message)}`;
export const mapsUrl = "https://maps.app.goo.gl/cwN7bzsxgd7NzTCG7";

export type Locale = "fr" | "ar";

export const copy = {
  fr: {
    nav: [
      ["Accueil", "/"],
      ["Le Salon", "/salon"],
      ["Prestations", "/prestations"],
      ["Galerie", "/galerie"],
      ["Avis", "/avis"],
      ["Contact", "/contact"],
    ],
    book: "Prendre rendez-vous",
    call: "WhatsApp",
    callNow: "Appeler maintenant",
    whatsappAppointment:
      "Bonjour Elegance Barber Shop, je souhaite prendre rendez-vous. Quelles sont vos disponibilités ?",
    whatsappQuestion:
      "Bonjour Elegance Barber Shop, j’aimerais avoir un renseignement sur vos prestations.",
    whatsappService: "Bonjour, je souhaite réserver cette prestation :",
    direction: "Itinéraire",
    find: "Nous trouver",
    viewDirection: "Voir l’itinéraire",
    heroTitle: "Le style,\navec caractère.",
    heroText:
      "Barbe, coupe et soins du visage au cœur de Nador. Une adresse dédiée au style masculin, avec une attention particulière aux finitions.",
    open: "Ouvert 7j/7 • 10h00–23h00",
    detailTitle: "La précision se voit dans chaque détail.",
    detailText:
      "Choisissez votre coupe, votre rituel barbe ou un soin du visage. Nous prenons le temps de comprendre le résultat souhaité et de soigner chaque finition.",
    servicesTitle: "La carte du salon.",
    servicesPageTitle: "Coupes, barbe et soins.",
    servicesIntro:
      "Parcourez nos prestations, leurs tarifs et leurs durées. Appelez le salon pour choisir votre service et convenir d’un rendez-vous.",
    allServices: "Tout voir",
    serviceTime: "Durée",
    servicesCount: "prestations",
    serviceCall: "Réserver sur WhatsApp",
    processTitle: "Un rendez-vous en toute simplicité.",
    process: [
      ["Choisissez", "Parcourez les prestations et trouvez celle qui vous convient."],
      [
        "Écrivez-nous",
        "Envoyez votre demande sur WhatsApp et nous vous indiquerons les disponibilités.",
      ],
      ["Profitez", "Retrouvez l’équipe à Nador à l’heure convenue."],
    ],
    experienceTitle: "Un style pensé pour vous.",
    experienceIntro:
      "Avant la coupe, il y a votre idée. Nous prenons le temps d’échanger sur le résultat attendu, puis travaillons la forme, les contours et les finitions avec soin.",
    experienceEyebrow: "LE GESTE, LE STYLE, VOUS",
    experience: [
      [
        "Écoute",
        "Nous commençons par comprendre votre envie, votre routine et le résultat que vous imaginez.",
      ],
      [
        "Précision",
        "Longueurs, contours et finitions sont travaillés avec attention pour une coupe nette et équilibrée.",
      ],
      [
        "À votre image",
        "Coupe, barbe, couleur ou soin : choisissez la prestation qui correspond à votre style.",
      ],
      [
        "À votre rythme",
        "Le salon vous accueille chaque jour de 10h à 23h. Écrivez-nous pour connaître les disponibilités.",
      ],
    ],
    contactIntro:
      "Une question sur une prestation ou envie de réserver ? Écrivez-nous sur WhatsApp, appelez le salon ou passez nous voir au 5 Rue Marrakech.",
    contactWhatsApp: "Écrire sur WhatsApp",
    contactHint: "Réponse directe du salon pour vos questions et disponibilités.",
    reviewsIntro:
      "La confiance se construit au fil des visites. Consultez les retours partagés sur Google pour découvrir les impressions de nos clients.",
    reviewsPrompt: "Vous êtes déjà venu ? Votre retour nous aide à progresser.",
    galleryTitle: "Le style prend forme.",
    galleryIntro:
      "Un aperçu des gestes, des coupes et de l’atmosphère qui inspirent l’expérience Élégance à Nador.",
    reviewsTitle: "Votre confiance nous fait avancer.",
    reviewsCount: "83 avis Google",
    reviewsButton: "Voir les avis Google",
    locationTitle: "Retrouvez-nous à Nador.",
    address: "5 Rue Marrakech, Nador 62000, Maroc",
    hours: "Tous les jours • 10h00–23h00",
    getDirection: "Obtenir l’itinéraire",
    cta: "Prenez le temps de prendre soin de vous.",
    salonEyebrow: "LE SALON",
    salonTitle: "Une adresse contemporaine dédiée au style masculin.",
    salonBody:
      "Élégance Barber Shop accueille hommes et enfants au cœur de Nador. Coupe, barbe, coloration et soins du visage : chaque service commence par l’écoute et se termine par des finitions attentives.",
    salonNote: "Qualité. Précision. Confiance.",
    galleryLabel: "L’esprit du salon",
    imageAlt: [
      "Fauteuil de barbier dans un intérieur sombre et élégant",
      "Outils professionnels de barbier disposés avec soin",
      "Poste de coiffure moderne et miroirs",
      "Barbe dessinée avec soin",
      "Coupe dégradée aux contours précis",
      "Soin du visage en cabine",
    ],
    galleryCaptions: [
      "L’espace",
      "Les outils",
      "Les miroirs",
      "Le rituel barbe",
      "La coupe",
      "Le soin",
    ],
    close: "Fermer",
    menu: "Ouvrir le menu",
  },
  ar: {
    nav: [
      ["الرئيسية", "/"],
      ["الصالون", "/salon"],
      ["الخدمات", "/prestations"],
      ["المعرض", "/galerie"],
      ["التقييمات", "/avis"],
      ["اتصل بنا", "/contact"],
    ],
    book: "احجز موعداً",
    call: "واتساب",
    callNow: "اتصل الآن",
    whatsappAppointment: "السلام عليكم، أود حجز موعد لدى إليغانس باربر شوب. ما الأوقات المتاحة؟",
    whatsappQuestion: "السلام عليكم، أود الاستفسار عن الخدمات لدى إليغانس باربر شوب.",
    whatsappService: "السلام عليكم، أود حجز هذه الخدمة:",
    direction: "الاتجاهات",
    find: "اعثر علينا",
    viewDirection: "عرض الاتجاهات",
    heroTitle: "أسلوبٌ\nيعكس شخصيتك.",
    heroText: "لحية وقصات وعناية بالوجه في قلب الناظور. عنوان يهتم بأسلوب الرجل وبأدق التفاصيل.",
    open: "مفتوح طوال الأسبوع",
    detailTitle: "الدقة تظهر في كل تفصيل.",
    detailText:
      "اختر قصتك أو تهذيب لحيتك أو جلسة للعناية بالوجه. نصغي إلى ما تريده ونعتني بكل لمسة نهائية.",
    servicesTitle: "قائمة خدمات الصالون.",
    servicesPageTitle: "قصات ولحية وعناية.",
    servicesIntro: "تعرّف على الخدمات والأسعار والمدد. اتصل بالصالون لاختيار الخدمة وتحديد موعد.",
    allServices: "كل الخدمات",
    serviceTime: "المدة",
    servicesCount: "خدمة",
    serviceCall: "احجز عبر واتساب",
    processTitle: "احجز موعدك بكل سهولة.",
    process: [
      ["اختر", "تصفّح الخدمات واختر ما يناسبك."],
      ["راسلنا", "أرسل طلبك عبر واتساب لنعلمك بالمواعيد المتاحة."],
      ["تفضّل", "نستقبلك في الناظور في الموعد المتفق عليه."],
    ],
    experienceTitle: "أسلوب يناسبك.",
    experienceIntro:
      "قبل القصة، نستمع إلى فكرتك. نتبادل الحديث حول النتيجة التي تريدها، ثم نعتني بالشكل والحواف واللمسات النهائية.",
    experienceEyebrow: "الحرفة، الأسلوب، أنت",
    experience: [
      ["الإنصات", "نبدأ بفهم رغبتك وروتينك والنتيجة التي تتخيلها."],
      ["الدقة", "نهتم بالطول والحواف واللمسات النهائية للحصول على قصة متناسقة."],
      ["على ذوقك", "قصة أو لحية أو صباغة أو عناية؛ اختر ما يناسب أسلوبك."],
      [
        "حسب وقتك",
        "نستقبلك يومياً من العاشرة صباحاً إلى الحادية عشرة مساءً. راسلنا لمعرفة المواعيد.",
      ],
    ],
    contactIntro:
      "لديك سؤال عن خدمة أو ترغب في حجز موعد؟ راسلنا عبر واتساب، اتصل بالصالون أو تفضل بزيارتنا في 5 شارع مراكش.",
    contactWhatsApp: "راسلنا عبر واتساب",
    contactHint: "تواصل مباشر مع الصالون للاستفسار عن الخدمات والمواعيد.",
    reviewsIntro:
      "تُبنى الثقة مع كل زيارة. اطّلع على الآراء المنشورة على Google وتعرّف على انطباعات زبائننا.",
    reviewsPrompt: "سبق أن زرتنا؟ رأيك يساعدنا على التطور.",
    galleryTitle: "هنا يتجسد الأسلوب.",
    galleryIntro: "لمحة عن القصات واللمسات والأجواء التي تلهم تجربة الأناقة في الناظور.",
    reviewsTitle: "ثقتكم تدفعنا إلى التطور.",
    reviewsCount: "83 تقييماً على Google",
    reviewsButton: "عرض تقييمات Google",
    locationTitle: "زورونا في الناظور.",
    address: "5 شارع مراكش، الناظور 62000، المغرب",
    hours: "كل يوم من العاشرة صباحاً إلى الحادية عشرة مساءً",
    getDirection: "الحصول على الاتجاهات",
    cta: "امنح نفسك وقتاً للعناية.",
    salonEyebrow: "الصالون",
    salonTitle: "عنوان عصري مخصص للأناقة الرجالية.",
    salonBody:
      "يستقبل إليغانس باربر شوب الرجال والأطفال في قلب الناظور. قصة الشعر واللحية والصباغة والعناية بالوجه؛ تبدأ كل خدمة بالإنصات وتنتهي بلمسات دقيقة.",
    salonNote: "جودة. دقة. ثقة.",
    galleryLabel: "أجواء الصالون",
    imageAlt: [
      "كرسي حلاقة في ديكور داكن وأنيق",
      "أدوات حلاقة احترافية مرتبة بعناية",
      "محطة حلاقة عصرية ومرايا",
      "لحية محددة بعناية",
      "قصة متدرجة بحواف دقيقة",
      "جلسة للعناية بالوجه",
    ],
    galleryCaptions: ["المكان", "الأدوات", "المرايا", "اللحية", "القصة", "العناية"],
    close: "إغلاق",
    menu: "فتح القائمة",
  },
} as const;
