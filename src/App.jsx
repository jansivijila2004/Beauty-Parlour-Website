import React, { useEffect, useMemo, useState } from "react";
import {
  Menu, X, Search, CalendarDays, Clock3, Sparkles, Scissors, Flower2,
  Heart, Star, ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Instagram,
  Facebook, Youtube, MessageCircle, CheckCircle2, ChevronDown, ShieldCheck,
  Gem, Hand, Leaf, CircleCheck, Send, Clock, Users, BadgeCheck, Filter
} from "lucide-react";

const salonPhone = "919876543210"; // Replace with the salon's WhatsApp number, country code included.
const salonEmail = "hello@glowbeauty.example";

const services = [
  { id: 1, name: "Hair Cut & Styling", category: "Hair", price: 499, duration: "45 min", description: "A fresh cut, beautiful blow-dry and styling tailored to you.", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85", popular: true },
  { id: 2, name: "Glow Facial", category: "Skin", price: 999, duration: "60 min", description: "A deep cleanse and hydration ritual for a healthy-looking glow.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85", popular: true },
  { id: 3, name: "Bridal Makeup", category: "Makeup", price: 4999, duration: "180 min", description: "A long-wear bridal look designed around your special day.", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85", popular: true },
  { id: 4, name: "Manicure & Pedicure", category: "Nails", price: 799, duration: "60 min", description: "A tidy, relaxing nail-care ritual with a polished finish.", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85", popular: false },
  { id: 5, name: "Waxing & Threading", category: "Skin", price: 599, duration: "30 min", description: "Gentle grooming services for a smooth, clean finish.", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85", popular: false },
  { id: 6, name: "Spa & Relaxation", category: "Spa", price: 1499, duration: "60 min", description: "Slow down with a calming body-care and relaxation session.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85", popular: true },
  { id: 7, name: "Hair Spa", category: "Hair", price: 1199, duration: "50 min", description: "Nourishing care for softer, shinier, more manageable hair.", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=85", popular: false },
  { id: 8, name: "Party Makeup", category: "Makeup", price: 1999, duration: "90 min", description: "A camera-ready look for celebrations, events and evenings.", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85", popular: false }
];

const gallery = [
  { title: "Classic bridal look", category: "Bridal Makeup", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85" },
  { title: "Soft natural makeup", category: "Makeup", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=85" },
  { title: "Refreshing facial care", category: "Facials", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85" },
  { title: "Minimal nail art", category: "Nails", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85" },
  { title: "Soft waves hairstyle", category: "Hair Styling", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85" },
  { title: "Relaxing spa ritual", category: "Spa", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85" },
  { title: "Elegant evening look", category: "Makeup", image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1000&q=85" },
  { title: "Fresh beauty finish", category: "Facials", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1000&q=85" },
  { title: "Bridal eye details", category: "Bridal Makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85" },
  { title: "Modern hair styling", category: "Hair Styling", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85" },
  { title: "Calm wellness moment", category: "Spa", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85" },
  { title: "Polished manicure", category: "Nails", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85" },
  { title: "Everyday beauty portrait", category: "Makeup", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85" },
  { title: "Healthy hair inspiration", category: "Hair Styling", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=85" },
  { title: "Gentle skincare routine", category: "Facials", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=85" }
];

const testimonials = [
  { name: "Priya S.", text: "Such a lovely experience! The team listened to what I wanted and made me feel comfortable from start to finish.", stars: 5, initials: "PS" },
  { name: "Anitha R.", text: "My bridal makeup was beautiful and lasted all day. I felt like the best version of myself.", stars: 5, initials: "AR" },
  { name: "Sneha K.", text: "Clean, calming and so welcoming. I loved my facial and have already booked my next visit.", stars: 5, initials: "SK" }
];

const money = (n) => `₹${Number(n).toLocaleString("en-IN")}`;
const getPage = () => window.location.hash.replace("#", "").split("?")[0] || "home";

function App() {
  // Set a custom beauty-parlour favicon and browser-tab title.
  useEffect(() => {
    document.title = "Glow Beauty Parlour | Beauty, You Deserve";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs><linearGradient id="p" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e94f83"/><stop offset="1" stop-color="#b97883"/></linearGradient></defs>
      <circle cx="32" cy="32" r="29" fill="#fff8fb" stroke="url(#p)" stroke-width="3"/>
      <path d="M19 23 24 12 32 19 40 11 45 24 41 22 32 26 23 22Z" fill="url(#p)"/>
      <path d="M20 48c1-8 4-13 10-16 4-2 6-5 6-9 5 3 7 7 6 12-1 4-4 6-7 8l-1 5Z" fill="url(#p)"/>
      <path d="M22 31c-2 5-3 11-2 17M28 33c-3 5-4 10-4 15" fill="none" stroke="#b83f70" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M39 39c4-1 7 1 8 5-4 1-7-1-8-5Z" fill="#e94f83"/>
      <path d="M37 45c-2 4-1 7 2 9 3-4 2-7-2-9Z" fill="#d88b9d"/>
    </svg>`;
    let favicon = document.querySelector('link[ rel~="icon" ]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.type = "image/svg+xml";
    favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }, []);

  const [page, setPage] = useState(getPage());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [bookingService, setBookingService] = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const [serviceCategory, setServiceCategory] = useState("All");
  const [galleryCategory, setGalleryCategory] = useState("All");

  useEffect(() => {
    const sync = () => { setPage(getPage()); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
    window.addEventListener("hashchange", sync);
    if (!window.location.hash) window.location.hash = "#home";
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(""), 3500);
    return () => window.clearTimeout(t);
  }, [toast]);

  // Reveal sections as they enter the viewport, with a graceful fallback for older browsers.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-enabled");
    const targets = document.querySelectorAll(
      ".section-pad, .offer-band, .cta-section, .page-banner, .story-grid, .service-card, .gallery-item, .testimonial-card, .value-card, .contact-form, .booking-form, .benefit-item, .map-card"
    );
    if (!("IntersectionObserver" in window)) {
      targets.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("motion-enabled");
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach((item) => { item.classList.add("reveal-on-scroll"); observer.observe(item); });
    return () => { observer.disconnect(); root.classList.remove("motion-enabled"); };
  }, [page]);

  const navigate = (to) => {
    window.location.hash = `#${to}`;
    setPage(to);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startBooking = (service = "") => {
    setBookingService(service);
    navigate("booking");
  };

  return (
    <div className="app-shell">
      <Header page={page} navigate={navigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} startBooking={startBooking} />
      <main>
        {page === "home" && <Home navigate={navigate} startBooking={startBooking} />}
        {(page === "services" || page === "services-offers") && <ServicesOffers search={serviceSearch} setSearch={setServiceSearch} category={serviceCategory} setCategory={setServiceCategory} startBooking={startBooking} />}
        {page === "gallery" && <Gallery category={galleryCategory} setCategory={setGalleryCategory} />}
        {page === "offers" && <ServicesOffers search={serviceSearch} setSearch={setServiceSearch} category={serviceCategory} setCategory={setServiceCategory} startBooking={startBooking} />}

        {page === "my-bookings" && <MyBookings navigate={navigate} />}
        {page === "faq" && <FAQ />}
        {page === "booking" && <Booking initialService={bookingService} setToast={setToast} />}
        {page === "about" && <About startBooking={startBooking} />}
        {page === "contact" && <Contact setToast={setToast} />}
        {!["home", "services", "services-offers", "gallery", "offers", "my-bookings", "faq", "booking", "about", "contact"].includes(page) && <Home navigate={navigate} startBooking={startBooking} />}
        {!["home", "services", "services-offers", "offers", "gallery", "contact"].includes(page) && <PageExtras page={page} navigate={navigate} startBooking={startBooking} />}
      </main>
      <Footer navigate={navigate} />
      <a className="floating-whatsapp" href={`https://wa.me/${salonPhone}?text=${encodeURIComponent("Hi Glow Beauty Parlour! I'd like to know more about your services.")}`} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
        <MessageCircle size={22} /><span>Chat with us</span>
      </a>
      {toast && <div className="toast" role="status"><CheckCircle2 size={19} />{toast}</div>}
    </div>
  );
}

function Header({ page, navigate, mobileOpen, setMobileOpen, startBooking }) {
  const links = [["home", "Home"], ["about", "About"], ["services-offers", "Services & Offers"], ["gallery", "Gallery"], ["contact", "Contact"]];
  return <header className="site-header">
    <div className="nav-wrap container">
      <button className="brand" onClick={() => navigate("home")} aria-label="Glow Beauty Parlour home">
        <span className="brand-mark"><Flower2 size={25} strokeWidth={1.7} /></span>
        <span className="brand-copy"><strong>Glow</strong><small>BEAUTY PARLOUR</small></span>
      </button>
      <nav className={`nav-links ${mobileOpen ? "open" : ""}`} aria-label="Main navigation">
        {links.map(([id, label]) => <button key={id} className={page === id ? "nav-link active" : "nav-link"} onClick={() => navigate(id)}>{label}</button>)}
        <button className="mobile-book" onClick={() => startBooking()}><CalendarDays size={16} /> Book appointment</button>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn search-nav" aria-label="Go to services" onClick={() => navigate("services")}><Search size={18} /></button>
        <button className="icon-btn calendar-nav" aria-label="Book appointment" onClick={() => startBooking()}><CalendarDays size={18} /></button>
        <button className="btn btn-primary nav-book" onClick={() => startBooking()}>Book Appointment <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>{mobileOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
  </header>;
}

function PageBanner({ eyebrow, title, subtitle, image }) {
  return <section className="page-banner">
    <div className="container banner-content">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <div className="banner-decoration"><img src={image || "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"} alt="" /></div>
  </section>;
}

function Home({ navigate, startBooking }) {
  return <>
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={15} /> YOUR MOMENT TO SHINE</span>
          <h1>Be confident.<br /><em>Be beautiful.</em></h1>
          <p className="hero-lead">A little self-care goes a long way. Discover thoughtful beauty rituals made just for you.</p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => startBooking()}>Book an appointment <ArrowRight size={17} /></button>
            <button className="btn btn-outline btn-lg" onClick={() => navigate("services")}>Explore services</button>
          </div>
          <div className="hero-proof"><div className="avatar-stack"><span>PS</span><span>AR</span><span>SK</span></div><div><div className="stars">★★★★★ <b>4.9/5</b></div><small>Loved by our lovely clients</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1100&q=90" alt="Beauty makeup look" /></div>
          <div className="floating-note note-top"><span className="note-icon"><Flower2 size={19} /></span><span><b>Your beauty, your way</b><small>Made personal for you</small></span></div>
          <div className="floating-note note-bottom"><span className="round-check"><CheckCircle2 size={19} /></span><span><b>Expert beauticians</b><small>Here to help you glow</small></span></div>
          <span className="hero-sparkle sparkle-one">✦</span><span className="hero-sparkle sparkle-two">✧</span>
        </div>
      </div>
      <div className="hero-bottom container"><span>BEAUTY IS A FEELING</span><span className="hero-bottom-line"></span><span>COME AS YOU ARE, LEAVE GLOWING</span></div>
    </section>
    <section className="benefits section-pad">
      <div className="container benefit-grid">
        <Benefit icon={<BadgeCheck />} title="Expert beauticians" text="Skilled hands, thoughtful care." />
        <Benefit icon={<Leaf />} title="Quality products" text="Chosen with your comfort in mind." />
        <Benefit icon={<ShieldCheck />} title="Clean & hygienic" text="Your safety is our priority." />
        <Benefit icon={<Heart />} title="Made for you" text="Care that fits your unique style." />
      </div>
    </section>
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="A LITTLE SOMETHING FOR YOU" title="Our popular services" text="Your favourite beauty rituals, all in one lovely place." action="View all services" onAction={() => navigate("services")} />
        <div className="service-grid home-services">{services.filter(s => s.popular).slice(0, 4).map(s => <ServiceCard key={s.id} service={s} startBooking={startBooking} compact />)}</div>
      </div>
    </section>
    <section className="offer-band"><div className="offer-flower">✿</div><div className="container offer-content"><div><span className="eyebrow">A LITTLE TREAT</span><h2>Glow a little brighter</h2><p>Enjoy 10% off your first facial service.</p><small>*Mention “FIRSTGLOW” when enquiring. Sample offer.</small></div><button className="btn btn-dark" onClick={() => startBooking("Glow Facial")}>Claim your glow <ArrowRight size={17} /></button></div></section>
    <section className="section-pad testimonials-section"><div className="container"><SectionHeading eyebrow="KIND WORDS, HAPPY HEARTS" title="What our clients say" text="The sweetest part of what we do is making you feel good." centered /><div className="testimonial-grid">{testimonials.map(t => <Testimonial key={t.name} item={t} />)}</div></div></section>
    <section className="cta-section"><div className="container cta-card"><div className="cta-flower"><Flower2 size={74} strokeWidth={1} /></div><span className="eyebrow">YOUR SELF-CARE MOMENT</span><h2>Ready for a little glow-up?</h2><p>Take a breath, take a moment, and let us take care of you.</p><button className="btn btn-primary btn-lg" onClick={() => startBooking()}>Find your appointment <ArrowRight size={17} /></button></div></section>
  </>;
}

function Benefit({ icon, title, text }) { return <div className="benefit-item"><div className="benefit-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>; }

function SectionHeading({ eyebrow, title, text, action, onAction, centered = false }) {
  return <div className={`section-heading ${centered ? "centered" : ""}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>{action && <button className="text-link" onClick={onAction}>{action} <ArrowRight size={16} /></button>}</div>;
}

const hoverImages = {
  1: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  2: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85",
  3: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85",
  4: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
  5: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
  6: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85",
  7: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85",
  8: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85"
};
const galleryHoverImages = [
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=85"
];
function ServiceCard({ service, startBooking, compact = false }) {
  const fallbackImage = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80";
  return <article className={`service-card ${compact ? "compact" : ""}`}>
    <div className="service-photo image-swap"><img className="swap-image swap-primary" src={service.image} alt={service.name} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImage; }} /><img className="swap-image swap-secondary" src={hoverImages[service.id] || fallbackImage} alt={`${service.name} example`} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; }} />{service.popular && <span className="popular-tag"><Sparkles size={12} /> Popular</span>}</div>
    <div className="service-info"><div className="service-title-row"><h3>{service.name}</h3><span className="service-price">{money(service.price)}</span></div><p>{service.description}</p><div className="service-meta"><span><Clock3 size={14} />{service.duration}</span><span className="service-category">{service.category}</span></div><button className="btn btn-soft service-book" onClick={() => startBooking(service.name)}>Book this service <ArrowRight size={15} /></button></div>
  </article>;
}

function ServicesOffers({ search, setSearch, category, setCategory, startBooking }) {
  return <>
    <Services search={search} setSearch={setSearch} category={category} setCategory={setCategory} startBooking={startBooking} />
    <Offers startBooking={startBooking} />
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="A LITTLE EXTRA CARE" title="Beauty that fits your day" text="Choose a service, ask us about a package, and we will help you find the right time." centered /><div className="benefit-grid"><Benefit icon={<Clock3 />} title="Easy appointments" text="Pick a date and preferred time that works for you." /><Benefit icon={<Heart />} title="Personal care" text="Tell us what you like and we will listen carefully." /><Benefit icon={<Sparkles />} title="Special packages" text="Ask about available offers before you book." /><Benefit icon={<ShieldCheck />} title="Clean space" text="We aim to make every visit calm and comfortable." /></div></div></section>
    <section className="section-pad service-faq-section"><div className="container"><SectionHeading eyebrow="SERVICE QUESTIONS" title="A few things you may want to know" text="Quick answers to help you choose a service with confidence." centered /><MiniFAQ items={[["How do I choose the right service?", "Browse the service categories and descriptions. If you are unsure, contact us and tell us what result you would like."], ["Do I need to book before visiting?", "Booking ahead is recommended so we can check the time you prefer. Please contact us to confirm availability."], ["Are the listed prices final?", "Prices are sample starting prices. The final cost can depend on hair length, treatment needs, products and package choices."], ["Can I ask for a specific look?", "Yes. You can bring reference photos and share your preferences with the beauty professional before the service."], ["What if I have sensitive skin?", "Please tell us about allergies or skin sensitivities before starting a treatment so the team can discuss suitable options."], ["Can I book a package?", "Yes. Choose an offer and use its booking button. Please confirm package details and availability with the parlour."]]} /></div></section>
    <section className="cta-section"><div className="container cta-card"><span className="eyebrow">YOUR NEXT SELF-CARE MOMENT</span><h2>Found something you love?</h2><p>Book your favourite service and let us take care of the little details.</p><button className="btn btn-primary btn-lg" onClick={() => startBooking()}>Book an appointment <ArrowRight size={17} /></button></div></section>
  </>;
}

function Services({ search, setSearch, category, setCategory, startBooking }) {
  const categories = ["All", "Hair", "Skin", "Makeup", "Nails", "Spa"];
  const filtered = useMemo(() => services.filter(s => (category === "All" || s.category === category) && `${s.name} ${s.description} ${s.category}`.toLowerCase().includes(search.toLowerCase())), [category, search]);
  return <>
    <PageBanner eyebrow="A LITTLE CARE, A LOT OF GLOW" title="Our services" subtitle="Thoughtfully chosen beauty services to help you look and feel your best." image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80" />
    <section className="section-pad"><div className="container">
      <div className="service-toolbar"><label className="search-field"><Search size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search a service..." aria-label="Search services" />{search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={16} /></button>}</label><div className="filter-label"><Filter size={15} /> Filter by</div><div className="filter-pills">{categories.map(c => <button key={c} className={category === c ? "filter-pill selected" : "filter-pill"} onClick={() => setCategory(c)}>{c}</button>)}</div></div>
      <div className="results-line"><span>{filtered.length} lovely {filtered.length === 1 ? "service" : "services"} to explore</span><span>Prices in Indian Rupees (₹)</span></div>
      {filtered.length ? <div className="service-grid">{filtered.map(s => <ServiceCard key={s.id} service={s} startBooking={startBooking} />)}</div> : <div className="empty-state"><Search size={30} /><h3>No services found</h3><p>Try another search or choose a different category.</p><button className="btn btn-outline" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button></div>}
      <div className="notice-box"><Sparkles size={20} /><p><b>A little note:</b> Prices shown are sample starting prices and may vary by hair length, products used or your chosen package. We’ll confirm the final price with you.</p></div>
    </div></section>
  </>;
}

function Gallery({ category, setCategory }) {
  const categories = ["All", "Bridal Makeup", "Makeup", "Facials", "Nails", "Hair Styling", "Spa"];
  const filtered = gallery.filter(g => category === "All" || g.category === category);
  return <>
    <PageBanner eyebrow="A PEEK AT OUR WORK" title="Our gallery" subtitle="Little details, lovely transformations, and moments worth remembering." image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80" />
    <section className="section-pad"><div className="container"><div className="gallery-filters">{categories.map(c => <button key={c} className={category === c ? "filter-pill selected" : "filter-pill"} onClick={() => setCategory(c)}>{c}</button>)}</div><div className="gallery-grid">{filtered.map((g, i) => <article className={`gallery-item gallery-item-${i % 5} image-swap`} key={g.title}><img className="swap-image swap-primary" src={g.image} alt={g.title} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80"; }} /><img className="swap-image swap-secondary" src={galleryHoverImages[i % galleryHoverImages.length]} alt={`${g.title} alternate look`} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; }} /><div className="gallery-overlay"><span>{g.category}</span><h3>{g.title}</h3><ArrowUpRight size={20} /></div></article>)}</div><p className="gallery-disclaimer">Images are for inspiration and may be representative of beauty styles and treatments.</p><section className="gallery-curation"><div className="gallery-curation-copy"><span className="eyebrow">HOW TO USE THE GALLERY</span><h2>Save a look you love.</h2><p>Use these photos to explain the finish, colour, or style you have in mind. Every look can be adjusted to suit your features, comfort, and occasion.</p><ul><li>Choose a style that feels like you.</li><li>Bring your reference photo to the appointment.</li><li>Ask our team about care and upkeep.</li></ul></div><div className="gallery-curation-photo"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85" alt="Professional hairstyling in a salon" loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /></div></section></div></section>
  </>;
}

function Booking({ initialService, setToast }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: initialService || "", date: "", time: "", notes: "" });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(null);
  useEffect(() => { if (initialService) setForm(f => ({ ...f, service: initialService })); }, [initialService]);
  const selected = services.find(s => s.name === form.service);
  const today = new Date();
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const update = (key, value) => setForm(f => ({ ...f, [key]: value }));
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[0-9+\-\s()]{8,16}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!form.service) e.service = "Please choose a service.";
    if (!form.date) e.date = "Please choose a date.";
    else if (form.date < todayString) e.date = "Choose today or a future date.";
    if (!form.time) e.time = "Please choose a time.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const buildMessage = () => `Hello Glow Beauty Parlour! I'd like to request an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "Not provided"}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}\nEstimated price: ${selected ? money(selected.price) : "To be confirmed"}\nNotes: ${form.notes || "None"}\n\nPlease confirm availability. Thank you!`;
  const saveAppointment = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const record = { ...form, id: `GL-${Date.now().toString().slice(-7)}`, createdAt: new Date().toISOString(), status: "Request saved locally", estimatedPrice: selected?.price || 0 };
    try {
      const current = JSON.parse(localStorage.getItem("glowAppointments") || "[]");
      localStorage.setItem("glowAppointments", JSON.stringify([record, ...current]));
      setSaved(record);
      setToast("Appointment request saved on this device.");
    } catch {
      setToast("Could not save locally. Please check browser storage settings.");
    }
  };
  const whatsapp = () => {
    if (!validate()) return;
    window.open(`https://wa.me/${salonPhone}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener,noreferrer");
  };
  if (saved) return <section className="section-pad booking-page"><div className="container confirmation-wrap"><div className="confirmation-card"><div className="confirmation-icon"><CheckCircle2 size={42} /></div><span className="eyebrow">YOU’RE ONE STEP CLOSER</span><h1>Thank you, {saved.name.split(" ")[0]}!</h1><p>Your appointment request has been saved in this browser. It is not yet confirmed by the salon.</p><div className="booking-summary"><div><span>Request reference</span><b>{saved.id}</b></div><div><span>Service</span><b>{saved.service}</b></div><div><span>Date & time</span><b>{saved.date} · {saved.time}</b></div><div><span>Estimated price</span><b>{money(saved.estimatedPrice)}</b></div></div><div className="confirmation-actions"><button className="btn btn-primary" onClick={() => window.open(`https://wa.me/${salonPhone}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener,noreferrer")}><MessageCircle size={17} /> Send details on WhatsApp</button><button className="btn btn-outline" onClick={() => { setSaved(null); setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", notes: "" }); setErrors({}); }}>Book another appointment</button></div><p className="fine-print">For this demo, saved requests remain on this device only. Contact the salon to confirm availability.</p></div></div></section>;
  return <>
    <PageBanner eyebrow="YOUR SELF-CARE STARTS HERE" title="Book your appointment" subtitle="Choose your preferred service and time. We can’t wait to welcome you." image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80" />
    <section className="section-pad booking-page"><div className="container booking-layout">
      <form className="booking-form panel" onSubmit={saveAppointment} noValidate>
        <div className="form-heading"><span className="step-number">01</span><div><h2>Your details</h2><p>How can we get in touch with you?</p></div></div>
        <div className="form-grid">
          <FormField label="Full name *" error={errors.name}><input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Enter your name" autoComplete="name" /></FormField>
          <FormField label="Phone number *" error={errors.phone}><input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 98765 43210" inputMode="tel" autoComplete="tel" /></FormField>
          <FormField label="Email address (optional)" className="full"><input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" autoComplete="email" /></FormField>
        </div>
        <div className="form-divider"></div>
        <div className="form-heading"><span className="step-number">02</span><div><h2>Your appointment</h2><p>Pick the service and time that suit you.</p></div></div>
        <div className="form-grid">
          <FormField label="Choose a service *" error={errors.service} className="full"><div className="select-wrap"><select value={form.service} onChange={e => update("service", e.target.value)}><option value="">Select a service</option>{services.map(s => <option key={s.id} value={s.name}>{s.name} — {money(s.price)}</option>)}</select><ChevronDown size={17} /></div></FormField>
          <FormField label="Preferred date *" error={errors.date}><input type="date" min={todayString} value={form.date} onChange={e => update("date", e.target.value)} /></FormField>
          <FormField label="Preferred time *" error={errors.time}><div className="select-wrap"><select value={form.time} onChange={e => update("time", e.target.value)}><option value="">Select a time</option>{["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"].map(t => <option key={t}>{t}</option>)}</select><ChevronDown size={17} /></div></FormField>
          <FormField label="Special requests (optional)" className="full"><textarea rows="3" value={form.notes} onChange={e => update("notes", e.target.value)} placeholder="Tell us if you have any preferences..." /></FormField>
        </div>
        <p className="required-note">* Required fields</p>
        <button className="btn btn-primary submit-booking" type="submit">Save appointment request <ArrowRight size={17} /></button>
        <p className="privacy-note"><ShieldCheck size={15} /> Your details are saved only in this browser demo. No server is connected.</p>
      </form>
      <aside className="booking-aside">
        <div className="price-panel panel"><span className="eyebrow">YOUR VISIT, AT A GLANCE</span><h2>Appointment summary</h2><div className="summary-service-image"><img src={selected?.image || "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"} alt={selected?.name || "Flowers"} /></div><div className="summary-row"><span>Selected service</span><b>{selected?.name || "Choose a service"}</b></div><div className="summary-row"><span>Duration</span><b>{selected?.duration || "—"}</b></div><div className="summary-total"><span>Estimated price</span><strong>{selected ? money(selected.price) : "₹0"}</strong></div><p className="fine-print">Prices are estimates and will be confirmed by the salon.</p><button type="button" className="btn btn-whatsapp" onClick={whatsapp}><MessageCircle size={18} /> Request via WhatsApp</button><p className="whatsapp-caption">Opens WhatsApp with your appointment details pre-filled.</p></div>
        <div className="aside-help"><div className="aside-help-icon"><Phone size={19} /></div><div><b>Need a little help?</b><p>Have a question before booking?</p><a href={`https://wa.me/${salonPhone}`} target="_blank" rel="noreferrer">Chat with us <ArrowUpRight size={14} /></a></div></div>
        <div className="aside-promise"><Heart size={18} /><p>“You deserve a moment that’s just for you.”</p></div>
      </aside>
    </div></section>
  </>;
}

function FormField({ label, error, className = "", children }) {
  return <label className={`form-field ${className}`}><span>{label}</span>{children}{error && <small className="field-error">{error}</small>}</label>;
}

function About({ startBooking }) {
  return <>
    <PageBanner eyebrow="A LITTLE ABOUT US" title="Beauty with a little more heart" subtitle="We believe beauty is personal, confidence is powerful, and everyone deserves to feel cared for." image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80" />
    <section className="section-pad"><div className="container story-grid"><div className="story-image"><img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85" alt="Beauty artistry" /><div className="story-stamp"><Flower2 size={25} /><b>Feel good.<br />Glow naturally.</b></div></div><div className="story-copy"><span className="eyebrow">OUR STORY</span><h2>A happy place for your beauty rituals.</h2><p className="lead">Glow Beauty Parlour was imagined as a warm, welcoming space where every visit feels like time well spent.</p><p>Our approach is simple: listen first, care thoughtfully, and help you find a look that feels like you. From a little refresh to your big-day glam, we want you to leave feeling comfortable, confident and cared for.</p><p>Our sample service menu is designed around everyday beauty, special occasions and those much-needed self-care moments.</p><button className="btn btn-primary" onClick={() => startBooking()}>Come say hello <ArrowRight size={17} /></button></div></div></section>
    <section className="values-section section-pad"><div className="container"><SectionHeading eyebrow="WHAT MATTERS TO US" title="The Glow promise" text="Small details make a beautiful difference." centered /><div className="values-grid"><Value icon={<Heart />} title="Personal care" text="Every service starts with listening to you and understanding your preferences." /><Value icon={<ShieldCheck />} title="Clean & considered" text="We value a clean, calm environment and careful beauty routines." /><Value icon={<Gem />} title="Quality first" text="We aim for thoughtful service and products chosen with care." /><Value icon={<Sparkles />} title="Confidence always" text="Our goal is for you to leave feeling like the best version of yourself." /></div></div></section>
    <section className="quote-band"><div className="container"><span>✦</span><blockquote>“Beauty begins the moment you decide to be yourself.”</blockquote><p>— Your friends at Glow</p></div></section>
  </>;
}

function Value({ icon, title, text }) { return <div className="value-card"><div className="benefit-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>; }

function Contact({ setToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()) { setToast("Please complete all contact form fields with a valid email."); return; } setSent(true); setToast("Demo message prepared. Use WhatsApp to contact the salon."); };
  const openWhatsApp = () => {
    const msg = `Hello Glow Beauty Parlour!\nName: ${form.name || "Visitor"}\nEmail: ${form.email || "Not provided"}\nMessage: ${form.message || "I'd like to know more about your services."}`;
    window.open(`https://wa.me/${salonPhone}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };
  return <>
    <PageBanner eyebrow="WE'D LOVE TO HEAR FROM YOU" title="Let's get in touch" subtitle="Questions, ideas, or help choosing a service? We're happy to help." image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80" />
    <section className="section-pad"><div className="container contact-layout">
      <div className="contact-details"><span className="eyebrow">SAY HELLO</span><h2>We’re here for you.</h2><p className="contact-intro">Reach out for service enquiries, appointment questions or a little help deciding what’s right for you.</p>
        <ContactDetail icon={<Phone />} title="Phone" detail="+91 98765 43210" sub="Sample contact number" href={`tel:+${salonPhone}`} />
        <ContactDetail icon={<Mail />} title="Email" detail={salonEmail} sub="Sample email address" href={`mailto:${salonEmail}`} />
        <ContactDetail icon={<MapPin />} title="Visit us" detail="123 Beauty Street, Coimbatore" sub="Tamil Nadu, India · Sample address" />
        <ContactDetail icon={<Clock />} title="Opening hours" detail="Monday – Sunday" sub="9:00 AM – 7:00 PM · Sample hours" />
        <a className="btn btn-whatsapp contact-whatsapp" href={`https://wa.me/${salonPhone}?text=${encodeURIComponent("Hi Glow Beauty Parlour! I have a question.")}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chat on WhatsApp</a>
      </div>
      <form className="contact-form panel" onSubmit={submit}><div className="form-heading"><span className="step-number"><Send size={17} /></span><div><h2>Send us a message</h2><p>Fill this in and continue with WhatsApp.</p></div></div>{sent && <div className="inline-success"><CheckCircle2 size={17} /> Your message is ready. You can send it to us on WhatsApp.</div>}<FormField label="Your name"><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" required /></FormField><FormField label="Email address"><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required /></FormField><FormField label="Your message"><textarea rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" required /></FormField><button className="btn btn-primary submit-booking" type="submit">Prepare message <ArrowRight size={17} /></button><button className="btn btn-outline submit-booking" type="button" onClick={openWhatsApp}><MessageCircle size={17} /> Continue in WhatsApp</button><p className="privacy-note"><ShieldCheck size={15} /> This demo does not send or store messages on a server.</p></form>
    </div></section>
    <section className="map-placeholder"><div className="map-pattern"></div><div className="map-card"><div className="map-pin"><MapPin size={22} /></div><h3>Come visit Glow</h3><p>123 Beauty Street, Coimbatore, Tamil Nadu</p><small>Sample location — update with your real salon address.</small><a href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu" target="_blank" rel="noreferrer" className="text-link">Open in Google Maps <ArrowUpRight size={15} /></a></div></section>
    <section className="section-pad contact-faq-section"><div className="container"><SectionHeading eyebrow="COMMON QUESTIONS" title="Need a quick answer?" text="Here are a few helpful details about visiting and contacting us." centered /><MiniFAQ items={[["What are your opening hours?", "The sample hours shown are 9:00 AM to 7:00 PM. Please contact the parlour to confirm current hours."], ["How can I book an appointment?", "Use the Book Appointment form or message us on WhatsApp with your preferred service, date and time."], ["Where are you located?", "Our displayed address is sample information. Please confirm the real salon address before travelling."], ["How quickly will you reply?", "Response times can vary. WhatsApp is a convenient way to send an enquiry and share your booking details."], ["Can I ask about service prices?", "Of course. Send us the service name and we can help you check the current price and package options."], ["Can I change my booking?", "Contact us with your name and booking details to ask about changing your preferred date or time."]]} /></div></section>
  </>;
}

function Offers({ startBooking }) {
  const deals = [
    { tag: "MOST LOVED", title: "Glow & Go", text: "A refreshing facial and a relaxing head massage for your everyday glow.", price: 1299, old: 1698, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85", service: "Glow Facial" },
    { tag: "BRIDE TO BE", title: "Bridal Beauty Edit", text: "A personalised bridal consultation and party makeup trial to plan your look.", price: 3499, old: 4999, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85", service: "Bridal Makeup" },
    { tag: "SELF-CARE DAY", title: "Head-to-Toe Treat", text: "Hair spa and manicure for a little well-deserved me-time.", price: 1599, old: 1998, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85", service: "Hair Spa" }
  ];
  return <><PageBanner eyebrow="A LITTLE EXTRA LOVE" title="Offers & beauty packages" subtitle="Thoughtful little treats for your next self-care moment. Ask us to confirm availability before booking." image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80" /><section className="section-pad"><div className="container"><div className="offer-page-grid">{deals.map((d, i) => <article className="offer-page-card" key={d.title} style={{ animationDelay: `${i * 120}ms` }}><div className="offer-page-photo"><img src={d.image} alt={d.title} /><span>{d.tag}</span></div><div className="offer-page-body"><h2>{d.title}</h2><p>{d.text}</p><div className="offer-price"><strong>{money(d.price)}</strong><del>{money(d.old)}</del></div><button className="btn btn-primary" onClick={() => startBooking(d.service)}>Book this package <ArrowRight size={16} /></button></div></article>)}</div><p className="fine-print offer-note">Offers shown are sample website content. Please confirm package inclusions, pricing and validity with the parlour.</p></div></section></>;
}

function Reviews() {
  const [active, setActive] = useState(0);
  const items = [...testimonials, { name: "Meera V.", text: "The staff were friendly, the space was lovely and my hair spa was so relaxing. I will definitely visit again.", stars: 5, initials: "MV" }];
  return <><PageBanner eyebrow="KIND WORDS, HAPPY HEARTS" title="A little love from our clients" subtitle="Every visit is a chance to help someone feel confident, cared for and beautifully themselves." image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80" /><section className="section-pad"><div className="container"><div className="reviews-intro"><div className="review-score"><strong>5.0</strong><span className="stars">★★★★★</span><small>Sample rating display</small></div><div><h2>Beauty is better when it feels personal.</h2><p>These example testimonials show how customer feedback can appear. Replace them with genuine client reviews before publishing.</p></div></div><div className="reviews-grid">{items.map((item, i) => <article className={`testimonial-card review-feature ${active === i ? "review-active" : ""}`} key={item.name} style={{ animationDelay: `${i * 90}ms` }} onMouseEnter={() => setActive(i)}><div className="testimonial-top"><div className="testimonial-avatar">{item.initials}</div><div><h3>{item.name}</h3><span className="verified"><CircleCheck size={13} /> Example testimonial</span></div><div className="stars">{"★".repeat(item.stars)}</div></div><p>“{item.text}”</p><Sparkles className="review-sparkle" size={18} /></article>)}</div></div></section></>;
}

function MyBookings({ navigate }) {
  const [records, setRecords] = useState([]);
  const [lookup, setLookup] = useState("");
  useEffect(() => { try { setRecords(JSON.parse(localStorage.getItem("glowAppointments") || "[]")); } catch { setRecords([]); } }, []);
  const filtered = records.filter(r => !lookup.trim() || `${r.id} ${r.phone} ${r.name}`.toLowerCase().includes(lookup.toLowerCase()));
  return <><PageBanner eyebrow="YOUR GLOW, YOUR PLANS" title="My bookings" subtitle="Find appointment requests saved on this device using your name, phone number or reference number." image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80" /><section className="section-pad"><div className="container bookings-history"><div className="booking-search"><Search size={18} /><input value={lookup} onChange={e => setLookup(e.target.value)} placeholder="Search name, phone or booking reference" aria-label="Search bookings" /></div>{filtered.length ? <div className="booking-history-list">{filtered.map(r => <article className="booking-history-card" key={r.id}><div className="booking-ref"><span>REFERENCE</span><strong>{r.id}</strong><span className="status-pill">{r.status}</span></div><div><span>Customer</span><strong>{r.name}</strong></div><div><span>Service</span><strong>{r.service}</strong></div><div><span>Date & time</span><strong>{r.date} · {r.time}</strong></div><div><span>Estimated price</span><strong>{money(r.estimatedPrice)}</strong></div><a className="booking-whatsapp-link" href={`https://wa.me/${salonPhone}?text=${encodeURIComponent(`Hi Glow Beauty Parlour, please check my appointment ${r.id} for ${r.service} on ${r.date} at ${r.time}.`)}`} target="_blank" rel="noreferrer">Ask about booking <ArrowUpRight size={15} /></a></article>)}</div> : <div className="empty-bookings"><div className="empty-bookings-icon"><CalendarDays size={28} /></div><h2>{records.length ? "No matching bookings" : "No bookings saved yet"}</h2><p>{records.length ? "Try another name, phone number or reference." : "Your appointment requests saved on this browser will appear here."}</p><button className="btn btn-primary" onClick={() => navigate("booking")}>Book an appointment <ArrowRight size={16} /></button></div>}<p className="fine-print">This demo stores bookings in this browser only. It does not sync between devices or confirm appointments automatically.</p></div></section></>;
}

function MiniFAQ({ items }) {
  const [open, setOpen] = useState(0);
  return <div className="faq-list mini-faq-list">{items.map(([question, answer], index) => <article className={`faq-item ${open === index ? "faq-open" : ""}`} key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><ChevronDown size={18} /></button>{open === index && <p>{answer}</p>}</article>)}</div>;
}

function FAQ() {
  const questions = [
    ["How do I book an appointment?", "Choose Book Appointment, enter your details, select a service, date and preferred time, then save the request or send it through WhatsApp."],
    ["Is my appointment confirmed immediately?", "No. A saved request is not a confirmed appointment. Please contact the parlour to confirm availability."],
    ["Can I change or cancel my appointment?", "Please contact the parlour by phone or WhatsApp with your booking reference so the team can help."],
    ["Are the prices fixed?", "Prices shown on this demo are estimates. Final pricing and package inclusions should be confirmed with the parlour."],
    ["What should I do if I have sensitive skin?", "Tell the beauty professional about allergies or sensitivities before the service so they can advise you appropriately."],
    ["Where can I find offers and packages?", "Open the Offers page to browse sample packages. Please confirm availability and validity before booking."]
  ];
  const [open, setOpen] = useState(0);
  return <><PageBanner eyebrow="HERE TO HELP" title="Frequently asked questions" subtitle="A few helpful answers before your next appointment." image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80" /><section className="section-pad"><div className="container faq-layout"><div className="faq-side-note"><Sparkles size={28} /><h2>A little clarity goes a long way.</h2><p>Can’t find what you need? Send us a message and our team can help with your questions.</p><a className="btn btn-primary" href={`https://wa.me/${salonPhone}?text=${encodeURIComponent("Hi Glow Beauty Parlour, I have a question.")}`} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowUpRight size={16} /></a></div><div className="faq-list">{questions.map(([q, a], i) => <article className={`faq-item ${open === i ? "faq-open" : ""}`} key={q}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><ChevronDown size={18} /></button>{open === i && <p>{a}</p>}</article>)}</div></div></section></>;
}

function PageExtras({ page, navigate, startBooking }) {
  const copy = {
    about: { eyebrow: "OUR APPROACH", title: "Beauty care that feels personal", text: "Tell us what you love, what you need, and how you want to feel. We will help you choose a service that suits your day.", cards: [["Listen first", "We take time to understand your style and comfort."], ["Care with detail", "We focus on the little things that make a visit feel special."], ["Feel your best", "Our goal is for you to leave feeling fresh and confident."]] },
    gallery: { eyebrow: "FIND YOUR INSPIRATION", title: "A look for every lovely moment", text: "Explore ideas for celebrations, everyday care, and a little time just for you.", cards: [["Everyday looks", "Simple styles for work, outings and daily life."], ["Special occasions", "Makeup and styling ideas for your important moments."], ["Self-care time", "Relaxing treatments to help you slow down and recharge."]] },
    contact: { eyebrow: "HERE TO HELP", title: "Let’s plan your visit", text: "Not sure which service to choose? Send us a message and we will help you get started.", cards: [["Ask a question", "Get help choosing the right service."], ["Plan ahead", "Share your preferred date and time."], ["Stay connected", "Use WhatsApp for a quick enquiry."]] },
    booking: { eyebrow: "BEFORE YOU VISIT", title: "A few helpful booking tips", text: "Choose your service, share your preferred time, and leave any notes that can help us prepare for your visit.", cards: [["Pick your service", "Browse the service list if you need ideas."], ["Share your timing", "Choose a date and time that works for you."], ["Tell us your needs", "Add any special requests in the notes field."]] },
    "my-bookings": { eyebrow: "YOUR VISITS", title: "Keep your plans close", text: "Review the booking details saved in this browser. For changes, please contact the parlour directly.", cards: [["Check details", "Review your selected service and date."], ["Need a change?", "Contact us to discuss a different time."], ["Plan another visit", "Explore more services whenever you are ready."]] },
    faq: { eyebrow: "GOOD TO KNOW", title: "Your visit, made simple", text: "A little planning can make your salon visit easier and more relaxing.", cards: [["How do I book?", "Use the booking form and share your preferred details."], ["Can I ask about prices?", "Yes, contact us to confirm current prices and packages."], ["What should I bring?", "Bring any inspiration photos or requests you would like to discuss."]] },
    services: { eyebrow: "YOUR BEAUTY ROUTINE", title: "Choose care that suits you", text: "From quick refreshes to special-occasion styling, explore options and ask us for help choosing.", cards: [["Everyday care", "Simple services for your regular routine."], ["Special occasions", "Plan a look for parties, weddings and events."], ["Relax and refresh", "Make space for a little well-deserved self-care."]] }
  };
  const data = copy[page] || copy.services;
  return <>
    <section className="section-pad extra-content-section"><div className="container"><SectionHeading eyebrow={data.eyebrow} title={data.title} text={data.text} centered /><div className="benefit-grid">{data.cards.map(([title, text], i) => <Benefit key={title} icon={[<Heart />, <Sparkles />, <Flower2 />][i]} title={title} text={text} />)}</div></div></section>
    <section className="section-pad extra-image-section"><div className="container"><div className="extra-image-grid"><img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=85" alt="Beauty care inspiration" loading="lazy" /><div><span className="eyebrow">A MOMENT FOR YOU</span><h2>Simple care. Beautiful confidence.</h2><p>Take a little time for yourself. Our beauty services are designed to help you feel refreshed, comfortable, and ready for whatever the day brings.</p><button className="btn btn-primary" onClick={() => startBooking()}>Book an appointment <ArrowRight size={16} /></button></div><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85" alt="Relaxing facial treatment" loading="lazy" /></div></div></section>
  </>;
}

function ContactDetail({ icon, title, detail, sub, href }) { return <div className="contact-detail"><div className="contact-icon">{icon}</div><div><h3>{title}</h3>{href ? <a href={href}>{detail}</a> : <b>{detail}</b>}<p>{sub}</p></div></div>; }

function Testimonial({ item }) {
  return <article className="testimonial-card"><div className="testimonial-top"><div className="testimonial-avatar">{item.initials}</div><div><h3>{item.name}</h3><span className="verified"><CircleCheck size={13} /> Client review sample</span></div><div className="stars">{Array.from({ length: item.stars }, (_, i) => <Star key={i} size={13} fill="currentColor" />)}</div></div><p>“{item.text}”</p></article>;
}

function Footer({ navigate }) {
  const links = [["home", "Home"], ["about", "About us"], ["services-offers", "Services & Offers"], ["gallery", "Gallery"], ["contact", "Contact"]];
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-brand-col"><button className="brand footer-brand" onClick={() => navigate("home")}><span className="brand-mark"><Flower2 size={25} /></span><span className="brand-copy"><strong>Glow</strong><small>BEAUTY PARLOUR</small></span></button><p>Beauty isn’t a luxury. It’s a little love you give yourself.</p><div className="social-links"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={17} /></a></div></div><div className="footer-links"><h3>Explore</h3>{links.map(([id, label]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}</div><div className="footer-contact"><h3>Come say hello</h3><p><Phone size={15} /> +91 98765 43210</p><p><Mail size={15} /> hello@glowbeauty.example</p><p><MapPin size={15} /> Coimbatore, Tamil Nadu</p><p><Clock size={15} /> Daily · 9 AM – 7 PM</p></div><div className="footer-newsletter"><h3>A little note from Glow</h3><p>Beauty tips, self-care reminders and occasional treats.</p><button className="btn btn-outline" onClick={() => navigate("contact")}>Get in touch <ArrowRight size={15} /></button></div></div><div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Glow Beauty Parlour. All rights reserved.</span><span>Made with <Heart size={13} fill="currentColor" /> and a little glow.</span></div></div></footer>;
}

export default App;


function UniquePageSections({ page, navigate, startBooking }) {
  const content = {
    home: [
      ["A routine that feels like you", "Choose simple care for busy weekdays, special plans, or a quiet moment to recharge.", "photo-1608248543803-ba4f8c70ae0b"],
      ["Your visit, step by step", "Tell us what you need, choose a service, and let our team help you plan a comfortable visit.", "photo-1522337360788-8b13dee7a37e"],
      ["Little details matter", "We want your visit to feel welcoming, clean, calm, and shaped around your preferences.", "photo-1540555700478-4be289fbecef"],
      ["Plan your next glow moment", "Save time by asking about service duration and availability before your visit.", "photo-1570172619644-dfd03ed5d881"]
    ],
    about: [
      ["A warm welcome", "We want every guest to feel heard, respected, and comfortable from the first hello.", "photo-1522337360788-8b13dee7a37e"],
      ["Care that starts with listening", "We ask about your style, comfort, and goals before suggesting a beauty service.", "photo-1570172619644-dfd03ed5d881"],
      ["Clean tools, calm spaces", "Good service includes careful preparation and a tidy space for every appointment.", "photo-1540555700478-4be289fbecef"],
      ["Beauty for every day", "From a quick refresh to an important event, we help you choose a look that feels right for you.", "photo-1608248543803-ba4f8c70ae0b"],
      ["Your ideas are welcome", "Bring a reference photo or tell us what you like. We will discuss what works for you.", "photo-1519699047748-de8e457a634e"],
      ["Come meet the team", "Have a question about a treatment? Contact us before booking and we will help you get started.", "photo-1524504388940-b1c1722653e1"]
    ],
    "services-offers": [
      ["Find the right service", "Start with your goal: a fresh hairstyle, hydrated skin, event makeup, or a relaxing break.", "photo-1527799820374-dcf8d9d4a388"],
      ["Know what to expect", "Check the service description and estimated duration before choosing your appointment.", "photo-1570172619644-dfd03ed5d881"],
      ["Make a package personal", "Ask which services are included and whether the package suits your needs and schedule.", "photo-1604654894610-df63bc536371"],
      ["Share your preferences", "Let us know about your desired look, product preferences, or skin sensitivities before treatment.", "photo-1512290923902-8a9f81dc236c"],
      ["A few minutes to prepare", "Arrive on time and bring any inspiration photo that helps explain the look you want.", "photo-1522337360788-8b13dee7a37e"]
    ],
    gallery: [
      ["Everyday style ideas", "Explore wearable looks for work, weekends, and small celebrations.", "photo-1524504388940-b1c1722653e1"],
      ["Bridal and event inspiration", "Save makeup and hairstyle references for your special day.", "photo-1522335789203-aabd1fc54bc9"],
      ["Skin and self-care", "Browse ideas for a refreshing facial or a calm beauty break.", "photo-1570172619644-dfd03ed5d881"],
      ["Nail details", "Find a finish, shape, or colour that suits your own style.", "photo-1632345031435-8727f6897d53"],
      ["Hair inspiration", "Look through styling ideas and bring your favourite reference to your appointment.", "photo-1560869713-7d0a29430803"],
      ["Choose what feels right", "Photos are starting points. We can discuss options that suit your preferences.", "photo-1519699047748-de8e457a634e"],
      ["Save your favourites", "Keep a few ideas ready so it is easier to explain the look you have in mind.", "photo-1527799820374-dcf8d9d4a388"],
      ["Make it your own", "Every person is different. Use inspiration to guide a conversation, not to limit your choices.", "photo-1608248543803-ba4f8c70ae0b"]
    ],
    contact: [
      ["Before you visit", "Please check our current opening hours and address with the salon before travelling.", "photo-1540555700478-4be289fbecef"],
      ["Tell us what you need", "Share the service you are interested in and your preferred day or time.", "photo-1522337360788-8b13dee7a37e"],
      ["Ask about pricing", "Prices on this demo site are examples. Contact us to confirm the latest price and package details.", "photo-1604654894610-df63bc536371"],
      ["Need to change a plan?", "Send your booking details and ask the team about available changes.", "photo-1519823551278-64ac92734fb1"],
      ["Connect with us", "Use the contact form or WhatsApp link to start a conversation with the parlour.", "photo-1487412947147-5cebf100ffc2"],
      ["We are happy to help", "If you are not sure which service to choose, tell us your goal and we can guide you.", "photo-1570172619644-dfd03ed5d881"]
    ]
  };
  const items = content[page] || [];
  if (!items.length) return null;
  return <>
    {items.map(([title, text, photo], i) => <section className={`section-pad unique-page-section unique-section-${i % 4}`} key={title}>
      <div className={`container unique-section-inner ${i % 2 ? "reverse" : ""}`}>
        <div className="unique-section-photo"><img src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1000&q=85`} alt={title} loading="lazy" onError={e => { e.currentTarget.style.opacity = ".25"; }} /></div>
        <div className="unique-section-copy"><span className="eyebrow">{String(i + 1).padStart(2, "0")} · {page === "gallery" ? "STYLE NOTES" : page === "contact" ? "HERE TO HELP" : page === "about" ? "THE GLOW APPROACH" : page === "services-offers" ? "YOUR BEAUTY PLAN" : "A LITTLE MORE GLOW"}</span><h2>{title}</h2><p>{text}</p>{i === items.length - 1 && <button className="btn btn-primary" onClick={() => page === "gallery" ? navigate("services-offers") : startBooking()}>{page === "gallery" ? "Explore services" : "Book an appointment"} <ArrowRight size={16} /></button>}</div>
      </div>
    </section>)}
  </>;
}
