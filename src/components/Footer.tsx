import { Mail } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personal } from '../data/resume';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <a
          href="#about"
          className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-colors"
        >
          {personal.name.split(' ')[0]}
          <span className="text-blue-500">.</span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  );
}
