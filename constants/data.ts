import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'ai-strat',
    title: 'توليد الذكاء',
    description: 'بنيات عصبية مخصصة لهضم البيانات ومعالجتها بدقة متناهية.',
    icon: 'fa-solid fa-microchip',
    category: 'Intelligence'
  },
  {
    id: 'grid-inf',
    title: 'البنية التحتية للشبكة',
    description: 'عقد سحابية سريعة ومنخفضة التأخير تدعم خدماتك الرقمية العالمية.',
    icon: 'fa-solid fa-network-wired',
    category: 'Infrastructure'
  },
  {
    id: 'rum-cre',
    title: 'الإبداع المعرفي',
    description: 'أنظمة تصميم توليدية تحول الهويات البصرية إلى تجارب رقمية مذهلة.',
    icon: 'fa-solid fa-wand-magic-sparkles',
    category: 'Creative'
  }
];

export const SERVICE_GROUPS = [
  {
    name: "قطاع النمو والانتشار",
    cliche: "بروتوكولات تقنية تهدف لتعزيز الهوية الرقمية وتحقيق انتشار استراتيجي واسع النطاق عبر الشبكة.",
    items: [
      { 
        title: "الخدمات الرقمية", 
        icon: "fa-solid fa-cloud-bolt", 
        code: "SRV-01",
        description: "حلول متكاملة لإدارة الهوية الرقمية والوصول إلى الجماهير المستهدفة بدقة واحترافية عالية."
      },
      { 
        title: "إعلانات", 
        icon: "fa-solid fa-rectangle-ad", 
        code: "ADS-02",
        description: "حملات إعلانية ذكية تستهدف الفئات الأكثر تفاعلاً مع علامتك التجارية لضمان أعلى عائد."
      },
      { 
        title: "ترويج", 
        icon: "fa-solid fa-chart-line", 
        code: "PRM-03",
        description: "استراتيجيات انتشار واسع لزيادة الوعي وبناء قاعدة عملاء وفية عبر كافة المنصات الرقمية."
      },
    ]
  },
  {
    name: "قطاع الهيكلة والأصول",
    cliche: "حلول برمجية متقدمة لبناء المنصات الرقمية وإدارة الأصول الحسابية بأعلى مستويات الأمان والدقة.",
    items: [
      { 
        title: "إنشاء ويب", 
        icon: "fa-solid fa-code", 
        code: "WEB-04",
        description: "تطوير منصات رقمية سريعة، آمنة، ومتوافقة مع كافة الأجهزة لتقديم تجربة مستخدم مثالية."
      },
      { 
        title: "رشق", 
        icon: "fa-solid fa-user-plus", 
        code: "BST-05",
        description: "تعزيز الأرقام والمؤشرات الرقمية لرفع الموثوقية الاجتماعية للحسابات بشكل آمن وسريع."
      },
      { 
        title: "بيع وشراء الحسابات", 
        icon: "fa-solid fa-handshake", 
        code: "ACC-06",
        description: "سوق آمن وموثوق لتبادل الحسابات الرقمية ذات القيمة العالية مع ضمان حقوق الطرفين."
      }
    ]
  }
];

export const ADS = [
  { id: 1, title: 'خصم خاص 20%', content: 'على جميع خدمات التحليل الرقمي لفترة محدودة.', code: 'PROMO_BOMA_20' },
  { id: 2, title: 'إطلاق عقدة جديدة', content: 'توسعة بنية الشبكة في منطقة الشرق الأوسط.', code: 'NODE_UPGRADE_04' },
  { id: 3, title: 'تأمين الحسابات+', content: 'تشفير البيانات بمستويات عسكرية متقدمة.', code: 'SECURE_GRID_MAX' }
];
