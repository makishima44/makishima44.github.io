import { motion, useReducedMotion } from 'motion/react'
import type { Skill } from '../data/skills'
export function SkillCard({skill,index}:{skill:Skill;index:number}) {
  const reduced=useReducedMotion()
  const Icon=skill.icon
  const themeIconClass=skill.name==='Next.js'?' skill-nextjs':skill.name==='Firebase'?' skill-firebase':skill.name==='JavaScript'?' skill-javascript':''
  return <motion.div className={'skill-card'+themeIconClass} style={{'--skill-color':skill.color} as React.CSSProperties} initial={reduced?false:{opacity:0,y:12}} whileInView={{opacity:1,y:0}} whileHover={reduced?undefined:{y:-4,transition:{duration:.18}}} viewport={{once:true,amount:.2}} transition={{duration:.35,delay:Math.min(index*.045,.25)}}>
    <span className="skill-icon">{skill.name==='JavaScript'?<svg width="29" height="29" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" fill="#F7DF1E"/><text x="21" y="20.5" textAnchor="end" fontFamily="Arial, Helvetica, sans-serif" fontSize="9.5" fontWeight="700" fill="#000">JS</text></svg>:Icon?<Icon size={29} color={skill.color}/>:<span className="skill-glyph" aria-hidden="true">{skill.name==='Feature-Sliced Design'?'◈':'{ }'}</span>}</span><span>{skill.name}</span>
  </motion.div>
}
