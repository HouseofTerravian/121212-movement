import { getAllResources } from '@/data/resources'
import ResourceCard from '@/components/ResourceCard'

export default function Resources() {
  const resources = getAllResources()

  return (
    <section className="bg-brand-tan section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12">
          Know Your Rights. Know Your Power.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
