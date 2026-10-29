import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
export type Language='en'|'ru'
const requested = new URLSearchParams(location.search).get('lang')
const stored = localStorage.getItem('portfolio-lang')
const initial:Language = requested==='en'||requested==='ru'?requested:stored==='en'||stored==='ru'?stored:navigator.language.toLowerCase().startsWith('ru')?'ru':'en'
const resources = {
  en:{translation:{
    skip:'Skip to content', identity:{namePlaceholder:'Frontend Developer'},
    nav:{home:'Home',primary:'Primary navigation',about:'About',skills:'Skills',experience:'Experience',education:'Education',projects:'Projects',certificates:'Certificates',contact:'Contact'},
    controls:{language:'Language',theme:'Toggle color theme',menu:'Toggle menu',close:'Close preview'},
    meta:{title:'Artur Shyshelau — Frontend Developer',description:"Artur Shyshelau's frontend developer portfolio featuring React, TypeScript, JavaScript and selected projects."},
    hero:{availability:'OPEN TO FRONTEND OPPORTUNITIES',role:'FRONTEND DEVELOPER',designLabel:'DESIGN × DEVELOPMENT',line1:'Crafting digital',line2:'experiences.',description:'Frontend Developer focused on thoughtful interfaces, clean code and the details that make products feel right.',projects:'View projects',contact:'Get in touch',cv:'Download CV',based:'Frontend Developer',scroll:'SCROLL TO EXPLORE'},
    about:{title:'More than just code.',intro:'A considered approach to building for the web.',statement:'Good interfaces happen where clear thinking meets careful execution.',paragraph1:'I work with modern frontend technologies to turn product ideas into interfaces that are useful, responsive and pleasant to use.',paragraph2:'I am interested in component architecture, state management and the small details that make a product easier to understand. I keep learning through hands-on projects and focus on code that stays readable as a product grows.',paragraph3:'I use AI tools and coding agents to explore solutions, work with code, and automate routine tasks.',principle1:'Clarity in every interaction',principle2:'Performance by design',principle3:'Room to keep improving'},
    skills:{title:'The tools behind the work.',intro:'A practical toolkit for building and refining modern web experiences.',groups:{core:'Core technologies',libraries:'Libraries & state',backend:'Backend & API',architecture:'Architecture',tools:'Development tools'}},
    experience:{title:'Experience in progress.',intro:'A space for verified internship and professional work.',emptyTitle:'Professional journey',emptyText:'Verified internship and work experience will appear here once details are added.',tasks:'Key responsibilities',showDetails:'Show internship details',hideDetails:'Hide details'},
    education:{title:'Always learning.',intro:'Formal study, courses and independent learning.',emptyTitle:'Education & learning',emptyText:'Training and education entries will appear here after their details are added.'},
    projects:{title:'Selected work.',selected:'SELECTED WORK',intro:'Real projects, built to explore ideas and solve practical frontend problems.',more:'Explore all repositories',source:'Source code',demo:'Live demo',artPlaceholder:'Editorial project artwork, not a product screenshot',previewAlt:'Preview of {{name}}'},
    certificates:{title:'Credentials & growth.',intro:'Verified certifications and completed programs.',emptyTitle:'Certificates coming soon',emptyText:'Verified certificates will be displayed here when documents are added.',view:'View {{name}}',document:'View document',verify:'Verify credential'},
    contact:{kicker:'LET’S CONNECT',title:'Have a project',titleAccent:'in mind?',description:'I’m open to conversations about frontend roles, collaborations and interesting product challenges.',githubDescription:'Explore my code, projects and experiments.',codewarsDescription:'I regularly solve challenges to sharpen my problem-solving skills and keep growing as a developer.',linkedinDescription:'Connect with me professionally.',telegramDescription:'Message me directly.',emailDescription:'Write to me about work or collaboration.'},
    footer:{crafted:'Designed and built with care.',back:'Back to top'}
  }},
  ru:{translation:{
    skip:'Перейти к содержимому', identity:{namePlaceholder:'Frontend-разработчик'},
    nav:{home:'Главная',primary:'Основная навигация',about:'Обо мне',skills:'Навыки',experience:'Опыт',education:'Обучение',projects:'Проекты',certificates:'Сертификаты',contact:'Контакты'},
    controls:{language:'Язык',theme:'Переключить тему',menu:'Открыть меню',close:'Закрыть просмотр'},
    meta:{title:'Artur Shyshelau — Frontend-разработчик',description:'Портфолио Artur Shyshelau: React, TypeScript, JavaScript и избранные проекты.'},
    hero:{availability:'ОТКРЫТ К ПРЕДЛОЖЕНИЯМ',role:'FRONTEND-РАЗРАБОТЧИК',designLabel:'ДИЗАЙН × РАЗРАБОТКА',line1:'Создаю цифровой',line2:'опыт.',description:'Frontend-разработчик. Делаю продуманные интерфейсы, пишу понятный код и уделяю внимание деталям, которые делают продукт удобнее.',projects:'Смотреть проекты',contact:'Связаться',cv:'Скачать резюме',based:'Frontend-разработчик',scroll:'ЛИСТАЙТЕ НИЖЕ'},
    about:{title:'Больше, чем код.',intro:'Продуманный подход к разработке для веба.',statement:'Хороший интерфейс рождается там, где ясная мысль встречается с точной реализацией.',paragraph1:'Использую современные фронтенд-технологии, чтобы превращать идеи в полезные, адаптивные и приятные в использовании интерфейсы.',paragraph2:'Мне интересны архитектура компонентов, управление состоянием и детали, которые делают продукт понятнее. Развиваюсь через практические проекты и стараюсь писать код, который остаётся читаемым по мере роста продукта.',paragraph3:'Использую ИИ-инструменты и кодовых агентов в разработке — для поиска решений, работы с кодом и автоматизации рутины.',principle1:'Понятные сценарии',principle2:'Продуманная производительность',principle3:'Постоянное развитие'},
    skills:{title:'Инструменты работы.',intro:'Практический набор технологий для современных веб-продуктов.',groups:{core:'Основные технологии',libraries:'Библиотеки и состояние',backend:'Backend и API',architecture:'Архитектура',tools:'Инструменты разработки'}},
    experience:{title:'Профессиональный путь.',intro:'Место для подтверждённого опыта работы и стажировок.',emptyTitle:'Опыт работы',emptyText:'Информация о стажировках и работе появится здесь после добавления подтверждённых данных.',tasks:'Основные задачи',showDetails:'Показать детали стажировки',hideDetails:'Скрыть детали'},
    education:{title:'Всегда учусь.',intro:'Образование, курсы и самостоятельное изучение.',emptyTitle:'Образование и обучение',emptyText:'Сведения об образовании и курсах появятся после добавления данных.'},
    projects:{title:'Избранные проекты.',selected:'ИЗБРАННЫЕ ПРОЕКТЫ',intro:'Реальные проекты для исследования идей и решения практических задач.',more:'Все репозитории',source:'Исходный код',demo:'Открыть сайт',artPlaceholder:'Декоративное оформление, не скриншот проекта',previewAlt:'Превью проекта {{name}}'},
    certificates:{title:'Развитие и достижения.',intro:'Подтверждённые сертификаты и программы.',emptyTitle:'Сертификаты появятся здесь',emptyText:'После добавления документов здесь будут показаны подтверждённые сертификаты.',view:'Открыть {{name}}',document:'Открыть документ',verify:'Проверить сертификат'},
    contact:{kicker:'НА СВЯЗИ',title:'Есть интересная',titleAccent:'задача?',description:'Открыт к общению о фронтенд-вакансиях, сотрудничестве и интересных продуктовых задачах.',githubDescription:'Мои проекты, исходный код и эксперименты.',codewarsDescription:'Стараюсь регулярно решать задачи, тренировать мышление и развиваться как разработчик.',linkedinDescription:'Давайте общаться в профессиональной сети.',telegramDescription:'Напишите мне напрямую.',emailDescription:'Пишите по вопросам работы и сотрудничества.'},
    footer:{crafted:'Сделано с вниманием к деталям.',back:'Наверх'}
  }}
}
i18n.use(initReactI18next).init({resources,lng:initial,fallbackLng:'en',interpolation:{escapeValue:false}})
function updateDocument(lang:Language) {
  const meta=resources[lang].translation.meta
  document.documentElement.lang=lang
  document.title=meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content',meta.description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',meta.title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',meta.description)
}
updateDocument(initial)
export function setLanguage(lang:Language) {
  void i18n.changeLanguage(lang)
  localStorage.setItem('portfolio-lang',lang)
  const url=new URL(location.href); url.searchParams.set('lang',lang); history.replaceState(null,'',url)
  updateDocument(lang)
}
export default i18n
