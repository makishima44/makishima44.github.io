import { motion, useReducedMotion } from 'motion/react'
import type { Skill } from '../data/skills'
export function SkillCard({skill,index}:{skill:Skill;index:number}) {
  const reduced=useReducedMotion()
  const Icon=skill.icon
  return <motion.div className={'skill-card'+(skill.name==='Next.js'?' skill-nextjs':'')} style={{'--skill-color':skill.color} as React.CSSProperties} initial={reduced?false:{opacity:0,y:12}} whileInView={{opacity:1,y:0}} whileHover={reduced?undefined:{y:-4,transition:{duration:.18}}} viewport={{once:true,amount:.2}} transition={{duration:.35,delay:Math.min(index*.045,.25)}}>
    <span className="skill-icon">{Icon?<Icon size={29} color={skill.color}/>:<span className="skill-glyph" aria-hidden="true">{skill.name==='Feature-Sliced Design'?'◈':'{ }'}</span>}</span><span>{skill.name}</span>
  </motion.div>
}
