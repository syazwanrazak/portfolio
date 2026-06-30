import { projects } from '@/data/projects'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel>Projects</SectionLabel>
      <h2 className="font-serif text-4xl sm:text-5xl text-zinc-900 mt-3 mb-12">
        Things I&apos;ve built
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-400 transition-colors group"
          >
            <div className="relative aspect-video bg-zinc-100 overflow-hidden">
              {p.screenshot ? (
                <Image
                  src={p.screenshot}
                  alt={p.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-300 text-sm">
                  Screenshot coming soon
                </div>
              )}
              {p.status === 'in-progress' && (
                <span className="absolute top-3 right-3 bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200">
                  In Progress
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-semibold text-zinc-900">{p.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-700 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-700 transition-colors"
                    aria-label="Live site"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <p className="text-sm text-zinc-500 mb-2">{p.description}</p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">{p.detail}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase">
      {children}
    </p>
  )
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
