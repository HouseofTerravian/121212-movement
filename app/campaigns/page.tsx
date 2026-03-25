import { getAllCampaigns } from '@/data/campaigns'
import { Button } from '@/components/ui/Button'
import ProgressBar from '@/components/ProgressBar'
import { MapPin, Users, Target } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Active Campaigns | 121212.movement',
  description: 'Explore and join active campaigns organizing for voter rights, economic power, reparations, and community land ownership.',
}

export default function CampaignsPage() {
  const campaigns = getAllCampaigns()

  return (
    <>
      <section className="bg-gray-50 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-4">Active Campaigns</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every campaign is a front line. Pick yours and get to work.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-12">
          {campaigns.map((campaign) => (
            <div
              key={campaign.slug}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      {campaign.status === 'active' && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                      )}
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {campaign.status}
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-2xl text-brand-black">
                    {campaign.name}
                  </h2>

                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={14} />
                    {campaign.location}
                  </div>

                  <div className="max-w-md">
                    <ProgressBar progress={campaign.progress} color="red" />
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-500">{campaign.progress}% complete</span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Users size={14} />
                        {campaign.participants.toLocaleString()} participants
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{campaign.description}</p>

                  <ul className="space-y-2">
                    {campaign.goals.map((goal) => (
                      <li key={goal} className="flex items-start gap-2 text-sm text-gray-600">
                        <Target size={14} className="text-brand-red mt-0.5 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/campaigns/${campaign.slug}`}>
                    <Button variant="red" size="sm">
                      Join Campaign
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:w-72 flex-shrink-0">
                  {campaign.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                    >
                      <p className="text-xl font-bold text-brand-black">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
