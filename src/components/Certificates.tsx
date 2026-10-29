import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Certificate } from '../data/content'
export function Certificates({items}:{items:Certificate[]}) {
  const {t,i18n}=useTranslation(); const lang=i18n.language as 'en'|'ru'; const [open,setOpen]=useState<Certificate|null>(null)
  if(!items.length) return <div className="cert-empty"><div className="cert-empty-icon" aria-hidden="true">◇</div><div><h3>{t('certificates.emptyTitle')}</h3><p>{t('certificates.emptyText')}</p></div></div>
  return <><div className="certificate-grid">{items.map(item=><article className="certificate-card" key={item.id}><button onClick={()=>setOpen(item)} aria-label={t('certificates.view',{name:item.title[lang]})}>{item.image?<img src={item.image} alt={item.title[lang]} loading="lazy"/>:<span>PDF</span>}</button><div><h3>{item.title[lang]}</h3><p>{item.issuer} · {item.date[lang]}</p><a href={item.file} target="_blank" rel="noopener noreferrer">{t('certificates.document')} <ExternalLink size={14}/></a>{item.verifyUrl&&<a href={item.verifyUrl} target="_blank" rel="noopener noreferrer">{t('certificates.verify')} <ExternalLink size={14}/></a>}</div></article>)}</div>{open&&<div className="modal-backdrop" onMouseDown={()=>setOpen(null)}><div className="modal" role="dialog" aria-modal="true" aria-label={open.title[lang]} onMouseDown={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Escape')setOpen(null)}}><button className="modal-close" onClick={()=>setOpen(null)} aria-label={t('controls.close')} autoFocus><X size={20}/></button>{open.image?<img src={open.image} alt={open.title[lang]}/>:<iframe src={open.file} title={open.title[lang]}/>}</div></div>}</>
}
