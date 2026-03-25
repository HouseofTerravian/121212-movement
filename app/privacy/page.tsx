import LegalLayout from '@/components/LegalLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 121212.movement',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 25, 2026">
      <h2>1. Information We Collect</h2>
      <p>
        We collect information you provide directly, including your name, email address, and location
        when you join the movement or register for events. We also collect usage data such as pages
        visited, campaign interactions, and device information through standard web analytics.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        Your information is used to deliver campaign updates, event notifications, and movement
        resources. We use aggregated, anonymized data to measure campaign impact and improve platform
        functionality. We never sell your personal information to third parties. Your data may be
        shared with campaign organizers only to the extent necessary for campaign coordination.
      </p>

      <h2>3. Cookies</h2>
      <p>
        We use essential cookies to maintain your session and preferences. Analytics cookies help us
        understand how the platform is used. You can disable non-essential cookies through your
        browser settings. The platform will function without analytics cookies, though some features
        may be limited.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as needed to
        provide services. Campaign participation data is retained for historical and reporting
        purposes. You may request deletion of your personal data at any time by contacting us.
      </p>

      <h2>5. Security</h2>
      <p>
        We implement industry-standard security measures to protect your information, including
        encryption in transit and at rest. However, no method of electronic transmission or storage
        is 100% secure. We cannot guarantee absolute security of your data.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information. You may opt out
        of marketing communications at any time by clicking the unsubscribe link in any email or
        contacting us directly. California residents have additional rights under the CCPA.
      </p>

      <h2>7. Contact</h2>
      <p>
        For privacy-related inquiries, contact us at{' '}
        <a href="mailto:privacy@121212.movement">privacy@121212.movement</a>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        121212 Movement, Part of the 121212 Empire.
      </p>
    </LegalLayout>
  )
}
