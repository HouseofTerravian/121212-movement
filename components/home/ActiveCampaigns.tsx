import { getAllCampaigns } from '@/data/campaigns'
import CampaignCard from '@/components/CampaignCard'

export default function ActiveCampaigns() {
  const campaigns = getAllCampaigns()

  return (
    <section className="bg-brand-black section-padding">
      <div className="container-custom">
        <div className="mb-12">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-2">
            Right Now
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Active Campaigns
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.slug} campaign={campaign} dark />
          ))}
        </div>
      </div>
    </section>
  )
}
