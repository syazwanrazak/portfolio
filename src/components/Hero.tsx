export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-5xl mx-auto"
    >
      <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-4">
        Based in Selangor, Malaysia
      </p>
      <h1 className="font-serif text-5xl sm:text-7xl text-zinc-900 leading-tight mb-6">
        Muhammad
        <br />
        Syazwan
      </h1>
      <p className="text-lg sm:text-xl text-zinc-500 max-w-xl leading-relaxed mb-10">
        Full-stack web developer building real apps for real businesses — from
        salon queues to mosque portals to print shops.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-700 transition-colors"
        >
          View projects
        </a>
        <a
          href="mailto:syazwanrazak1337@gmail.com"
          className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 text-sm font-medium px-5 py-2.5 rounded-full hover:border-zinc-400 transition-colors"
        >
          Get in touch
        </a>
      </div>
      <div className="mt-20 flex items-center gap-4">
        <a
          href="https://github.com/syazwanrazak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors flex items-center gap-1.5"
        >
          <GitHubIcon />
          github.com/syazwanrazak
        </a>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
