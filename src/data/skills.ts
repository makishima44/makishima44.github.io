import type { ComponentType } from 'react'
import { SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss, SiRedux, SiReacthookform, SiZod, SiNodedotjs, SiFirebase, SiGit, SiGithub, SiFigma, SiStorybook, SiJira } from '@icons-pack/react-simple-icons'
export type Skill = { name:string; icon?:ComponentType<{size?:number|string;color?:string}>; color:string }
export type SkillGroup = { id:string; items:Skill[] }
export const skills: SkillGroup[] = [
  { id:'core', items:[
    {name:'JavaScript',color:'#F7DF1E'}, {name:'TypeScript',icon:SiTypescript,color:'#3178C6'},
    {name:'React',icon:SiReact,color:'#61DAFB'}, {name:'Next.js',icon:SiNextdotjs,color:'#d8dce5'},
    {name:'HTML5',icon:SiHtml5,color:'#E34F26'}, {name:'CSS3',icon:SiCss,color:'#1572B6'} ] },
  { id:'libraries', items:[{name:'Redux',icon:SiRedux,color:'#764ABC'},{name:'Redux Toolkit',icon:SiRedux,color:'#764ABC'},{name:'React Hook Form',icon:SiReacthookform,color:'#EC5990'},{name:'Zod',icon:SiZod,color:'#3E67B1'}] },
  { id:'backend', items:[{name:'Node.js',icon:SiNodedotjs,color:'#5FA04E'},{name:'Firebase',icon:SiFirebase,color:'#FFCA28'}] },
  { id:'architecture', items:[{name:'Feature-Sliced Design',color:'#9B8AFB'}] },
  { id:'tools', items:[{name:'Git',icon:SiGit,color:'#F05032'},{name:'GitHub',icon:SiGithub,color:'#a5acba'},{name:'Figma',icon:SiFigma,color:'#F24E1E'},{name:'Storybook',icon:SiStorybook,color:'#FF4785'},{name:'Jira',icon:SiJira,color:'#0052CC'}] },
]
