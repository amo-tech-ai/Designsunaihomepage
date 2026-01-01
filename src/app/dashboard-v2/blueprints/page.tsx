"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";
import { RightPanelTabs, STANDARD_AI_TABS } from "../components/RightPanelTabs";
import { FileText, Calendar, Users, Plus } from "lucide-react";

export default function BlueprintsPage() {
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
              <div className="p-4 bg-gray-50 rounded-[32px]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Recommended
                </h4>
                <p className="text-sm font-light text-black mb-1">
                  Add Version Control Agent
                </p>
                <p className="text-xs font-light text-zinc-600 mb-4 italic">
                  Track blueprint changes and enable rollback
                </p>
                <button className="w-full h-10 px-4 bg-indigo-500 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors">
                  Add Agent
                </button>
              </div>
            </div>
          ),
        },
        {
          ...STANDARD_AI_TABS.automations,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-white" style={{ border: '1px solid #EEEEEE' }}>
                <h4 className="text-sm font-light text-black mb-1">
                  Auto-save on edit
                </h4>
                <p className="text-xs font-light text-zinc-600">
                  Enabled for all blueprints
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
                  Blueprint → Project
                </h4>
                <p className="text-xs font-light text-zinc-600">
                  Approve blueprint → Generate tasks → Assign team
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
                <h4 className="text-sm font-light text-black mb-1">Admin Review</h4>
                <p className="text-xs font-light text-zinc-600">
                  Create → Edit → Approve → Deploy
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
                  E-commerce blueprint template
                </p>
                <p className="text-xs text-emerald-600 font-light">
                  Setup time: 3 days → 4 hours
                </p>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  const blueprints = [
    {
      id: 1,
      name: "Real Estate CRM - Phase 1",
      status: "Active",
      version: "v2.3",
      lastModified: "2 hours ago",
      author: "Sarah Johnson",
      modules: 8,
    },
    {
      id: 2,
      name: "WhatsApp Integration",
      status: "Draft",
      version: "v1.0",
      lastModified: "1 day ago",
      author: "Michael Chen",
      modules: 3,
    },
    {
      id: 3,
      name: "Payment Processing",
      status: "Review",
      version: "v1.2",
      lastModified: "3 days ago",
      author: "Lisa Wang",
      modules: 5,
    },
  ];

  return (
    <DashboardLayout
      topStrip={topStrip}
      rightPanel={rightPanel}
      rightPanelDefaultOpen={true}
    >
      <div className="p-12 space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl text-black mb-2 font-light" style={{ fontFamily: 'var(--font-heading)' }}>Blueprints</h1>
            <p className="text-sm font-light text-zinc-600">
              Manage project blueprints and configurations
            </p>
          </div>
          <button className="h-12 px-6 bg-black text-white rounded-full hover:bg-zinc-900 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest">
            <Plus size={14} />
            <span>New Blueprint</span>
          </button>
        </div>

        {/* Blueprints Table */}
        <div className="bg-white rounded-[40px] overflow-hidden" style={{ border: '1px solid #EEEEEE' }}>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Name
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Status
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Version
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Modules
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Author
                </th>
                <th className="text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Last Modified
                </th>
              </tr>
            </thead>
            <tbody>
              {blueprints.map((blueprint, idx) => (
                <tr
                  key={blueprint.id}
                  className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                  style={{ borderTop: '1px solid #F9F9F9' }}
                >
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-zinc-400" />
                      <span className="text-sm font-light text-black">
                        {blueprint.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span
                      className={`px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-full ${
                        blueprint.status === "Active"
                          ? "bg-emerald-50 text-emerald-600"
                          : blueprint.status === "Review"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-gray-50 text-zinc-600"
                      }`}
                    >
                      {blueprint.status}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-sm font-light text-zinc-600">
                      {blueprint.version}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-sm font-light text-zinc-600">
                      {blueprint.modules}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-xs font-light text-zinc-600">
                        {blueprint.author[0]}
                      </div>
                      <span className="text-sm font-light text-zinc-600">
                        {blueprint.author}
                      </span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-sm font-light text-zinc-400">
                      {blueprint.lastModified}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Blueprint Stats */}
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <FileText size={14} />
              <span>Total Blueprints</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>12</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Calendar size={14} />
              <span>Active</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>8</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Users size={14} />
              <span>Contributors</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>6</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
