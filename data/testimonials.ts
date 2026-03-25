export interface Testimonial {
  name: string
  role: string
  location: string
  initial: string
  quote: string
  color: 'red' | 'green' | 'black'
}

const testimonials: Testimonial[] = [
  {
    name: 'Darius Williams',
    role: 'Atlanta Organizer',
    location: 'Atlanta, GA',
    initial: 'D',
    quote:
      'Before 121212, I was frustrated but directionless. Now I lead a team of 30 canvassers and we have registered over 1,200 voters in six months. This movement gave me a blueprint and a community.',
    color: 'red',
  },
  {
    name: 'Tamika Johnson',
    role: 'DC Policy Advocate',
    location: 'Washington, DC',
    initial: 'T',
    quote:
      'The Reparations Now campaign connected me with legal scholars, legislators, and thousands of people who refuse to wait. We are not asking for permission. We are building the case and the coalition.',
    color: 'green',
  },
  {
    name: 'Marcus Reed',
    role: 'Chicago Community Builder',
    location: 'Chicago, IL',
    initial: 'M',
    quote:
      'Our block was being bought up by developers. The Community Land Trust campaign helped us organize, acquire three properties, and keep 12 families in their homes. This is what real power looks like.',
    color: 'black',
  },
]

export function getAllTestimonials(): Testimonial[] {
  return testimonials
}
