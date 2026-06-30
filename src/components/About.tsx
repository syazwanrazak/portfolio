export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-200">
      <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-3">
        About
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <h2 className="font-serif text-4xl sm:text-5xl text-zinc-900 leading-tight">
          Support engineer turned developer
        </h2>
        <div className="space-y-4 text-zinc-600 leading-relaxed">
          <p>
            I spent 3+ years as an L2 Technical Support Engineer at Accordia Global, supporting
            enterprise systems across banking and healthcare clients — debugging Linux servers,
            Docker containers, MySQL databases, and VoIP infrastructure.
          </p>
          <p>
            That background taught me how real production systems fail, and how to build things
            that don&apos;t. Now I apply that same rigour to building full-stack web applications —
            from the UI to the database to the deployment pipeline.
          </p>
          <p>
            I work independently with SME and community clients, handling everything from
            requirements gathering to launch and post-launch support.
          </p>
        </div>
      </div>
    </section>
  )
}
