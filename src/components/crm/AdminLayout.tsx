import React, { useState } from 'react';
import { 
  Users, LayoutGrid, Bot, Workflow, Settings, 
  LogOut, Command, Bell, Search, Menu, X
} from 'lucide-react';
import { cn } from '../ui/design-system/utils';
import { Button } from '../ui/design-system/Button';
import { AnimatePresence, motion } from 'motion/react';

type AdminPage = 'leads' | 'ops' | 'workflow' | 'settings';

interface AdminLayoutProps {
  children: React.ReactNode;
  activePage: AdminPage;
  onNavigate: (page: AdminPage) => void;
  onLogout?: () => void;
}

export function AdminLayout({ children, activePage, onNavigate, onLogout }: AdminLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold text-slate-900">
           <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
             <Command className="w-4 h-4" />
           </div>
           <span>Sun AI</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-slate-600">
           <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-2xl flex flex-col md:hidden"
            >
               <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
                  <span className="font-bold text-slate-900">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
               </div>
               <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                 <NavContent activePage={activePage} onNavigate={(p) => { onNavigate(p); setIsMobileMenuOpen(false); }} onLogout={onLogout} />
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col fixed inset-y-0 z-50">
        
        {/* Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
           <div className="flex items-center gap-2 font-bold text-slate-900">
             <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
               <Command className="w-4 h-4" />
             </div>
             <span>Sun AI <span className="text-slate-400 font-normal">CRM</span></span>
           </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6 px-3 space-y-1 flex flex-col">
           <NavContent activePage={activePage} onNavigate={onNavigate} onLogout={onLogout} />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 min-w-0 pt-16 md:pt-0">
        {children}
      </main>

    </div>
  );
}

// --- Subcomponents ---

function NavContent({ activePage, onNavigate, onLogout }: any) {
  return (
    <>
       <NavItem 
         icon={Users} 
         label="Leads & CRM" 
         isActive={activePage === 'leads'} 
         onClick={() => onNavigate('leads')} 
       />
       <NavItem 
         icon={Bot} 
         label="Ops Control" 
         isActive={activePage === 'ops'} 
         onClick={() => onNavigate('ops')} 
       />
       <NavItem 
         icon={Workflow} 
         label="Workflow Logic" 
         isActive={activePage === 'workflow'} 
         onClick={() => onNavigate('workflow')} 
       />
       
       <div className="pt-6 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
         System
       </div>
       
       <NavItem 
         icon={Settings} 
         label="Settings" 
         isActive={activePage === 'settings'} 
         onClick={() => onNavigate('settings')} 
       />

       <div className="flex-1" />

        {/* User Footer */}
        <div className="p-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
             <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
               AD
             </div>
             <div className="flex-1 overflow-hidden">
               <div className="text-sm font-bold text-slate-900 truncate">Admin User</div>
               <div className="text-xs text-slate-500 truncate">admin@sunai.com</div>
             </div>
             <LogOut 
               className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500" 
               onClick={(e) => {
                 e.stopPropagation();
                 onLogout?.();
               }}
             />
          </div>
        </div>
    </>
  );
}

function NavItem({ icon: Icon, label, isActive, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
        isActive 
          ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" 
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      )}
    >
      <Icon className={cn("w-4 h-4", isActive ? "text-slate-300" : "text-slate-400")} />
      {label}
    </button>
  );
}
