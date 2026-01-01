"use client";

import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  CheckSquare,
  Zap,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  topStrip?: ReactNode;
  rightPanel?: ReactNode;
  rightPanelDefaultOpen?: boolean;
}

const NAVIGATION_ITEMS = [
  {
    label: "Main Dashboard",
    href: "/dashboard-v2",
    icon: LayoutDashboard,
  },
  {
    label: "Blueprints",
    href: "/dashboard-v2/blueprints",
    icon: FileText,
  },
  {
    label: "Projects",
    href: "/dashboard-v2/projects",
    icon: FolderKanban,
  },
  {
    label: "Tasks",
    href: "/dashboard-v2/tasks",
    icon: CheckSquare,
  },
  {
    label: "Automations",
    href: "/dashboard-v2/automations",
    icon: Zap,
  },
  {
    label: "Settings",
    href: "/dashboard-v2/settings",
    icon: Settings,
  },
];

export function DashboardLayout({
  children,
  topStrip,
  rightPanel,
  rightPanelDefaultOpen = true,
}: DashboardLayoutProps) {
  const location = useLocation();
  const [rightPanelOpen, setRightPanelOpen] = useState(rightPanelDefaultOpen);

  const isActive = (href: string) => {
    if (href === "/dashboard-v2") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      {/* Top Summary Strip - Sticky */}
      {topStrip && (
        <div className="sticky top-0 z-50 bg-white h-16" style={{ borderBottom: '1px solid #F9F9F9' }}>
          {topStrip}
        </div>
      )}

      {/* 3-Panel Layout */}
      <div className="flex">
        {/* Left Panel - Navigation (256px fixed) */}
        <aside className="w-64 bg-white min-h-[calc(100vh-4rem)] flex flex-col" style={{ borderRight: '1px solid #F9F9F9' }}>
          <nav className="p-4 space-y-1 flex-1">
            {NAVIGATION_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "text-zinc-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  <span className="text-sm font-light">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Context Indicator */}
          <div className="p-4" style={{ borderTop: '1px solid #F9F9F9' }}>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">
              Current Context
            </div>
            <div className="text-sm font-light text-black">
              Real Estate CRM Project
            </div>
          </div>
        </aside>

        {/* Center Panel - Work Area (Fluid, min 640px) */}
        <main className="flex-1 min-w-[640px] overflow-y-auto">
          {children}
        </main>

        {/* Right Panel - Intelligence (320px, collapsible) */}
        {rightPanel && (
          <>
            {rightPanelOpen ? (
              <aside className="w-80 bg-white min-h-[calc(100vh-4rem)] flex flex-col" style={{ borderLeft: '1px solid #F9F9F9' }}>
                {/* Collapse Button */}
                <div className="h-12 flex items-center justify-between px-4" style={{ borderBottom: '1px solid #F9F9F9' }}>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Intelligence
                  </span>
                  <button
                    onClick={() => setRightPanelOpen(false)}
                    className="p-1 hover:bg-gray-50 rounded-xl transition-colors"
                    aria-label="Collapse panel"
                  >
                    <ChevronRight size={14} className="text-gray-400" />
                  </button>
                </div>

                {/* Right Panel Content */}
                <div className="flex-1 overflow-y-auto">{rightPanel}</div>
              </aside>
            ) : (
              <aside className="w-14 bg-white min-h-[calc(100vh-4rem)] flex flex-col items-center py-4" style={{ borderLeft: '1px solid #F9F9F9' }}>
                <button
                  onClick={() => setRightPanelOpen(true)}
                  className="p-2 hover:bg-gray-50 rounded-xl transition-colors"
                  aria-label="Expand panel"
                >
                  <ChevronLeft size={18} className="text-gray-400" />
                </button>
              </aside>
            )}
          </>
        )}
      </div>
    </div>
  );
}