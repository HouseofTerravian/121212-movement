export interface Resource {
  slug: string
  name: string
  description: string
  icon: string
  category: string
}

const resources: Resource[] = [
  {
    slug: 'voter-registration-guide',
    name: 'Voter Registration Guide',
    description:
      'A comprehensive state-by-state guide to voter registration, ID requirements, early voting options, and absentee ballot procedures. Includes templates for organizing registration drives in your community and know-your-rights information for Election Day.',
    icon: 'vote',
    category: 'Civic Engagement',
  },
  {
    slug: 'business-formation-toolkit',
    name: 'Business Formation Toolkit',
    description:
      'Everything you need to start and scale a Black-owned business: LLC formation checklists, tax strategy guides, grant directories, supplier network access, and marketing templates designed for community-first entrepreneurs.',
    icon: 'briefcase',
    category: 'Economic Empowerment',
  },
  {
    slug: 'housing-rights-handbook',
    name: 'Housing Rights Handbook',
    description:
      'Know your rights as a tenant and homeowner. This handbook covers fair housing laws, anti-displacement strategies, community land trust formation guides, and legal templates for challenging predatory lending and discriminatory practices.',
    icon: 'home',
    category: 'Housing Justice',
  },
  {
    slug: 'community-organizing-playbook',
    name: 'Community Organizing Playbook',
    description:
      'A field-tested playbook for grassroots organizing: coalition building frameworks, direct action planning, media strategy guides, fundraising templates, and conflict resolution protocols used by movement leaders across the country.',
    icon: 'users',
    category: 'Organizing',
  },
]

export function getAllResources(): Resource[] {
  return resources
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug)
}
