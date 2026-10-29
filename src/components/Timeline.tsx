import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SiCodewars } from '@icons-pack/react-simple-icons'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { TimelineItem } from '../data/content'

export function Timeline({items,emptyTitle,emptyText}:{items:TimelineItem[];emptyTitle:string;emptyText:string}) {
  const {i18n,t}=useTranslation(); const lang=i18n.language as 'en'|'ru'; const reduced=useReducedMotion()
  if(!items.length) return <div className="timeline-empty"><span className="timeline-dot"/><div><h3>{emptyTitle}</h3><p>{emptyText}</p></div><span className="timeline-empty-art" aria-hidden="true">↗</span></div>

  return <div className="timeline">{items.map((item,i)=>{
    const logo=item.image&&<img className="timeline-logo" src={item.image} alt={item.organization+' logo'} width="52" height="52" loading="lazy" />
    const badge=item.badge==='codewars'&&<span className="timeline-brand-icon"><SiCodewars size={27} color="#B1361E" aria-hidden="true"/></span>
    const organization=item.url?<a href={item.url} target="_blank" rel="noopener noreferrer">{item.organization}<ArrowUpRight size={14}/></a>:item.organization
    const content=<>
      {logo}{badge}<span className="timeline-type">{item.kind?.[lang]}</span><h3>{item.role[lang]}</h3>
      <div className="timeline-org">{organization}</div><p>{item.description[lang]}</p>
      {item.achievements.length>0&&<ul>{item.achievements.map((achievement,j)=><li key={j}>{achievement[lang]}</li>)}</ul>}
      {item.technologies.length>0&&<div className="tags">{item.technologies.map(tech=><span key={tech}>{tech}</span>)}</div>}
    </>

    return <motion.article className="timeline-item" key={item.id} initial={reduced?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45,delay:i*.08}}>
      <span className="timeline-dot"/><div className="timeline-date">{item.period[lang]}</div>
      {item.details?.length?<details className="timeline-content timeline-disclosure">
        <summary className="timeline-summary"><div className="timeline-summary-content">{content}</div><span className="timeline-disclosure-toggle"><span className="timeline-show-details">{t('experience.showDetails')}</span><span className="timeline-hide-details">{t('experience.hideDetails')}</span><ChevronDown size={17} aria-hidden="true"/></span></summary>
        <div className="timeline-expanded"><p>{item.detailsIntro?.[lang]??item.description[lang]}</p><h4>{t('experience.tasks')}</h4><ul>{item.details.map((detail,j)=><li key={j}>{detail[lang]}</li>)}</ul></div>
      </details>:<div className="timeline-content">{content}</div>}
    </motion.article>
  })}</div>
}
