import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Vote, Briefcase, Home, Users, type LucideIcon } from 'lucide-react'
import type { Resource } from '@/data/resources'

const iconMap: Record<string, LucideIcon> = {
  vote: Vote,
  briefcase: Briefcase,
  home: Home,
  users: Users,
}

interface ResourceCardProps {
  resource: Resource
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = iconMap[resource.icon] || Users

  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center">
          <Icon size={24} className="text-brand-green" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-brand-red mb-1">
            {resource.category}
          </p>
          <h3 className="font-serif font-bold text-lg text-brand-black">{resource.name}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
        <Button variant="green" size="sm">
          Download Free
        </Button>
      </CardContent>
    </Card>
  )
}
