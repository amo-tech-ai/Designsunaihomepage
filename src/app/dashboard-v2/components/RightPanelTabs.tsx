"use client";

import { useState, ReactNode } from "react";
import { Bot, Zap, GitBranch, Route, Lightbulb } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: typeof Bot;
  content: ReactNode;
}

interface RightPanelTabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function RightPanelTabs({ tabs, defaultTab }: RightPanelTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="flex flex-col h-full">
      {/* Tab Navigation */}
      <div className="flex" style={{ borderBottom: '1px solid #EEEEEE' }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-3 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                activeTab === tab.id
                  ? "text-black border-b-2 border-indigo-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon size={14} className="mx-auto mb-1" />
              <div>{tab.label}</div>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4">{activeTabContent}</div>
    </div>
  );
}

// Standard tab configuration for AI Intelligence
export const STANDARD_AI_TABS = {
  agents: { id: "agents", label: "Agents", icon: Bot },
  automations: { id: "automations", label: "Auto", icon: Zap },
  workflows: { id: "workflows", label: "Flows", icon: GitBranch },
  journeys: { id: "journeys", label: "Journey", icon: Route },
  examples: { id: "examples", label: "Examples", icon: Lightbulb },
};