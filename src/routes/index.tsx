import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

/* ─── Registration URL ─── */
const REGISTRATION_FORM_URL = 'https://runsignup.com/Race/NE/Omaha/Florence5k'

/* ─── Icon Components ─── */
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function RunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

/* ─── Navigation ─── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#details', label: 'Event Details' },
    { href: '#course', label: 'Course' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#admin', label: 'Admin Info' },
    { href: '#partners', label: 'Partners' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-backdrop bg-navy-800/95 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3">
            <RunIcon className="w-6 h-6 text-gold-400" />
            <span className="font-heading text-white text-lg font-bold tracking-wide">Florence 5K</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-white/80 hover:text-gold-300 transition-colors text-sm font-medium tracking-wide uppercase">
                {link.label}
              </a>
            ))}
            <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-white px-5 py-2 rounded-full text-sm font-semibold">
              Register Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
            {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-backdrop bg-navy-800/98 border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/90 hover:text-gold-300 transition-colors text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block btn-primary text-white text-center px-5 py-3 rounded-full text-sm font-semibold mt-3">
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="hero-gradient hero-pattern relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-burgundy-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Main event logo */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src="/images/florence-5k-logo.png"
            alt="Florence 5K Run/Walk - Against the Current"
            className="mx-auto w-full max-w-lg drop-shadow-2xl"
          />
        </div>

        {/* Event tagline */}
        <p className="text-gold-300 text-lg sm:text-xl md:text-2xl font-body font-light tracking-wider mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A Fundraiser by the Florence Historical Foundation
        </p>

        {/* Date & location summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-sm sm:text-base mb-10 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <span className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-gold-400" />
            NP Dodge Park &middot; Florence, NE
          </span>
          <span className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-gold-400" />
            May 16th &middot; 8:00 AM
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide">
            Register Today
          </a>
          <a href="#about" className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold tracking-wide">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white/80 transition-colors">
          <ChevronDownIcon className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}

/* ─── About Section ─── */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black gold-underline mb-6">
            About the Florence 5K
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-black text-lg leading-relaxed">
            Join us for the Florence 5K, a community run celebrating the history, spirit, and resilience of Omaha&rsquo;s historic Florence neighborhood.
          </p>
          <p className="text-black text-lg leading-relaxed">
            Located in North Omaha along the Missouri River, Florence is one of the oldest settlements in Nebraska, with roots dating back to the 1840s when pioneers established Winter Quarters in the area. Today, the neighborhood remains a vibrant community known for its historic landmarks, local businesses, and strong community traditions.
          </p>
          <p className="text-black text-lg leading-relaxed">
            The Florence 5K invites runners and walkers of all levels to experience this historic district while supporting local organizations and community initiatives. The race will take participants through the scenic streets of historic Florence, highlighting the area&rsquo;s unique character and connection to Omaha&rsquo;s past.
          </p>
          <p className="text-black text-lg leading-relaxed">
            Whether you are chasing a new personal best, enjoying a morning walk with friends and family, or supporting the Florence community, this event is designed for everyone.
          </p>
        </div>

        {/* Event Highlights */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-8 text-center">Event Highlights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="bg-navy-50 rounded-lg p-3">
                  <RunIcon className="w-6 h-6 text-navy-600" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-black mb-1">Scenic 5K Course</h4>
                  <p className="text-black text-sm">Through historic Florence</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="bg-gold-50 rounded-lg p-3">
                  <span className="text-2xl">&#127941;</span>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-black mb-1">Finisher Medals</h4>
                  <p className="text-black text-sm">For all participants</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="bg-burgundy-50 rounded-lg p-3">
                  <span className="text-2xl">&#127861;</span>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-black mb-1">Post-Race Refreshments</h4>
                  <p className="text-black text-sm">Celebrate at the finish</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="bg-navy-50 rounded-lg p-3">
                  <HeartIcon className="w-6 h-6 text-navy-600" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-black mb-1">Community Celebration</h4>
                  <p className="text-black text-sm">Festive atmosphere for all</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="bg-gold-50 rounded-lg p-3">
                  <UsersIcon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-black mb-1">Open to All</h4>
                  <p className="text-black text-sm">Runners, walkers, and families</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Run the Florence 5K */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-8 text-center">Why Run the Florence 5K?</h3>
          <div className="space-y-6">
            <p className="text-black text-lg leading-relaxed">
              The Florence 5K is more than a race&mdash;it&rsquo;s a celebration of a neighborhood with deep historical roots and a strong sense of community. Florence was once an independent town before becoming part of Omaha in 1917 and remains one of the city&rsquo;s most historically significant neighborhoods.
            </p>
            <p className="text-black text-lg leading-relaxed font-semibold">
              Come run Against the Current, support the Florence community, and help build a new tradition in North Omaha.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Event Details Section ─── */
function EventDetails() {
  return (
    <section id="details" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black gold-underline mb-6">
            Event Details
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto mt-10">
            Everything you need to know about the Florence 5K
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Date */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-navy-100 hover:shadow-md transition-shadow">
            <div className="bg-navy-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <CalendarIcon className="w-8 h-8 text-gold-300" />
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">Date</h3>
            <p className="text-black text-lg">May 16, 2026</p>
            <p className="text-black text-sm mt-1">Saturday</p>
          </div>

          {/* Time */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-navy-100 hover:shadow-md transition-shadow">
            <div className="bg-burgundy-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <ClockIcon className="w-8 h-8 text-burgundy-100" />
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">Time</h3>
            <p className="text-black text-lg">8:00 AM</p>
            <p className="text-black text-sm mt-1">Race start</p>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-navy-100 hover:shadow-md transition-shadow">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <MapPinIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">Location</h3>
            <p className="text-black text-lg">NP Dodge Park</p>
            <p className="text-black text-sm mt-1">Florence, Nebraska</p>
          </div>

          {/* Distance */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-navy-100 hover:shadow-md transition-shadow">
            <div className="bg-navy-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <RunIcon className="w-8 h-8 text-gold-300" />
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">Distance</h3>
            <p className="text-black text-lg">5K (3.1 miles)</p>
            <p className="text-black text-sm mt-1">Run or Walk</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Course Section ─── */
function Course() {
  return (
    <section id="course" className="py-20 sm:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black gold-underline mb-6">
            The Course
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto mt-10">
            A scenic route along the Missouri riverfront
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">
            <div className="bg-navy-600 p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">NP Dodge Park to Riverfront Trail</h3>
              <p className="text-navy-200">Florence, Nebraska &middot; 5K (3.1 miles)</p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1 shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Start: NP Dodge Park</h4>
                  <p className="text-black mt-1">
                    The race begins at NP Dodge Park, one of Omaha&rsquo;s premier parks located in the historic Florence
                    neighborhood along the Missouri River.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1 shrink-0">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Route: Riverfront Trail</h4>
                  <p className="text-black mt-1">
                    Follow the scenic riverfront trail along the Missouri River. Enjoy beautiful views of the water,
                    lush greenery, and the iconic bridge that defines the Florence skyline. The trail is paved and
                    accessible for both runners and walkers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full p-2 mt-1 shrink-0">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Finish: NP Dodge Park</h4>
                  <p className="text-black mt-1">
                    The course loops back to NP Dodge Park where participants will be greeted at the finish line.
                    Water stations will be available along the route.
                  </p>
                </div>
              </div>

              {/* Course highlights */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-heading text-lg font-bold text-black mb-4">Course Highlights</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-black">
                    <span className="text-gold-500">&#10003;</span> Paved trail surface
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <span className="text-gold-500">&#10003;</span> Missouri River views
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <span className="text-gold-500">&#10003;</span> Mostly flat terrain
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <span className="text-gold-500">&#10003;</span> Water stations on route
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <span className="text-gold-500">&#10003;</span> Family &amp; stroller friendly
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <span className="text-gold-500">&#10003;</span> Out-and-back course
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing Section ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black gold-underline mb-6">
            Registration
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto mt-10">
            Sign up today and join us at the Florence 5K
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Single Registration Option */}
          <div className="pricing-card bg-white rounded-2xl shadow-lg border-2 border-burgundy-600 overflow-hidden">
            <div className="bg-burgundy-700 text-white text-center py-2 text-sm font-semibold tracking-wide uppercase">
              Race Registration
            </div>
            <div className="p-8 text-center">
              <div className="bg-burgundy-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <RunIcon className="w-8 h-8 text-burgundy-600" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-black mb-2">Florence 5K Entry</h3>
              <p className="text-black mb-6">All ages welcome</p>
              <div className="mb-8">
                <span className="text-5xl font-heading font-bold text-burgundy-700">$20</span>
              </div>
              <ul className="text-left space-y-3 mb-8 text-black">
                <li className="flex items-center gap-2">
                  <span className="text-burgundy-500 font-bold">&#10003;</span> Official race entry
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-burgundy-500 font-bold">&#10003;</span> Race day bib number
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-burgundy-500 font-bold">&#10003;</span> Finisher recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-burgundy-500 font-bold">&#10003;</span> Supporting local history
                </li>
              </ul>
              <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary block w-full text-white font-semibold py-3 px-6 rounded-full text-center">
                Register on RunSignUp
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-black mt-10 text-sm">
          All proceeds benefit the Florence Historical Foundation. Registration is non-refundable.
        </p>
      </div>
    </section>
  )
}

/* ─── Partners Section ─── */
function Partners() {
  return (
    <section id="partners" className="py-20 sm:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black gold-underline mb-6">
            Our Partners
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto mt-10">
            Proudly presented in partnership with these Florence community organizations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
          {/* Florence Historical Foundation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100 text-center">
            <img
              src="/images/florence-historical-foundation.png"
              alt="Florence Historical Foundation Inc. — Bank of Florence 1856"
              className="partner-logo mx-auto w-40 h-40 object-contain mb-6"
            />
            <h3 className="font-heading text-xl font-bold text-black mb-2">Florence Historical Foundation</h3>
            <p className="text-black text-sm leading-relaxed">
              Dedicated to preserving and promoting the rich history of Florence, Nebraska since the founding of the Bank of Florence in 1856.
            </p>
          </div>

          {/* Florentine Players */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100 text-center">
            <img
              src="/images/florentine-players.png"
              alt="The Florentine Players"
              className="partner-logo mx-auto w-40 h-40 object-contain mb-6"
            />
            <h3 className="font-heading text-xl font-bold text-black mb-2">The Florentine Players</h3>
            <p className="text-black text-sm leading-relaxed">
              A beloved community theater group bringing the arts and culture to Florence, enriching the neighborhood through performance and storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Section ─── */
function CallToAction() {
  return (
    <section className="hero-gradient py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-60 h-60 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-burgundy-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          Ready to Run Against the Current?
        </h2>
        <p className="text-navy-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Lace up your shoes and join your Florence neighbors for a morning of community,
          fitness, and historic pride. Every registration supports our shared heritage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide">
            Register Now
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Admin Information Section ─── */
function AdminInfo() {
  return (
    <section id="admin" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black gold-underline mb-6">
            Race Administration
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto mt-10">
            The Florence 5K is organized and administered by the following
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">
            <div className="bg-navy-600 p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Florence Historical Foundation</h3>
              <p className="text-navy-200">Event Organizer &amp; Race Administrator</p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading text-lg font-bold text-black mb-3">Event Details</h4>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span><strong>Event:</strong> Florence 5K Run/Walk &mdash; Against the Current</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span><strong>Organizer:</strong> Florence Historical Foundation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span><strong>Location:</strong> NP Dodge Park, Florence, Nebraska</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span><strong>Distance:</strong> 5K (3.1 miles)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span><strong>Course:</strong> Riverfront Trail along the Missouri River</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-bold text-black mb-3">Registration Fee</h4>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span><strong>All Participants:</strong> $20</span>
                    </li>
                  </ul>

                  <h4 className="font-heading text-lg font-bold text-black mb-3 mt-6">Partner Organizations</h4>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span>Florence Historical Foundation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      <span>The Florentine Players</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-black text-center">
                  For questions about the event, registration, or sponsorship opportunities, please contact the Florence Historical Foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-navy-800 text-white/70">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <RunIcon className="w-6 h-6 text-gold-400" />
              <span className="font-heading text-white text-xl font-bold">Florence 5K</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              A community fundraiser run/walk along the Missouri riverfront, supporting the
              Florence Historical Foundation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gold-300 transition-colors">About the Event</a></li>
              <li><a href="#details" className="hover:text-gold-300 transition-colors">Event Details</a></li>
              <li><a href="#course" className="hover:text-gold-300 transition-colors">Course Information</a></li>
              <li><a href="#pricing" className="hover:text-gold-300 transition-colors">Registration &amp; Pricing</a></li>
              <li><a href="#admin" className="hover:text-gold-300 transition-colors">Race Administration</a></li>
              <li><a href="#partners" className="hover:text-gold-300 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-4">Contact</h4>
            <p className="text-white/60 leading-relaxed mb-4">
              Florence Historical Foundation<br />
              Florence, Nebraska
            </p>
            <p className="text-white/60 text-sm">
              For questions about the event, please reach out to the Florence Historical Foundation.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Florence Historical Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img src="/images/florence-5k-logo-small.png" alt="Florence 5K" className="h-12 opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── Main Page Component ─── */
function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="section-divider" />
      <About />
      <EventDetails />
      <div className="section-divider" />
      <Course />
      <Pricing />
      <CallToAction />
      <AdminInfo />
      <Partners />
      <Footer />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})
