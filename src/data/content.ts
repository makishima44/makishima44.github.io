export type Localized = { en: string; ru: string }
export type Project = {
  id: string; title: Localized; description: Localized; features: Localized[];
  tech: string[]; repository: string; demo?: string; image?: string; order: number; featured: boolean; category: Localized
}
export type TimelineItem = {
  id: string; organization: string; role: Localized; period: Localized; kind?: Localized;
  description: Localized; technologies: string[]; achievements: Localized[]; url?: string; image?: string; badge?: 'codewars'
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
  period:{en:'Sep 2025 – Jun 2026 · 10 mos',ru:'Сентябрь 2025 – июнь 2026 · 10 месяцев'},
  kind:{en:'Internship',ru:'Стажировка'},
  description:{
    en:'Worked in a team environment on a full-scale project, gaining hands-on experience with real development tasks, Git, code reviews, and team collaboration.',
    ru:'Работал в команде над полноценным проектом: выполнял реальные задачи разработки, использовал Git, участвовал в проверке кода и командной работе.'
  },
  technologies:['Git','Code review','Team collaboration'],
  achievements:[],
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
