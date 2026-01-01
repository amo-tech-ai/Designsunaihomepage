"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";
import { RightPanelTabs, STANDARD_AI_TABS } from "../components/RightPanelTabs";
import { ArrowRight, TrendingUp, Users, Zap, Clock } from "lucide-react";

export default function MainDashboard() {
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

  const rightPanel = (
    <RightPanelTabs
      defaultTab="agents"
      tabs={[
        {
          ...STANDARD_AI_TABS.agents,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-indigo-50" style={{ border: '1px solid #E0E7FF' }}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-light text-black">Lead Qualifier</h4>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] font-black uppercase tracking-widest rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-xs font-light text-zinc-600 italic">
                  Processing 24 leads, 18 qualified
                </p>
              </div>
              <div className="p-4 rounded-[32px] bg-white" style={{ border: '1px solid #EEEEEE' }}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-light text-black">
                    Follow-Up Orchestrator
                  </h4>
                  <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-[8px] font-black uppercase tracking-widest rounded-full">
                    Running
                  </span>
                </div>
                <p className="text-xs font-light text-zinc-600 italic">
                  12 sequences active, 5 scheduled
                </p>
              </div>
            </div>
          ),
        },
        {
          ...STANDARD_AI_TABS.automations,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-blue-50" style={{ border: '1px solid #DBEAFE' }}>
                <h4 className="text-sm font-light text-black mb-1">
                  WhatsApp Auto-Reply
                </h4>
                <p className="text-xs font-light text-zinc-600 mb-2 italic">
                  Triggered 47 times today
                </p>
                <p className="text-xs text-emerald-600 font-light">
                  Avg response time: 2 minutes
                </p>
              </div>
            </div>
          ),
        },
        {
          ...STANDARD_AI_TABS.workflows,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-white" style={{ border: '1px solid #EEEEEE' }}>
                <h4 className="text-sm font-light text-black mb-1">
                  Lead → Viewing
                </h4>
                <p className="text-xs font-light text-zinc-600">
                  32 active · 5 steps · 89% completion
                </p>
              </div>
            </div>
          ),
        },
        {
          ...STANDARD_AI_TABS.journeys,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-white" style={{ border: '1px solid #EEEEEE' }}>
                <h4 className="text-sm font-light text-black mb-1">Client Inquiry</h4>
                <p className="text-xs font-light text-zinc-600">
                  WhatsApp → Auto-reply → Schedule → Confirm
                </p>
              </div>
            </div>
          ),
        },
        {
          ...STANDARD_AI_TABS.examples,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-white" style={{ border: '1px solid #EEEEEE' }}>
                <p className="text-xs font-light text-zinc-600 mb-2">
                  Similar real estate CRM
                </p>
                <p className="text-xs text-emerald-600 font-light">
                  Response time: 4hr → 2min
                </p>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <DashboardLayout
      topStrip={topStrip}
      rightPanel={rightPanel}
      rightPanelDefaultOpen={true}
    >
      {/* Center Panel Content */}
      <div className="p-12 space-y-12">
        {/* Hero Stats */}
        <div className="grid grid-cols-4 gap-8">
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <TrendingUp size={14} />
              <span>Active Leads</span>
            </div>
            <div className="text-5xl text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>247</div>
            <div className="text-xs text-emerald-600 font-light">+12% this week</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Users size={14} />
              <span>Qualified</span>
            </div>
            <div className="text-5xl text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>189</div>
            <div className="text-xs text-zinc-600 font-light">76% conversion</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Zap size={14} />
              <span>Automations</span>
            </div>
            <div className="text-5xl text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>12</div>
            <div className="text-xs text-blue-600 font-light">3 active now</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Clock size={14} />
              <span>Avg Response</span>
            </div>
            <div className="text-5xl text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>2m</div>
            <div className="text-xs text-emerald-600 font-light">-92% from baseline</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-[40px]" style={{ border: '1px solid #EEEEEE' }}>
          <div className="p-10" style={{ borderBottom: '1px solid #F9F9F9' }}>
            <h2 className="text-2xl text-black font-light" style={{ fontFamily: 'var(--font-heading)' }}>Recent Activity</h2>
          </div>
          <div style={{ borderTop: 'none' }}>
            {[
              {
                title: "New lead qualified",
                desc: "Sarah Johnson - Premium property interest",
                time: "2 minutes ago",
                status: "success",
              },
              {
                title: "Viewing scheduled",
                desc: "Michael Chen - Downtown condo viewing",
                time: "15 minutes ago",
                status: "info",
              },
              {
                title: "Payment received",
                desc: "Lisa Wang - Deposit confirmed",
                time: "1 hour ago",
                status: "success",
              },
              {
                title: "Follow-up sent",
                desc: "John Smith - 3rd touchpoint",
                time: "2 hours ago",
                status: "neutral",
              },
            ].map((activity, idx) => (
              <div 
                key={idx} 
                className="p-6 hover:bg-gray-50/50 transition-colors"
                style={{ borderBottom: idx < 3 ? '1px solid #F9F9F9' : 'none' }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-black font-light mb-1">
                      {activity.title}
                    </div>
                    <div className="text-sm font-light text-zinc-600">
                      {activity.desc}
                    </div>
                  </div>
                  <div className="text-xs font-light text-zinc-400">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-8">
          <button className="h-40 bg-white rounded-[40px] p-10 text-left group hover:shadow-sm transition-all" style={{ border: '1px solid #EEEEEE' }}>
            <div className="text-base text-black font-light mb-2" style={{ fontFamily: 'var(--font-heading)' }}>View Blueprints</div>
            <div className="text-xs font-light text-zinc-600 mb-6">
              Review project structure
            </div>
            <ArrowRight size={18} className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="h-40 bg-white rounded-[40px] p-10 text-left group hover:shadow-sm transition-all" style={{ border: '1px solid #EEEEEE' }}>
            <div className="text-base text-black font-light mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Manage Tasks</div>
            <div className="text-xs font-light text-zinc-600 mb-6">
              12 tasks need attention
            </div>
            <ArrowRight size={18} className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="h-40 bg-white rounded-[40px] p-10 text-left group hover:shadow-sm transition-all" style={{ border: '1px solid #EEEEEE' }}>
            <div className="text-base text-black font-light mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Configure Automations
            </div>
            <div className="text-xs font-light text-zinc-600 mb-6">
              3 suggestions available
            </div>
            <ArrowRight size={18} className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
