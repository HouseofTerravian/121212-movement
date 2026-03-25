import { getAllResources } from '@/data/resources'
import ResourceCard from '@/components/ResourceCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | 121212.movement',
  description: 'Free resources for voter registration, business formation, housing rights, and community organizing.',
}

export default function ResourcesPage() {
  const resources = getAllResources()

  return (
    <>
      <section className="bg-gray-50 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-4">Resources for the Movement</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Free tools, guides, and playbooks to help you organize, advocate, and build in your community.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
