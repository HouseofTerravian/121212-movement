export interface Campaign {
  slug: string
  name: string
  location: string
  progress: number
  participants: number
  status: 'active' | 'completed'
  featured: boolean
  description: string
  goals: string[]
  stats: { label: string; value: string }[]
}

const campaigns: Campaign[] = [
  {
    slug: 'know-your-vote',
    name: 'Know Your Vote',
    location: 'Atlanta, GA',
    progress: 42,
    participants: 4200,
    status: 'active',
    featured: false,
    description:
      'A voter education and registration campaign targeting underserved communities in Atlanta. We go door-to-door, host registration drives, and provide free voter ID clinics to ensure every eligible citizen can exercise their right to vote.',
    goals: [
      'Register 10,000 new voters before November',
      'Host 50 voter ID clinics across metro Atlanta',
      'Deploy 200 trained canvassers in key precincts',
      'Achieve 90% turnout in targeted districts',
    ],
    stats: [
      { label: 'Voters Registered', value: '4,200' },
      { label: 'ID Clinics Held', value: '21' },
      { label: 'Precincts Covered', value: '38' },
      { label: 'Volunteers Active', value: '187' },
    ],
  },
  {
    slug: 'black-business-first',
    name: 'Black Business First',
    location: 'National',
    progress: 78,
    participants: 12800,
    status: 'active',
    featured: true,
    description:
      'A national economic empowerment campaign redirecting $100 million in consumer spending to Black-owned businesses. Through curated directories, spending challenges, and business mentorship, we are building an economy that circulates wealth within our communities.',
    goals: [
      'Redirect $100M in spending to Black-owned businesses',
      'Onboard 5,000 verified Black-owned businesses',
      'Launch spending challenges in 34 cities',
      'Provide free business formation kits to 2,000 entrepreneurs',
    ],
    stats: [
      { label: 'Participants', value: '12,800' },
      { label: 'Cities Active', value: '34' },
      { label: 'Weeks Running', value: '18' },
      { label: 'Spending Redirected', value: '$4.2M' },
    ],
  },
  {
    slug: 'reparations-now',
    name: 'Reparations Now',
    location: 'Washington, DC',
    progress: 61,
    participants: 8100,
    status: 'active',
    featured: false,
    description:
      'A policy advocacy campaign demanding federal reparations legislation. We organize marches, lobby Congress, draft model legislation, and build a national coalition of organizations committed to repairing the harm of slavery and systemic racism.',
    goals: [
      'Secure 100 Congressional co-sponsors for HR 40',
      'Organize a 50,000-person march on Washington',
      'Build a coalition of 500 supporting organizations',
      'Draft and distribute model reparations legislation to all 50 states',
    ],
    stats: [
      { label: 'Supporters', value: '8,100' },
      { label: 'Co-Sponsors Secured', value: '47' },
      { label: 'Coalition Orgs', value: '312' },
      { label: 'States Engaged', value: '28' },
    ],
  },
  {
    slug: 'community-land-trust',
    name: 'Community Land Trust',
    location: 'Chicago, IL',
    progress: 34,
    participants: 3400,
    status: 'active',
    featured: false,
    description:
      'A land ownership initiative acquiring and preserving community-controlled land in historically Black neighborhoods on the South Side of Chicago. Through collective purchasing and trust structures, we prevent displacement and build generational wealth.',
    goals: [
      'Acquire 50 properties for community land trust',
      'Preserve 200 affordable housing units',
      'Train 100 community members in trust governance',
      'Secure $5M in acquisition funding',
    ],
    stats: [
      { label: 'Members', value: '3,400' },
      { label: 'Properties Acquired', value: '17' },
      { label: 'Units Preserved', value: '68' },
      { label: 'Funding Secured', value: '$1.8M' },
    ],
  },
]

export function getAllCampaigns(): Campaign[] {
  return campaigns
}

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug)
}

export function getFeaturedCampaign(): Campaign {
  return campaigns.find((c) => c.featured) || campaigns[0]
}
