import { NavbarV7 } from '../premium/v7/NavbarV7';
import { Footer } from '../Footer';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarV7 />
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last updated: December 27, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700">
              By accessing or using the Sun AI Luxury AI CRM platform ("Service"), you agree to be bound by these 
              Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-700 mb-4">
              Sun AI provides:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>AI-powered CRM platform with lead management</li>
              <li>Sales Intelligence OS with call analysis capabilities</li>
              <li>Natural language command bar for CRM queries</li>
              <li>Workflow automation and AI agent orchestration</li>
              <li>Custom AI development and consulting services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Accounts</h2>
            <p className="text-slate-700 mb-4">
              To use certain features, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Acceptable Use</h2>
            <p className="text-slate-700 mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Upload malicious code or conduct security testing without permission</li>
              <li>Scrape, spider, or crawl the Service</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. AI Services and Accuracy</h2>
            <p className="text-slate-700 mb-4">
              Our AI-powered features (call analysis, lead enrichment, natural language search) are provided "as is":
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>AI insights are probabilistic and may contain errors</li>
              <li>You are responsible for verifying AI-generated content</li>
              <li>We do not guarantee 100% accuracy of AI outputs</li>
              <li>Human review is recommended for critical decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Data Ownership</h2>
            <p className="text-slate-700">
              You retain all rights to your data (leads, calls, transcripts, etc.). We do not claim ownership 
              of your data. However, you grant us a license to process your data to provide the Service, including 
              using AI models to generate insights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Subscription and Payment</h2>
            <p className="text-slate-700 mb-4">
              For paid plans:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Subscriptions are billed monthly or annually in advance</li>
              <li>You authorize automatic renewal unless cancelled</li>
              <li>Refunds are provided at our discretion</li>
              <li>We may change pricing with 30 days notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Termination</h2>
            <p className="text-slate-700">
              We may suspend or terminate your account if you violate these Terms. You may cancel your account 
              at any time. Upon termination, your right to use the Service will immediately cease, and we may 
              delete your data after a 30-day grace period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Disclaimers</h2>
            <p className="text-slate-700 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. 
              WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Guarantees of uptime or availability</li>
              <li>Accuracy of AI-generated content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-700">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUN AI SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE, 
              INCLUDING LOSS OF DATA, REVENUE, OR PROFITS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Changes to Terms</h2>
            <p className="text-slate-700">
              We reserve the right to modify these Terms at any time. We will notify you of material changes 
              via email or through the Service. Your continued use after changes constitutes acceptance of 
              the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Governing Law</h2>
            <p className="text-slate-700">
              These Terms are governed by the laws of the State of California, United States, without regard 
              to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Contact</h2>
            <p className="text-slate-700">
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-white rounded-lg border border-slate-200">
              <p className="text-slate-700"><strong>Email:</strong> legal@sunai.com</p>
              <p className="text-slate-700 mt-2"><strong>Address:</strong> Sun AI, San Francisco, CA</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
