import { useEffect, useRef } from "react";
import {
  MapPin, Clock, Instagram, Star, Beef, Drumstick, Wheat, Flame,
  Heart, ArrowRight, Phone, ShieldCheck, Users, Award, Sparkles, ChefHat,
} from "lucide-react";
import storeFront from "@/assets/store-front.jpg";
import storeAisle from "@/assets/store-aisle.jpg";
import butcherCase from "@/assets/butcher-case.jpg";
import lambChops from "@/assets/lamb-chops.jpg";
import lambCubes from "@/assets/lamb-cubes.jpg";
import seekhKebab from "@/assets/seekh-kebab.jpg";
import samosasReal from "@/assets/samosas-real.jpg";
import pastries from "@/assets/pastries.jpg";
import chickenCase from "@/assets/chicken-case.jpg";
import frozenCase from "@/assets/frozen-case.jpg";
import logo from "@/assets/logo.png";

const MAPS_URL = "https://share.google/8DhTZWr9SWOW1U6E0";
const INSTAGRAM_URL = "https://www.instagram.com/dallashalalmeatmarket";
const PHONE = "469-969-0380";
const PHONE_TEL = "tel:+14699690380";

const offers = [
  { icon: Beef, title: "Beef", desc: "Short ribs, ribeye, brisket, tomahawk, NY strip, T-bone, sirloin & more.", img: butcherCase, tag: "Cut Fresh Daily" },
  { icon: Drumstick, title: "Chicken", desc: "Whole, breast, leg quarter, wings, tenders, drumsticks, boneless, thigh.", img: chickenCase, tag: "Hand-Trimmed" },
  { icon: ChefHat, title: "Lamb & Goat", desc: "Whole, half, legs, shoulders, chops, shank, boneless or minced — your way.", img: lambChops, tag: "Premium Quality" },
  { icon: Flame, title: "Marinated & Kebabs", desc: "House-marinated seekh kebabs, boti, tikka — ready for the grill.", img: seekhKebab, tag: "House Recipe" },
  { icon: Sparkles, title: "Samosas & Pastries", desc: "Hot golden samosas and flaky pastries baked fresh in-house every day.", img: samosasReal, tag: "Made Fresh" },
  { icon: Wheat, title: "Groceries & Spices", desc: "Pakistani, Arabic & Turkish brands — rice, tea, lentils, spices, frozen foods.", img: storeAisle, tag: "Authentic Brands" },
];

const reviews = [
  { quote: "Best halal meat in Dallas. Always fresh, always cut perfectly. Nadeem and his team treat you like family.", name: "Ayesha K.", role: "Local resident" },
  { quote: "Their samosas are unreal and the prices on groceries beat the big chains. My weekly stop, no question.", name: "Omar R.", role: "Regular customer" },
  { quote: "Friendly staff who actually know their products. The lamb is consistently top quality.", name: "Sara M.", role: "Home chef" },
  { quote: "Did our Qurbani with them last Eid — handled everything beautifully. Will keep coming back.", name: "Bilal H.", role: "Community member" },
];

const galleryStrip = [butcherCase, lambChops, lambCubes, seekhKebab, samosasReal, pastries, chickenCase, frozenCase, storeAisle];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".reveal") ?? [];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="container flex items-center justify-between py-3.5">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Dallas Halal Meat & Grocery — International Groceries, Butcher, Spices"
              width={220}
              height={110}
              className="h-14 sm:h-16 w-auto object-contain"
            />
            <div className="leading-tight border-l border-border pl-3">
              <div className="font-display font-bold text-forest-deep text-base sm:text-lg">Dallas Market</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-gold font-bold">Halal Meat & Grocery</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-forest-light">
            <a href="#about" className="hover:text-forest transition-colors">About</a>
            <a href="#offer" className="hover:text-forest transition-colors">Selection</a>
            <a href="#butcher" className="hover:text-forest transition-colors">Butcher</a>
            <a href="#reviews" className="hover:text-forest transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-forest transition-colors">Visit</a>
          </nav>
          <a
            href={PHONE_TEL}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-forest-deep font-bold text-sm shadow-gold hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-forest-deep">
        <img
          src={butcherCase}
          alt="Fresh halal meat display case at Dallas Market butcher shop"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover scale-105 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/95 via-forest-deep/75 to-forest-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
        <div className="absolute inset-0 pattern-arabesque opacity-25" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 backdrop-blur-sm mb-7">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span className="text-cream text-xs font-semibold tracking-wide">Rated 4.6 ★ by 116 neighbors on Google</span>
            </div>
            <h1 className="font-display font-black text-cream text-5xl sm:text-6xl lg:text-[88px] leading-[0.98] mb-7">
              Fresh Halal,
              <br />
              <span className="gold-text italic">cut with care.</span>
            </h1>
            <p className="text-cream/85 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
              Your neighborhood halal butcher and grocery in Dallas — premium meats cut daily,
              authentic Pakistani, Arabic & Turkish essentials, and the warmth of a community-owned market.
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
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-cream/40 text-cream font-semibold hover:bg-cream/10 transition-colors backdrop-blur-sm"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
            </div>

            {/* Mini stat strip */}
            <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl">
              {[
                { n: "100%", l: "Halal Certified" },
                { n: "Daily", l: "Fresh Cuts" },
                { n: "4.6★", l: "Google Rating" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-gold/60 pl-4">
                  <div className="font-display font-bold text-cream text-2xl sm:text-3xl">{s.n}</div>
                  <div className="text-cream/60 text-xs uppercase tracking-wider mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-xs uppercase tracking-[0.3em] hidden sm:block">
          Scroll
        </div>
      </section>

      {/* MARQUEE GALLERY STRIP */}
      <section className="bg-forest-deep py-6 border-y border-gold/20 overflow-hidden">
        <div className="flex gap-6 marquee">
          {[...galleryStrip, ...galleryStrip].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              loading="lazy"
              className="h-20 sm:h-28 w-auto rounded-lg object-cover shrink-0 ring-1 ring-gold/20"
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32 bg-cream-warm relative">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-4">— Our Story</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep leading-[1.05] mb-6">
              Rooted in the community we serve.
            </h2>
            <div className="pattern-divider w-32 mb-7" />
            <p className="text-forest-light text-lg leading-relaxed mb-5">
              Dallas Market started with a simple promise from owner <strong className="text-forest">Nadeem</strong>:
              halal meat and groceries you can trust, served with the warmth of family. Years later, that promise
              still guides every cut, every shelf, and every conversation at the counter.
            </p>
            <p className="text-forest-light text-lg leading-relaxed mb-8">
              Whether you're picking up tonight's dinner, stocking up on spices from home, or arranging your
              Eid Qurbani — you'll find honest prices, fresh quality, and a staff that remembers your name.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: ShieldCheck, t: "100% Halal", d: "Zabihah certified, every cut" },
                { icon: Award, t: "Family Owned", d: "Local roots, local pride" },
                { icon: Users, t: "Community First", d: "Your neighborhood market" },
                { icon: Heart, t: "Eid & Qurbani", d: "Trusted year after year" },
              ].map(({ icon: Ic, t, d }) => (
                <div key={t} className="flex gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-forest grid place-items-center shadow-warm">
                    <Ic className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-forest-deep">{t}</div>
                    <div className="text-sm text-forest-light leading-snug">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="relative">
              {/* Storefront big image */}
              <div className="relative rounded-3xl overflow-hidden shadow-warm aspect-[4/5]">
                <img
                  src={storeFront}
                  alt="Dallas Halal Meat storefront in Dallas, TX"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-1">Find Us</div>
                  <div className="font-display text-xl font-bold">Dallas Halal Meat</div>
                  <div className="text-cream/80 text-sm">469-969-0380</div>
                </div>
              </div>

              {/* Floating aisle image */}
              <div className="hidden md:block absolute -bottom-10 -left-10 w-44 h-56 rounded-2xl overflow-hidden shadow-warm border-4 border-cream-warm">
                <img src={storeAisle} alt="Inside the grocery aisle" loading="lazy" className="h-full w-full object-cover" />
              </div>

              {/* Floating rating */}
              <div className="absolute -top-5 -right-5 bg-forest-deep text-cream p-5 rounded-2xl shadow-warm">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
                <div className="font-display text-3xl font-bold gold-text leading-none">4.6</div>
                <div className="text-[10px] uppercase tracking-wider text-cream/70 mt-1">116 reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-arabesque opacity-25 pointer-events-none" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-4">— What We Offer</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-5 leading-[1.05]">
              Everything your kitchen needs.
            </h2>
            <p className="text-forest-light text-lg mt-4">
              From the butcher counter to the spice aisle — quality you can taste, prices you can trust.
            </p>
            <div className="pattern-divider mx-auto w-40 mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {offers.map(({ icon: Icon, title, desc, img, tag }, i) => (
              <article
                key={title}
                className="group reveal bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-2 border border-border/60"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream/95 text-forest-deep text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                    {tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-11 w-11 rounded-xl bg-gradient-forest grid place-items-center shadow-warm">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-forest-deep">{title}</h3>
                  </div>
                  <p className="text-forest-light leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUTCHER COUNTER SHOWCASE */}
      <section id="butcher" className="py-24 sm:py-32 bg-forest-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-arabesque opacity-10" />
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 reveal">
              <div className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-4">— The Butcher Counter</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-[1.05] mb-6">
                Cut to order. <span className="gold-text italic">Cut to perfection.</span>
              </h2>
              <p className="text-cream/75 text-lg leading-relaxed max-w-xl">
                Tell us how you want it — bone-in, boneless, cubed, minced, marinated. Our butchers will
                hand-prepare it while you shop the aisles.
              </p>
            </div>
            <div className="lg:col-span-5 reveal">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "20+", l: "Cuts daily" },
                  { n: "100%", l: "Zabihah Halal" },
                  { n: "1×1", l: "Custom service" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-cream/15 p-5 bg-cream/5 backdrop-blur-sm">
                    <div className="font-display gold-text text-3xl font-bold">{s.n}</div>
                    <div className="text-cream/60 text-[11px] uppercase tracking-wider mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid of real photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
            {[
              { src: lambChops, label: "Lamb Chops" },
              { src: lambCubes, label: "Lamb Boti" },
              { src: seekhKebab, label: "Seekh Kebab" },
              { src: butcherCase, label: "Beef Counter" },
              { src: chickenCase, label: "Halal Chicken" },
              { src: samosasReal, label: "Samosas" },
              { src: pastries, label: "Fresh Pastries" },
              { src: frozenCase, label: "Frozen Foods" },
            ].map((g, i) => (
              <div
                key={g.label}
                className="group relative aspect-square rounded-2xl overflow-hidden ring-1 ring-cream/15 hover:ring-gold/60 transition-all"
              >
                <img src={g.src} alt={g.label} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-0.5">No. {String(i + 1).padStart(2, "0")}</div>
                  <div className="font-display font-bold text-cream text-base sm:text-lg leading-tight">{g.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FARM */}
      <section id="farm" className="py-24 sm:py-32 bg-forest-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-arabesque opacity-10" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <div className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-4">— From the Farm</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-5 leading-[1.05]">
              Raised right. Pasture to plate.
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed">
              Our animals are raised on trusted local farms — humanely cared for, ethically sourced, and Zabihah-slaughtered to bring you the freshest halal meat in Dallas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {["/videos/farm-1.mp4", "/videos/farm-2.mp4"].map((src, i) => (
              <div
                key={src}
                className="reveal group relative rounded-3xl overflow-hidden border border-gold/30 shadow-warm aspect-[9/16] md:aspect-video bg-forest-darker"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.22em] text-cream font-bold">
                    {i === 0 ? "On the Farm" : "Pasture Raised"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 sm:py-32 bg-cream-warm relative overflow-hidden">
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-4">— Loved Locally</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-5 leading-[1.05]">
              Words from our neighbors.
            </h2>
            <div className="flex items-center justify-center gap-1 mt-5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}
              <span className="ml-3 text-forest-light text-sm font-medium">4.6 / 5 — 116 Google reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <blockquote
                key={i}
                className="reveal bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-warm transition-all hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="font-display text-xl leading-relaxed text-forest-deep mb-6">"{r.quote}"</p>
                <footer className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-forest grid place-items-center text-gold font-display font-bold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-forest-deep text-sm">{r.name}</div>
                    <div className="text-xs text-forest-light">{r.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-20 bg-gradient-forest text-cream overflow-hidden">
        <div className="absolute inset-0 pattern-arabesque opacity-15" />
        <div className="container relative grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-3">— Eid & Qurbani 2026</div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl mb-3 leading-tight">
              Book your Qurbani with a name you trust.
            </h3>
            <p className="text-cream/75 max-w-lg">
              We handle the entire arrangement with care, transparency, and tradition — just like family.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end reveal">
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-forest-deep font-bold shadow-gold hover:scale-105 transition-transform">
              <Phone className="h-4 w-4" /> Call to Reserve
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-cream/40 text-cream font-semibold hover:bg-cream/10 transition-colors">
              Visit in Store
            </a>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 sm:py-32 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="reveal flex flex-col justify-center">
            <div className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-4">— Visit Us</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-6 leading-[1.05]">Come say salaam.</h2>
            <p className="text-forest-light text-lg mb-10 leading-relaxed">
              Stop by the shop, meet the team, and see what's fresh today. We're always happy to help you
              pick the right cut or find that one ingredient.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
                  <Phone className="h-5 w-5 text-forest-deep" />
                </div>
                <div>
                  <div className="font-display font-bold text-forest-deep text-lg">Call the Shop</div>
                  <a href={PHONE_TEL} className="text-forest-light hover:text-gold transition-colors">
                    {PHONE}
                  </a>
                </div>
              </div>

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

          <div className="reveal relative rounded-3xl overflow-hidden shadow-warm min-h-[480px] border-4 border-cream">
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
      <footer className="bg-forest-deep text-cream/80 pt-16 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 pattern-arabesque opacity-10" />
        <div className="container relative">
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-cream/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Dallas Halal Meat logo" width={56} height={56} loading="lazy" className="h-14 w-14 object-contain" />
                <div>
                  <div className="font-display font-bold text-cream text-lg">Dallas Market</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Halal Meat & Grocery</div>
                </div>
              </div>
              <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
                Fresh halal meats, authentic groceries, and the warmth of a community-owned market.
              </p>
            </div>

            <div>
              <div className="text-gold text-[10px] uppercase tracking-[0.25em] font-bold mb-4">Explore</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
                <li><a href="#offer" className="hover:text-gold transition-colors">Selection</a></li>
                <li><a href="#butcher" className="hover:text-gold transition-colors">Butcher Counter</a></li>
                <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
                <li><a href="#visit" className="hover:text-gold transition-colors">Visit</a></li>
              </ul>
            </div>

            <div>
              <div className="text-gold text-[10px] uppercase tracking-[0.25em] font-bold mb-4">Get In Touch</div>
              <ul className="space-y-2 text-sm">
                <li><a href={PHONE_TEL} className="hover:text-gold transition-colors">{PHONE}</a></li>
                <li><a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Google Maps</a></li>
                <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@dallashalalmeatmarket</a></li>
              </ul>
              <div className="flex items-center gap-3 mt-5">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"
                   className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-gold hover:text-forest-deep hover:border-gold transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Google Maps"
                   className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-gold hover:text-forest-deep hover:border-gold transition-colors">
                  <MapPin className="h-4 w-4" />
                </a>
                <a href={PHONE_TEL} aria-label="Call us"
                   className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-gold hover:text-forest-deep hover:border-gold transition-colors">
                  <Phone className="h-4 w-4" />
                </a>
              </div>
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
