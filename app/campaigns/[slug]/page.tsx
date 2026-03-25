import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllCampaigns, getCampaignBySlug } from '@/data/campaigns'
import { getAllEvents } from '@/data/events'
import { Button } from '@/components/ui/Button'
import ProgressBar from '@/components/ProgressBar'
import EventCard from '@/components/EventCard'
import { MapPin, Users, Target, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllCampaigns().map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const campaign = getCampaignBySlug(params.slug)
  if (!campaign) return { title: 'Campaign Not Found' }
  return {
    title: `${campaign.name} | 121212.movement`,
    description: campaign.description,
  }
}

export default function CampaignDetailPage({ params }: PageProps) {
  const campaign = getCampaignBySlug(params.slug)
  if (!campaign) notFound()

  const relatedEvents = getAllEvents().filter(
    (e) => e.campaign.toLowerCase() === campaign.name.toLowerCase()
  )

  return (
    <>
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <Link
            href="/campaigns"
            className="text-sm text-gray-500 hover:text-brand-black transition-colors duration-300 mb-6 inline-block"
          >
            &larr; All Campaigns
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              {campaign.status === 'active' && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
              )}
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green" />
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
              {campaign.status}
            </span>
          </div>
          <h1 className="heading-primary mb-4">{campaign.name}</h1>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={16} />
            <span>{campaign.location}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="max-w-lg mb-2">
                  <ProgressBar progress={campaign.progress} color="red" />
                </div>
                <div className="flex items-center justify-between max-w-lg text-sm">
                  <span className="text-gray-500">{campaign.progress}% complete</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Users size={14} />
                    {campaign.participants.toLocaleString()} participants
                  </span>
                </div>
              </div>

              <div>
                <h2 className="heading-secondary text-2xl mb-4">About This Campaign</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{campaign.description}</p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-brand-black mb-4">Campaign Goals</h3>
                <ul className="space-y-3">
                  {campaign.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="#join">
                <Button variant="red" size="lg">
                  Join This Campaign
                </Button>
              </Link>

              {relatedEvents.length > 0 && (
                <div>
                  <h3 className="font-serif font-bold text-xl text-brand-black mb-4">
                    Related Events
                  </h3>
                  <div className="space-y-4">
                    {relatedEvents.map((event) => (
                      <EventCard key={event.slug} event={event} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-brand-black">Campaign Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {campaign.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-brand-black">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
