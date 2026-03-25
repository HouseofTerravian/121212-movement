export interface MovementEvent {
  slug: string
  name: string
  date: string
  campaign: string
  location: string
  type: 'virtual' | 'in-person'
  description: string
}

const events: MovementEvent[] = [
  {
    slug: 'voter-id-clinic-mar-22',
    name: 'Voter ID Clinic',
    date: '2026-03-22',
    campaign: 'Know Your Vote',
    location: 'Virtual',
    type: 'virtual',
    description:
      'Free virtual clinic helping community members obtain the identification needed to vote. Legal experts walk you through requirements for your state and help you gather documents.',
  },
  {
    slug: 'atl-marketplace-apr-05',
    name: 'ATL Black Business Marketplace',
    date: '2026-04-05',
    campaign: 'Black Business First',
    location: 'Atlanta, GA',
    type: 'in-person',
    description:
      'A curated marketplace featuring 100+ Black-owned businesses. Shop, network, and support economic empowerment in the heart of Atlanta.',
  },
  {
    slug: 'capitol-march-apr-19',
    name: 'Capitol March for Reparations',
    date: '2026-04-19',
    campaign: 'Reparations Now',
    location: 'Washington, DC',
    type: 'in-person',
    description:
      'Join thousands marching on the Capitol to demand federal reparations legislation. Buses departing from 12 cities. Signs, water, and legal observers provided.',
  },
  {
    slug: 'organizer-training-may-03',
    name: 'Community Organizer Training',
    date: '2026-05-03',
    campaign: 'Community Land Trust',
    location: 'Chicago, IL (Virtual)',
    type: 'virtual',
    description:
      'Intensive virtual training for aspiring community organizers. Learn trust governance, collective decision-making, and community engagement strategies from experienced leaders.',
  },
]

export function getAllEvents(): MovementEvent[] {
  return events
}

export function getEventBySlug(slug: string): MovementEvent | undefined {
  return events.find((e) => e.slug === slug)
}
