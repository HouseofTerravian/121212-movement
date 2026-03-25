import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapPin } from 'lucide-react'
import type { MovementEvent } from '@/data/events'

interface EventCardProps {
  event: MovementEvent
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = d.getDate()
  return { month, day }
}

export default function EventCard({ event }: EventCardProps) {
  const { month, day } = formatDate(event.date)

  return (
    <Card>
      <CardContent className="flex gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-brand-red/10 rounded-lg flex flex-col items-center justify-center">
          <span className="text-xs font-bold text-brand-red uppercase">{month}</span>
          <span className="text-2xl font-bold text-brand-red leading-none">{day}</span>
        </div>
        <div className="flex-1 min-w-0 space-y-2">
          <h3 className="font-serif font-bold text-lg text-brand-black">{event.name}</h3>
          <p className="text-sm text-brand-red font-medium">{event.campaign}</p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {event.location}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                event.type === 'virtual'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {event.type === 'virtual' ? 'Virtual' : 'In-Person'}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
          <Button variant="outline" size="sm">
            Register Free
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
