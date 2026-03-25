import Link from 'next/link'
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react'

const footerColumns = [
  {
    title: 'Campaigns',
    links: [
      { label: 'Know Your Vote', href: '/campaigns/know-your-vote' },
      { label: 'Black Business First', href: '/campaigns/black-business-first' },
      { label: 'Reparations Now', href: '/campaigns/reparations-now' },
      { label: 'Community Land Trust', href: '/campaigns/community-land-trust' },
      { label: 'All Campaigns', href: '/campaigns' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Local Chapters', href: '#' },
      { label: 'Start a Chapter', href: '#' },
      { label: 'Volunteer', href: '#' },
      { label: 'Donate', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Voter Guide', href: '/resources' },
      { label: 'Business Toolkit', href: '/resources' },
      { label: 'Housing Rights', href: '/resources' },
      { label: 'Organizing Playbook', href: '/resources' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
]

const empireLinks = [
  { label: '121212.black', href: 'https://121212.black' },
  { label: '121212.network', href: 'https://121212.network' },
  { label: '121212.capital', href: 'https://121212.capital' },
  { label: '121212.media', href: 'https://121212.media' },
]

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.74a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          {[Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={Icon.displayName || 'Social'}
            >
              <Icon size={20} />
            </a>
          ))}
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="TikTok"
          >
            <TikTokIcon size={20} />
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            {empireLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            &copy; 2026 121212 Movement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
