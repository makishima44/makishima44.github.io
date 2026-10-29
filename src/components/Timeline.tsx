import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { TimelineItem } from '../data/content'
export function Timeline({items,emptyTitle,emptyText}:{items:TimelineItem[];emptyTitle:string;emptyText:string}) {
  const {i18n}=useTranslation(); const lang=i18n.language as 'en'|'ru'; const reduced=useReducedMotion()
  if(!items.length) return <div className="timeline-empty"><span className="timeline-dot"/><div><h3>{emptyTitle}</h3><p>{emptyText}</p></div><span className="timeline-empty-art" aria-hidden="true">↗</span></div>
  return <div className="timeline">{items.map((item,i)=><motion.article className="timeline-item" key={item.id} initial={reduced?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45,delay:i*.08}}><span className="timeline-dot"/><div className="timeline-date">{item.period[lang]}</div><div className="timeline-content"><span className="timeline-type">{item.kind?.[lang]}</span><h3>{item.role[lang]}</h3><div className="timeline-org">{item.url?<a href={item.url} target="_blank" rel="noopener noreferrer">{item.organization}<ArrowUpRight size={14}/></a>:item.organization}</div><p>{item.description[lang]}</p><ul>{item.achievements.map((a,j)=><li key={j}>{a[lang]}</li>)}</ul><div className="tags">{item.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></div></motion.article>)}</div>
}
