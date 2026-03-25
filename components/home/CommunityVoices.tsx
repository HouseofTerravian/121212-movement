import { getAllTestimonials } from '@/data/testimonials'
import TestimonialCard from '@/components/TestimonialCard'

export default function CommunityVoices() {
  const testimonials = getAllTestimonials()

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12">Voices from the Movement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
