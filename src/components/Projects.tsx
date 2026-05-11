import { FolderOpen } from 'lucide-react';
import { projects } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<FolderOpen size={20} />} title="Projects" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Color accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-300" />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {project.name}
                  </h3>
                  {project.award && (
                    <span className="shrink-0 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      {project.award}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-1">{project.subtitle}</p>
                <p className="text-xs text-blue-500 font-medium mb-4">{project.period}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 flex-1">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
