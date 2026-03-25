import { getAllEvents } from '@/data/events'
import EventCard from '@/components/EventCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | 121212.movement',
  description: 'Upcoming voter clinics, marches, marketplaces, and organizer trainings.',
}

export default function EventsPage() {
  const events = getAllEvents()

  return (
    <>
      <section className="bg-gray-50 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-4">Upcoming Events</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Show up. Stand up. Every event is an opportunity to build power and community.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
