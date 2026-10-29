export type Localized = { en: string; ru: string }
export type Project = {
  id: string; title: Localized; description: Localized; features: Localized[];
  tech: string[]; repository: string; demo?: string; image?: string; order: number; featured: boolean; category: Localized
}
export type TimelineItem = {
  id: string; organization: string; role: Localized; period: Localized; kind?: Localized;
  description: Localized; technologies: string[]; achievements: Localized[]; detailsIntro?: Localized; details?: Localized[]; url?: string; image?: string; badge?: 'codewars'
}
export type Certificate = { id: string; title: Localized; issuer: string; date: Localized; file: string; image?: string; verifyUrl?: string }
export type Profile = { name: Localized; portrait: string; email: string; github: string; linkedin: string; telegram: string; codewars: string; cv: string }

// Contact details come from the public GitHub profile and its README.
// TODO: Add a real CV PDF. Empty optional values stay hidden.
export const profile: Profile = {
  name: { en: 'Artur Shyshelau', ru: 'Artur Shyshelau' },
  portrait: '/images/artur-portrait.jpg',
  email: 'metallist15431543@email.com',
  github: 'https://github.com/makishima44',
  linkedin: 'https://www.linkedin.com/in/artur-shyshelau/',
  telegram: 'https://t.me/Artur_Shyshelau',
  codewars: 'https://www.codewars.com/users/Artur%20Shyshelau',
  cv: '',
}

// Add only verified internship and education entries here.
export const experience: TimelineItem[] = [{
  id:'it-incubator-internship',
  organization:'IT-INCUBATOR',
  role:{en:'Frontend Developer',ru:'Frontend-разработчик'},
  period:{en:'Sep 2025 – Sep 2026 · 1 year',ru:'Сентябрь 2025 – сентябрь 2026 · 1 год'},
  kind:{en:'Internship',ru:'Стажировка'},
  description:{
    en:'Built a social platform alongside frontend and backend developers during a practical team internship.',
    ru:'Разрабатывал социальную платформу вместе с frontend- и backend-разработчиками в команде.'
  },
  technologies:[],
  achievements:[],
  detailsIntro:{
    en:'Contributed to the team development of a social platform during the IT-INCUBATOR practical internship, working alongside frontend and backend developers.',
    ru:'Участвовал в командной разработке социальной платформы в рамках практической стажировки IT-INCUBATOR. Работал совместно с frontend- и backend-разработчиками.'
  },
  details:[
    {en:'Developed reusable React UI components and documented them in Storybook.',ru:'Разрабатывал переиспользуемые React UI-компоненты и документировал их в Storybook.'},
    {en:'Built responsive registration and user profile pages from Figma designs.',ru:'Реализовал адаптивные страницы регистрации и профиля пользователя по макетам Figma.'},
    {en:'Built a registration form with React Hook Form and Zod, including client-side validation, error handling, and REST API submission.',ru:'Разработал форму регистрации с использованием React Hook Form и Zod: клиентская валидация, обработка ошибок, отправка данных через REST API.'},
    {en:'Implemented a profile page with infinite post loading (infinite scroll), pagination, and loading states.',ru:'Реализовал страницу профиля с бесконечной загрузкой публикаций (infinite scroll), пагинацией и обработкой состояний загрузки.'},
    {en:'Integrated the frontend with backend APIs, aligned data formats, and resolved integration issues.',ru:'Интегрировал frontend с backend API, согласовывал формат данных и устранял ошибки интеграции.'},
    {en:'Worked with feature branches, pull requests, code reviews, and Jira as part of the team development process.',ru:'Работал с feature-ветками, Pull Request, code review и Jira в рамках командного процесса разработки.'}
  ],
  url:'https://www.linkedin.com/in/artur-shyshelau/edit/forms/position/3023942317/',
  image:'/images/it-incubator.jpg'
}]
export const education: TimelineItem[] = [{
  id:'codewars-practice',
  organization:'Codewars',
  role:{en:'Problem-solving practice',ru:'Практика решения задач'},
  period:{en:'Ongoing',ru:'Продолжаю'},
  kind:{en:'Continuous learning',ru:'Саморазвитие'},
  description:{
    en:'I regularly solve coding challenges to strengthen my problem-solving skills and keep growing as a developer.',
    ru:'Регулярно решаю задачи, чтобы развивать навыки решения проблем и расти как разработчик.'
  },
  technologies:['JavaScript','Algorithms'],
  achievements:[],
  url:profile.codewars,
  badge:'codewars'
}]
export const certificates: Certificate[] = []

// Projects and links were checked against the public GitHub repositories on 2026-10-29.
export const projects: Project[] = [
  {
    id:'react-chat', title:{en:'React Chat',ru:'React Chat'}, category:{en:'Application',ru:'Приложение'},
    description:{en:'A real-time chat application with room conversations and one-to-one direct messages.',ru:'Чат-приложение с общими комнатами и личными диалогами между пользователями.'},
    features:[{en:'Firebase Authentication and Firestore data',ru:'Авторизация Firebase и данные Firestore'},{en:'Searchable user profiles and direct conversations',ru:'Поиск пользователей и личные диалоги'}],
    tech:['React','TypeScript','Firebase','Redux Toolkit'], repository:'https://github.com/makishima44/react_chat', demo:'https://react-chat-two-ruby.vercel.app', order:1, featured:true
  },
  {
    id:'frame', title:{en:'Frame — Movie Search',ru:'Frame — Поиск фильмов'}, category:{en:'Web experience',ru:'Веб-приложение'},
    description:{en:'A lightweight movie and TV discovery experience powered by the TMDB catalog.',ru:'Лёгкое приложение для поиска фильмов и сериалов на основе каталога TMDB.'},
    features:[{en:'Search, filters and detail views',ru:'Поиск, фильтры и страницы деталей'},{en:'Saved favorites and light / dark theme',ru:'Избранное и светлая / тёмная темы'}],
    tech:['JavaScript','HTML5','CSS3','REST API'], repository:'https://github.com/makishima44/frame_movie_search', demo:'https://moviesearchapp-mauve.vercel.app', order:2, featured:true
  },
  {
    id:'shophub', title:{en:'ShopHub',ru:'ShopHub'}, category:{en:'Frontend project',ru:'Фронтенд-проект'},
    description:{en:'A storefront project built with Next.js, React, TypeScript and Redux Toolkit.',ru:'Проект интернет-магазина на Next.js, React, TypeScript и Redux Toolkit.'},
    features:[{en:'Next.js application structure',ru:'Структура приложения Next.js'},{en:'Redux Toolkit state setup',ru:'Настройка состояния Redux Toolkit'}],
    tech:['Next.js','React','TypeScript','Redux Toolkit'], repository:'https://github.com/makishima44/shophub', order:3, featured:true
  }
]
