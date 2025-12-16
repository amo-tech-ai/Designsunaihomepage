import { motion } from 'motion/react';
import { 
  Palette, 
  Type, 
  Layout, 
  Zap, 
  MessageSquare, 
  Box, 
  ArrowRight,
  CheckCircle2,
  Layers
} from 'lucide-react';

export function StyleGuideV6() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      
      {/* Header */}
      <header className="bg-[#00334F] text-white py-20 px-6 lg:px-12 border-b border-[#004466]">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-6 opacity-80">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono border border-white/20">V6.0.0</span>
            <span className="text-sm tracking-wider uppercase">System Documentation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Sun AI Design System</h1>
          <p className="text-xl text-blue-200/80 max-w-2xl font-light">
            A premium, high-contrast visual language for enterprise AI. 
            Combining deep navy precision with warm, human-centric orange accents.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-12 -mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* 1. Color Palette */}
          <Section title="Color Palette" icon={Palette}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorSwatch name="Sun Navy (Primary)" hex="#00334F" usage="Backgrounds, Text, Strong Borders" dark />
              <ColorSwatch name="Deep Ocean (Dark)" hex="#00111F" usage="Footers, Contrast Sections" dark />
              <ColorSwatch name="Sun Orange (Accent)" hex="#FF6B2C" usage="CTAs, Highlights, Gradients" />
              <ColorSwatch name="Tech Blue (Secondary)" hex="#0EA5E9" usage="Icons, Illustrations, Links" />
              <ColorSwatch name="Ice Blue (Subtle)" hex="#E0F2FE" usage="Hover States, Backgrounds" text="#00334F" />
              <ColorSwatch name="Canvas White" hex="#FFFFFF" usage="Cards, Main Backgrounds" text="#000000" border />
              <ColorSwatch name="Slate Text (Body)" hex="#64748B" usage="Paragraphs, Subtitles" />
              <ColorSwatch name="Success Green" hex="#10B981" usage="Indicators, Success States" />
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Gradients</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="h-24 rounded-xl bg-gradient-to-r from-[#00334F] to-[#00111F] flex items-end p-4 text-white text-xs font-mono">Navy Gradient</div>
                <div className="h-24 rounded-xl bg-gradient-to-tr from-[#00334F]/5 to-[#FF6B2C]/5 flex items-end p-4 text-slate-500 text-xs font-mono border border-slate-200">Subtle Mesh</div>
                <div className="h-24 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#818CF8] flex items-end p-4 text-white text-xs font-mono">AI Tech Gradient</div>
              </div>
            </div>
          </Section>

          <Divider />

          {/* 2. Typography */}
          <Section title="Typography" icon={Type}>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-baseline">
                <div>
                  <span className="text-xs text-slate-400 font-mono block mb-2">Display / H1</span>
                  <h1 className="text-6xl font-bold text-[#00334F] tracking-tight leading-[1.1]">
                    Build Intelligent <br/> AI Products
                  </h1>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block mb-2">Heading / H2</span>
                  <h2 className="text-4xl font-semibold text-[#00334F] mb-4">Enterprise-grade automation</h2>
                  <span className="text-xs text-slate-400 font-mono block mb-2">Heading / H3</span>
                  <h3 className="text-2xl font-semibold text-[#00334F]">Full-stack implementation</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <span className="text-xs text-slate-400 font-mono block mb-2">Body / Large</span>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">
                    Sun AI designs and launches production-ready AI platforms, automation systems, and multi-agent solutions that transform how teams work.
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block mb-2">Body / Regular</span>
                  <p className="text-base text-slate-500 leading-relaxed">
                    Our architecture is built for scale. We utilize edge-ready compute, secure vector databases, and modern React frontends to deliver experiences that feel instantaneous and magical.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Divider />

          {/* 3. Components */}
          <Section title="Interface Elements" icon={Box}>
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Buttons */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Buttons</h4>
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex items-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-[#00334F] text-white font-medium shadow-lg shadow-[#00334F]/20 hover:translate-y-[-2px] transition-all flex items-center gap-2">
                      Primary Action
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-400 font-mono">Default / Hover: Lift</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-[#00334F] font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
                      Secondary Action
                    </button>
                    <span className="text-xs text-slate-400 font-mono">Outline</span>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Card Style</h4>
                <div className="p-8 rounded-[28px] bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-[#0EA5E9]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#00334F] mb-2">Premium Card</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Soft shadows, large border radius (28px), and generous padding define the V6 card style.
                  </p>
                </div>
              </div>

            </div>
          </Section>

          <Divider />

          {/* 4. Motion & Animation */}
          <Section title="Motion & Interaction" icon={Zap}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <span className="text-sm font-semibold text-slate-700">Spring Scale</span>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-32">
                   <motion.div 
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                     className="w-12 h-12 bg-[#FF6B2C] rounded-xl cursor-pointer"
                   />
                </div>
                <p className="text-xs text-slate-400">Used on: Buttons, Icons, Hover states.</p>
              </div>

              <div className="space-y-4">
                <span className="text-sm font-semibold text-slate-700">Fade Up</span>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-32 overflow-hidden">
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                     className="w-12 h-12 bg-[#00334F] rounded-xl"
                   />
                </div>
                <p className="text-xs text-slate-400">Used on: Page Load, Scroll Reveal.</p>
              </div>

              <div className="space-y-4">
                <span className="text-sm font-semibold text-slate-700">Orbit / Pulse</span>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-32">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                     className="w-12 h-12 border-2 border-dashed border-[#0EA5E9] rounded-full"
                   />
                </div>
                <p className="text-xs text-slate-400">Used on: Hero Illustrations, Loaders.</p>
              </div>
            </div>
          </Section>

          <Divider />

          {/* 5. Copywriting */}
          <Section title="Voice & Tone" icon={MessageSquare}>
             <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-[#00334F] text-white p-8 rounded-2xl">
                 <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                   <CheckCircle2 className="text-[#10B981]" /> Do this
                 </h4>
                 <ul className="space-y-3 text-blue-100 font-light">
                   <li>• Use "Intelligent," "Production-Ready," "Scalable."</li>
                   <li>• Focus on outcomes (Speed, Revenue, Automation).</li>
                   <li>• Keep sentences concise and punchy.</li>
                   <li>• Use "We" and "Partnership" language.</li>
                 </ul>
               </div>
               <div className="bg-slate-50 text-slate-500 p-8 rounded-2xl border border-slate-100">
                 <h4 className="text-lg font-bold mb-4 text-slate-800">Avoid this</h4>
                 <ul className="space-y-3 font-light">
                   <li>• Don't use "Magic" or "Wizardry" (too vague).</li>
                   <li>• Avoid overly technical jargon without context.</li>
                   <li>• Never use "Cheap" or "Budget."</li>
                   <li>• Don't make promises about "Sentience."</li>
                 </ul>
               </div>
             </div>
             
             <div className="mt-8">
               <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Approved Taglines</h4>
               <div className="flex flex-wrap gap-4">
                 <Tagline>Build Intelligent AI Products</Tagline>
                 <Tagline>Enterprise-grade Automation</Tagline>
                 <Tagline>From Prototype to Production</Tagline>
                 <Tagline>Engineered for Impact</Tagline>
               </div>
             </div>
          </Section>

          <Divider />

          {/* 6. Wireframe / Page Structure */}
          <Section title="Home V6 Architecture" icon={Layout}>
            <div className="space-y-4">
              <p className="text-slate-500 mb-6">The visual hierarchy for the V6 Landing Page.</p>
              
              <WireframeBlock name="Hero Section" desc="Split Layout: H1/CTA Left + Globe Illustration Right" color="bg-[#00334F] text-white" />
              <WireframeBlock name="Trusted By" desc="Grayscale logos, low opacity, infinite marquee (optional)" color="bg-slate-100 text-slate-500" />
              <WireframeBlock name="What We Build (Services)" desc="2-Row Grid, Light Grey Background, Card System" color="bg-[#F9FAFB] text-slate-700" />
              <WireframeBlock name="How It Works" desc="Scroll-locked sticky section, 3 steps fade in" color="bg-white text-slate-800" />
              <WireframeBlock name="Transformation / Compare" desc="Before/After comparison slider or side-by-side" color="bg-slate-50 text-slate-700" />
              <WireframeBlock name="Pricing" desc="3 Cards, Center highlighted, Toggle monthly/yearly" color="bg-[#00334F] text-white" />
              <WireframeBlock name="Footer" desc="4 Columns, Dark Navy, Legal Links" color="bg-[#00111F] text-slate-400" />
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

function Section({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
  return (
    <div className="p-8 lg:p-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#00334F]">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold text-[#00334F]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-slate-100" />;
}

function ColorSwatch({ name, hex, usage, dark = false, text = "#FFFFFF", border = false }: any) {
  return (
    <div className="space-y-3">
      <div 
        className={`h-24 rounded-2xl shadow-sm flex items-end p-4 transition-transform hover:scale-105 ${border ? 'border border-slate-200' : ''}`}
        style={{ backgroundColor: hex }}
      >
        <span className="font-mono text-sm" style={{ color: text }}>{hex}</span>
      </div>
      <div>
        <h5 className="font-bold text-slate-900 text-sm">{name}</h5>
        <p className="text-xs text-slate-400 mt-1">{usage}</p>
      </div>
    </div>
  );
}

function Tagline({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium border border-slate-200">
      "{children}"
    </span>
  );
}

function WireframeBlock({ name, desc, color }: any) {
  return (
    <div className={`p-4 rounded-xl flex items-center justify-between ${color}`}>
      <span className="font-bold">{name}</span>
      <span className="text-sm opacity-80">{desc}</span>
    </div>
  );
}
