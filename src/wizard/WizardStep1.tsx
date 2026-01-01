'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Building2, Globe, CheckCircle2, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function WizardStep1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Jordan Lee',
    company: 'Sun AI Agency',
    website: 'https://sunaiv8.vercel.app'
  });

  const [scanning, setScanning] = useState(false);

  const isValid = formData.name.trim() !== '' && formData.company.trim() !== '';

  useEffect(() => {
    if (formData.website && formData.website.startsWith('http')) {
      setScanning(true);
      // Simulate scanning delay
      const timer = setTimeout(() => setScanning(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [formData.website]);

  const handleContinue = () => {
    if (isValid) {
      // Navigate to step 2
      navigate('/wizard/step2');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Section */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-600">Step 1 of 4</span>
            <span className="text-xs text-slate-400">~3 minutes to complete</span>
          </div>
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '25%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-[660px_1fr] gap-[60px]">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[36px] font-bold text-slate-900 leading-tight">
              Identity & Context
            </h1>
            <p className="text-lg text-slate-600 mt-2 mb-12">
              This helps us tailor your blueprint to your needs.
            </p>

            <div className="space-y-6">
              {/* Input 1: Your Name */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full h-14 pl-12 pr-12 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                  {formData.name && (
                    <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                  )}
                </div>
              </div>

              {/* Input 2: Company Name */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full h-14 pl-12 pr-12 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                  {formData.company && (
                    <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                  )}
                </div>
              </div>

              {/* Input 3: Company Website (Optional) */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Company Website (Optional)
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourcompany.com"
                    className="w-full h-14 pl-12 pr-12 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                  {scanning && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Optional — we can scan your site for tech stack and brand context.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Blueprint Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="sticky top-8 bg-white border border-slate-200 rounded-lg p-8">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Blueprint Preview
              </h3>
              <div className="border-t border-slate-200 pt-6">
                {/* Empty State */}
                <div className="border-2 border-dashed border-slate-200 rounded-lg h-[240px] flex flex-col items-center justify-center text-center p-6">
                  <FileText className="w-[60px] h-[60px] text-slate-300 mb-4" />
                  <p className="text-base text-slate-500 leading-relaxed">
                    Your blueprint preview will appear after you define what you're building in the next step.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 z-50">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="w-[120px]">
              {/* Back button hidden on step 1 */}
            </div>
            <button
              onClick={handleContinue}
              disabled={!isValid}
              className={`
                px-8 py-4 rounded-lg transition-all duration-200
                flex items-center gap-2
                ${isValid
                  ? 'bg-slate-900 text-white hover:scale-[1.02] hover:shadow-lg cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }
              `}
            >
              <span>Continue</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom padding to prevent content hiding under sticky bar */}
      <div className="h-24" />
    </div>
  );
}