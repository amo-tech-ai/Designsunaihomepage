"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";
import { User, Bell, Shield, Database } from "lucide-react";

export default function SettingsPage() {
  const topStrip = (
    <TopStrip
      projectName="Real Estate CRM with WhatsApp Automation"
      industry="Real Estate"
      status="In Progress"
      complexity="Medium"
      deliveryModel="Phased MVP"
      primaryGoal="Automate Operations"
    />
  );

  return (
    <DashboardLayout topStrip={topStrip} rightPanelDefaultOpen={false}>
      <div className="p-12 space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl text-black mb-2 font-light" style={{ fontFamily: 'var(--font-heading)' }}>Settings</h1>
          <p className="text-sm font-light text-zinc-600">
            Manage your account and project preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Profile */}
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-3 mb-8">
              <User size={18} className="text-zinc-400" />
              <h2 className="text-xl text-black font-light" style={{ fontFamily: 'var(--font-heading)' }}>Profile</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue="Sarah Johnson"
                  className="w-full h-14 px-6 bg-gray-50 rounded-2xl text-sm font-light"
                  style={{ border: '1px solid #EEEEEE' }}
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="sarah@sunai.agency"
                  className="w-full h-14 px-6 bg-gray-50 rounded-2xl text-sm font-light"
                  style={{ border: '1px solid #EEEEEE' }}
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-3 mb-8">
              <Bell size={18} className="text-zinc-400" />
              <h2 className="text-xl text-black font-light" style={{ fontFamily: 'var(--font-heading)' }}>Notifications</h2>
            </div>
            <div className="space-y-6">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-light text-zinc-700">
                  Email notifications
                </span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-light text-zinc-700">
                  Task assignments
                </span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-light text-zinc-700">
                  Automation alerts
                </span>
                <input type="checkbox" className="w-5 h-5 rounded" />
              </label>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-3 mb-8">
              <Shield size={18} className="text-zinc-400" />
              <h2 className="text-xl text-black font-light" style={{ fontFamily: 'var(--font-heading)' }}>Security</h2>
            </div>
            <button className="h-12 px-6 bg-white text-zinc-700 rounded-full hover:bg-gray-50 transition-colors text-xs font-black uppercase tracking-widest" style={{ border: '1px solid #EEEEEE' }}>
              Change Password
            </button>
          </div>

          {/* Data */}
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-3 mb-8">
              <Database size={18} className="text-zinc-400" />
              <h2 className="text-xl text-black font-light" style={{ fontFamily: 'var(--font-heading)' }}>Data</h2>
            </div>
            <div className="flex gap-4">
              <button className="h-12 px-6 bg-white text-zinc-700 rounded-full hover:bg-gray-50 transition-colors text-xs font-black uppercase tracking-widest" style={{ border: '1px solid #EEEEEE' }}>
                Export Data
              </button>
              <button className="h-12 px-6 bg-white text-rose-600 rounded-full hover:bg-rose-50 transition-colors text-xs font-black uppercase tracking-widest" style={{ border: '1px solid #FEE2E2' }}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
