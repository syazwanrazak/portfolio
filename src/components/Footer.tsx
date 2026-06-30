export default function Footer() {
  return (
    <footer className="py-8 px-6 max-w-5xl mx-auto border-t border-zinc-200">
      <p className="text-sm text-zinc-400">
        © {new Date().getFullYear()} Muhammad Syazwan · Built with Next.js & Tailwind CSS
      </p>
    </footer>
  )
}
