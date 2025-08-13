
import React from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone, Sparkles, GraduationCap, Zap, ShieldCheck, Play,
  ShoppingCart, TrendingUp, Wallet, BookOpen, Trophy, PhoneCall, MessageCircle, PenTool
} from 'lucide-react'

const WHATSAPP_NUMBER = '22943050611'
const WHATSAPP_TEXT = encodeURIComponent("Bonjour KEJA Academy 👋\nJe souhaite commencer la formation pour créer des Web Apps professionnelles sans ordinateur.")
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`

const fadeIn = { hidden:{opacity:0, y:12}, show:{opacity:1, y:0} }

function Tag({Icon, text}){
  return (
    <motion.div className="tag" initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <Icon size={16} color="#059669"/> <span>{text}</span>
    </motion.div>
  )
}

function ExampleCard({Icon, title, details}){
  return (
    <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card">
      <div className="example">
        <div className="example-icon"><Icon size={20} color="#059669"/></div>
        <div style={{flex:1}}>
          <div style={{fontWeight:600, fontSize:14}}>{title}</div>
          <div style={{fontSize:12, color:'#6b7280'}}>{details}</div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{fontSize:12, color:'#047857', textDecoration:'underline'}}>Voir le modèle</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center', gap:6, fontSize:12, color:'#6b7280'}}>
              <MessageCircle size={16}/> Discuter
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function App(){
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <Smartphone size={20} color="#10b981"/> <strong style={{fontSize:14}}>KEJA Academy</strong>
            </div>
            <a className="btn btn-small" href={WA_LINK} target="_blank" rel="noreferrer">Commencer maintenant</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{paddingTop:18, paddingBottom:12, textAlign:'center'}}>
          <motion.h1
            initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeIn}
          >
            Crée des <span style={{color:'#059669'}}>sites & web apps</span> pro<br/>sans ordinateur. Sans coder.
          </motion.h1>
          <motion.p
            initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeIn} transition={{delay:.1}}
          >
            Une méthode pas-à-pas pour concevoir, lancer et monétiser des sites modernes avec ton smartphone.
            Idéal pour débutants, entrepreneurs et freelances.
          </motion.p>
          <motion.div
            initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeIn} transition={{delay:.15}}
            style={{marginTop:12, display:'flex', justifyContent:'center', gap:10}}
          >
            <a className="btn" href={WA_LINK} target="_blank" rel="noreferrer">Commencer maintenant</a>
            <a href="#programme" style={{fontSize:12, color:'#047857', textDecoration:'underline'}}>Voir le programme</a>
          </motion.div>

          <div className="grid grid-3" style={{marginTop:14}}>
            <Tag Icon={GraduationCap} text="100% mobile"/>
            <Tag Icon={ShieldCheck} text="Sans code"/>
            <Tag Icon={Zap} text="Rapide & rentable"/>
          </div>
        </section>

        <section id="programme" style={{padding:'8px 0 6px'}}>
          <motion.h2 className="text-center" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeIn} style={{fontSize:20, fontWeight:600}}>
            Ce que tu vas maîtriser
          </motion.h2>
          <div className="grid" style={{marginTop:12}}>
            {[
              {Icon:Smartphone, title:'Outils no‑code mobile', text:"Apps indispensables pour designer, héberger et connecter ton site depuis un smartphone."},
              {Icon:PenTool, title:'Design pro & UI/UX', text:"Maquettes, palettes, typographies et sections modernes pour des sites crédibles."},
              {Icon:Play, title:'Automations & formulaires', text:"Leads, paiements, chat et intégrations WhatsApp/Email."},
              {Icon:ShieldCheck, title:'Domaine & sécurité', text:"Connexion domaine, HTTPS, performance et SEO mobile."},
            ].map((f,i)=> (
              <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card">
                <div style={{display:'flex', gap:10}}>
                  <div className="example-icon"><f.Icon size={20} color="#059669"/></div>
                  <div>
                    <div style={{fontWeight:600, fontSize:14}}>{f.title}</div>
                    <div style={{fontSize:12, color:'#6b7280'}}>{f.text}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={{padding:'8px 0 6px'}}>
          <motion.h2 className="text-center" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeIn} style={{fontSize:20, fontWeight:600}}>
            Exemples réels créés par nos apprenants
          </motion.h2>
          <div className="grid grid-2" style={{marginTop:12}}>
            <ExampleCard Icon={Trophy} title="Site de paris sportif" details="Calendrier, cotes, pronostics et résultats auto. Paiements mobile money/WhatsApp."/>
            <ExampleCard Icon={BookOpen} title="Site de blog" details="Éditeur mobile, catégories, recherche, newsletter et partage social."/>
            <ExampleCard Icon={PhoneCall} title="Service de déblocage téléphone" details="Formulaire IMEI, suivi de commande, paiement et support via WhatsApp."/>
            <ExampleCard Icon={ShoppingCart} title="Boutique e‑commerce" details="Catalogue, stock, panier, paiement local, livraison et notifications."/>
            <ExampleCard Icon={TrendingUp} title="Plateforme d'investissement" details="Tableau de bord, dépôts/retraits, FAQ risques et KYC léger."/>
            <ExampleCard Icon={Wallet} title="App portefeuille" details="Solde en temps réel, transferts internes, historique et QR de paiement."/>
          </div>
          <p className="text-center" style={{fontSize:11, color:'#6b7280', marginTop:8}}>*Tous ces projets ont été montés à 100% sur smartphone avec notre méthode no‑code.</p>
        </section>

        <section style={{padding:'8px 0 24px'}}>
          <div className="card" style={{textAlign:'center', background:'var(--emerald-50)', borderColor:'var(--emerald-100)'}}>
            <div style={{fontSize:18, fontWeight:600}}>Prêt à lancer ton premier site depuis ton téléphone ?</div>
            <div className="text-muted" style={{fontSize:14, marginTop:6}}>Accède au mentorat, aux templates et aux checklists d'experts.</div>
            <a className="btn" href={WA_LINK} target="_blank" rel="noreferrer" style={{marginTop:12}}>Commencer maintenant</a>
          </div>
        </section>
      </main>

      <a className="wa-float" href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Contacter KEJA Academy sur WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.11 17.14c-.26-.13-1.53-.76-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.27-.76-.67-1.27-1.5-1.42-1.76-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.9-.21-.5-.43-.43-.58-.43h-.5c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.88.62.27 1.11.43 1.49.55.62.2 1.19.17 1.64.1.5-.08 1.53-.62 1.75-1.23.22-.61.22-1.14.15-1.23-.06-.1-.24-.16-.5-.28z"/><path d="M16.02 5.33c-5.9 0-10.69 4.78-10.69 10.68 0 1.88.49 3.72 1.43 5.35L5.3 27l5.77-1.52c1.59.87 3.38 1.32 5.2 1.32h.01c5.9 0 10.68-4.79 10.68-10.69 0-2.85-1.11-5.53-3.13-7.55-2.02-2.02-4.7-3.23-7.56-3.23zm6.48 17.16c-1.73 1.72-4.02 2.67-6.46 2.67-1.65 0-3.26-.45-4.68-1.31l-.34-.2-3.43.9.92-3.35-.22-.34c-.89-1.46-1.36-3.14-1.36-4.85 0-5.08 4.13-9.21 9.21-9.21 2.46 0 4.76.96 6.49 2.69 1.73 1.73 2.68 4.03 2.68 6.49 0 2.44-.95 4.73-2.68 6.46z"/></svg>
      </a>

      <footer>© {new Date().getFullYear()} KEJA Academy — Tous droits réservés.</footer>
    </div>
  )
}
