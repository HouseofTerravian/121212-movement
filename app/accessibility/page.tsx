import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility | 121212.movement',
}

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement" lastUpdated="March 25, 2026">
      <h2>1. Our Commitment</h2>
      <p>
        121212 Movement is committed to ensuring digital accessibility for people of all abilities.
        We believe the movement belongs to everyone, and our platform should reflect that. We
        continuously work to improve the accessibility and usability of our website to ensure an
        inclusive experience for all visitors.
      </p>

      <h2>2. WCAG 2.1 AA Compliance</h2>
      <p>
        We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level.
        These guidelines explain how to make web content more accessible to people with a wide range
        of disabilities, including visual, auditory, physical, speech, cognitive, language, learning,
        and neurological disabilities.
      </p>

      <h2>3. Accessibility Features</h2>
      <ul>
        <li>Semantic HTML structure with proper heading hierarchy</li>
        <li>Sufficient color contrast ratios for all text and interactive elements</li>
        <li>Keyboard navigation support throughout the platform</li>
        <li>ARIA labels and roles for screen reader compatibility</li>
        <li>Responsive design that adapts to different screen sizes and zoom levels</li>
        <li>Alt text for all meaningful images and icons</li>
        <li>Focus indicators for interactive elements</li>
        <li>Skip-to-content navigation links</li>
      </ul>

      <h2>4. Contact</h2>
      <p>
        If you encounter any accessibility barriers while using our platform, or if you have
        suggestions for improving accessibility, please contact us at{' '}
        <a href="mailto:accessibility@121212.movement">accessibility@121212.movement</a>. We take
        all feedback seriously and will work to address any issues promptly.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        121212 Movement, Part of the 121212 Empire.
      </p>
    </LegalLayout>
  )
}
