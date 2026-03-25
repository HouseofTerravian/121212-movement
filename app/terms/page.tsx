import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | 121212.movement',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 25, 2026">
      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing or using the 121212 Movement platform (&quot;121212.movement&quot;), you agree
        to be bound by these Terms of Service. 121212 Movement, Part of the 121212 Empire, reserves
        the right to update these terms at any time. Continued use of the platform constitutes
        acceptance of any modifications.
      </p>

      <h2>2. Platform Use</h2>
      <p>
        The 121212 Movement platform provides campaign organization tools, educational resources,
        event coordination, and community-building features. You agree to use the platform only for
        lawful purposes and in accordance with these terms. You may not use the platform to harass,
        threaten, or intimidate others, or to promote violence or illegal activity.
      </p>

      <h2>3. Campaign Participation</h2>
      <p>
        By joining or participating in campaigns hosted on the platform, you acknowledge that
        campaign activities are organized by community members and chapters. 121212 Movement provides
        infrastructure and resources but does not guarantee specific campaign outcomes. Participants
        are responsible for complying with all applicable local, state, and federal laws during
        campaign activities.
      </p>

      <h2>4. User Content</h2>
      <p>
        You retain ownership of content you submit to the platform. By submitting content, you grant
        121212 Movement a non-exclusive, worldwide, royalty-free license to use, display, and
        distribute your content in connection with the platform and its campaigns. You represent that
        you have the right to submit any content you provide.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All platform content, including text, graphics, logos, and software, is the property of 121212
        Movement, Part of the 121212 Empire, and is protected by applicable intellectual property
        laws. Campaign materials and resources are provided for personal and community organizing use
        only and may not be commercially redistributed without written permission.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        The platform and all content are provided &quot;as is&quot; without warranties of any kind.
        Educational resources, legal guides, and toolkits are provided for informational purposes
        only and do not constitute legal, financial, or professional advice. Users should consult
        qualified professionals for specific guidance.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of the State of New
        Mexico, without regard to conflict of law principles. Any disputes arising from these terms
        or use of the platform shall be resolved in the courts of New Mexico.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions about these Terms of Service, contact us at{' '}
        <a href="mailto:legal@121212.movement">legal@121212.movement</a>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        121212 Movement, Part of the 121212 Empire.
      </p>
    </LegalLayout>
  )
}
