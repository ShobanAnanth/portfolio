import { FolderOpen, Trophy, ExternalLink, Play } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects, type Project, type ProjectLink } from '../data/resume';
import ProjectGallery, { loadGallery } from './ProjectGallery';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<FolderOpen size={20} />} title="Projects" />

        {/* Featured — full-width showcase rows, visual panel alternating sides */}
        <div className="mt-12 flex flex-col gap-8">
          {featured.map((project, i) => (
            <FeaturedProject key={project.name} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <h3 className="mt-16 mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
              More Projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- featured */

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  const images = loadGallery(project.gallery);

  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-300" />

      <div className="p-6 md:p-8 grid gap-8 md:grid-cols-5 items-start">
        {/* Visual panel — real images once they exist, spec sheet until then */}
        <div className={`md:col-span-2 ${flip ? 'md:order-2' : ''}`}>
          {images.length > 0 ? (
            <ProjectGallery images={images} alt={project.name} />
          ) : (
            <SpecPanel project={project} />
          )}
        </div>

        <div className={`md:col-span-3 ${flip ? 'md:order-1' : ''}`}>
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h3 className="text-xl font-bold text-slate-900 leading-tight">
              {project.name}
            </h3>
            {project.award && <AwardPill award={project.award} />}
          </div>

          <p className="text-sm text-slate-500 leading-snug">{project.subtitle}</p>
          <p className="text-xs text-blue-500 font-medium mt-1 mb-4">{project.period}</p>

          {/* The high-level summary, kept as the lead-in */}
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {project.summary}
          </p>

          {/* The fleshed-out detail */}
          <ul className="space-y-2.5 mb-6">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-slate-600 leading-relaxed"
              >
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-5">
              {project.links.map((link) => (
                <ProjectLinkButton key={link.href} link={link} />
              ))}
            </div>
          )}

          <TechChips tech={project.tech} className="pt-5 border-t border-slate-100" />
        </div>
      </div>
    </article>
  );
}

/**
 * Stands in for the gallery until images land in src/assets/<gallery>/ — a spec
 * sheet of the project's numbers, so the panel reads as intentional rather than
 * as a hole in the layout.
 */
function SpecPanel({ project }: { project: Project }) {
  const metrics = project.metrics ?? [];

  return (
    <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 ring-1 ring-slate-900/5 aspect-[4/5] flex flex-col justify-center gap-5">
      {metrics.length > 0 ? (
        metrics.map((m) => (
          <div key={m.label}>
            <div className="text-3xl font-bold text-white tracking-tight leading-none">
              {m.value}
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
              {m.label}
            </div>
          </div>
        ))
      ) : (
        <div className="text-sm text-slate-400">{project.subtitle}</div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------- cards */

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-slate-300 to-slate-200" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-bold text-slate-900 leading-tight">
            {project.name}
          </h3>
          {project.award && <AwardPill award={project.award} />}
        </div>

        <p className="text-xs text-slate-500 leading-snug">{project.subtitle}</p>
        <p className="text-xs text-blue-500 font-medium mt-1 mb-3">{project.period}</p>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {project.summary}
        </p>

        <ul className="space-y-2 mb-5 flex-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-xs text-slate-500 leading-relaxed">
              <span className="mt-[6px] w-1 h-1 rounded-full bg-blue-400 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {project.links.map((link) => (
              <ProjectLinkButton key={link.href} link={link} />
            ))}
          </div>
        )}

        <TechChips tech={project.tech} className="pt-4 border-t border-slate-100" />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ shared */

function AwardPill({ award }: { award: string }) {
  return (
    <span className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
      <Trophy size={11} />
      {award}
    </span>
  );
}

function TechChips({ tech, className = '' }: { tech: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
    >
      {link.kind === 'github' ? (
        <GithubIcon size={14} />
      ) : link.kind === 'demo' ? (
        <Play size={14} />
      ) : (
        <ExternalLink size={14} />
      )}
      {link.label}
    </a>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">{icon}</div>
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
    </div>
  );
}
