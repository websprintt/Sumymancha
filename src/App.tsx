/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Sun, 
  Battery, 
  Car, 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Star, 
  TrendingDown, 
  ShieldCheck, 
  ClipboardCheck,
  Menu,
  X,
  MapPin,
  Clock,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Utils ---
const secureDecode = (encoded: string) => {
  try {
    return atob(encoded);
  } catch (e) {
    return "";
  }
};

const CONTACT_DATA = {
  phone: "NjExNjc0NDQ1", // 611670445
  phoneFull: "KzM0NjExNjcwNDQ1", // +34611670445
  email: "aW5mb0BzdW15bWFuY2hhLmVz", // info@sumymancha.es
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Fotovoltaica', href: '#servicios' },
    { name: 'Instalaciones', href: '#servicios' },
    { name: 'Sobre nosotros', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://github.com/websprintt/Sumymancha/raw/14259a798dfa36326608c2b2e96bd96dfe69ba32/img/logo-sin-fonfo.webp" 
            alt="Sumy Mancha Logo" 
            className="h-20 md:h-24 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${secureDecode(CONTACT_DATA.phoneFull)}?text=Hola%20Sumy%20Mancha,%20estoy%20interesado%20en%20solicitar%20un%20estudio%20gratuito.`} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-black text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-orange transition-all duration-300"
          >
            Estudio gratuito
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={closeMobileMenu}
                  className="text-lg font-medium py-3 px-2 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`https://wa.me/${secureDecode(CONTACT_DATA.phoneFull)}?text=Hola%20Sumy%20Mancha,%20estoy%20interesado%20en%20solicitar%20un%20estudio%20gratuito.`} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="bg-brand-orange text-white text-center py-4 rounded-xl font-bold text-lg"
              >
                Solicitar estudio gratuito
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 transform origin-top-right hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Zap size={16} />
            <span>Instaladores Autorizados en Ciudad Real</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-brand-black tracking-tight leading-[1.1] mb-6">
            Reduce tu factura <br />
            <span className="text-brand-orange italic">eléctrica</span> ahora.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Especialistas en instalaciones industriales, energía solar fotovoltaica y soluciones eficientes que modernizan tu vivienda o empresa en toda Castilla-La Mancha.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${secureDecode(CONTACT_DATA.phoneFull)}?text=Hola%20Sumy%20Mancha,%20quisiera%20solicitar%20un%20estudio%20gratuito%20para%20mi%20vivienda/empresa.`} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 orange-shadow hover:scale-105 active:scale-95 transition-all duration-300 text-center"
            >
              Solicitar estudio gratuito
              <ArrowRight size={20} />
            </a>
            <a 
              href={`tel:${secureDecode(CONTACT_DATA.phone)}`} 
              className="bg-brand-black text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 text-center"
            >
              Llamar ahora
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-gray-100 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Cliente satisfecho ${i}`} />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-brand-orange mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-semibold text-brand-black">Reviews de 5 estrellas en Ciudad Real</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://github.com/websprintt/Sumymancha/raw/e0d033f2feac2b7db76071091cd85aa2193ca558/img/hero.webp" 
              alt="Instalación Industrial Fotovoltaica Sumy Mancha"
              className="w-full h-full object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4 text-white">
                <span className="text-sm uppercase font-bold tracking-widest text-brand-orange">Líderes en Ciudad Real</span>
                <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-bold text-2xl">70%</p>
                  <p className="text-white/70 text-xs font-semibold">Ahorro Medio</p>
                </div>
                <div>
                  <p className="text-white font-bold text-2xl">+500</p>
                  <p className="text-white/70 text-xs font-semibold">Proyectos</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -top-10 -right-10 hidden xl:block">
            <div className="bg-white p-6 rounded-3xl shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Garantía</p>
                  <p className="text-brand-black font-black">Trabajo Profesional</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const reviews = [
    { text: "Placas solares en una sola jornada con materiales TOP.", author: "Cris Serrano" },
    { text: "Muy formales y profesionales, todo fenomenal.", author: "M. Cespedes" },
    { text: "Gente joven con mucha profesionalidad y precios ajustados.", author: "Clara Cañadilla" },
    { text: "Acabados muy limpios. Para repetir sin dudarlo.", author: "Local Guide" },
    { text: "Eficientes y rápidos, muy recomendables.", author: "Adolfo Lorente" },
    { text: "Instalación industrial impecable.", author: "Empresa Local" }
  ];

  const repeatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="bg-brand-black py-6 overflow-hidden relative border-y border-white/5">
      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 whitespace-nowrap items-center px-8"
        >
          {repeatedReviews.map((review, i) => (
            <div key={i} className="flex flex-col items-start text-white/50 min-w-max">
              <div className="flex gap-1 text-brand-orange/40 mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
              </div>
              <p className="text-[11px] font-medium italic mb-0.5">"{review.text}"</p>
              <p className="text-[8px] font-bold uppercase tracking-widest opacity-60">{review.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefitList = [
    { 
      title: "Factura Mínima", 
      desc: "Llega hasta un 70% menos en tu factura gracias al autoconsumo real.",
      icon: <TrendingDown className="text-brand-orange" size={32} />
    },
    { 
      title: "Legalización Total", 
      desc: "Instalaciones 100% legales y certificadas según normativa vigente.",
      icon: <ShieldCheck className="text-brand-orange" size={32} />
    },
    { 
      title: "Trámites Incluidos", 
      desc: "Nos encargamos de toda la burocracia y gestión de ayudas públicas.",
      icon: <ClipboardCheck className="text-brand-orange" size={32} />
    },
    { 
      title: "Control Total", 
      desc: "Monitoriza tu producción y ahorro en tiempo real desde el móvil.",
      icon: <Zap className="text-brand-orange" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-brand-orange font-black uppercase tracking-widest text-sm block mb-4">Lo que conseguimos</span>
        <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-16 tracking-tight">Más que instalaciones, <span className="text-brand-orange italic">resultados</span> tangibles</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitList.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 text-left hover:bg-white hover:shadow-xl transition-all duration-500 group"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Fotovoltaica",
      icon: <Sun size={32} />,
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=75&w=800&auto=format&fit=crop",
      desc: "Kits de autoconsumo residencial e industrial con garantía de rendimiento."
    },
    {
      title: "Instalaciones Eléctricas",
      icon: <Zap size={32} />,
      image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=75&w=800&auto=format&fit=crop",
      desc: "Mantenimiento, reformas y nuevas instalaciones certificadas de alta calidad."
    },
    {
      title: "Puntos de Recarga VE",
      icon: <Car size={32} />,
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=75&w=800&auto=format&fit=crop",
      desc: "Cargadores ultra-rápidos para que tu vehículo eléctrico esté siempre listo."
    },
    {
      title: "Telecomunicaciones",
      icon: <CheckCircle2 size={32} />,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=75&w=800&auto=format&fit=crop",
      desc: "Infraestructuras de red, fibra y comunicaciones para empresas modernas."
    },
    {
      title: "Electricidad Industrial",
      icon: <Factory size={32} />,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=75&w=800&auto=format&fit=crop",
      desc: "Automatización, cuadros de gran potencia y optimización de factoría."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-brand-black text-white rounded-[64px] mx-4 my-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-black uppercase tracking-widest text-sm block mb-4">Nuestra Especialización</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">Servicios <br /> <span className="text-white/20">de Élite</span></h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-2">
            No hacemos de todo, hacemos lo que dominamos con precisión técnica y profesionalidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative h-[450px] rounded-3xl overflow-hidden group border border-white/10 ${i === 4 ? 'lg:col-span-2' : ''}`}
            >
              <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="w-14 h-14 bg-brand-orange text-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Estudio Gratuito", desc: "Analizamos tu consumo actual y potencial de ahorro sin coste alguno." },
    { title: "Presupuesto Claro", desc: "Sin sorpresas. Desglosamos materiales, mano de obra y plazos." },
    { title: "Instalación Rápida", desc: "Técnicos propios. Máxima limpieza y rapidez en la ejecución." },
    { title: "Legalización y Ayudas", desc: "Tramitamos subvenciones y registramos la instalación por ti." },
    { title: "Monitorización", desc: "Soporte técnico y seguimiento de tu independencia energética." }
  ];

  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-orange font-black uppercase tracking-widest text-sm block mb-4">Metodología</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Cómo trabajamos <span className="italic text-brand-orange">contigo</span></h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 text-center md:text-left">
              <span className="text-8xl font-black text-gray-100 absolute top-0 left-0 -z-10">{i + 1}</span>
              <h3 className="text-xl font-bold mb-4 pt-10">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[60px] -right-2 transform translate-x-1/2 text-brand-orange">
                  <ChevronRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudy = () => {
  return (
    <section id="proyectos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-brand-orange font-black uppercase tracking-widest text-sm block mb-4">Certeza Real</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-8 tracking-tight italic">Lo que ves es lo que obtenemos</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Instalación industrial en superficie de 2.500m². Pasamos de una factura mensual de 4.200€ a solo 850€ tras la amortización. 
              <br /><br />
              Independencia energética real para empresas locales que quieren competir mejor.
            </p>
            
            <div className="space-y-6">
              {[
                { label: "Tiempo de Obra", value: "3 Semanas" },
                { label: "Payback (Retorno)", value: "3.2 Años" },
                { label: "Vida Útil", value: "25+ Años" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="font-bold text-gray-500">{item.label}</span>
                  <span className="font-black text-brand-orange text-xl">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden h-48 sm:h-64"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=75&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Detalle Instalación Solar Profesional" 
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl overflow-hidden h-64 sm:h-80"
              >
                <img 
                  src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=75&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Proyecto Industrial Ciudad Real" 
                  loading="lazy"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden h-64 sm:h-80"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=75&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Técnico Especialista Sumy Mancha" 
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl overflow-hidden h-48 sm:h-64"
              >
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=75&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Cuadro Eléctrico de Alta Potencia" 
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${secureDecode(CONTACT_DATA.phoneFull)}?text=Hola,%20acabo%20de%20ver%20vuestra%20web%20y%20me%20gustaría%20más%20información.`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-10 leading-none">Empecemos a <br /> <span className="text-brand-orange">ahorrar hoy mismo</span></h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Dónde estamos</h4>
                <p className="text-gray-500">C. Socuéllamos, 11, Nave B, 13005 Ciudad Real</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Llámanos</h4>
                <p className="text-gray-500">{secureDecode(CONTACT_DATA.phone)}</p>
              </div>
            </div>

            <a href={`https://wa.me/${secureDecode(CONTACT_DATA.phoneFull)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">WhatsApp Directo</h4>
                <p className="text-gray-500">{secureDecode(CONTACT_DATA.phone)} (Respuesta inmediata)</p>
              </div>
            </a>

            <div className="pt-8 border-t border-gray-100">
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                 <Clock size={16} />
                 <span>Lun - Vie: 09:00 - 14:00 | 16:00 - 20:00</span>
               </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-black p-10 md:p-14 rounded-[48px] text-white shadow-2xl"
        >
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Nombre completo</label>
                <input id="name" name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Teléfono</label>
                <input id="phone" name="phone" type="tel" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors" placeholder="Tu teléfono" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Email</label>
              <input id="email" name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors" placeholder="tu@email.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Interés principal</label>
              <select id="interest" name="interest" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors appearance-none" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option value="placas">Placas Solares (Autoconsumo)</option>
                <option value="electricidad">Instalación Eléctrica / Reformas</option>
                <option value="cargador">Punto de Recarga VE</option>
                <option value="industrial">Servicio Industrial</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Comentarios (Opcional)</label>
              <textarea id="message" name="message" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors h-32" placeholder="Cuéntanos un poco más..." />
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-orange text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 orange-shadow hover:scale-[1.02] active:scale-95 transition-all"
            >
              Enviar vía WhatsApp
              <ArrowRight size={24} />
            </button>
            <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest">Al pulsar aceptas nuestra política de privacidad</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="https://github.com/websprintt/Sumymancha/raw/14259a798dfa36326608c2b2e96bd96dfe69ba32/img/logo-sin-fonfo.webp" 
                alt="Sumy Mancha Logo" 
                className="h-24 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Especialistas en instalaciones energéticas y soluciones eléctricas para un futuro más eficiente y sostenible en Castilla-La Mancha.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8">Servicios</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Placas Solares Ciudad Real</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Cargadores Coche Eléctrico</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Instalador Fotovoltaico</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Electricista Industrial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Empresa</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Proyectos Realizados</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Blog de Energía</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Trabaja con Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Contacto</h4>
            <p className="text-gray-400 text-sm mb-6">
              {secureDecode(CONTACT_DATA.email)}<br />
              {secureDecode(CONTACT_DATA.phone)}
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
                 <span className="text-xs font-bold leading-none">In</span>
               </div>
               <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
                 <span className="text-xs font-bold leading-none">Fb</span>
               </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium uppercase tracking-widest">
          <p>© 2026 Sumy Mancha. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans antialiased text-brand-black bg-brand-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Services />
        <Process />
        <CaseStudy />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating Call CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
        <a 
          href={`tel:${secureDecode(CONTACT_DATA.phone)}`} 
          className="w-14 h-14 bg-brand-black text-white rounded-full shadow-2xl flex items-center justify-center"
          aria-label="Llamar por teléfono"
        >
          <Phone size={24} />
        </a>
        <a 
          href={`https://wa.me/${secureDecode(CONTACT_DATA.phoneFull)}`} 
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center"
          aria-label="Enviar mensaje por WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}
