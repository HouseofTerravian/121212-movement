import { getAllEvents } from '@/data/events'
import EventCard from '@/components/EventCard'

export default function UpcomingEvents() {
  const events = getAllEvents()

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12">Show Up. Stand Up.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
