import { Code2 } from 'lucide-react';
import { skills } from '../data/resume';

const categoryColors: Record<string, string> = {
  Languages: 'bg-blue-50 text-blue-700 border-blue-100',
  Embedded: 'bg-violet-50 text-violet-700 border-violet-100',
  'Signals & Wireless': 'bg-amber-50 text-amber-700 border-amber-100',
  Tools: 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

const headerColors: Record<string, string> = {
  Languages: 'text-blue-600',
  Embedded: 'text-violet-600',
  'Signals & Wireless': 'text-amber-600',
  Tools: 'text-emerald-600',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<Code2 size={20} />} title="Skills" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${headerColors[category]}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${categoryColors[category]}`}
                  >
                    {skill}
                  </span>
                ))}
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
