import { useEffect, useRef } from "react";
import { MapPin, Clock, Instagram, Star, Beef, Leaf, Sparkles, Flame, Tag, Heart, ArrowRight } from "lucide-react";
import heroShop from "@/assets/hero-shop.jpg";
import meatImg from "@/assets/meat.jpg";
import spicesImg from "@/assets/spices.jpg";
import samosasImg from "@/assets/samosas.jpg";
import groceryImg from "@/assets/grocery.jpg";
import vegImg from "@/assets/vegetables.jpg";

const MAPS_URL = "https://share.google/8DhTZWr9SWOW1U6E0";
const INSTAGRAM_URL = "https://www.instagram.com/dallashalalmeatmarket";

const offers = [
  { icon: Beef, title: "Fresh Halal Meat", desc: "Beef, chicken, goat, lamb & mutton — cut fresh daily by our skilled butchers.", img: meatImg },
  { icon: Sparkles, title: "Groceries & Spices", desc: "Pantry essentials, authentic spices, lentils, rice and everything in between.", img: spicesImg },
  { icon: Leaf, title: "International Products", desc: "Pakistani, Arabic and Turkish brands you know — all under one roof.", img: groceryImg },
  { icon: Flame, title: "Samosas & Pastries", desc: "Hot, golden samosas and fresh-baked pastries made the traditional way.", img: samosasImg },
  { icon: Tag, title: "Competitive Prices", desc: "Honest, neighborhood pricing that consistently beats the big chains.", img: vegImg },
  { icon: Heart, title: "Eid & Qurbani Services", desc: "Trusted Qurbani arrangements for Eid al-Adha — booked with care every year.", img: meatImg },
];

const reviews = [
  { quote: "Best halal meat in Dallas. Always fresh, always cut perfectly. Nadeem and his team treat you like family.", name: "Ayesha K.", rating: 5 },
  { quote: "Their samosas are unreal and the prices on groceries beat the big chains. My weekly stop, no question.", name: "Omar R.", rating: 5 },
  { quote: "Friendly staff who actually know their products. The lamb is consistently top quality.", name: "Sara M.", rating: 5 },
  { quote: "Did our Qurbani with them last Eid — handled everything beautifully. Will keep coming back.", name: "Bilal H.", rating: 5 },
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".reveal") ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in"));
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-full bg-gradient-forest grid place-items-center shadow-warm">
              <span className="font-display font-bold text-cream text-lg leading-none">D</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-forest-deep">Dallas Market</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold">Halal Meat & Grocery</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest-light">
            <a href="#about" className="hover:text-forest transition-colors">About</a>
            <a href="#offer" className="hover:text-forest transition-colors">What We Offer</a>
            <a href="#reviews" className="hover:text-forest transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-forest transition-colors">Visit</a>
          </nav>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-forest-deep font-semibold text-sm shadow-gold hover:scale-105 transition-transform"
          >
            <MapPin className="h-4 w-4" /> Visit Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <img
          src={heroShop}
          alt="Inside Dallas Market halal butcher shop with fresh meat display"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 pattern-arabesque opacity-40" />

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 backdrop-blur-sm mb-6">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span className="text-cream text-xs font-semibold tracking-wide">4.6 ★ — 116 Google Reviews</span>
            </div>
            <h1 className="font-display font-black text-cream text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Fresh Halal,
              <br />
              <span className="gold-text">Cut With Care.</span>
            </h1>
            <p className="text-cream/85 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
              Your neighborhood halal butcher and grocery — Pakistani, Arabic and Turkish essentials,
              fresh-cut meat, and the warmth of a community-owned market.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-forest-deep font-bold shadow-gold hover:scale-105 transition-transform"
              >
                Visit Our Store <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#offer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-cream/40 text-cream font-semibold hover:bg-cream/10 transition-colors"
              >
                Shop Fresh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32 bg-cream-warm">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="text-gold text-xs uppercase tracking-[0.25em] font-bold mb-4">Our Story</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest-deep leading-tight mb-6">
              Rooted in the community we serve.
            </h2>
            <div className="pattern-divider w-32 mb-6" />
            <p className="text-forest-light text-lg leading-relaxed mb-5">
              Dallas Market started with a simple promise from owner <strong className="text-forest">Nadeem</strong>:
              halal meat and groceries you can trust, served with the warmth of family. Years later, that promise
              still guides every cut, every shelf, and every conversation at the counter.
            </p>
            <p className="text-forest-light text-lg leading-relaxed">
              Whether you're picking up tonight's dinner, stocking up on spices from home, or arranging your
              Eid Qurbani — you'll find honest prices, fresh quality, and a staff that remembers your name.
            </p>
          </div>
          <div className="relative reveal">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl rotate-2 opacity-90" />
            <img
              src={meatImg}
              alt="Fresh halal beef and lamb cuts"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-warm w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-forest-deep text-cream p-6 rounded-2xl shadow-warm max-w-[200px]">
              <div className="font-display text-4xl font-bold gold-text">4.6★</div>
              <div className="text-xs uppercase tracking-wider text-cream/70 mt-1">From 116 happy neighbors</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-arabesque opacity-30 pointer-events-none" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="text-gold text-xs uppercase tracking-[0.25em] font-bold mb-4">What We Offer</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest-deep mb-5">
              Everything your kitchen needs.
            </h2>
            <div className="pattern-divider mx-auto w-40" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {offers.map(({ icon: Icon, title, desc, img }, i) => (
              <article
                key={title}
                className="group reveal bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-1.5 border border-border/60"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className="h-12 w-12 rounded-xl bg-gradient-forest grid place-items-center mb-4 shadow-warm">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-forest-deep mb-2">{title}</h3>
                  <p className="text-forest-light leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 sm:py-32 bg-gradient-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-arabesque opacity-15" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="text-gold text-xs uppercase tracking-[0.25em] font-bold mb-4">Loved Locally</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-cream mb-5">
              Words from our neighbors.
            </h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
              <span className="ml-3 text-cream/80 text-sm">4.6 / 5 — 116 Google reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="reveal bg-cream/5 border border-cream/15 rounded-2xl p-8 backdrop-blur-sm hover:bg-cream/10 transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl leading-relaxed text-cream/95 mb-5">"{r.quote}"</p>
                <footer className="text-gold font-semibold text-sm tracking-wide">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 sm:py-32 bg-cream-warm">
        <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="reveal flex flex-col justify-center">
            <div className="text-gold text-xs uppercase tracking-[0.25em] font-bold mb-4">Visit Us</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest-deep mb-6">Come say salaam.</h2>
            <p className="text-forest-light text-lg mb-10 leading-relaxed">
              Stop by the shop, meet the team, and see what's fresh today. We're always happy to help you
              pick the right cut or find that one ingredient.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
                  <Clock className="h-5 w-5 text-forest-deep" />
                </div>
                <div>
                  <div className="font-display font-bold text-forest-deep text-lg">Store Hours</div>
                  <div className="text-forest-light">Mon – Sat: 9:00 AM – 9:00 PM</div>
                  <div className="text-forest-light">Sunday: 10:00 AM – 8:00 PM</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
                  <MapPin className="h-5 w-5 text-forest-deep" />
                </div>
                <div>
                  <div className="font-display font-bold text-forest-deep text-lg">Find Us</div>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-forest-light hover:text-gold transition-colors underline-offset-4 hover:underline">
                    Dallas Halal Meat Market — view on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
                  <Instagram className="h-5 w-5 text-forest-deep" />
                </div>
                <div>
                  <div className="font-display font-bold text-forest-deep text-lg">Follow Along</div>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-forest-light hover:text-gold transition-colors underline-offset-4 hover:underline">
                    @dallashalalmeatmarket
                  </a>
                </div>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-forest text-cream font-semibold shadow-warm hover:scale-105 transition-transform self-start"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="reveal relative rounded-3xl overflow-hidden shadow-warm min-h-[420px] border-4 border-cream">
            <iframe
              title="Dallas Halal Meat Market location"
              src="https://www.google.com/maps?q=Dallas+Halal+Meat+Market&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest-deep text-cream/80 py-14">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-cream/10">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-gold grid place-items-center">
                <span className="font-display font-bold text-forest-deep text-xl leading-none">D</span>
              </div>
              <div>
                <div className="font-display font-bold text-cream text-lg">Dallas Market</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">Halal Meat & Grocery</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="h-11 w-11 rounded-full border border-cream/20 grid place-items-center hover:bg-gold hover:text-forest-deep hover:border-gold transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Google Maps"
                 className="h-11 w-11 rounded-full border border-cream/20 grid place-items-center hover:bg-gold hover:text-forest-deep hover:border-gold transition-colors">
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-cream/60">
            <p>© {new Date().getFullYear()} Dallas Market – Halal Meat & Grocery. All rights reserved.</p>
            <p className="font-display italic text-gold/80">Fresh. Halal. Family.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
