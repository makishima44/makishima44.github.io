import { ArrowUpRight, Mail } from 'lucide-react'
import { SiGithub, SiTelegram } from '@icons-pack/react-simple-icons'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { ReactNode } from 'react'
import { profile } from '../data/content'

type ContactLink = { id: string; href: string; title: string; description: string; detail: string; icon: ReactNode; featured?: boolean }

export function ContactSection() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email) ? profile.email : ''
  const githubHandle = '@' + profile.github.split('/').filter(Boolean).at(-1)
  const telegramHandle = '@' + profile.telegram.split('/').filter(Boolean).at(-1)
  const links: ContactLink[] = [
    { id: 'github', href: profile.github, title: 'GitHub', description: t('contact.githubDescription'), detail: githubHandle, icon: <SiGithub size={29} aria-hidden="true" />, featured: true },
    { id: 'linkedin', href: profile.linkedin, title: 'LinkedIn', description: t('contact.linkedinDescription'), detail: profile.name.en, icon: <img src="/icons/linkedin.svg" width="29" height="29" alt="" /> },
    { id: 'telegram', href: profile.telegram, title: 'Telegram', description: t('contact.telegramDescription'), detail: telegramHandle, icon: <SiTelegram size={29} color="#29A9EB" aria-hidden="true" /> },
    ...(email ? [{ id: 'email', href: 'mailto:' + email, title: 'Email', description: t('contact.emailDescription'), detail: email, icon: <Mail size={28} color="#a8c1ff" aria-hidden="true" /> }] : []),
  ].filter(link => link.href)

  return <section id="contact" className="section contact-section">
    <div className="container">
      <motion.div
        className="contact-card"
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .1 }}
        transition={{ duration: .55 }}
      >
        <div className="contact-kicker"><span className="status-dot" /> {t('contact.kicker')}</div>
        <h2>{t('contact.title')}<br /><em>{t('contact.titleAccent')}</em></h2>
        <p>{t('contact.description')}</p>
        <div className="contact-grid">
          {links.map(link => <a key={link.id} className={'contact-link contact-link-' + link.id + (link.featured ? ' contact-link-featured' : '')} href={link.href} target={link.id === 'email' ? undefined : '_blank'} rel={link.id === 'email' ? undefined : 'noopener noreferrer'}>
            <div className="contact-link-top"><span className="contact-link-icon">{link.icon}</span><ArrowUpRight size={19} aria-hidden="true" /></div>
            <div className="contact-link-body"><h3>{link.title}</h3><p>{link.description}</p><span className="contact-link-detail">{link.detail}</span></div>
          </a>)}
        </div>
      </motion.div>
    </div>
  </section>
}
