import { motion } from 'motion/react';
import { Check, User, FileText, Layout, Database, Smartphone, Globe, Cpu, MoreHorizontal, ArrowRight, Home, Folder, Bot, Image as ImageIcon, Code, File } from 'lucide-react';

// Common Card Container
const BrowserFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-full bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden ${className}`}>
    {/* Browser Chrome */}
    <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
      </div>
      <div className="flex-1 text-center text-[10px] font-medium text-slate-400 uppercase tracking-widest">
        Sun AI Platform
      </div>
      <div className="w-12" /> {/* Spacer for balance */}
    </div>
    <div className="p-6 md:p-8 relative min-h-[400px]">
      {children}
    </div>
  </div>
);

// Screen 1: Scope Wizard
export function ScreenScope() {
  return (
    <BrowserFrame>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-[#00334F] mb-2">Project Scope Wizard</h3>
          <p className="text-slate-500">What type of application are you building?</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { label: "AI Product", icon: Cpu, active: true },
            { label: "MVP", icon:  Layout, active: false },
            { label: "Mobile App", icon: Smartphone, active: false },
            { label: "Landing Page", icon: Globe, active: false },
            { label: "Automation", icon: Bot, active: false },
            { label: "CRM", icon: Database, active: false },
            { label: "Dashboard", icon: Layout, active: false },
          ].map((chip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-medium cursor-pointer transition-all ${
                chip.active 
                  ? "bg-[#FF6A3D] border-[#FF6A3D] text-white shadow-lg shadow-[#FF6A3D]/20" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-[#FF6A3D]/50"
              }`}
            >
              <chip.icon className="w-4 h-4" />
              {chip.label}
            </motion.div>
          ))}
        </div>

        {/* Pointer Cursor Animation */}
        <motion.div 
          className="absolute top-[160px] left-[180px] pointer-events-none drop-shadow-xl z-20"
          initial={{ x: 20, y: 20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L26 12L16 16L12 26L6 2Z" fill="#FF6A3D" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF6A3D]" />
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <div className="w-2 h-2 rounded-full bg-slate-200" />
          </div>
          <button className="px-6 py-2 bg-[#00334F] text-white rounded-lg font-bold text-sm">
            Confirm
          </button>
        </div>
      </div>
    </BrowserFrame>
  );
}

// Screen 2: Budget & Timeline
export function ScreenBudget() {
  return (
    <BrowserFrame>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-[#00334F] mb-2">Set Your Budget & Timeline</h3>
          <p className="text-slate-500">Define your investment parameters.</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#00334F] uppercase tracking-wide">Target Budget</label>
            <div className="grid grid-cols-2 gap-3">
              {["$5K–$15K", "$15K–$30K", "$30K–$50K", "$50K+"].map((budget, i) => (
                <div key={i} className={`p-4 rounded-xl text-center font-bold border cursor-pointer ${
                  i === 2 
                    ? "bg-[#FF6A3D]/5 border-[#FF6A3D] text-[#FF6A3D]" 
                    : "bg-slate-50 border-slate-100 text-slate-600"
                }`}>
                  {budget}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-[#00334F] uppercase tracking-wide">Timeline Goal</label>
            <div className="flex gap-3">
              {["2–4 Weeks", "4–8 Weeks", "Flexible"].map((time, i) => (
                <div key={i} className={`flex-1 p-3 rounded-xl text-center text-sm font-bold border cursor-pointer ${
                  i === 1
                    ? "bg-[#00334F] border-[#00334F] text-white" 
                    : "bg-slate-50 border-slate-100 text-slate-600"
                }`}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
           <button className="px-8 py-3 bg-[#FF6A3D] text-white rounded-xl font-bold shadow-lg shadow-[#FF6A3D]/20 flex items-center gap-2">
             Finish <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </BrowserFrame>
  );
}

// Screen 3: Proposal Preview
export function ScreenProposal() {
  return (
    <BrowserFrame>
      <div className="flex gap-8 h-full">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">
              <Check className="w-3 h-3" /> Ready for Review
            </div>
            <h3 className="text-2xl font-bold text-[#00334F] mb-4">AI-Generated Project Blueprint</h3>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-3">
            <h4 className="font-bold text-[#00334F] text-sm">Project Goals</h4>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
              <div className="h-2 w-full bg-slate-200 rounded-full" />
              <div className="h-2 w-5/6 bg-slate-200 rounded-full" />
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-3">
            <h4 className="font-bold text-[#00334F] text-sm">Our Approach</h4>
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-200 rounded-full" />
              <div className="h-2 w-4/5 bg-slate-200 rounded-full" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/3 border-l border-slate-100 pl-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase text-slate-400">Your Team</div>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-slate-400">
                  <User className="w-5 h-5" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#00334F] text-white flex items-center justify-center text-xs font-bold">
                +2
              </div>
            </div>
          </div>

          <button className="w-full h-12 rounded-full border-2 border-[#00334F] text-[#00334F] flex items-center justify-center hover:bg-[#00334F] hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </BrowserFrame>
  );
}

// Screen 4: Dashboard
export function ScreenDashboard() {
  return (
    <BrowserFrame className="bg-slate-50">
      <div className="flex gap-6">
        {/* Sidebar Nav */}
        <div className="w-16 flex flex-col items-center gap-6 pt-2">
          <div className="p-2 rounded-lg bg-[#00334F] text-white shadow-lg"><Home className="w-5 h-5" /></div>
          <div className="p-2 rounded-lg text-slate-400 hover:bg-white"><Folder className="w-5 h-5" /></div>
          <div className="p-2 rounded-lg text-slate-400 hover:bg-white"><Bot className="w-5 h-5" /></div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-[#00334F]">Project Dashboard</h3>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-100" />
              <div className="w-8 h-8 rounded-full bg-[#FF6A3D]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Proposal", icon: FileText, color: "bg-blue-100 text-blue-600" },
              { label: "Wireframes", icon: Layout, color: "bg-orange-100 text-orange-600" },
              { label: "Architecture", icon: Database, color: "bg-purple-100 text-purple-600" },
              { label: "Assets", icon: ImageIcon, color: "bg-green-100 text-green-600" }
            ].map((file, i) => (
              <div key={i} className={`p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group ${i === 1 ? 'ring-2 ring-[#FF6A3D] ring-offset-2' : ''}`}>
                <div className={`w-10 h-10 rounded-lg ${file.color} flex items-center justify-center mb-3`}>
                  <file.icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-[#00334F]">{file.label}</div>
                <div className="text-xs text-slate-400">Updated 2h ago</div>

                {/* Highlight/Pointer on item 1 */}
                {i === 1 && (
                  <motion.div 
                    className="absolute bottom-2 right-2 pointer-events-none drop-shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                      <path d="M6 2L26 12L16 16L12 26L6 2Z" fill="#FF6A3D" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
