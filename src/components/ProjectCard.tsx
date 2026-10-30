import { ArrowUpRight } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { Project } from '../data/content'
export function ProjectCard({project,index}:{project:Project;index:number}) {
  const {t,i18n}=useTranslation(); const lang=i18n.language as 'en'|'ru'; const reduced=useReducedMotion()
  return <motion.article className="project-card" initial={reduced?false:{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.55,delay:index*.07}}>
    <div className={'project-art project-art-'+project.id}>{project.image?<img src={project.image} alt={t('projects.previewAlt',{name:project.title[lang]})} loading="lazy"/>:<div className="project-art-inner" aria-label={t('projects.artPlaceholder')}><span className="project-art-top">{project.category[lang]} <span>↗</span></span><strong>{project.id==='react-chat'?'AFTER HOURS':project.id==='frame'?'FRAME.':'SHOPHUB'}</strong><span className="project-art-bottom">{t('projects.selected')} / 0{index+1}</span></div>}</div>
    <div className="project-body"><div className="project-number">0{index+1} / {project.category[lang]}</div><h3>{project.title[lang]}</h3><p>{project.description[lang]}</p><ul className="project-features">{project.features.map((f,i)=><li key={i}>{f[lang]}</li>)}</ul><div className="tags">{project.tech.map(tech=><span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.repository} target="_blank" rel="noopener noreferrer"><SiGithub size={17}/>{t('projects.source')} <ArrowUpRight size={16}/></a>{project.demo&&<a href={project.demo} target="_blank" rel="noopener noreferrer">{t('projects.demo')} <ArrowUpRight size={16}/></a>}</div></div>
  </motion.article>
}
