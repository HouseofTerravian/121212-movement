import Hero from '@/components/home/Hero'
import ActiveCampaigns from '@/components/home/ActiveCampaigns'
import WhyMovement from '@/components/home/WhyMovement'
import FeaturedCampaign from '@/components/home/FeaturedCampaign'
import CommunityVoices from '@/components/home/CommunityVoices'
import Resources from '@/components/home/Resources'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import JoinForm from '@/components/JoinForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ActiveCampaigns />
      <WhyMovement />
      <FeaturedCampaign />
      <CommunityVoices />
      <Resources />
      <UpcomingEvents />
      <section id="join" className="bg-brand-red section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Join 28,500+ people organizing for change. Get campaign updates, event invites, and
            resources delivered to your inbox.
          </p>
          <JoinForm />
        </div>
      </section>
    </>
  )
}
