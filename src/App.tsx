import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { profile, projects, experience, education, certificates } from './data/content'
import { skills } from './data/skills'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import { Timeline } from './components/Timeline'
import { Certificates } from './components/Certificates'
import { ContactSection } from './components/ContactSection'
import { setLanguage } from './i18n'
import './styles.css'

const ids = ['about','skills','experience','education','projects','certificates','contact'] as const
const currentYear = new Date().getFullYear()
type Id = typeof ids[number]
function App() {
  const { t, i18n } = useTranslation()
  const reduced = useReducedMotion()
  const [theme, setTheme] = useState<'light'|'dark'>(() => document.documentElement.classList.contains('light') ? 'light' : 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<Id>('about')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) setActive(entry.target.id as Id) }), { rootMargin: '-25% 0px -60% 0px' })
    ids.forEach(id => { const el = document.getElementById(id); if(el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  function toggleTheme() { const next = theme === 'dark' ? 'light' : 'dark'; document.documentElement.classList.toggle('light', next === 'light'); localStorage.setItem('portfolio-theme',next); setTheme(next) }
  const nav = (id: Id) => <a key={id} className={active===id?'nav-link active':'nav-link'} href={'#'+id} onClick={()=>setMenuOpen(false)}>{t('nav.'+id)}</a>
  const reveal = reduced ? {} : { initial:{opacity:0,y:18}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.16}, transition:{duration:.55} }
  const name = profile.name[i18n.language as 'en'|'ru'] || t('identity.namePlaceholder')
  return <>
    <a className="skip-link" href="#main">{t('skip')}</a>
    <header className="site-header"><div className="container header-inner">
      <a className="wordmark" href="#top" aria-label={t('nav.home')}>a<span>.</span><small> / portfolio</small></a>
      <nav className="desktop-nav" aria-label={t('nav.primary')}>{ids.map(nav)}</nav>
      <div className="header-actions"><div className="language-switch" aria-label={t('controls.language')}><button className={i18n.language==='en'?'selected':''} onClick={()=>setLanguage('en')} aria-pressed={i18n.language==='en'}>EN</button><span>/</span><button className={i18n.language==='ru'?'selected':''} onClick={()=>setLanguage('ru')} aria-pressed={i18n.language==='ru'}>RU</button></div>
      <button className="icon-button" onClick={toggleTheme} aria-label={t('controls.theme')}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>
      <button className="icon-button mobile-menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label={t('controls.menu')} aria-expanded={menuOpen} aria-controls="mobile-nav">{menuOpen?<X size={20}/>:<Menu size={20}/>}</button></div>
    </div>{menuOpen&&<nav id="mobile-nav" className="mobile-nav" aria-label={t('nav.primary')}>{ids.map(nav)}</nav>}</header>
    <main id="main">
      <section id="top" className="hero container"><div className="hero-copy">
        <motion.div className="eyebrow hero-eyebrow" initial={reduced?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}}><span className="status-dot"/> {t('hero.availability')}</motion.div>
        <div className="hero-name">{name} / {t('hero.role')}</div>
        <motion.h1 initial={reduced?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}>{t('hero.line1')}<br/><em>{t('hero.line2')}</em></motion.h1>
        <motion.p className="hero-description" initial={reduced?false:{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.22}}>{t('hero.description')}</motion.p>
        <motion.div className="hero-actions" initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.32}}><a className="button button-primary" href="#projects">{t('hero.projects')} <ArrowUpRight size={17}/></a><a className="button button-secondary" href="#contact">{t('hero.contact')} <ArrowRight size={17}/></a>{profile.cv&&<a className="button button-text" href={profile.cv} download>{t('hero.cv')} <ArrowDown size={17}/></a>}</motion.div>
        <div className="hero-meta"><span>React <b>·</b> TypeScript <b>·</b> JavaScript</span><span className="hero-meta-line"/><span>{t('hero.based')}</span></div>
      </div><div className="hero-visual hero-photo-visual"><div className="portrait-outline" aria-hidden="true"/><div className="hero-portrait"><img src={profile.portrait} alt={name} width="1367" height="2048" fetchPriority="high" /></div><div className="portrait-caption"><span>{name}</span><span aria-hidden="true">↗</span></div></div><a className="scroll-cue" href="#about"><span>{t('hero.scroll')}</span><ArrowDown size={16}/></a></section>
      <section id="about" className="section container"><motion.div {...reveal}><SectionHeading index="01" label={t('nav.about')} title={t('about.title')} intro={t('about.intro')}/><div className="about-grid"><div className="about-statement"><span className="large-asterisk">✳</span><p>{t('about.statement')}</p></div><div className="about-copy"><p>{t('about.paragraph1')}</p><p>{t('about.paragraph2')}</p><div className="about-principles"><div><span>01</span>{t('about.principle1')}</div><div><span>02</span>{t('about.principle2')}</div><div><span>03</span>{t('about.principle3')}</div></div></div></div></motion.div></section>
      <section id="skills" className="section section-tinted"><div className="container"><motion.div {...reveal}><SectionHeading index="02" label={t('nav.skills')} title={t('skills.title')} intro={t('skills.intro')}/></motion.div><div className="skill-groups">{skills.map(group=><div className="skill-group" key={group.id}><h3>{t('skills.groups.'+group.id)} <span>{String(group.items.length).padStart(2,'0')}</span></h3><div className="skill-grid">{group.items.map((item,i)=><SkillCard key={item.name} skill={item} index={i}/>)}</div></div>)}</div></div></section>
      <section id="experience" className="section container"><motion.div {...reveal}><SectionHeading index="03" label={t('nav.experience')} title={t('experience.title')} intro={t('experience.intro')}/></motion.div><Timeline items={experience} emptyTitle={t('experience.emptyTitle')} emptyText={t('experience.emptyText')}/></section>
      <section id="education" className="section container section-compact"><motion.div {...reveal}><SectionHeading index="04" label={t('nav.education')} title={t('education.title')} intro={t('education.intro')}/></motion.div><Timeline items={education} emptyTitle={t('education.emptyTitle')} emptyText={t('education.emptyText')}/></section>
      <section id="projects" className="section section-tinted"><div className="container"><motion.div {...reveal}><SectionHeading index="05" label={t('nav.projects')} title={t('projects.title')} intro={t('projects.intro')}/></motion.div><div className="projects-grid">{projects.filter(p=>p.featured).sort((a,b)=>a.order-b.order).map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div><a className="all-projects" href={profile.github} target="_blank" rel="noopener noreferrer">{t('projects.more')} <ArrowUpRight size={18}/></a></div></section>
      <section id="certificates" className="section container"><motion.div {...reveal}><SectionHeading index="06" label={t('nav.certificates')} title={t('certificates.title')} intro={t('certificates.intro')}/></motion.div><Certificates items={certificates}/></section>
      <ContactSection />
    </main>
    <footer className="footer"><div className="container footer-inner"><a href="#top" className="wordmark">a<span>.</span></a><span>© {currentYear} {name}. {t('footer.crafted')}</span><a href="#top">{t('footer.back')} ↑</a></div></footer>
  </>
}
function SectionHeading({index,label,title,intro}:{index:string,label:string,title:string,intro:string}) { return <div className="section-heading"><div className="section-index"><span>{index}</span><span className="index-rule"/>{label}</div><div className="section-heading-main"><h2>{title}</h2><p>{intro}</p></div></div> }
export default App
