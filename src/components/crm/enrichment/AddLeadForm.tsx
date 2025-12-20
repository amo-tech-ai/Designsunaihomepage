import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Typography } from '../../ui/design-system/Typography';
import { Input } from '../../ui/input';
import { Button } from '../../ui/design-system/Button';
import { Card } from '../../ui/design-system/Card';

interface AddLeadFormProps {
  onSubmit: (email: string) => void;
  onCancel: () => void;
}

export function AddLeadForm({ onSubmit, onCancel }: AddLeadFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <Card variant="solid" className="p-8 shadow-2xl border-white/50 bg-white/80 backdrop-blur-xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600 shadow-sm rotate-3">
               <Sparkles className="w-6 h-6" />
            </div>
            <Typography variant="h3" className="font-bold text-slate-900 mb-2 tracking-tight">
              Add New Lead
            </Typography>
            <Typography variant="body" className="text-slate-500 text-sm">
              Enter an email or domain to begin deep enrichment.
            </Typography>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 group">
              <Input 
                placeholder="e.g. jane@fintechco.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all text-center placeholder:text-slate-300 group-hover:bg-white"
                autoFocus
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full h-12 text-base shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all active:scale-[0.98]"
                disabled={!email}
              >
                Start Analysis <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <button 
                type="button" 
                onClick={onCancel}
                className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors py-2 uppercase tracking-wider"
              >
                Cancel
              </button>
            </div>
          </form>
        </Card>
        
        {/* Background Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </motion.div>
    </div>
  );
}
