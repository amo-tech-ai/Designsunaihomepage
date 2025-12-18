import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, Check, ArrowLeft, Download, 
  Send, PenTool, Shield, Calendar, DollarSign 
} from 'lucide-react';
import { cn } from '../ui/design-system/utils';
import { Button } from '../ui/design-system/Button';
import { Card } from '../ui/design-system/Card';
import { Badge } from '../ui/design-system/Badge';

interface ContractGeneratorProps {
  lead: any;
  onBack: () => void;
  onSend: () => void;
}

export function ContractGenerator({ lead, onBack, onSend }: ContractGeneratorProps) {
  const [step, setStep] = useState(1); // 1: Terms, 2: Review, 3: Sent
  const [isSigning, setIsSigning] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <div className="h-6 w-px bg-slate-200" />
          <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            Contract Automation
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Status: {step === 3 ? 'Sent for Signature' : 'Drafting'}
          </span>
          {step === 1 && (
            <Button variant="primary" onClick={() => setStep(2)}>
              Review Agreement
            </Button>
          )}
          {step === 2 && (
            <Button variant="primary" onClick={onSend} leftIcon={<Send className="w-4 h-4" />}>
              Send via DocuSign
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto w-full p-8 flex-1 flex gap-8">
        
        {/* Left: Controls / Terms */}
        <div className="w-1/3 space-y-6">
          <Section title="Project Details" icon={FileText}>
             <div className="space-y-4">
               <InputGroup label="Client Entity" value={lead.companyName} />
               <InputGroup label="Project Name" value="AI Web Application V1" />
               <InputGroup label="Effective Date" value={new Date().toLocaleDateString()} />
             </div>
          </Section>

          <Section title="Payment Terms" icon={DollarSign}>
             <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-3">
                <RadioOption label="50% Upfront / 50% Completion" selected />
                <RadioOption label="Milestone Based (33/33/33)" />
                <RadioOption label="Hourly Retainer" />
             </div>
          </Section>

          <Section title="Timeline" icon={Calendar}>
             <div className="flex gap-2">
               <Badge variant="outline" className="bg-white">4 Weeks</Badge>
               <Badge variant="outline" className="bg-white">6 Weeks</Badge>
               <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">8 Weeks</Badge>
             </div>
          </Section>
        </div>

        {/* Right: Live Preview */}
        <div className="w-2/3">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 min-h-[800px] p-12 relative">
             {/* Document Header */}
             <div className="text-center mb-12 border-b border-slate-100 pb-8">
               <div className="text-2xl font-serif font-bold text-slate-900 mb-2">Master Services Agreement</div>
               <div className="text-sm text-slate-500">Document Ref: #{Math.floor(Math.random() * 10000)}</div>
             </div>

             {/* Document Body */}
             <div className="space-y-8 font-serif text-slate-700 leading-relaxed text-sm">
               <p>
                 This Master Services Agreement ("Agreement") is made effective as of <strong>{new Date().toLocaleDateString()}</strong>, by and between <strong>Sun AI Agency</strong> ("Provider") and <strong>{lead.companyName}</strong> ("Client").
               </p>

               <div>
                 <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">1. Scope of Services</h3>
                 <p>Provider agrees to perform the services described in the attached Statement of Work ("SOW"), specifically the design and development of an <strong>AI Web Application</strong>.</p>
               </div>

               <div>
                 <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">2. Payment Terms</h3>
                 <p>Client agrees to pay Provider a total of <strong>${(lead.budget || 50000).toLocaleString()}</strong>. Payment shall be made as follows: 50% upon execution of this Agreement, and 50% upon final delivery.</p>
               </div>

               <div>
                 <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">3. Intellectual Property</h3>
                 <p>Upon full payment, Provider assigns to Client all right, title, and interest in the deliverables created specifically for Client under this Agreement.</p>
               </div>
             </div>

             {/* Signatures */}
             <div className="mt-20 grid grid-cols-2 gap-12">
               <div className="border-t border-slate-300 pt-4">
                 <div className="font-bold text-slate-900">Sun AI Representative</div>
                 <div className="text-xs text-slate-500 mt-1">Authorized Signature</div>
                 <div className="mt-4 font-handwriting text-2xl text-blue-600 transform -rotate-2">
                    Sarah Connor
                 </div>
               </div>

               <div className="border-t border-slate-300 pt-4 relative">
                 <div className="font-bold text-slate-900">{lead.name}</div>
                 <div className="text-xs text-slate-500 mt-1">Client Signature</div>
                 
                 {/* Sign Action */}
                 <div className="mt-4">
                   {step === 2 && (
                     <div className="absolute -top-4 left-0 w-full h-24 bg-yellow-50/50 border-2 border-dashed border-yellow-300 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider">Client Sign Here</span>
                     </div>
                   )}
                 </div>
               </div>
             </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// --- Subcomponents ---

function Section({ title, icon: Icon, children }: any) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
        <Icon className="w-4 h-4 text-slate-400" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function InputGroup({ label, value }: any) {
  return (
    <div>
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">{label}</label>
      <input 
        type="text" 
        value={value} 
        readOnly 
        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />
    </div>
  );
}

function RadioOption({ label, selected }: any) {
  return (
    <div className={cn(
      "flex items-center gap-3 p-2 rounded cursor-pointer transition-colors",
      selected ? "bg-blue-50" : "hover:bg-slate-50"
    )}>
      <div className={cn(
        "w-4 h-4 rounded-full border flex items-center justify-center",
        selected ? "border-blue-500" : "border-slate-300"
      )}>
        {selected && <div className="w-2 h-2 rounded-full bg-blue-500" />}
      </div>
      <span className={cn("text-sm", selected ? "font-medium text-blue-700" : "text-slate-600")}>
        {label}
      </span>
    </div>
  );
}
