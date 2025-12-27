import { NavbarV7 } from '../premium/v7/NavbarV7';
import { Footer } from '../Footer';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarV7 />
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: December 27, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We collect information you provide directly to us when you use our Luxury AI CRM platform, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Account information (name, email, company details)</li>
              <li>Project information submitted through our wizard</li>
              <li>Sales call recordings and transcripts (when you upload them)</li>
              <li>CRM data (leads, deals, contacts)</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Provide, maintain, and improve our AI-powered services</li>
              <li>Generate AI insights from sales calls and CRM data</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Encryption in transit (TLS 1.3) and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure cloud infrastructure (Supabase, Vercel)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Retention</h2>
            <p className="text-slate-700">
              We retain your information for as long as your account is active or as needed to provide services. 
              You can request deletion of your data at any time by contacting us at{' '}
              <a href="mailto:privacy@sunai.com" className="text-orange-500 hover:text-orange-600">
                privacy@sunai.com
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Third-Party Services</h2>
            <p className="text-slate-700 mb-4">
              Our platform integrates with third-party services:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>OpenAI (GPT-4) for AI insights generation</li>
              <li>AssemblyAI for audio transcription</li>
              <li>Clearbit/Apollo for lead enrichment</li>
              <li>Supabase for data storage</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Each service has its own privacy policy. We encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-700">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-white rounded-lg border border-slate-200">
              <p className="text-slate-700"><strong>Email:</strong> privacy@sunai.com</p>
              <p className="text-slate-700 mt-2"><strong>Address:</strong> Sun AI, San Francisco, CA</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
