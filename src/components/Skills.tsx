const skillGroups = [
  {
    label: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    label: 'Backend & DB',
    skills: ['Firebase (Firestore, Auth, Storage)', 'MySQL / MariaDB', 'Node.js', 'PHP'],
  },
  {
    label: 'Infrastructure',
    skills: ['Linux (RHEL / CentOS / Ubuntu)', 'Docker', 'Nginx / Apache', 'Vercel', 'Netlify'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'SSH', 'Wireshark', 'SIP / VoIP', 'cron jobs', 'journalctl'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-200">
      <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-3">
        Skills
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl text-zinc-900 mb-12">
        What I work with
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="text-sm bg-white border border-zinc-200 text-zinc-700 px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
