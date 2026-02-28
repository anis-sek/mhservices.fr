import { useState, useEffect, useRef } from "react";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Menu, 
  X, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  HardHat,
  ChevronRight,
  Star,
  MapPin,
  Calendar,
  ArrowRight,
  Paintbrush,
  Home,
  Wrench,
  Droplets,
  Zap,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const PHONE_NUMBER = "+33784637670";
const PHONE_DISPLAY = "07 84 63 76 70";

// Images from user assets
const IMAGES = {
  hero: "https://customer-assets.emergentagent.com/job_d635add8-2181-414e-96ff-1bcdf67a824c/artifacts/37mmxhoh_image.png",
  kitchen: "https://customer-assets.emergentagent.com/job_d635add8-2181-414e-96ff-1bcdf67a824c/artifacts/fynz01h3_image.png",
  hallway: "https://customer-assets.emergentagent.com/job_d635add8-2181-414e-96ff-1bcdf67a824c/artifacts/wn4gaup5_image.png",
  room: "https://customer-assets.emergentagent.com/job_d635add8-2181-414e-96ff-1bcdf67a824c/artifacts/6yss0caj_image.png",
  painting: "https://customer-assets.emergentagent.com/job_d635add8-2181-414e-96ff-1bcdf67a824c/artifacts/89pgg04u_image.png",
};

// Trust Items
const trustItems = [
  { icon: CheckCircle, text: "Devis Gratuit" },
  { icon: Clock, text: "Intervention Rapide" },
  { icon: ShieldCheck, text: "Garantie Décennale" },
  { icon: HardHat, text: "Artisans Qualifiés" },
];

// Services
const services = [
  {
    title: "Rénovation Intérieure",
    description: "Cuisine, salle de bain, isolation, aménagement complet",
    icon: Home,
    image: IMAGES.kitchen,
    span: "md:col-span-2",
  },
  {
    title: "Peinture & Décoration",
    description: "Finitions soignées, conseils couleurs",
    icon: Paintbrush,
    image: IMAGES.painting,
    span: "",
  },
  {
    title: "Façade & Extérieur",
    description: "Ravalement, isolation extérieure, toiture",
    icon: Building2,
    image: IMAGES.hero,
    span: "",
  },
  {
    title: "Plomberie",
    description: "Installation, réparation, mise aux normes",
    icon: Droplets,
    image: null,
    span: "",
  },
  {
    title: "Électricité",
    description: "Rénovation électrique, mise en conformité",
    icon: Zap,
    image: null,
    span: "",
  },
  {
    title: "Tous Corps d'État",
    description: "Coordination complète de vos travaux",
    icon: Wrench,
    image: null,
    span: "",
  },
];

// Gallery Items
const galleryItems = [
  { id: 1, title: "Rénovation Cuisine", image: IMAGES.kitchen, type: "Avant / Après" },
  { id: 2, title: "Rénovation Couloir", image: IMAGES.hallway, type: "Avant / Après" },
  { id: 3, title: "Rénovation Pièce", image: IMAGES.room, type: "Avant / Après" },
  { id: 4, title: "Travaux Peinture", image: IMAGES.painting, type: "En cours" },
  { id: 5, title: "Façade Extérieure", image: IMAGES.hero, type: "Chantier" },
];

// Process Steps
const processSteps = [
  { number: 1, title: "Prise de Contact", description: "Appelez-nous pour discuter de votre projet" },
  { number: 2, title: "Visite & Diagnostic", description: "Nous venons évaluer vos besoins sur place" },
  { number: 3, title: "Devis Gratuit", description: "Un devis détaillé et transparent vous est remis" },
  { number: 4, title: "Travaux", description: "Nos artisans réalisent vos travaux avec soin" },
  { number: 5, title: "Livraison", description: "Réception du chantier et satisfaction garantie" },
];

// Navigation Links
const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Avis", href: "#avis" },
  { name: "Contact", href: "#contact" },
];

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`glass-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "scrolled" : ""}`}
      data-testid="header"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#accueil" 
            className="flex items-center gap-2"
            onClick={(e) => { e.preventDefault(); scrollToSection("#accueil"); }}
            data-testid="logo"
          >
            <span className="font-bold text-2xl md:text-3xl tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <span className="text-amber-400">MH</span>
              <span className="text-neutral-900">Services</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="nav-link text-neutral-700 hover:text-neutral-900 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} data-testid="header-call-btn">
              <Button 
                className="btn-primary bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold px-4 md:px-6 py-2 rounded-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Appeler</span>
              </Button>
            </a>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="mobile-menu-btn">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <span className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      <span className="text-amber-400">MH</span>
                      <span className="text-neutral-900">Services</span>
                    </span>
                  </div>
                  <nav className="flex-1 p-6">
                    <ul className="space-y-4">
                      {navLinks.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                            className="flex items-center justify-between text-lg font-medium text-neutral-700 hover:text-amber-500 transition-colors"
                          >
                            {link.name}
                            <ChevronRight className="w-5 h-5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-6 border-t">
                    <a href={`tel:${PHONE_NUMBER}`} className="block">
                      <Button className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold py-3 rounded-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Appeler maintenant
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      id="accueil" 
      className="hero-section relative flex items-center"
      style={{ backgroundImage: `url(${IMAGES.hero})` }}
      data-testid="hero-section"
    >
      <div className="hero-overlay"></div>
      
      {/* Animated Shapes */}
      <div className="hero-shapes">
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-amber-400 font-bold text-sm md:text-base tracking-widest uppercase mb-4">
            Paris & Île-de-France
          </span>
          <h1 
            className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-none mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Rénovation<br />
            <span className="text-amber-400">d'Exception</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            Transformez votre espace de vie avec l'expertise MHServices. 
            Qualité, rapidité et garantie pour tous vos travaux de rénovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${PHONE_NUMBER}`} data-testid="hero-call-btn">
              <Button 
                size="lg"
                className="btn-primary bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold px-8 py-6 text-lg rounded-full w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </Button>
            </a>
            <a href="#contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold px-8 py-6 text-lg rounded-full w-full sm:w-auto"
              >
                En savoir plus
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

// Trust Banner
const TrustBanner = () => {
  return (
    <section className="trust-banner py-6 md:py-8 relative" data-testid="trust-banner">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-neutral-900" />
              <span className="font-bold text-neutral-900 text-sm md:text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white" data-testid="services-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Nos Expertises</span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-neutral-900 uppercase mt-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Nos Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card rounded-2xl overflow-hidden ${service.span} ${service.image ? "h-64 md:h-80" : "h-48 md:h-64"}`}
              style={{ 
                backgroundImage: service.image ? `url(${service.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: service.image ? "transparent" : "#F5F5F5"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`service-card-content h-full flex flex-col justify-end p-6 ${service.image ? "text-white" : "text-neutral-900"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.image ? "bg-amber-400" : "bg-amber-400/20"}`}>
                  <service.icon className={`w-6 h-6 ${service.image ? "text-neutral-900" : "text-amber-600"}`} />
                </div>
                <h3 
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className={`text-sm md:text-base ${service.image ? "text-white/80" : "text-neutral-600"}`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="realisations" className="py-20 md:py-32 section-light" data-testid="gallery-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Notre Portfolio</span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-neutral-900 uppercase mt-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Nos Réalisations
          </h2>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
              data-testid={`gallery-item-${item.id}`}
            >
              {item.type.includes("Avant") && <span className="badge-avant-apres">{item.type}</span>}
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="text-white font-bold text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-neutral-900">
            <DialogTitle className="sr-only">
              {selectedImage?.title || "Image de réalisation"}
            </DialogTitle>
            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">
                    {selectedImage.type}
                  </span>
                  <h3 
                    className="text-white text-2xl font-bold mt-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white" data-testid="process-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Comment ça marche</span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-neutral-900 uppercase mt-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Notre Processus
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-step flex gap-6 pb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="process-number flex-shrink-0">{step.number}</div>
              <div className="pt-2">
                <h3 
                  className="text-xl md:text-2xl font-bold text-neutral-900 mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  return (
    <section id="avis" className="py-20 md:py-32 section-light" data-testid="reviews-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Satisfaction Client</span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-neutral-900 uppercase mt-2 mb-12"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Nos Clients Témoignent
          </h2>

          <motion.div 
            className="reviews-badge inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 md:w-8 md:h-8 fill-neutral-900 text-neutral-900" />
              ))}
            </div>
            <div className="text-left">
              <p 
                className="text-2xl md:text-3xl font-bold text-neutral-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                30+ Clients Satisfaits
              </p>
              <p className="text-neutral-700 text-sm md:text-base">
                Tous les clients de MHServices sont satisfaits de notre travail
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="contact-section py-20 md:py-32 bg-white" data-testid="contact-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Contactez-nous</span>
            <h2 
              className="text-3xl md:text-5xl font-bold text-neutral-900 uppercase mt-2 mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Parlons de<br />Votre Projet
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Un projet de rénovation ? Appelez-nous directement pour en discuter. 
              Le devis se fait lors de la visite de votre chantier — c'est gratuit et sans engagement.
            </p>

            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="inline-block"
              data-testid="contact-phone-btn"
            >
              <Button 
                size="lg"
                className="btn-primary bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold px-8 py-6 text-xl rounded-full"
              >
                <Phone className="w-6 h-6 mr-3" />
                {PHONE_DISPLAY}
              </Button>
            </a>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">Zone d'intervention</p>
                  <p className="text-neutral-600 text-sm">Paris & Île-de-France</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">Horaires</p>
                  <p className="text-neutral-600 text-sm">Lun - Sam : 9h - 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900">Téléphone</p>
                  <p className="text-neutral-600 text-sm">{PHONE_DISPLAY}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.room} 
                alt="Rénovation MHServices"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-400 rounded-2xl p-6 shadow-xl">
              <p 
                className="text-3xl font-bold text-neutral-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                30+
              </p>
              <p className="text-neutral-800 font-medium">Clients satisfaits</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-12 md:py-16" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Logo & Description */}
          <div>
            <span 
              className="font-bold text-3xl block mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <span className="text-amber-400">MH</span>
              <span className="text-white">Services</span>
            </span>
            <p className="text-neutral-400 leading-relaxed">
              Votre partenaire de confiance pour tous vos travaux de rénovation en Île-de-France.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-white font-bold text-lg mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-white font-bold text-lg mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-neutral-400">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-amber-400 transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Paris & Île-de-France</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Lun - Sam : 9h - 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} MHServices. Tous droits réservés.
          </p>
          <a href={`tel:${PHONE_NUMBER}`}>
            <Button 
              className="bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold rounded-full"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler maintenant
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

// Floating Call Button
const FloatingCallButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`tel:${PHONE_NUMBER}`}
          className="floating-call-btn md:hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          data-testid="floating-call-btn"
        >
          <Phone className="w-6 h-6 text-neutral-900" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <TrustBanner />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
