import Link from 'next/link'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import ProgressBar from '@/components/ProgressBar'
import { MapPin, Users } from 'lucide-react'
import type { Campaign } from '@/data/campaigns'

interface CampaignCardProps {
  campaign: Campaign
  dark?: boolean
}

export default function CampaignCard({ campaign, dark }: CampaignCardProps) {
  return (
    <Card dark={dark}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2.5 w-2.5">
            {campaign.status === 'active' && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                campaign.status === 'active' ? 'bg-brand-green' : 'bg-gray-400'
              }`}
            />
          </span>
          <span className={`text-xs font-medium uppercase tracking-wider ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            {campaign.status}
          </span>
        </div>
        <h3 className={`font-serif font-bold text-xl ${dark ? 'text-white' : 'text-brand-black'}`}>
          {campaign.name}
        </h3>
      </CardHeader>
      <CardContent>
        <div className={`flex items-center gap-1.5 text-sm mb-4 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          <MapPin size={14} />
          {campaign.location}
        </div>
        <div className="mb-2">
          <ProgressBar progress={campaign.progress} color="red" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className={dark ? 'text-gray-400' : 'text-gray-500'}>{campaign.progress}% complete</span>
          <span className={`flex items-center gap-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Users size={14} />
            {campaign.participants.toLocaleString()}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/campaigns/${campaign.slug}`} className="w-full">
          <Button variant={dark ? 'red' : 'outline'} size="sm" className="w-full">
            Join Campaign
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
