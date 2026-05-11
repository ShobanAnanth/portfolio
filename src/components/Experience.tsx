import { Briefcase } from 'lucide-react';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<Briefcase size={20} />} title="Experience" />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-2 bottom-2 w-px bg-slate-200 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-white border-2 border-slate-200 items-center justify-center shadow-sm">
                  <Briefcase size={16} className="text-blue-600" />
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{job.company}</h3>
                    <span className="text-sm text-blue-600 font-medium whitespace-nowrap shrink-0 sm:ml-4">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-4">
                    {job.role} &mdash; {job.location}
                  </p>

                  {job.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.bullets.length === 0 && (
                    <p className="text-sm text-slate-400 italic">Details coming soon.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
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
