import { Mail, Phone, MapPin, ArrowDown } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personal } from '../data/resume';

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="animate-fade-in-up">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 rounded-full mb-6">
            Available Summer 2027
          </span>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-4">
          {personal.name}
        </h1>

        <p className="animate-fade-in-up delay-200 text-xl md:text-2xl text-blue-600 font-medium mb-4">
          {personal.title}
        </p>

        <p className="animate-fade-in-up delay-300 text-lg text-slate-500 max-w-2xl mb-4 leading-relaxed">
          {personal.tagline}
        </p>

        <p className="animate-fade-in-up delay-300 text-sm text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {personal.interests}
        </p>

        {/* Contact row */}
        <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 mb-12">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Mail size={15} />
            {personal.email}
          </a>
          <span className="flex items-center gap-2 text-sm text-slate-600">
            <Phone size={15} />
            {personal.phone}
          </span>
          <span className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={15} />
            {personal.location}
          </span>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-500 flex flex-wrap gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center gap-2 text-slate-400 text-sm animate-bounce">
          <ArrowDown size={16} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
