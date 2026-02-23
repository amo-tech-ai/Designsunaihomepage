import { SolutionsSection } from './SolutionsSection';
import { RelatedServicesSection } from './RelatedServicesSection';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function SolutionCardsDemo() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4">
          <Link 
            to="/sunai" 
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to SunAI</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="py-16 md:py-20 px-6 md:px-12 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Design System
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 mb-4">
            BCG-Style Solution Cards
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 max-w-[700px] leading-relaxed">
            Premium strategy-grade UI cards with slide-up overlay animations. Clean by default, insightful on hover.
          </p>
        </div>
      </div>

      {/* Main Component Demo */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-2">
            <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
              Pattern 1
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl tracking-tight text-neutral-900 mb-2">
            Slide-Up Overlay Cards
          </h2>
          <p className="text-neutral-600">
            Hover or focus to reveal insights. Perfect for partnerships and solutions.
          </p>
        </div>
        <SolutionsSection />
      </div>

      {/* Related Services Section Demo */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-2">
            <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
              Pattern 2
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl tracking-tight text-neutral-900 mb-2">
            Split Text/Image Cards
          </h2>
          <p className="text-neutral-600">
            Asymmetric grid layout matching the BCG screenshot. Editorial and sophisticated.
          </p>
        </div>
        <RelatedServicesSection />
      </div>

      {/* Design Specifications */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl tracking-tight text-neutral-900 mb-12">
            Design Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Animation */}
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                Animation
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Trigger: Hover / Focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Duration: 280ms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Easing: Custom ease-out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Motion: Slide up from bottom</span>
                </li>
              </ul>
            </div>

            {/* Layout */}
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                Layout
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Desktop: 3-column grid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Mobile: Single column</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Card height: 420px</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Border radius: 8px</span>
                </li>
              </ul>
            </div>

            {/* Accessibility */}
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                Accessibility
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Keyboard navigable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Focus triggers animation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>WCAG AA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Mobile: Tap to reveal</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Color Variants */}
          <div className="mt-12 bg-white p-8 rounded-lg border border-neutral-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
              Color Variants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="h-20 bg-neutral-900 rounded border border-neutral-200" />
                <p className="text-sm font-medium text-neutral-700">Dark</p>
                <code className="text-xs text-neutral-500">#171717</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#D1F4E0] rounded border border-neutral-200" />
                <p className="text-sm font-medium text-neutral-700">Mint</p>
                <code className="text-xs text-neutral-500">#D1F4E0</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#E8F9F0] rounded border border-neutral-200" />
                <p className="text-sm font-medium text-neutral-700">Light Mint</p>
                <code className="text-xs text-neutral-500">#E8F9F0</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl tracking-tight text-neutral-900 mb-8">
            Component Usage
          </h2>

          <div className="bg-neutral-900 p-8 rounded-lg overflow-x-auto">
            <pre className="text-sm text-emerald-400 leading-relaxed">
              <code>{`import { SolutionsSection } from './SolutionsSection';

export function MyPage() {
  return (
    <SolutionsSection
      title="Our Partnerships and Solutions"
      subtitle="We bring best-in-class expertise..."
      solutions={[
        {
          title: 'Your Solution',
          description: 'Your description here...',
          variant: 'mint'
        }
      ]}
    />
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}