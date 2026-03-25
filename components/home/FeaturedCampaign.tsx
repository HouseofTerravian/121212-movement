import { Target } from 'lucide-react'
import { getFeaturedCampaign } from '@/data/campaigns'

export default function FeaturedCampaign() {
  const campaign = getFeaturedCampaign()

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-brand-black text-white p-8 md:p-16 flex flex-col justify-center">
        <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-2">
          Featured Campaign
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{campaign.name}</h2>
        <p className="text-gray-300 leading-relaxed mb-8">{campaign.description}</p>
        <ul className="space-y-4">
          {campaign.goals.map((goal) => (
            <li key={goal} className="flex items-start gap-3">
              <Target size={18} className="text-brand-red mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{goal}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-brand-red text-white p-8 md:p-16 flex items-center">
        <div className="grid grid-cols-2 gap-8 w-full">
          {campaign.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
