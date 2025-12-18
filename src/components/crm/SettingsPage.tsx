import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, Lock, Bell, Moon, Sun, Save, 
  Shield, Key, Smartphone, Mail, Slack
} from 'lucide-react';
import { Card } from '../ui/design-system/Card';
import { Button } from '../ui/design-system/Button';
import { Badge } from '../ui/design-system/Badge';
import { cn } from '../ui/design-system/utils';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile');

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500 mt-1">Manage your account and system preferences.</p>
        </div>
        <Button variant="primary" leftIcon={<Save className="w-4 h-4" />}>
          Save Changes
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-slate-200">
        <TabButton 
          label="Profile & Appearance" 
          icon={User} 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
        />
        <TabButton 
          label="Security & API" 
          icon={Shield} 
          active={activeTab === 'security'} 
          onClick={() => setActiveTab('security')} 
        />
        <TabButton 
          label="Notifications" 
          icon={Bell} 
          active={activeTab === 'notifications'} 
          onClick={() => setActiveTab('notifications')} 
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Panel */}
        <div className="md:col-span-2 space-y-6">
           <AnimatePresence mode="wait">
             {activeTab === 'profile' && <ProfileSettings key="profile" />}
             {activeTab === 'security' && <SecuritySettings key="security" />}
             {activeTab === 'notifications' && <NotificationSettings key="notifications" />}
           </AnimatePresence>
        </div>

        {/* Side Panel (Summary/Status) */}
        <div className="space-y-6">
           <Card className="p-6 bg-white">
             <h3 className="font-bold text-slate-900 mb-4">System Status</h3>
             <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                 <span className="text-slate-500">Version</span>
                 <span className="font-mono text-slate-900">v2.4.0 (Beta)</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-slate-500">Plan</span>
                 <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">Enterprise</Badge>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-slate-500">API Usage</span>
                 <span className="text-slate-900 font-medium">45%</span>
               </div>
             </div>
             <div className="mt-6 pt-6 border-t border-slate-100">
               <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Next Invoice</div>
               <div className="text-xl font-bold text-slate-900">$499.00</div>
               <div className="text-xs text-slate-500">Due on June 1, 2024</div>
             </div>
           </Card>
        </div>

      </div>
    </div>
  );
}

// --- Subcomponents ---

function TabButton({ label, icon: Icon, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 pb-3 text-sm font-medium transition-colors relative",
        active ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
      )}
    >
      <Icon className="w-4 h-4" />
      {label}
      {active && <motion.div layoutId="settingTab" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-slate-900" />}
    </button>
  );
}

function ProfileSettings() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
      <Card className="p-6 bg-white">
        <h3 className="font-bold text-slate-900 mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup label="Full Name" defaultValue="Admin User" />
          <InputGroup label="Email Address" defaultValue="admin@sunai.com" />
          <InputGroup label="Role" defaultValue="System Administrator" disabled />
          <InputGroup label="Phone" defaultValue="+1 (555) 000-0000" />
        </div>
      </Card>

      <Card className="p-6 bg-white">
        <h3 className="font-bold text-slate-900 mb-6">Appearance</h3>
        <div className="flex items-center justify-between">
           <div>
             <div className="font-medium text-slate-900">Theme Preference</div>
             <div className="text-sm text-slate-500">Choose how the admin panel looks.</div>
           </div>
           <div className="flex bg-slate-100 p-1 rounded-lg">
             <button className="p-2 bg-white rounded shadow-sm text-slate-900"><Sun className="w-4 h-4" /></button>
             <button className="p-2 text-slate-400 hover:text-slate-600"><Moon className="w-4 h-4" /></button>
           </div>
        </div>
      </Card>
    </motion.div>
  );
}

function SecuritySettings() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
       <Card className="p-6 bg-white">
        <h3 className="font-bold text-slate-900 mb-6">API Configuration</h3>
        <div className="space-y-4">
          <InputGroup label="OpenAI API Key" defaultValue="sk-........................" type="password" icon={Key} />
          <InputGroup label="Supabase URL" defaultValue="https://xyz.supabase.co" icon={Lock} />
          <InputGroup label="Supabase Anon Key" defaultValue="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." type="password" icon={Lock} />
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm">Rotate Keys</Button>
        </div>
      </Card>

      <Card className="p-6 bg-white border-red-100">
        <h3 className="font-bold text-red-600 mb-2">Danger Zone</h3>
        <p className="text-sm text-slate-600 mb-4">
          Permanent actions that affect your system configuration.
        </p>
        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
          Reset System Cache
        </Button>
      </Card>
    </motion.div>
  );
}

function NotificationSettings() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
       <Card className="p-6 bg-white">
        <h3 className="font-bold text-slate-900 mb-6">Channel Preferences</h3>
        <div className="space-y-6">
          <ToggleRow icon={Mail} title="Email Notifications" desc="Get daily summaries and critical alerts." checked={true} />
          <ToggleRow icon={Smartphone} title="Push Notifications" desc="Real-time alerts on your mobile device." checked={true} />
          <ToggleRow icon={Slack} title="Slack Integration" desc="Forward alerts to #ops-alerts." checked={false} />
        </div>
      </Card>
    </motion.div>
  );
}

function InputGroup({ label, defaultValue, type = "text", disabled, icon: Icon }: any) {
  return (
    <div>
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">{label}</label>
      <div className="relative">
        <input 
          type={type} 
          defaultValue={defaultValue} 
          disabled={disabled}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:bg-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        />
        {Icon && <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />}
      </div>
    </div>
  );
}

function ToggleRow({ icon: Icon, title, desc, checked }: any) {
  const [isOn, setIsOn] = useState(checked);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="font-bold text-slate-900 text-sm">{title}</div>
          <div className="text-xs text-slate-500">{desc}</div>
        </div>
      </div>
      <button 
        onClick={() => setIsOn(!isOn)}
        className={cn(
          "w-11 h-6 rounded-full transition-colors relative",
          isOn ? "bg-emerald-500" : "bg-slate-200"
        )}
      >
        <div className={cn(
          "w-5 h-5 bg-white rounded-full shadow-sm absolute top-0.5 transition-all",
          isOn ? "left-[22px]" : "left-0.5"
        )} />
      </button>
    </div>
  );
}

import { AnimatePresence } from 'motion/react';
