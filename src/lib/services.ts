import barbeSimple from "@/assets/services/barbe-simple.webp";
import brushing from "@/assets/services/brushing.webp";
import coupe50 from "@/assets/services/coupe-50.webp";
import coupeComplete from "@/assets/services/coupe-complete.webp";
import coupeDegrade from "@/assets/services/coupe-degrade.webp";
import coupeEnfant from "@/assets/services/coupe-enfant.webp";
import fill from "@/assets/services/fill.webp";
import lavageTete from "@/assets/services/lavage-tete.webp";
import soinVapeur from "@/assets/services/soin-vapeur.webp";
import tourDeRayon from "@/assets/services/tour-de-rayon.webp";
import colorationBarbeNoire from "@/assets/services/coloration-barbe-noire.webp";
import colorationCoupeNoire from "@/assets/services/coloration-coupe-noire.webp";
import mechesAVarier from "@/assets/services/meches-a-varier.webp";
import hydrofaciale from "@/assets/services/hydrofaciale.webp";
import hydrofacialeAcademy from "@/assets/services/hydrofaciale-academy.webp";
import laserVisage from "@/assets/services/laser-visage.webp";
import proteineBlackDiamond from "@/assets/services/proteine-black-diamond.webp";
import proteineCocoMoco from "@/assets/services/proteine-coco-moco.webp";
import soinVisageNormal from "@/assets/services/soin-visage-normal.webp";

export type ServiceCategory = "barbier" | "coiffure" | "coloration" | "soins";

export const serviceCategories: {
  id: "all" | ServiceCategory;
  label: { fr: string; ar: string };
}[] = [
  { id: "all", label: { fr: "Tout voir", ar: "كل الخدمات" } },
  { id: "barbier", label: { fr: "Barbier", ar: "الحلاقة" } },
  { id: "coiffure", label: { fr: "Coiffure", ar: "الشعر" } },
  { id: "coloration", label: { fr: "Coloration", ar: "الصباغة" } },
  { id: "soins", label: { fr: "Soins", ar: "العناية" } },
];

export const serviceCatalog = [
  {
    id: "barbe-simple",
    image: barbeSimple,
    category: "barbier",
    price: 30,
    minutes: 10,
    name: { fr: "Barbe simple", ar: "تهذيب اللحية" },
    description: {
      fr: "Une taille nette et soignée pour retrouver une ligne équilibrée.",
      ar: "تهذيب مرتب يمنح لحيتك خطوطاً متناسقة.",
    },
  },
  {
    id: "brushing",
    image: brushing,
    category: "coiffure",
    price: 20,
    minutes: 10,
    name: { fr: "Brushing", ar: "تصفيف بالسشوار" },
    description: {
      fr: "Un séchage travaillé pour donner forme et mouvement aux cheveux.",
      ar: "تصفيف بالسشوار يمنح الشعر شكلاً وحركة.",
    },
  },
  {
    id: "coupe-50",
    image: coupe50,
    category: "coiffure",
    price: 50,
    minutes: 30,
    name: { fr: "Coupe 50", ar: "قصة شعر 50" },
    description: {
      fr: "Une coupe classique, adaptée à la longueur et au style souhaités.",
      ar: "قصة شعر كلاسيكية تناسب الطول والأسلوب المطلوب.",
    },
  },
  {
    id: "coupe-complete",
    image: coupeComplete,
    category: "coiffure",
    price: 60,
    minutes: 45,
    name: { fr: "Coupe complète", ar: "قصة شعر كاملة" },
    description: {
      fr: "Une coupe complète avec attention portée aux finitions.",
      ar: "قصة كاملة مع عناية باللمسات النهائية.",
    },
  },
  {
    id: "coupe-degrade",
    image: coupeDegrade,
    category: "coiffure",
    price: 40,
    minutes: 25,
    name: { fr: "Coupe dégradée", ar: "قصة متدرجة" },
    description: {
      fr: "Un dégradé progressif et des contours travaillés avec précision.",
      ar: "تدرج متقن وحواف محددة بعناية.",
    },
  },
  {
    id: "coupe-enfant",
    image: coupeEnfant,
    category: "coiffure",
    price: 30,
    minutes: 20,
    name: { fr: "Coupe enfant", ar: "قصة شعر للأطفال" },
    description: {
      fr: "Une coupe adaptée aux enfants, réalisée avec soin.",
      ar: "قصة مناسبة للأطفال تُنفّذ بعناية.",
    },
  },
  {
    id: "fill",
    image: fill,
    category: "coiffure",
    price: 10,
    minutes: 5,
    name: { fr: "Fill", ar: "فيل (Fill)" },
    description: {
      fr: "Une finition rapide proposée au salon.",
      ar: "لمسة نهائية سريعة متوفرة في الصالون.",
    },
  },
  {
    id: "lavage-tete",
    image: lavageTete,
    category: "coiffure",
    price: 10,
    minutes: 5,
    name: { fr: "Lavage de tête", ar: "غسل الشعر" },
    description: {
      fr: "Un lavage des cheveux avant ou après votre prestation.",
      ar: "غسل للشعر قبل الخدمة أو بعدها.",
    },
  },
  {
    id: "soin-vapeur",
    image: soinVapeur,
    category: "soins",
    price: 100,
    minutes: 15,
    name: { fr: "Soin vapeur", ar: "عناية بالبخار" },
    description: {
      fr: "Un moment de soin du visage accompagné d’une vapeur douce.",
      ar: "جلسة عناية بالوجه مع بخار لطيف.",
    },
  },
  {
    id: "tour-de-rayon",
    image: tourDeRayon,
    category: "coiffure",
    price: 20,
    minutes: 10,
    name: { fr: "Tour de rayon", ar: "تور دو رايون" },
    description: {
      fr: "Une prestation de finition complémentaire chez le barbier.",
      ar: "خدمة إضافية للمسات النهائية لدى الحلاق.",
    },
  },
  {
    id: "coloration-barbe-noire",
    image: colorationBarbeNoire,
    category: "coloration",
    price: 50,
    minutes: 15,
    name: { fr: "Coloration barbe noire", ar: "صباغة اللحية بالأسود" },
    description: {
      fr: "Une coloration de barbe pour un rendu plus uniforme.",
      ar: "صباغة اللحية للحصول على لون أكثر تجانساً.",
    },
  },
  {
    id: "coloration-coupe-noire",
    image: colorationCoupeNoire,
    category: "coloration",
    price: 80,
    minutes: 20,
    name: { fr: "Coloration coupe noire", ar: "صباغة الشعر بالأسود" },
    description: {
      fr: "Une coloration noire appliquée avec soin sur les cheveux.",
      ar: "صباغة سوداء للشعر تُطبّق بعناية.",
    },
  },
  {
    id: "meches-a-varier",
    image: mechesAVarier,
    category: "coloration",
    price: 200,
    minutes: 60,
    name: { fr: "Mèches à varier", ar: "خصلات بألوان متنوعة" },
    description: {
      fr: "Des mèches pour apporter relief et nuances à la coiffure.",
      ar: "خصلات تمنح التسريحة عمقاً وتدرجات لونية.",
    },
  },
  {
    id: "hydrofaciale",
    image: hydrofaciale,
    category: "soins",
    price: 200,
    minutes: 25,
    name: { fr: "Hydrofaciale", ar: "هيدروفيشال" },
    description: {
      fr: "Un soin esthétique du visage réalisé avec un appareil dédié.",
      ar: "عناية تجميلية للوجه باستخدام جهاز مخصص.",
    },
  },
  {
    id: "hydrofaciale-academy",
    image: hydrofacialeAcademy,
    category: "soins",
    price: 500,
    minutes: 35,
    name: { fr: "Hydrofaciale Academy", ar: "هيدروفيشال أكاديمي" },
    description: {
      fr: "La formule hydrofaciale complète proposée par le salon.",
      ar: "جلسة هيدروفيشال متكاملة يقدمها الصالون.",
    },
  },
  {
    id: "laser-visage",
    image: laserVisage,
    category: "soins",
    price: 20,
    minutes: 10,
    name: { fr: "Laser visage", ar: "ليزر الوجه" },
    description: {
      fr: "Une prestation visage au laser proposée au salon.",
      ar: "خدمة للوجه باستخدام الليزر متوفرة في الصالون.",
    },
  },
  {
    id: "proteine-black-diamond",
    image: proteineBlackDiamond,
    category: "soins",
    price: 350,
    minutes: 50,
    name: { fr: "Protéine Black Diamond", ar: "بروتين بلاك دايموند" },
    description: {
      fr: "Un soin protéiné pour les cheveux, réalisé au salon.",
      ar: "عناية بروتينية للشعر تُجرى في الصالون.",
    },
  },
  {
    id: "proteine-coco-moco",
    image: proteineCocoMoco,
    category: "soins",
    price: 250,
    minutes: 50,
    name: { fr: "Protéine Coco-Moco", ar: "بروتين كوكو موكو" },
    description: {
      fr: "Un soin protéiné appliqué sur les cheveux par un professionnel.",
      ar: "عناية بروتينية للشعر يطبقها مختص.",
    },
  },
  {
    id: "soin-visage-normal",
    image: soinVisageNormal,
    category: "soins",
    price: 50,
    minutes: 10,
    name: { fr: "Soin visage normal", ar: "عناية عادية بالوجه" },
    description: {
      fr: "Un soin visage classique pour un moment de détente.",
      ar: "عناية كلاسيكية بالوجه للحظات من الاسترخاء.",
    },
  },
] as const satisfies readonly {
  id: string;
  image: string;
  category: ServiceCategory;
  price: number;
  minutes: number;
  name: { fr: string; ar: string };
  description: { fr: string; ar: string };
}[];
