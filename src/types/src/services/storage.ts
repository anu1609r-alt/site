import { University, Specialty, User, FavoritesState } from '../types';

export const INITIAL_UNIVERSITIES: University[] = [
  {
    id: "nu",
    name: "Nazarbayev University",
    shortName: "NU",
    city: "Астана",
    type: "Автономная организация образования",
    rating: 4.9,
    programsCount: 42,
    hasGrants: true,
    costEstimate: "Демо: от 2 800 000 ₸ / Есть гранты NU",
    language: "Английский",
    studyFormat: "Очная",
    description: "Ведущий исследовательский университет международного уровня в столице Казахстана. Обучение ведется на английском языке.",
    coverPhoto: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    address: "г. Астана, пр. Кабанбай батыра, 53",
    website: "https://nu.edu.kz",
    phone: "+7 (7172) 70-66-88",
    programs: ["Computer Science", "Economics", "Mechanical Engineering", "Biomedical Sciences", "Robotics"],
    admissionReqs: "IELTS 6.5+, вступительные экзамены по направлениям, эссе и портфолио.",
    isDemo: true
  },
  {
    id: "mnu",
    name: "Maqsut Narikbayev University (KAZGUU)",
    shortName: "MNU",
    city: "Астана",
    type: "Частный",
    rating: 4.8,
    programsCount: 28,
    hasGrants: true,
    costEstimate: "Демо: от 1 900 000 ₸ / Госгранты",
    language: "Казахский, Русский, Английский",
    studyFormat: "Очная",
    description: "Флагман юридического и гуманитарно-экономического образования в Казахстане с высокими академическими стандартами.",
    coverPhoto: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
    address: "г. Астана, Коргалжынское шоссе, 8",
    website: "https://kazguu.kz",
    phone: "+7 (7172) 70-30-30",
    programs: ["Юриспруденция", "Международное право", "Финансы", "IT в бизнесе", "Переводческое дело"],
    admissionReqs: "ЕНТ профильные предметы, внутреннее собеседование.",
    isDemo: true
  },
  {
    id: "enu",
    name: "ЕНУ им. Л.Н. Гумилева",
    shortName: "ENU",
    city: "Астана",
    type: "Национальный",
    rating: 4.7,
    programsCount: 110,
    hasGrants: true,
    costEstimate: "Демо: от 1 100 000 ₸ / Госгранты",
    language: "Казахский, Русский, Английский",
    studyFormat: "Очная",
    description: "Один из крупнейших национальных вузов страны с широким спектром естественно-научных и гуманитарных программ.",
    coverPhoto: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
    address: "г. Астана, ул. Сатпаева, 2",
    website: "https://enu.kz",
    phone: "+7 (7172) 70-95-00",
    programs: ["Информационные системы", "Архитектура", "Журналистика", "Международные отношения"],
    admissionReqs: "ЕНТ по профильным предметам.",
    isDemo: true
  },
  {
    id: "satbayev",
    name: "Satbayev University",
    shortName: "SU",
    city: "Алматы",
    type: "Национальный исследовательский",
    rating: 4.7,
    programsCount: 75,
    hasGrants: true,
    costEstimate: "Демо: от 1 200 000 ₸ / Госгранты",
    language: "Казахский, Русский, Английский",
    studyFormat: "Очная",
    description: "Старейший и престижнейший технический университет Казахстана, центр инженерных и IT компетенций.",
    coverPhoto: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80",
    address: "г. Алматы, ул. Сатпаева, 22",
    website: "https://satbayev.university",
    phone: "+7 (727) 292-60-25",
    programs: ["Горное дело", "Нефтегазовое дело", "Кибербезопасность", "Автоматизация"],
    admissionReqs: "ЕНТ: Математика + Физика или Информатика.",
    isDemo: true
  },
  {
    id: "kimep",
    name: "KIMEP University",
    shortName: "KIMEP",
    city: "Алматы",
    type: "Частный",
    rating: 4.8,
    programsCount: 30,
    hasGrants: true,
    costEstimate: "Демо: от 2 600 000 ₸ / Внутренние гранты",
    language: "Английский",
    studyFormat: "Очная",
    description: "Североамериканская модель высшего образования. Лидер в бизнес-администрировании, аудите и медиа.",
    coverPhoto: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80",
    address: "г. Алматы, пр. Абая, 4",
    website: "https://kimep.kz",
    phone: "+7 (727) 270-42-13",
    programs: ["Бизнес-администрирование", "Маркетинг", "Финансы", "Медиа и коммуникации"],
    admissionReqs: "IELTS / KEPT + ЕНТ.",
    isDemo: true
  },
  {
    id: "sdu",
    name: "SDU University",
    shortName: "SDU",
    city: "Алматы",
    type: "Частный",
    rating: 4.6,
    programsCount: 45,
    hasGrants: true,
    costEstimate: "Демо: от 1 600 000 ₸ / Олимпиада SPT",
    language: "Английский, Казахский",
    studyFormat: "Очная",
    description: "Загородный современный кампус, сильная школа компьютерных наук и языковой филологии.",
    coverPhoto: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1000&q=80",
    address: "г. Каскелен, ул. Абылай хана, 1/1",
    website: "https://sdu.edu.kz",
    phone: "+7 (727) 307-95-65",
    programs: ["Computer Science", "Information Systems", "Педагогика английского"],
    admissionReqs: "ЕНТ, внутренняя олимпиада SPT.",
    isDemo: true
  },
  {
    id: "buketov",
    name: "КарУ им. Е.А. Букетова",
    shortName: "КарУ",
    city: "Караганда",
    type: "Государственный",
    rating: 4.5,
    programsCount: 88,
    hasGrants: true,
    costEstimate: "Демо: от 750 000 ₸ / Госгранты",
    language: "Казахский, Русский",
    studyFormat: "Очная",
    description: "Крупнейший региональный классический университет Центрального Казахстана.",
    coverPhoto: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    address: "г. Караганда, ул. Университетская, 28",
    website: "https://buketov.edu.kz",
    phone: "+7 (7212) 77-03-85",
    programs: ["Педагогика", "Химия", "Биология", "Юриспруденция"],
    admissionReqs: "ЕНТ профильные кластеры.",
    isDemo: true
  }
];

export const INITIAL_SPECIALTIES: Specialty[] = [
  {
    id: "it",
    title: "Информационные технологии (IT)",
    category: "IT",
    description: "Проектирование и разработка программных продуктов, искусственного интеллекта и сетевых систем.",
    subjects: "Математика + Информатика",
    careers: "Software Engineer, Data Analyst, Frontend/Backend Developer",
    universities: ["NU", "Satbayev University", "SDU University", "ENU", "MNU"]
  },
  {
    id: "law",
    title: "Юриспруденция и Право",
    category: "Право",
    description: "Изучение гражданского, уголовного и международного права, нормотворчества и судебной защиты.",
    subjects: "Всемирная история + Человек. Общество. Право",
    careers: "Юрист, Адвокат, Нотариус, Корпоративный советник",
    universities: ["MNU", "КарУ", "ENU"]
  },
  {
    id: "finance",
    title: "Финансы и Экономика",
    category: "Финансы",
    description: "Управление денежными потоками, инвестиционный анализ, банковское дело и корпоративный аудит.",
    subjects: "Математика + География",
    careers: "Финансовый аналитик, Аудитор Big4, Инвестиционный консультант",
    universities: ["KIMEP", "MNU", "NU", "ENU"]
  },
  {
    id: "med",
    title: "Общая Медицина",
    category: "Медицина",
    description: "Фундаментальная подготовка врачей, терапевтическая практика, клинические и молекулярные исследования.",
    subjects: "Биология + Химия",
    careers: "Врач-терапевт, Хирург, Клинический исследователь",
    universities: ["NU (School of Medicine)", "Астана Медицинский Университет"]
  },
  {
    id: "engineering",
    title: "Инженерия и Робототехника",
    category: "Инженерия",
    description: "Проектирование микроэлектроники, автоматизированных производственных комплексов и робототехнических узлов.",
    subjects: "Математика + Физика",
    careers: "Инженер-конструктор, Робототехник, Инженер АСУ ТП",
    universities: ["NU", "Satbayev University"]
  },
  {
    id: "ir",
    title: "Международные отношения",
    category: "Международные отношения",
    description: "Дипломатический протокол, анализ внешнеэкономических связей, урегулирование международных процессов.",
    subjects: "Всемирная история + Иностранный язык",
    careers: "Дипломат, Аналитик внешних рынков, Консультант",
    universities: ["ENU", "KIMEP", "MNU"]
  }
];

export const StorageService = {
  getUniversities: (): University[] => {
    const raw = localStorage.getItem("ug_universities");
    if (!raw) {
      localStorage.setItem("ug_universities", JSON.stringify(INITIAL_UNIVERSITIES));
      return INITIAL_UNIVERSITIES;
    }
    return JSON.parse(raw);
  },
  saveUniversities: (data: University[]) => {
    localStorage.setItem("ug_universities", JSON.stringify(data));
  },
  getSpecialties: (): Specialty[] => INITIAL_SPECIALTIES,
  getFavorites: (): FavoritesState => {
    const raw = localStorage.getItem("ug_favorites");
    return raw ? JSON.parse(raw) : { universities: [], specialties: [] };
  },
  saveFavorites: (data: FavoritesState) => {
    localStorage.setItem("ug_favorites", JSON.stringify(data));
  },
  getCompareList: (): string[] => {
    const raw = localStorage.getItem("ug_compare");
    return raw ? JSON.parse(raw) : [];
  },
  saveCompareList: (data: string[]) => {
    localStorage.setItem("ug_compare", JSON.stringify(data));
  },
  getUser: (): User | null => {
    const raw = localStorage.getItem("ug_user");
    return raw ? JSON.parse(raw) : null;
  },
  saveUser: (user: User) => {
    localStorage.setItem("ug_user", JSON.stringify(user));
  },
  removeUser: () => {
    localStorage.removeItem("ug_user");
  }
};
