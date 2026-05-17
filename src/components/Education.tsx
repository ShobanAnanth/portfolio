import { GraduationCap } from 'lucide-react';
import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<GraduationCap size={20} />} title="Education" />

        <div className="mt-12">
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm max-w-2xl">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 shadow-md">
                <GraduationCap size={24} className="text-white" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <h3 className="text-xl font-bold text-slate-900">{education.school}</h3>
                  <span className="text-sm text-blue-600 font-medium">{education.location}</span>
                </div>

                <p className="text-slate-700 font-medium mt-1 mb-1">{education.degree}</p>

                <div className="flex flex-wrap gap-4 mb-5">
                  <span className="text-sm text-slate-500">
                    Graduation: <strong className="text-slate-700">{education.graduation}</strong>
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-lg border border-blue-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
