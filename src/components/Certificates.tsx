import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ExternalLink, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { Certificate } from '../data/content'

export function Certificates({items}:{items:Certificate[]}) {
  const {t,i18n}=useTranslation()
  const lang=i18n.language as 'en'|'ru'
  const [open,setOpen]=useState<Certificate|null>(null)
  const reduced=useReducedMotion()
  const dialogRef=useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(!open) return
    const previous=document.activeElement instanceof HTMLElement?document.activeElement:null
    const previousOverflow=document.body.style.overflow
    document.body.style.overflow='hidden'
    function onKeyDown(event:KeyboardEvent){
      if(event.key==='Escape') setOpen(null)
      if(event.key==='Tab'&&dialogRef.current){
        const focusables=Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button,a[href],iframe'))
        if(!focusables.length) return
        const first=focusables[0],last=focusables[focusables.length-1]
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
      }
    }
    document.addEventListener('keydown',onKeyDown)
    return ()=>{document.removeEventListener('keydown',onKeyDown);document.body.style.overflow=previousOverflow;previous?.focus()}
  },[open])

  if(!items.length) return <div className="cert-empty"><div className="cert-empty-icon" aria-hidden="true">◇</div><div><h3>{t('certificates.emptyTitle')}</h3><p>{t('certificates.emptyText')}</p></div></div>

  return <>
    <div className="certificate-grid">
      {items.map((item,index)=><motion.article className={'certificate-card'+(item.relatedBadges?.length?' certificate-card-featured':'')} key={item.id} initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:Math.min(index*.07,.21)}}>
        <button onClick={()=>setOpen(item)} aria-label={t('certificates.view',{name:item.title[lang]})}>
          {item.image?<img src={item.image} alt={item.title[lang]} loading="lazy"/>:<span>PDF</span>}
        </button>
        <div>
          <h3>{item.title[lang]}</h3>
          <p>{item.issuer} · {item.date[lang]}</p>
          {item.relatedBadges&&item.relatedBadges.length>0&&<p className="certificate-related-note">{t('certificates.relatedBadgesNote')}</p>}
          {item.file&&<a href={item.file} target="_blank" rel="noopener noreferrer">{t('certificates.document')} <ExternalLink size={14}/></a>}
          {item.verifyUrl&&<a href={item.verifyUrl} target="_blank" rel="noopener noreferrer">{t('certificates.verify')} <ExternalLink size={14}/></a>}
        </div>
      </motion.article>)}
    </div>
    {open&&<div className="modal-backdrop" onMouseDown={()=>setOpen(null)}>
      <div ref={dialogRef} className={'modal'+(open.relatedBadges?.length?' modal-with-badges':'')} role="dialog" aria-modal="true" aria-label={open.title[lang]} onMouseDown={event=>event.stopPropagation()}>
        <button className="modal-close" onClick={()=>setOpen(null)} aria-label={t('controls.close')} autoFocus><X size={20}/></button>
        {open.image&&open.relatedBadges?.length?<div className="modal-credential">
          <img className="modal-certificate-image" src={open.image} alt={open.title[lang]}/>
          <section className="modal-related-badges" aria-label={t('certificates.relatedBadges')}>
            <h3>{t('certificates.relatedBadges')}</h3>
            <div className="modal-badge-grid">{open.relatedBadges.map(badge=><a className="modal-badge" href={badge.verifyUrl} target="_blank" rel="noopener noreferrer" key={badge.id}>
              <img src={badge.image} alt="" loading="lazy"/><span>{badge.title[lang]}</span><ArrowUpRight size={16} aria-hidden="true"/>
            </a>)}</div>
          </section>
        </div>:open.image?<img src={open.image} alt={open.title[lang]}/>:open.file?<iframe src={open.file} title={open.title[lang]}/>:null}
      </div>
    </div>}
  </>
}
