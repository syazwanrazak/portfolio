export type Project = {
  title: string
  description: string
  detail: string
  stack: string[]
  liveUrl: string
  githubUrl?: string
  status: 'live' | 'in-progress'
  screenshot?: string
}

export const projects: Project[] = [
  {
    title: 'DesignCetak',
    description: 'Print shop ordering system',
    detail:
      'Full ordering platform for a printing business — product catalog, file uploads, and WhatsApp-based order confirmation. Includes an admin panel for the owner to track incoming orders.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://designcetak.com',
    status: 'live',
    screenshot: '/screenshots/designcetak.png',
  },
  {
    title: 'Masjid Al-Itisam',
    description: 'Mosque community website',
    detail:
      'Bilingual community portal with live prayer times, announcements, and mosque info. Secure admin panel with Firebase Auth for managing community records — built with zero ongoing server cost.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://masjidalitisam.vercel.app',
    status: 'live',
    screenshot: '/screenshots/masjidalitisam.png',
  },
  {
    title: 'Salon Nabela',
    description: 'Real-time queue management system',
    detail:
      '3-screen system for a salon: customer self-registration, live staff dashboard, and TV display. Smart queue logic with auto staff assignment based on current workload.',
    stack: ['React 18', 'Vite', 'Firebase Firestore', 'Tailwind CSS'],
    liveUrl: 'https://salon-nabella.vercel.app',
    status: 'live',
    screenshot: '/screenshots/salonnabela.png',
  },
  {
    title: 'Balik Pulau Inn',
    description: 'Homestay website',
    detail:
      'Responsive single-page site for a Penang kampung homestay. Hero slideshow, filterable photo gallery with lightbox, and a WhatsApp booking enquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://balikpulauinn.vercel.app',
    githubUrl: 'https://github.com/syazwanrazak/balik-pulau-inn',
    status: 'live',
    screenshot: '/screenshots/balikpulauinn.png',
  },
  {
    title: 'Sewana',
    description: 'Rental property management system',
    detail:
      'Web app for landlords and property managers to manage multiple rental units — tenant records, payment tracking, and property overview in one dashboard.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://sewana-3517.vercel.app',
    status: 'in-progress',
    screenshot: '/screenshots/sewana.png',
  },
]
