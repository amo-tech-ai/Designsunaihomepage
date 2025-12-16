import { motion } from 'motion/react';
import { 
  Sparkles, 
  LayoutTemplate, 
  MousePointer2, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export function HomePageImprovementsV6() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-[#00334F]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-[#00334F] tracking-wider uppercase">Roadmap</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#00334F] mb-6">Home V6 Improvements</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            A strategic list of UX/UI enhancements designed to elevate the Sun AI homepage to a world-class standard.
          </p>
        </div>

        {/* Improvements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <ImprovementCard 
            icon={LayoutTemplate}
            title="Visual Hierarchy & Spacing"
            status="In Progress"
            items={[
              "Increase vertical rhythm between sections (min 120px).",
              "Implement 'Scroll Snap' logic for major sections.",
              "Add subtle noise texture to solid backgrounds for depth.",
              "Use 'Masked Gradients' to soften section transitions."
            ]}
          />

          <ImprovementCard 
            icon={MousePointer2}
            title="Micro-Interactions"
            status="To Do"
            items={[
              "Add 'Magnetic Buttons' that stick to cursor nearby.",
              "Implement staggered text reveals on scroll (SplitText).",
              "Make the 'Trusted By' logos interactive (grayscale → color).",
              "Add a 'Scroll Progress' indicator on the right edge."
            ]}
          />

          <ImprovementCard 
            icon={Smartphone}
            title="Mobile Experience"
            status="Priority"
            items={[
              "Convert the 'Globe Illustration' to a static fallback on low-power devices.",
              "Stack 'How It Works' horizontally with swipe instead of sticky scroll.",
              "Ensure touch targets are >44px for all links.",
              "Reduce font sizes for H1 (clamp function) to prevent wrapping."
            ]}
          />

          <ImprovementCard 
            icon={CheckCircle}
            title="Conversion Optimization"
            status="Planned"
            items={[
              "Add a 'Sticky CTA Bar' that appears after scrolling past Hero.",
              "Implement an 'Exit Intent' modal for the lead magnet.",
              "Add social proof numbers (e.g. '500+ Automations Built').",
              "A/B test the Hero Headline: 'Build' vs 'Launch'."
            ]}
          />

        </div>

        {/* Implementation Plan */}
        <div className="mt-16 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-[#00334F] mb-6">Implementation Plan</h3>
          <div className="space-y-4">
            <Step number="01" title="Refine Hero Animation" desc="Optimize the Globe SVG for performance and smooth out the entry transition." />
            <Step number="02" title="Connect CMS" desc="Replace hardcoded 'Services' and 'Testimonials' with dynamic data." />
            <Step number="03" title="Performance Audit" desc="Run Lighthouse score check. Target >90 on all metrics." />
          </div>
        </div>

      </div>
    </div>
  );
}

function ImprovementCard({ icon: Icon, title, status, items }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#00334F]">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
          status === 'Priority' ? 'bg-red-50 text-red-600 border-red-100' : 
          status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-100' :
          'bg-slate-50 text-slate-500 border-slate-100'
        }`}>
          {status}
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ number, title, desc }: any) {
  return (
    <div className="flex items-start gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors">
      <span className="text-2xl font-bold text-slate-200">{number}</span>
      <div>
        <h4 className="text-lg font-bold text-[#00334F] mb-1">{title}</h4>
        <p className="text-slate-500 text-sm">{desc}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-slate-300 ml-auto mt-2" />
    </div>
  );
}
