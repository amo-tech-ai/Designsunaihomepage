import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import { copyToClipboard as safeCopyToClipboard } from '../../../utils/clipboard';

export function StyleGuideV11A() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedColor(text);
      setTimeout(() => setCopiedColor(null), 2000);
    }
  };

  // Foundation: Whites & Neutrals
  const foundationColors = [
    {
      name: 'Pure White',
      hex: '#FFFFFF',
      usage: 'Primary page backgrounds, main content areas, cards',
      avoidUsage: 'Avoid for text (no contrast)',
      textColor: '#1A1A1A'
    },
    {
      name: 'Snow',
      hex: '#FEFEFE',
      usage: 'Elevated surfaces, modals, overlays, dropdowns',
      avoidUsage: 'Do not use if no elevation needed',
      textColor: '#1A1A1A'
    },
    {
      name: 'Porcelain',
      hex: '#FBFBFB',
      usage: 'Alternative backgrounds, subtle section dividers',
      avoidUsage: 'Avoid on small UI elements (too subtle)',
      textColor: '#1A1A1A'
    },
    {
      name: 'Whisper',
      hex: '#F8F8F8',
      usage: 'Hover states, table row alternation, disabled inputs',
      avoidUsage: 'Do not use for active/selected states',
      textColor: '#1A1A1A'
    },
    {
      name: 'Frost',
      hex: '#F3F3F3',
      usage: 'Disabled backgrounds, inactive tabs, skeleton loaders',
      avoidUsage: 'Avoid for interactive elements',
      textColor: '#1A1A1A'
    },
    {
      name: 'Ash',
      hex: '#E8E8E8',
      usage: 'Default borders, dividers, subtle separators',
      avoidUsage: 'Do not use for emphasis or active borders',
      textColor: '#1A1A1A'
    },
    {
      name: 'Stone',
      hex: '#D4D4D4',
      usage: 'Strong borders, focus rings, active dividers',
      avoidUsage: 'Too strong for subtle UI elements',
      textColor: '#1A1A1A'
    },
    {
      name: 'Pewter',
      hex: '#A3A3A3',
      usage: 'Disabled borders, inactive icons',
      avoidUsage: 'Never for body text (poor contrast)',
      textColor: '#FFFFFF'
    }
  ];

  // Text Colors
  const textColors = [
    {
      name: 'Ink',
      hex: '#1A1A1A',
      usage: 'Primary headings, important content, body text',
      avoidUsage: 'Don\'t use on dark backgrounds',
      contrast: 'WCAG AAA'
    },
    {
      name: 'Slate',
      hex: '#4A4A4A',
      usage: 'Secondary text, descriptions, supporting content',
      avoidUsage: 'Avoid for critical information',
      contrast: 'WCAG AA'
    },
    {
      name: 'Gray',
      hex: '#6B6B6B',
      usage: 'Tertiary text, captions, metadata, timestamps',
      avoidUsage: 'Not for primary content',
      contrast: 'WCAG AA'
    },
    {
      name: 'Silver',
      hex: '#9E9E9E',
      usage: 'Placeholder text, disabled text, subtle labels',
      avoidUsage: 'Never for interactive text',
      contrast: 'AA Large only'
    }
  ];

  // Accent Colors: Warm Taupe
  const accentColors = [
    {
      name: 'Taupe 50',
      hex: '#F5F2EF',
      usage: 'Subtle highlights, accent backgrounds, premium sections',
      avoidUsage: 'Don\'t use for CTAs (too light)',
      textColor: '#1A1A1A'
    },
    {
      name: 'Taupe 100',
      hex: '#E8E2DB',
      usage: 'Hover backgrounds, soft emphasis areas',
      avoidUsage: 'Not for high-contrast needs',
      textColor: '#1A1A1A'
    },
    {
      name: 'Taupe 200',
      hex: '#D4C9BD',
      usage: 'Accent borders, subtle CTAs, secondary buttons',
      avoidUsage: 'Avoid for primary actions',
      textColor: '#1A1A1A'
    },
    {
      name: 'Taupe 400',
      hex: '#C4B5A6',
      usage: 'Primary accent, main CTAs, links, focus states',
      avoidUsage: 'Don\'t overuse (reserve for actions)',
      textColor: '#1A1A1A'
    },
    {
      name: 'Taupe 500',
      hex: '#A89886',
      usage: 'Hover states on CTAs, active elements',
      avoidUsage: 'Not for default states',
      textColor: '#FFFFFF'
    },
    {
      name: 'Taupe 600',
      hex: '#8C7D6B',
      usage: 'Pressed states, strong emphasis',
      avoidUsage: 'Too dark for frequent use',
      textColor: '#FFFFFF'
    }
  ];

  // Status Colors
  const statusColors = [
    {
      state: 'Success',
      foreground: '#059669',
      background: '#ECFDF5',
      border: '#A7F3D0',
      usage: 'Completed actions, live status, positive indicators',
      avoidUsage: 'Don\'t use decoratively'
    },
    {
      state: 'Warning',
      foreground: '#D97706',
      background: '#FFFBEB',
      border: '#FDE68A',
      usage: 'Caution alerts, pending states, attention needed',
      avoidUsage: 'Not for errors'
    },
    {
      state: 'Error',
      foreground: '#DC2626',
      background: '#FEF2F2',
      border: '#FECACA',
      usage: 'Failed actions, critical alerts, validation errors',
      avoidUsage: 'Never for warnings'
    },
    {
      state: 'Info',
      foreground: '#0284C7',
      background: '#F0F9FF',
      border: '#BAE6FD',
      usage: 'Informational messages, tooltips, process indicators',
      avoidUsage: 'Not for decorative purposes'
    }
  ];

  // Gradients
  const gradients = [
    {
      name: 'White Elevation',
      gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FBFBFB 100%)',
      usage: 'Card depth, modal backgrounds, elevated surfaces',
      avoidUsage: 'Don\'t use on flat designs'
    },
    {
      name: 'Subtle Warmth',
      gradient: 'linear-gradient(135deg, #FFFFFF 0%, #F5F2EF 100%)',
      usage: 'Premium sections, hero backgrounds, accent areas',
      avoidUsage: 'Avoid overuse (1-2 per page max)'
    },
    {
      name: 'Neutral Fade',
      gradient: 'linear-gradient(to right, #FFFFFF 0%, #F8F8F8 50%, #FFFFFF 100%)',
      usage: 'Horizontal dividers, section transitions',
      avoidUsage: 'Not for vertical layouts'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F2EF 100%)'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#4A4A4A] mb-6 border border-[#E8E8E8]">
              V11A — Architectural Edition
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-6">
              Calm, White-Forward<br />Color System
            </h1>
            <p className="text-lg text-[#4A4A4A] mb-8 max-w-2xl mx-auto leading-relaxed">
              A minimal, executive-grade palette for modern AI SaaS products.
              Designed for clarity, focus, and timeless elegance.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-[#6B6B6B]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C4B5A6]" />
                <span>85% Neutrals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C4B5A6]" />
                <span>Minimal Accents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C4B5A6]" />
                <span>WCAG AA Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foundation Whites & Neutrals */}
      <section className="py-20 border-b border-[#E8E8E8]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Foundation: Whites & Neutrals</h2>
            <p className="text-base text-[#4A4A4A] mb-2">
              Eight carefully calibrated whites and grays form the foundation. These cover 85-90% of your interface.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Click any color to copy HEX code
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationColors.map((color, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => copyToClipboard(color.hex)}
                className="group text-left"
              >
                <div 
                  className="h-32 rounded-t-lg border border-[#E8E8E8] relative overflow-hidden transition-all duration-300 group-hover:border-[#C4B5A6]"
                  style={{ background: color.hex }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                    {copiedColor === color.hex ? (
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <Check className="w-4 h-4 text-[#059669]" />
                      </div>
                    ) : (
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <Copy className="w-4 h-4 text-[#4A4A4A]" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-white border border-t-0 border-[#E8E8E8] rounded-b-lg p-4 group-hover:border-[#C4B5A6] transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-[#1A1A1A]">{color.name}</h3>
                    <code className="text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] px-2 py-1 rounded">
                      {color.hex}
                    </code>
                  </div>
                  <p className="text-xs text-[#4A4A4A] mb-2 leading-relaxed">
                    <strong>Use:</strong> {color.usage}
                  </p>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed">
                    <strong>Avoid:</strong> {color.avoidUsage}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Text Colors */}
      <section className="py-20 bg-[#FBFBFB] border-b border-[#E8E8E8]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Text Colors</h2>
            <p className="text-base text-[#4A4A4A] mb-2">
              Four-level text hierarchy for clear information architecture. All meet WCAG AA standards.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Click to copy HEX code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {textColors.map((color, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => copyToClipboard(color.hex)}
                className="group text-left"
              >
                <div className="bg-white border border-[#E8E8E8] rounded-lg p-6 group-hover:border-[#C4B5A6] transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-[#1A1A1A]">{color.name}</h3>
                    <code className="text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] px-2 py-1 rounded">
                      {color.hex}
                    </code>
                  </div>
                  
                  <div 
                    className="text-4xl font-serif mb-4"
                    style={{ color: color.hex }}
                  >
                    Aa
                  </div>

                  <p className="text-xs text-[#4A4A4A] mb-2">
                    <strong>Use:</strong> {color.usage}
                  </p>
                  <p className="text-xs text-[#9E9E9E] mb-3">
                    <strong>Avoid:</strong> {color.avoidUsage}
                  </p>
                  
                  <div className="inline-block px-2 py-1 bg-[#F5F2EF] rounded text-[10px] font-medium text-[#6B6B6B]">
                    {color.contrast}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Text Hierarchy Example */}
          <div className="mt-12 bg-white border border-[#E8E8E8] rounded-lg p-8">
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6">Text Hierarchy in Action</h3>
            <div className="space-y-4">
              <h1 className="text-4xl font-serif text-[#1A1A1A]">
                Primary Heading — Ink (#1A1A1A)
              </h1>
              <p className="text-lg text-[#4A4A4A]">
                Body text uses Slate for comfortable reading without harsh contrast. This is ideal for paragraphs, descriptions, and main content areas.
              </p>
              <p className="text-sm text-[#6B6B6B]">
                Tertiary text in Gray works perfectly for captions, metadata, timestamps, and supporting information that shouldn't compete with primary content.
              </p>
              <p className="text-xs text-[#9E9E9E]">
                Silver is reserved for placeholder text, disabled states, and the most subtle labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accent Colors */}
      <section className="py-20 border-b border-[#E8E8E8]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Accent Colors: Warm Taupe</h2>
            <p className="text-base text-[#4A4A4A] mb-2">
              A single accent family provides warmth without noise. Use sparingly for CTAs, links, and emphasis.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Click to copy HEX code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accentColors.map((color, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => copyToClipboard(color.hex)}
                className="group text-left"
              >
                <div 
                  className="h-32 rounded-t-lg border border-[#E8E8E8] relative overflow-hidden transition-all duration-300 group-hover:border-[#C4B5A6]"
                  style={{ background: color.hex }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                    {copiedColor === color.hex ? (
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <Check className="w-4 h-4 text-[#059669]" />
                      </div>
                    ) : (
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <Copy className="w-4 h-4 text-[#4A4A4A]" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-white border border-t-0 border-[#E8E8E8] rounded-b-lg p-4 group-hover:border-[#C4B5A6] transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-[#1A1A1A]">{color.name}</h3>
                    <code className="text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] px-2 py-1 rounded">
                      {color.hex}
                    </code>
                  </div>
                  <p className="text-xs text-[#4A4A4A] mb-2 leading-relaxed">
                    <strong>Use:</strong> {color.usage}
                  </p>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed">
                    <strong>Avoid:</strong> {color.avoidUsage}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* CTA Examples */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Primary Actions</h3>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-[#C4B5A6] text-white font-medium rounded-lg hover:bg-[#A89886] transition-colors duration-300">
                  Primary Button
                </button>
                <button className="w-full px-6 py-3 bg-transparent text-[#C4B5A6] font-medium rounded-lg border border-[#C4B5A6] hover:bg-[#F5F2EF] transition-colors duration-300">
                  Secondary Button
                </button>
                <button className="w-full px-6 py-3 bg-[#F5F2EF] text-[#1A1A1A] font-medium rounded-lg hover:bg-[#E8E2DB] transition-colors duration-300">
                  Tertiary Button
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-lg p-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">Usage Rules</h3>
              <ul className="space-y-3 text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>Use Taupe 400 (#C4B5A6) for primary CTAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>Reserve accent for interactive elements only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>Use lighter shades for backgrounds, not CTAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Don't use accent colors decoratively</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Avoid accent text in body paragraphs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Never use multiple accents per component</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Status Colors */}
      <section className="py-20 bg-[#FBFBFB] border-b border-[#E8E8E8]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Status Colors</h2>
            <p className="text-base text-[#4A4A4A] mb-2">
              Muted, enterprise-safe status colors. Use only for UI feedback, never decoratively.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Each includes foreground, background, and border variants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {statusColors.map((status, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E8E8E8] rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">{status.state}</h3>
                
                {/* Color Swatches */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <button
                    onClick={() => copyToClipboard(status.foreground)}
                    className="group"
                  >
                    <div 
                      className="h-16 rounded-lg border border-[#E8E8E8] mb-2 flex items-center justify-center relative overflow-hidden"
                      style={{ background: status.foreground }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                        {copiedColor === status.foreground ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                    <p className="text-[10px] text-[#6B6B6B] font-medium">Foreground</p>
                    <code className="text-[9px] font-mono text-[#9E9E9E]">{status.foreground}</code>
                  </button>

                  <button
                    onClick={() => copyToClipboard(status.background)}
                    className="group"
                  >
                    <div 
                      className="h-16 rounded-lg border border-[#E8E8E8] mb-2 flex items-center justify-center relative overflow-hidden"
                      style={{ background: status.background }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                        {copiedColor === status.background ? (
                          <Check className="w-4 h-4 text-[#4A4A4A]" />
                        ) : (
                          <Copy className="w-4 h-4 text-[#4A4A4A]" />
                        )}
                      </div>
                    </div>
                    <p className="text-[10px] text-[#6B6B6B] font-medium">Background</p>
                    <code className="text-[9px] font-mono text-[#9E9E9E]">{status.background}</code>
                  </button>

                  <button
                    onClick={() => copyToClipboard(status.border)}
                    className="group"
                  >
                    <div 
                      className="h-16 rounded-lg border-2 mb-2 flex items-center justify-center relative overflow-hidden"
                      style={{ 
                        borderColor: status.border,
                        background: status.background
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                        {copiedColor === status.border ? (
                          <Check className="w-4 h-4 text-[#4A4A4A]" />
                        ) : (
                          <Copy className="w-4 h-4 text-[#4A4A4A]" />
                        )}
                      </div>
                    </div>
                    <p className="text-[10px] text-[#6B6B6B] font-medium">Border</p>
                    <code className="text-[9px] font-mono text-[#9E9E9E]">{status.border}</code>
                  </button>
                </div>

                {/* Usage */}
                <div className="space-y-2 text-xs">
                  <p className="text-[#4A4A4A]">
                    <strong>Use:</strong> {status.usage}
                  </p>
                  <p className="text-[#9E9E9E]">
                    <strong>Avoid:</strong> {status.avoidUsage}
                  </p>
                </div>

                {/* Example Badge */}
                <div 
                  className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ 
                    color: status.foreground,
                    background: status.background,
                    border: `1px solid ${status.border}`
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: status.foreground }} />
                  {status.state} Badge
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="py-20 border-b border-[#E8E8E8]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Subtle Gradients</h2>
            <p className="text-base text-[#4A4A4A]">
              Optional gradients for depth and premium feel. Use sparingly (1-2 per page maximum).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gradients.map((gradient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div
                  className="h-40 rounded-t-lg border border-[#E8E8E8]"
                  style={{ background: gradient.gradient }}
                />
                <div className="bg-white border border-t-0 border-[#E8E8E8] rounded-b-lg p-4">
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{gradient.name}</h3>
                  <p className="text-xs text-[#4A4A4A] mb-2">
                    <strong>Use:</strong> {gradient.usage}
                  </p>
                  <p className="text-xs text-[#9E9E9E]">
                    <strong>Avoid:</strong> {gradient.avoidUsage}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA Pattern */}
      <section className="py-20 bg-[#FBFBFB] border-b border-[#E8E8E8]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Dark CTA Pattern</h2>
            <p className="text-base text-[#4A4A4A] mb-2">
              High-impact hero CTA section with dark checkered grid background and warm amber accent.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Reserved for hero sections and high-intent conversion moments only.
            </p>
          </div>

          {/* Live Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div 
              className="relative overflow-hidden rounded-lg"
              style={{
                background: '#1A1A1A'
              }}
            >
              {/* Checkered Grid Pattern */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                  backgroundSize: '80px 80px',
                  opacity: 0.1
                }}
              />

              {/* Content */}
              <div className="relative z-10 py-20 px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
                  Ready to build your<br />AI-powered future?
                </h2>
                <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto">
                  Join innovative teams transforming their operations with production-ready AI systems.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  {/* Primary CTA */}
                  <button className="px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all duration-300 flex items-center justify-center gap-3 group min-w-[240px]">
                    Start Your Project
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  
                  {/* Secondary CTA */}
                  <button className="px-10 py-5 border border-white/20 bg-white/5 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 min-w-[240px]">
                    Schedule a Call
                  </button>
                </div>

                {/* Stats Bar */}
                <div className="pt-12 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-serif text-white mb-2">25+</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-serif text-white mb-2">6+</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Agent Systems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-serif text-white mb-2">$500M+</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Value Enabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pattern Breakdown */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Background Pattern */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Background Pattern</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#1A1A1A]">Base Color</span>
                    <button
                      onClick={() => copyToClipboard('#1A1A1A')}
                      className="px-2 py-1 text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] rounded hover:bg-[#E8E8E8] transition-colors"
                    >
                      {copiedColor === '#1A1A1A' ? '✓ Copied' : '#1A1A1A'}
                    </button>
                  </div>
                  <div className="h-12 rounded border border-[#E8E8E8]" style={{ background: '#1A1A1A' }} />
                  <p className="text-xs text-[#6B6B6B] mt-1">Dark charcoal base (Ink from text palette)</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-[#1A1A1A] block mb-2">Grid Pattern</span>
                  <div 
                    className="h-24 rounded border border-[#E8E8E8]"
                    style={{
                      background: '#1A1A1A',
                      backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                      backgroundSize: '80px 80px',
                      opacity: 0.3
                    }}
                  />
                  <p className="text-xs text-[#6B6B6B] mt-1">80px × 80px grid, white at 10% opacity</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-[#4A4A4A]">
                  <strong>Use for:</strong> Hero CTAs, final conversion sections, high-intent moments
                </p>
                <p className="text-[#9E9E9E]">
                  <strong>Avoid:</strong> Overuse (max 1 per page), small sections, repeated patterns
                </p>
              </div>
            </div>

            {/* Button Colors */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Button Colors</h3>
              
              <div className="space-y-6">
                {/* Primary CTA */}
                <div>
                  <span className="text-sm font-medium text-[#1A1A1A] block mb-2">Primary CTA</span>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6B6B6B]">Default</span>
                      <button
                        onClick={() => copyToClipboard('#F59E0B')}
                        className="px-2 py-1 text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] rounded hover:bg-[#E8E8E8] transition-colors"
                      >
                        {copiedColor === '#F59E0B' ? '✓ Copied' : '#F59E0B'}
                      </button>
                    </div>
                    <div className="h-12 rounded flex items-center justify-center text-[#1A1A1A] font-bold" style={{ background: '#F59E0B' }}>
                      Warm Amber
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6B6B6B]">Hover</span>
                      <button
                        onClick={() => copyToClipboard('#FCD34D')}
                        className="px-2 py-1 text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] rounded hover:bg-[#E8E8E8] transition-colors"
                      >
                        {copiedColor === '#FCD34D' ? '✓ Copied' : '#FCD34D'}
                      </button>
                    </div>
                    <div className="h-12 rounded flex items-center justify-center text-[#1A1A1A] font-bold" style={{ background: '#FCD34D' }}>
                      Lighter Amber
                    </div>
                  </div>
                </div>

                {/* Secondary CTA */}
                <div>
                  <span className="text-sm font-medium text-[#1A1A1A] block mb-2">Secondary CTA</span>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6B6B6B]">Default</span>
                      <code className="px-2 py-1 text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] rounded">
                        white/20
                      </code>
                    </div>
                    <div 
                      className="h-12 rounded flex items-center justify-center text-white font-bold"
                      style={{ 
                        background: '#1A1A1A',
                        border: '2px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      Ghost Style
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6B6B6B]">Hover</span>
                      <code className="px-2 py-1 text-xs font-mono text-[#6B6B6B] bg-[#F8F8F8] rounded">
                        white/10
                      </code>
                    </div>
                    <div 
                      className="h-12 rounded flex items-center justify-center text-white font-bold"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      Subtle Fill
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography on Dark */}
          <div className="bg-white border border-[#E8E8E8] rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Typography on Dark Backgrounds</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <span className="text-sm font-medium text-[#1A1A1A] block mb-3">Headline</span>
                <div 
                  className="h-32 rounded border border-[#E8E8E8] flex items-center justify-center p-4"
                  style={{ background: '#1A1A1A' }}
                >
                  <div className="text-2xl font-serif text-white text-center leading-tight">
                    Build Your Future
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <button
                    onClick={() => copyToClipboard('#FFFFFF')}
                    className="text-xs font-mono text-[#6B6B6B] hover:text-[#1A1A1A]"
                  >
                    {copiedColor === '#FFFFFF' ? '✓ Copied: #FFFFFF' : 'Color: #FFFFFF'}
                  </button>
                  <p className="text-xs text-[#9E9E9E]">Pure white for maximum impact</p>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-[#1A1A1A] block mb-3">Subtext</span>
                <div 
                  className="h-32 rounded border border-[#E8E8E8] flex items-center justify-center p-4"
                  style={{ background: '#1A1A1A' }}
                >
                  <div className="text-sm text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Join innovative teams transforming operations
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <code className="text-xs font-mono text-[#6B6B6B]">
                    white/70 (70% opacity)
                  </code>
                  <p className="text-xs text-[#9E9E9E]">Muted for supporting text</p>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-[#1A1A1A] block mb-3">Labels</span>
                <div 
                  className="h-32 rounded border border-[#E8E8E8] flex items-center justify-center p-4"
                  style={{ background: '#1A1A1A' }}
                >
                  <div className="text-[10px] uppercase tracking-widest text-center font-bold" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    Projects Delivered
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <code className="text-xs font-mono text-[#6B6B6B]">
                    white/60 (60% opacity)
                  </code>
                  <p className="text-xs text-[#9E9E9E]">Subtle labels and metadata</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#F5F2EF] rounded-lg">
              <p className="text-sm text-[#4A4A4A]">
                <strong>WCAG Compliance:</strong> All text colors meet AA standards on #1A1A1A background. White at 100% (AAA), white/70 (AA), white/60 (AA Large).
              </p>
            </div>
          </div>

          {/* Code Implementation */}
          <div className="bg-[#1A1A1A] rounded-lg p-6 overflow-x-auto mb-8">
            <pre className="text-sm text-white font-mono leading-relaxed">
{`{/* Dark CTA Pattern */}
<section 
  className="py-32 bg-[#1A1A1A] relative overflow-hidden"
>
  {/* Checkered Grid */}
  <div 
    className="absolute inset-0 pointer-events-none opacity-10"
    style={{
      backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }}
  />

  <div className="relative z-10 container mx-auto px-6 text-center">
    {/* Headline: Pure White */}
    <h2 className="text-5xl font-serif text-white mb-4">
      Ready to build your AI-powered future?
    </h2>
    
    {/* Subtext: White 70% */}
    <p className="text-base text-white/70 mb-8">
      Join innovative teams transforming operations.
    </p>
    
    {/* Primary CTA: Warm Amber */}
    <button className="px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all">
      Start Your Project
    </button>
    
    {/* Secondary CTA: Ghost */}
    <button className="px-10 py-5 border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">
      Schedule a Call
    </button>
  </div>
</section>`}
            </pre>
          </div>

          {/* Usage Rules */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* DO's */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-6">
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-[#059669]">✓</span>
                When to Use Dark CTA
              </h3>
              <ul className="space-y-3 text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>Hero section final CTA (bottom of home page)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>High-intent conversion moments (pricing page bottom)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>Final call-to-action after long-form content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>80px × 80px grid pattern at 10% white opacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>Warm amber (#F59E0B) for primary CTA only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <span>Ghost secondary button (white/20 border, white/10 hover)</span>
                </li>
              </ul>
            </div>

            {/* DON'Ts */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-6">
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-[#DC2626]">✗</span>
                When NOT to Use
              </h3>
              <ul className="space-y-3 text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Multiple times per page (maximum 1 dark CTA section)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Mid-page sections (use light backgrounds instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Small UI components or cards (too heavy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Dashboard or CRM interfaces (reserve for marketing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Do not change grid size (always 80px × 80px)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <span>Do not use taupe accent on dark background (use amber)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 bg-[#FBFBFB]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Usage Guidelines</h2>
            <p className="text-base text-[#4A4A4A]">
              Principles for implementing this calm, architectural system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* DO's */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <span className="text-[#059669]">✓</span>
                Do's
              </h3>
              <ul className="space-y-4 text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <div>
                    <strong>Use whites generously</strong>
                    <p className="text-[#6B6B6B] mt-1">Default to Pure White (#FFFFFF) for 80%+ of backgrounds. Layer whites for subtle depth.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <div>
                    <strong>Reserve accents for actions</strong>
                    <p className="text-[#6B6B6B] mt-1">Use Taupe accent only for buttons, links, and interactive elements.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <div>
                    <strong>Maintain clear hierarchy</strong>
                    <p className="text-[#6B6B6B] mt-1">Use the 4-level text system: Ink → Slate → Gray → Silver.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <div>
                    <strong>Test contrast ratios</strong>
                    <p className="text-[#6B6B6B] mt-1">Always verify WCAG AA compliance for text on backgrounds.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <div>
                    <strong>Embrace white space</strong>
                    <p className="text-[#6B6B6B] mt-1">Let content breathe. More padding and margins than you think.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#059669] mt-0.5">✓</span>
                  <div>
                    <strong>Use status colors functionally</strong>
                    <p className="text-[#6B6B6B] mt-1">Success/Warning/Error only for UI feedback, never decoration.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* DON'Ts */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <span className="text-[#DC2626]">✗</span>
                Don'ts
              </h3>
              <ul className="space-y-4 text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <div>
                    <strong>Avoid pure black</strong>
                    <p className="text-[#6B6B6B] mt-1">Never use #000000. Use Ink (#1A1A1A) for softer, more refined text.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <div>
                    <strong>Don't overuse accents</strong>
                    <p className="text-[#6B6B6B] mt-1">Accent colors should appear in ~5% of UI. Less is more.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <div>
                    <strong>Avoid harsh transitions</strong>
                    <p className="text-[#6B6B6B] mt-1">No instant color changes. Use 300ms transitions minimum.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <div>
                    <strong>Avoid unnecessary color</strong>
                    <p className="text-[#6B6B6B] mt-1">If white + gray works, don't add accent. Default to neutrals.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <div>
                    <strong>Avoid multiple gradients</strong>
                    <p className="text-[#6B6B6B] mt-1">Maximum 1-2 gradients per page. They should feel rare.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC2626] mt-0.5">✗</span>
                  <div>
                    <strong>Never use status decoratively</strong>
                    <p className="text-[#6B6B6B] mt-1">Green is not a design accent. It means success. Same for all status colors.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="mt-12 bg-white border border-[#E8E8E8] rounded-lg p-8">
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6">Quick Reference Formula</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-serif text-[#1A1A1A] mb-2">85%</div>
                <p className="text-sm text-[#4A4A4A]">Whites & Neutrals</p>
                <p className="text-xs text-[#6B6B6B] mt-1">Foundation colors</p>
              </div>
              <div>
                <div className="text-5xl font-serif text-[#1A1A1A] mb-2">10%</div>
                <p className="text-sm text-[#4A4A4A]">Accent Elements</p>
                <p className="text-xs text-[#6B6B6B] mt-1">CTAs, links, focus</p>
              </div>
              <div>
                <div className="text-5xl font-serif text-[#1A1A1A] mb-2">5%</div>
                <p className="text-sm text-[#4A4A4A]">Status Colors</p>
                <p className="text-xs text-[#6B6B6B] mt-1">Feedback only</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#F5F2EF] rounded-lg text-center">
              <p className="text-base text-[#1A1A1A] font-medium">
                The Calm Formula: More white space + Less color = Greater impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Snippets */}
      <section className="py-20 border-t border-[#E8E8E8]">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-3">Implementation</h2>
            <p className="text-base text-[#4A4A4A]">
              Copy-paste ready CSS custom properties for your design system.
            </p>
          </div>

          <div className="bg-[#1A1A1A] rounded-lg p-8 overflow-x-auto">
            <pre className="text-sm text-white font-mono leading-relaxed">
{`:root {
  /* Foundation: Whites & Neutrals */
  --color-white: #FFFFFF;
  --color-snow: #FEFEFE;
  --color-porcelain: #FBFBFB;
  --color-whisper: #F8F8F8;
  --color-frost: #F3F3F3;
  --color-ash: #E8E8E8;
  --color-stone: #D4D4D4;
  --color-pewter: #A3A3A3;

  /* Text Colors */
  --color-ink: #1A1A1A;
  --color-slate: #4A4A4A;
  --color-gray: #6B6B6B;
  --color-silver: #9E9E9E;

  /* Accent: Warm Taupe */
  --color-taupe-50: #F5F2EF;
  --color-taupe-100: #E8E2DB;
  --color-taupe-200: #D4C9BD;
  --color-taupe-400: #C4B5A6;
  --color-taupe-500: #A89886;
  --color-taupe-600: #8C7D6B;

  /* Status Colors */
  --color-success: #059669;
  --color-success-bg: #ECFDF5;
  --color-warning: #D97706;
  --color-warning-bg: #FFFBEB;
  --color-error: #DC2626;
  --color-error-bg: #FEF2F2;
  --color-info: #0284C7;
  --color-info-bg: #F0F9FF;
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}