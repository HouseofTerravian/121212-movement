import { Quote } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'

const colorMap: Record<string, { bg: string; text: string }> = {
  red: { bg: 'bg-brand-red', text: 'text-white' },
  green: { bg: 'bg-brand-green', text: 'text-white' },
  black: { bg: 'bg-brand-black', text: 'text-white' },
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const avatarColor = colorMap[testimonial.color] || colorMap.red

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-6">
      <Quote size={32} className="text-brand-red/10" />
      <p className="font-serif italic text-gray-700 text-lg leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${avatarColor.bg} ${avatarColor.text} flex items-center justify-center font-bold text-sm`}
        >
          {testimonial.initial}
        </div>
        <div>
          <p className="font-semibold text-brand-black text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">
            {testimonial.role} &middot; {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  )
}
