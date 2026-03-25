import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const stats = [
  { value: '28K+', label: 'People' },
  { value: '4', label: 'Campaigns' },
  { value: '14+', label: 'Cities' },
  { value: '$2M+', label: 'Impact' },
]

export default function Hero() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(196,30,58,0.03) 40px, rgba(196,30,58,0.03) 80px, transparent 80px, transparent 120px, rgba(45,95,63,0.03) 120px, rgba(45,95,63,0.03) 160px)',
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red" />
            </span>
            <span className="text-sm text-gray-600 font-medium">
              Movement Active &mdash; 28,500+ People Organized
            </span>
          </div>

          <h1 className="heading-primary">
            The Movement is the
            <br />
            <span className="text-brand-red">Message.</span>
          </h1>

          <p className="text-xl text-gray-600 font-medium">Organize. Mobilize. Build.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#join">
              <Button variant="red" size="lg">
                Join the Movement
              </Button>
            </Link>
            <Link href="/campaigns">
              <Button variant="outline" size="lg">
                See Active Campaigns
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-brand-black">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
