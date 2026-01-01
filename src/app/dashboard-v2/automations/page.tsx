"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";
import { RightPanelTabs, STANDARD_AI_TABS } from "../components/RightPanelTabs";
import { Zap, Play, Pause, Plus, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function AutomationsPage() {
  const [confirmModal, setConfirmModal] = useState<{
    show: boolean;
    automation: string;
    action: "enable" | "disable";
  }>({ show: false, automation: "", action: "enable" });

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
      defaultTab="automations"
      tabs={[
        {
          ...STANDARD_AI_TABS.agents,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-amber-50" style={{ border: '1px solid #FEF3C7' }}>
                <h4 className="text-sm font-light text-black mb-1">
                  Automation Monitor
                </h4>
                <p className="text-xs font-light text-zinc-600 italic">
                  Watching 12 automations, 3 active
                </p>
              </div>
            </div>
          ),
        },
        {
          ...STANDARD_AI_TABS.automations,
          content: (
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-[32px]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Recommended
                </h4>
                <p className="text-sm font-light text-black mb-1">
                  Add Payment Retry Logic
                </p>
                <p className="text-xs font-light text-zinc-600 mb-4 italic">
                  Automatically retry failed payments after 24h
                </p>
                <button className="w-full h-10 px-4 bg-indigo-500 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors">
                  Add Automation
                </button>
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
                  Auto-Response Chain
                </h4>
                <p className="text-xs font-light text-zinc-600">
                  WhatsApp inquiry → Auto-reply → Lead score → Assign
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
                <h4 className="text-sm font-light text-black mb-1">Client Path</h4>
                <p className="text-xs font-light text-zinc-600">
                  Inquiry → Auto-response → Booking → Payment
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
                  E-commerce auto-reorder
                </p>
                <p className="text-xs text-emerald-600 font-light">
                  Manual orders: 200/wk → 12/wk
                </p>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  const automations = [
    {
      id: 1,
      name: "WhatsApp Auto-Reply",
      description: "Send instant response to new inquiries",
      status: "active",
      triggers: 47,
      successRate: 94,
    },
    {
      id: 2,
      name: "Lead Scoring",
      description: "Automatically score and prioritize leads",
      status: "active",
      triggers: 124,
      successRate: 89,
    },
    {
      id: 3,
      name: "Payment Reminder",
      description: "Send payment links 3 days before due",
      status: "active",
      triggers: 18,
      successRate: 100,
    },
    {
      id: 4,
      name: "Viewing Confirmation",
      description: "Auto-confirm viewings with property details",
      status: "paused",
      triggers: 0,
      successRate: 0,
    },
    {
      id: 5,
      name: "Follow-Up Sequence",
      description: "3-touch sequence for unresponsive leads",
      status: "disabled",
      triggers: 0,
      successRate: 0,
    },
  ];

  const handleToggle = (automation: string, currentStatus: string) => {
    setConfirmModal({
      show: true,
      automation,
      action: currentStatus === "active" ? "disable" : "enable",
    });
  };

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
            <h1 className="text-4xl text-black mb-2 font-light" style={{ fontFamily: 'var(--font-heading)' }}>Automations</h1>
            <p className="text-sm font-light text-zinc-600">
              Configure and monitor automated workflows
            </p>
          </div>
          <button className="h-12 px-6 bg-black text-white rounded-full hover:bg-zinc-900 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest">
            <Plus size={14} />
            <span>New Automation</span>
          </button>
        </div>

        {/* Automations List */}
        <div className="space-y-6">
          {automations.map((automation) => (
            <div
              key={automation.id}
              className="bg-white rounded-[40px] p-10 hover:shadow-sm transition-all"
              style={{ border: '1px solid #EEEEEE' }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6 flex-1">
                  <div
                    className={`w-14 h-14 rounded-[28px] flex items-center justify-center ${
                      automation.status === "active"
                        ? "bg-emerald-100"
                        : "bg-gray-50"
                    }`}
                  >
                    <Zap
                      size={24}
                      className={`${
                        automation.status === "active"
                          ? "text-emerald-600"
                          : "text-zinc-400"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl text-black font-light" style={{ fontFamily: 'var(--font-heading)' }}>
                        {automation.name}
                      </h3>
                      <span
                        className={`px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-full ${
                          automation.status === "active"
                            ? "bg-emerald-50 text-emerald-600"
                            : automation.status === "paused"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-gray-50 text-zinc-600"
                        }`}
                      >
                        {automation.status}
                      </span>
                    </div>
                    <p className="text-sm font-light text-zinc-600 mb-4">
                      {automation.description}
                    </p>

                    {automation.status === "active" && (
                      <div className="flex items-center gap-8 text-sm font-light text-zinc-600">
                        <div>
                          Triggers today:{" "}
                          <span className="text-black">
                            {automation.triggers}
                          </span>
                        </div>
                        <div>
                          Success rate:{" "}
                          <span className="text-emerald-600" style={{ fontFamily: 'var(--font-heading)' }}>
                            {automation.successRate}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleToggle(automation.name, automation.status)
                    }
                    className={`h-12 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 ${
                      automation.status === "active"
                        ? "bg-white text-zinc-700 hover:bg-gray-50"
                        : "bg-emerald-500 text-white hover:bg-emerald-600"
                    }`}
                    style={automation.status === "active" ? { border: '1px solid #EEEEEE' } : {}}
                  >
                    {automation.status === "active" ? (
                      <>
                        <Pause size={14} />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play size={14} />
                        <span>Enable</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Automation Stats */}
        <div className="grid grid-cols-4 gap-8">
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Zap size={14} />
              <span>Total Automations</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>{automations.length}</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Play size={14} />
              <span>Active</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>
              {automations.filter((a) => a.status === "active").length}
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <TrendingUp size={14} />
              <span>Triggers Today</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>189</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Zap size={14} />
              <span>Success Rate</span>
            </div>
            <div className="text-5xl text-black" style={{ fontFamily: 'var(--font-heading)' }}>92%</div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[32px] p-10 max-w-md w-full mx-4">
            <h3 className="text-2xl text-black mb-3 font-light" style={{ fontFamily: 'var(--font-heading)' }}>Confirm Action</h3>
            <p className="text-sm font-light text-zinc-600 mb-8 leading-relaxed">
              Are you sure you want to{" "}
              <span className="text-black font-normal">{confirmModal.action}</span> the
              automation{" "}
              <span className="text-black font-normal">
                "{confirmModal.automation}"
              </span>
              ? This will{" "}
              {confirmModal.action === "enable"
                ? "start processing triggers immediately"
                : "stop all active workflows"}
              .
            </p>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  setConfirmModal({ show: false, automation: "", action: "enable" })
                }
                className="flex-1 h-12 bg-black text-white rounded-full hover:bg-zinc-900 transition-colors text-xs font-black uppercase tracking-widest"
              >
                Confirm
              </button>
              <button
                onClick={() =>
                  setConfirmModal({ show: false, automation: "", action: "enable" })
                }
                className="flex-1 h-12 bg-white text-zinc-700 rounded-full hover:bg-gray-50 transition-colors text-xs font-black uppercase tracking-widest"
                style={{ border: '1px solid #EEEEEE' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
