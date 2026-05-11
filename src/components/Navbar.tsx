import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/resume';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="text-slate-900 font-semibold text-lg tracking-tight hover:text-blue-600 transition-colors"
        >
          {personal.name.split(' ')[0]}
          <span className="text-blue-600">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-slate-700 font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
