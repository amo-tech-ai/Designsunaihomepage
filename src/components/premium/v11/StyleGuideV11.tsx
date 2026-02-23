import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { copyToClipboard } from '../../../utils/clipboard';

interface ColorSwatchProps {
  name: string;
  hex: string;
  usage: string;
  textColor?: string;
}

function ColorSwatch({ name, hex, usage, textColor = '#1A1A1A' }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(hex);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* Color Preview */}
      <div
        className="h-32 rounded-t-lg border border-[#EFE9E4] flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: hex }}
        onClick={handleCopy}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {copied ? (
            <Check className="w-6 h-6" style={{ color: textColor }} />
          ) : (
            <Copy className="w-6 h-6" style={{ color: textColor }} />
          )}
        </div>
      </div>

      {/* Color Info */}
      <div className="bg-white border border-t-0 border-[#EFE9E4] rounded-b-lg p-4">
        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{name}</h3>
        <p className="text-xs font-mono text-[#666666] mb-2">{hex}</p>
        <p className="text-xs text-[#888888] leading-relaxed">{usage}</p>
      </div>
    </motion.div>
  );
}

export function StyleGuideV11() {
  const primaryColors = [
    {
      name: 'Pure White',
      hex: '#FFFFFF',
      usage: 'Primary backgrounds, cards, and content areas',
      textColor: '#1A1A1A'
    },
    {
      name: 'Whisper White',
      hex: '#FEFEFE',
      usage: 'Elevated surfaces, modal backgrounds, overlays',
      textColor: '#1A1A1A'
    },
    {
      name: 'Soft Ivory',
      hex: '#FAFAF9',
      usage: 'Alternative backgrounds, section dividers',
      textColor: '#1A1A1A'
    },
    {
      name: 'Warm Stone',
      hex: '#F5F5F4',
      usage: 'Hover states, disabled backgrounds, subtle contrast',
      textColor: '#1A1A1A'
    },
    {
      name: 'Light Sand',
      hex: '#E7E5E4',
      usage: 'Borders, dividers, subtle separators',
      textColor: '#1A1A1A'
    },
    {
      name: 'Medium Stone',
      hex: '#D6D3D1',
      usage: 'Hover borders, secondary dividers',
      textColor: '#1A1A1A'
    }
  ];

  const accentColors = [
    {
      name: 'Champagne',
      hex: '#F9F6F1',
      usage: 'Subtle highlights, premium backgrounds',
      textColor: '#1A1A1A'
    },
    {
      name: 'Pale Gold',
      hex: '#F0E9DC',
      usage: 'Accent backgrounds, soft emphasis areas',
      textColor: '#1A1A1A'
    },
    {
      name: 'Warm Beige',
      hex: '#E8DCC8',
      usage: 'Secondary accent, warm highlights',
      textColor: '#1A1A1A'
    },
    {
      name: 'Muted Amber',
      hex: '#D4AF77',
      usage: 'Subtle CTAs, refined accents, borders',
      textColor: '#FFFFFF'
    },
    {
      name: 'Soft Gold',
      hex: '#C4964A',
      usage: 'Primary accent for important CTAs',
      textColor: '#FFFFFF'
    },
    {
      name: 'Rich Gold',
      hex: '#B8860B',
      usage: 'Hover states, active elements, emphasis',
      textColor: '#FFFFFF'
    }
  ];

  const textColors = [
    {
      name: 'Charcoal',
      hex: '#292524',
      usage: 'Primary headings, important text',
      textColor: '#FFFFFF'
    },
    {
      name: 'Dark Stone',
      hex: '#57534E',
      usage: 'Body text, main content',
      textColor: '#FFFFFF'
    },
    {
      name: 'Medium Gray',
      hex: '#78716C',
      usage: 'Secondary text, descriptions',
      textColor: '#FFFFFF'
    },
    {
      name: 'Light Gray',
      hex: '#A8A29E',
      usage: 'Tertiary text, metadata, placeholders',
      textColor: '#FFFFFF'
    },
    {
      name: 'Very Light Gray',
      hex: '#D6D3D1',
      usage: 'Disabled text, subtle labels',
      textColor: '#1A1A1A'
    }
  ];

  const functionalColors = [
    {
      name: 'Success Green',
      hex: '#10B981',
      usage: 'Success states, positive indicators, live badges',
      textColor: '#FFFFFF'
    },
    {
      name: 'Success Light',
      hex: '#ECFDF5',
      usage: 'Success background highlights',
      textColor: '#1A1A1A'
    },
    {
      name: 'Warning Orange',
      hex: '#FED7AA',
      usage: 'Warning borders and highlights',
      textColor: '#1A1A1A'
    },
    {
      name: 'Warning Light',
      hex: '#FFF7ED',
      usage: 'Warning background highlights',
      textColor: '#1A1A1A'
    },
    {
      name: 'Error Red',
      hex: '#DC2626',
      usage: 'Error states and critical alerts',
      textColor: '#FFFFFF'
    },
    {
      name: 'Error Light',
      hex: '#FFF1F2',
      usage: 'Error background highlights',
      textColor: '#1A1A1A'
    },
    {
      name: 'Info Blue',
      hex: '#3B82F6',
      usage: 'Information states and process indicators',
      textColor: '#FFFFFF'
    },
    {
      name: 'Info Light',
      hex: '#EFF6FF',
      usage: 'Information background highlights',
      textColor: '#1A1A1A'
    }
  ];

  const gradientExamples = [
    {
      name: 'White to Champagne',
      gradient: 'linear-gradient(135deg, #FFFFFF 0%, #F9F6F1 100%)',
      usage: 'Hero sections, premium content areas'
    },
    {
      name: 'Ivory to White',
      gradient: 'linear-gradient(to bottom, #FAFAF9 0%, #FFFFFF 50%, #FAFAF9 100%)',
      usage: 'Card backgrounds, subtle depth and elevation'
    },
    {
      name: 'Champagne Shimmer',
      gradient: 'linear-gradient(135deg, #F9F6F1 0%, #F0E9DC 50%, #E8DCC8 100%)',
      usage: 'Accent sections, premium highlights'
    },
    {
      name: 'Stone Fade',
      gradient: 'linear-gradient(to right, #FFFFFF 0%, #F5F5F4 100%)',
      usage: 'Horizontal dividers, section transitions'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Header */}
      <section className="bg-[#FDFCFB] border-b border-[#EFE9E4] py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#B45309] font-bold tracking-widest uppercase text-[10px]">
              Version 11 Design System
            </span>
            <h1 className="text-5xl lg:text-6xl font-serif text-[#1A1A1A] mt-4 mb-6">
              Calm Luxury Color Palette
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed">
              A sophisticated color system designed for executive-grade interfaces. Warm neutrals, subtle accents, 
              and purposeful contrast create an atmosphere of understated elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Colors */}
      <section className="py-20 border-b border-[#EFE9E4]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Primary Colors</h2>
            <p className="text-base text-[#666666]">
              Foundation colors used for backgrounds, text, and structural elements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryColors.map((color, i) => (
              <ColorSwatch key={i} {...color} />
            ))}
          </div>
        </div>
      </section>

      {/* Accent Colors */}
      <section className="py-20 bg-[#FDFCFB] border-b border-[#EFE9E4]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Accent Colors</h2>
            <p className="text-base text-[#666666]">
              Warm amber and orange tones for emphasis, CTAs, and interactive elements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accentColors.map((color, i) => (
              <ColorSwatch key={i} {...color} />
            ))}
          </div>
        </div>
      </section>

      {/* Text Colors */}
      <section className="py-20 border-b border-[#EFE9E4]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Text Colors</h2>
            <p className="text-base text-[#666666]">
              Hierarchical text colors for optimal readability and visual hierarchy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {textColors.map((color, i) => (
              <ColorSwatch key={i} {...color} />
            ))}
          </div>
        </div>
      </section>

      {/* Functional Colors */}
      <section className="py-20 bg-[#FDFCFB] border-b border-[#EFE9E4]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Functional Colors</h2>
            <p className="text-base text-[#666666]">
              State-based colors for feedback, alerts, and status indicators.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {functionalColors.map((color, i) => (
              <ColorSwatch key={i} {...color} />
            ))}
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="py-20 border-b border-[#EFE9E4]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Gradient Examples</h2>
            <p className="text-base text-[#666666]">
              Subtle gradients for depth and visual interest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradientExamples.map((gradient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="h-32 rounded-t-lg border border-[#EFE9E4]"
                  style={{ background: gradient.gradient }}
                />
                <div className="bg-white border border-t-0 border-[#EFE9E4] rounded-b-lg p-4">
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{gradient.name}</h3>
                  <p className="text-xs text-[#888888]">{gradient.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Examples */}
      <section className="py-20 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Typography with Color</h2>
            <p className="text-base text-[#666666]">
              How colors work with different text styles and hierarchies.
            </p>
          </div>

          <div className="space-y-8 bg-white border border-[#EFE9E4] rounded-lg p-8">
            <div>
              <h1 className="text-5xl font-serif text-[#1A1A1A] mb-2">
                Display Heading
              </h1>
              <p className="text-sm font-mono text-[#888888]">
                text-5xl font-serif text-[#1A1A1A]
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-[#1A1A1A] mb-2">
                Section Heading
              </h2>
              <p className="text-sm font-mono text-[#888888]">
                text-3xl font-serif text-[#1A1A1A]
              </p>
            </div>

            <div>
              <span className="text-[#B45309] font-bold tracking-widest uppercase text-[10px] block mb-2">
                Eyebrow Label
              </span>
              <p className="text-sm font-mono text-[#888888]">
                text-[#B45309] font-bold tracking-widest uppercase text-[10px]
              </p>
            </div>

            <div>
              <p className="text-lg text-[#666666] leading-relaxed mb-2">
                Body text uses a medium gray for optimal readability. This creates a comfortable reading experience without harsh contrast.
              </p>
              <p className="text-sm font-mono text-[#888888]">
                text-lg text-[#666666] leading-relaxed
              </p>
            </div>

            <div>
              <p className="text-sm text-[#888888] mb-2">
                Secondary information and metadata uses lighter gray.
              </p>
              <p className="text-sm font-mono text-[#888888]">
                text-sm text-[#888888]
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-[#F59E0B] transition-colors duration-300">
                Primary Button
              </button>
              <button className="px-6 py-3 bg-[#F59E0B] text-white text-sm font-medium hover:bg-[#B45309] transition-colors duration-300">
                Accent Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Checkered CTA Pattern */}
      <section className="py-20 border-t border-[#EFE9E4]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Checkered CTA Pattern</h2>
            <p className="text-base text-[#666666]">
              Premium dark pattern with subtle grid overlay for high-impact CTAs.
            </p>
          </div>

          {/* Live Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl"
            style={{
              background: '#1a1a1a',
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          >
            <div className="relative z-10 py-20 px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-[#FAFAF9] mb-4">
                Ready to build your<br />AI-powered future?
              </h2>
              <p className="text-base text-[#D6D3D1] mb-8 max-w-2xl mx-auto">
                Join innovative teams transforming their operations with production-ready AI systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-[#C4964A] text-white font-medium rounded-lg hover:bg-[#B8860B] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Start Your Project →
                </button>
                <button className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
                <div>
                  <div className="text-4xl font-serif text-white mb-1">25+</div>
                  <div className="text-xs uppercase tracking-wider text-[#A8A29E]">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-white mb-1">6+</div>
                  <div className="text-xs uppercase tracking-wider text-[#A8A29E]">Agent Systems</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-white mb-1">$500M+</div>
                  <div className="text-xs uppercase tracking-wider text-[#A8A29E]">Value Enabled</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Example */}
          <div className="mt-8 bg-[#292524] rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
            <pre className="text-[#D6D3D1]">
{`<div 
  className="relative overflow-hidden rounded-xl"
  style={{
    background: '#1a1a1a',
    backgroundImage: \`
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    \`,
    backgroundSize: '80px 80px'
  }}
>
  <div className="relative z-10 py-20 px-8 text-center">
    <h2 className="text-5xl font-serif text-[#FAFAF9]">
      Ready to build your AI-powered future?
    </h2>
    <p className="text-base text-[#D6D3D1]">
      Join innovative teams transforming their operations...
    </p>
    
    {/* Gold CTA Button */}
    <button className="bg-[#C4964A] hover:bg-[#B8860B] text-white">
      Start Your Project →
    </button>
    
    {/* Outline Button */}
    <button className="border border-white/20 hover:bg-white/10 text-white">
      Schedule a Call
    </button>
  </div>
</div>`}
            </pre>
          </div>

          {/* Color Breakdown */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white border border-[#E7E5E4] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#292524] mb-4">Color Breakdown</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-[#57534E]">Background</span>
                  <code className="font-mono text-xs bg-[#FAFAF9] px-2 py-1 rounded">#1A1A1A</code>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#57534E]">Grid Lines</span>
                  <code className="font-mono text-xs bg-[#FAFAF9] px-2 py-1 rounded">rgba(255,255,255,0.02)</code>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#57534E]">Heading</span>
                  <code className="font-mono text-xs bg-[#FAFAF9] px-2 py-1 rounded">#FAFAF9</code>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#57534E]">Body Text</span>
                  <code className="font-mono text-xs bg-[#FAFAF9] px-2 py-1 rounded">#D6D3D1</code>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#57534E]">Gold CTA</span>
                  <code className="font-mono text-xs bg-[#FAFAF9] px-2 py-1 rounded">#C4964A</code>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#57534E]">Gold Hover</span>
                  <code className="font-mono text-xs bg-[#FAFAF9] px-2 py-1 rounded">#B8860B</code>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#E7E5E4] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#292524] mb-4">Usage Tips</h3>
              <ul className="space-y-2 text-sm text-[#57534E]">
                <li>• Use for high-impact final CTAs</li>
                <li>• Grid size: 80px creates subtle luxury</li>
                <li>• White text on dark: #FAFAF9 for headings</li>
                <li>• Lighter text: #D6D3D1 for descriptions</li>
                <li>• Gold button stands out beautifully</li>
                <li>• Border button for secondary action</li>
                <li>• Add stats for social proof</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 border-t border-[#EFE9E4]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Usage Guidelines</h2>
            <p className="text-base text-[#666666]">
              Best practices for applying the Calm Luxury color palette.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FDFCFB] border border-[#EFE9E4] rounded-lg p-6">
              <div className="text-2xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Do's</h3>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li>• Use warm neutrals as the foundation</li>
                <li>• Apply amber/orange for intentional emphasis</li>
                <li>• Maintain generous white space</li>
                <li>• Keep transitions smooth (300ms)</li>
                <li>• Use functional colors sparingly for states</li>
                <li>• Test color contrast for accessibility</li>
              </ul>
            </div>

            <div className="bg-[#FDFCFB] border border-[#EFE9E4] rounded-lg p-6">
              <div className="text-2xl mb-3">✗</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">Don'ts</h3>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li>• Avoid saturated or vibrant colors</li>
                <li>• Don't use pure black (#000000)</li>
                <li>• Avoid harsh color transitions</li>
                <li>• Don't overuse accent colors</li>
                <li>• Avoid mixing cool and warm tones</li>
                <li>• Don't use functional colors decoratively</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <p className="text-sm text-[#D1C7BD]">
            Version 11 • Calm Luxury Design System • Last updated January 15, 2026
          </p>
        </div>
      </section>

    </main>
  );
}