'use client';

import { motion } from 'motion/react';
import { useSearchParams, Link } from 'react-router-dom';
import { Sparkles, Download, Calendar, Share2, FileText, CheckCircle2 } from 'lucide-react';

export default function ProposalPage() {
  const searchParams = useSearchParams();
  const proposalId = searchParams.get('id');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Confetti Effect (Simple version) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 1 
            }}
            animate={{ 
              y: window.innerHeight + 20,
              opacity: 0,
              rotate: 360
            }}
            transition={{ 
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 0.5,
              ease: "easeIn"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Celebration Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Your Blueprint is Ready! 🎉
          </h1>
          <p className="text-xl text-slate-600">
            We've generated your custom architecture blueprint and proposal.
          </p>
        </motion.div>

        {/* Quick Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Summary</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Project Type</p>
              <p className="text-base font-medium text-slate-900">Real Estate CRM</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Complexity</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                Medium
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Timeline</p>
              <p className="text-base font-medium text-slate-900">8 weeks</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Team Size</p>
              <p className="text-base font-medium text-slate-900">2 Engineers</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Budget</p>
              <p className="text-base font-medium text-slate-900">$45,000</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Delivery Model</p>
              <p className="text-base font-medium text-slate-900">Phased MVP</p>
            </div>
          </div>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            className="w-full h-16 bg-orange-500 text-white rounded-xl flex items-center justify-center gap-3
              hover:bg-orange-600 transition-all hover:shadow-xl hover:scale-[1.02] group mb-4"
          >
            <FileText className="w-6 h-6" />
            <span className="text-xl font-semibold">View Full Proposal</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4"
        >
          <button className="h-12 border border-slate-200 bg-white text-slate-700 rounded-lg 
            flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Download PDF</span>
          </button>
          
          <button className="h-12 border border-slate-200 bg-white text-slate-700 rounded-lg 
            flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Schedule Call</span>
          </button>
          
          <button className="h-12 border border-slate-200 bg-white text-slate-700 rounded-lg 
            flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share Link</span>
          </button>
        </motion.div>

        {/* Preview Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-xl border border-slate-200 p-8"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-4">Proposal Preview</h3>
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <strong className="text-slate-900">Executive Summary:</strong> This proposal outlines 
              the development of a comprehensive CRM system designed specifically for real estate operations, 
              with a focus on automated lead follow-up and real-time conversion tracking.
            </p>
            <p>
              <strong className="text-slate-900">Key Features:</strong> WhatsApp integration for automated 
              messaging, real-time analytics dashboard, lead scoring and prioritization, conversion rate tracking, 
              and seamless integration with existing tools.
            </p>
            <p>
              <strong className="text-slate-900">Timeline:</strong> 8-week phased delivery approach with 
              MVP launch in Week 6, followed by refinement and optimization phase.
            </p>
          </div>
        </motion.div>

        {/* Auto-redirect notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-slate-500">
            Auto-redirecting to full proposal in <span className="font-medium">5 seconds</span>...
          </p>
        </motion.div>

        {/* Proposal ID (for debugging) */}
        {proposalId && (
          <p className="text-center text-xs text-slate-400 mt-4">
            Proposal ID: {proposalId}
          </p>
        )}

        {/* Back to Dashboard */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="text-sm text-slate-500 hover:text-slate-700 underline"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}