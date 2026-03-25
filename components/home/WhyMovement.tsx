import { Home, Megaphone, Building } from 'lucide-react'

const pillars = [
  {
    icon: Home,
    title: 'Organize Locally',
    description:
      'Build power where you live. Start a chapter, host a town hall, or join a canvass team. Every block, every neighborhood, every city.',
  },
  {
    icon: Megaphone,
    title: 'Amplify Nationally',
    description:
      'Connect local chapters into a national force. Coordinate campaigns, share resources, and amplify stories that demand attention.',
  },
  {
    icon: Building,
    title: 'Build Generationally',
    description:
      'Create institutions that outlast us. Land trusts, business networks, voter infrastructure, and cultural archives for the next 100 years.',
  },
]

export default function WhyMovement() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-16">
          Power Isn&apos;t Given. It&apos;s Organized.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-red/10 flex items-center justify-center">
                <pillar.icon size={28} className="text-brand-red" />
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-black">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
