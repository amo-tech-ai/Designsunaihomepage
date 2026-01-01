"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";
import { RightPanelTabs, STANDARD_AI_TABS } from "../components/RightPanelTabs";
import { FolderKanban, Calendar, TrendingUp, Plus } from "lucide-react";

export default function ProjectsPage() {
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
      defaultTab="workflows"
      tabs={[
        {
          ...STANDARD_AI_TABS.agents,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-white" style={{ border: '1px solid #EEEEEE' }}>
                <h4 className="text-sm font-light text-black mb-1">
                  Project Manager Agent
                </h4>
                <p className="text-xs font-light text-zinc-600 italic">
                  Tracking 3 projects, 47 tasks
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
                  Task Auto-Assignment
                </h4>
                <p className="text-xs font-light text-zinc-600 mb-2 italic">
                  Based on team capacity and skills
                </p>
                <p className="text-xs text-emerald-600 font-light">32 tasks assigned</p>
              </div>
            </div>
          ),
        },
        {
          ...STANDARD_AI_TABS.workflows,
          content: (
            <div className="space-y-3">
              <div className="p-4 rounded-[32px] bg-amber-50" style={{ border: '1px solid #FEF3C7' }}>
                <h4 className="text-sm font-light text-black mb-1">
                  Project Initiation
                </h4>
                <p className="text-xs font-light text-zinc-600">
                  Blueprint approval → Team assignment → Kickoff
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
                <h4 className="text-sm font-light text-black mb-1">Team Member</h4>
                <p className="text-xs font-light text-zinc-600">
                  Assigned → In Progress → Review → Complete
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
                  Similar CRM project delivery
                </p>
                <p className="text-xs text-emerald-600 font-light">
                  Timeline: 12 weeks → 8 weeks
                </p>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  const projects = [
    {
      id: 1,
      name: "Phase 1: Core CRM",
      status: "In Progress",
      progress: 65,
      dueDate: "Dec 30, 2024",
      team: 5,
      tasks: { total: 24, completed: 16 },
    },
    {
      id: 2,
      name: "Phase 2: WhatsApp Integration",
      status: "Planning",
      progress: 15,
      dueDate: "Jan 15, 2025",
      team: 3,
      tasks: { total: 18, completed: 3 },
    },
    {
      id: 3,
      name: "Phase 3: Analytics Dashboard",
      status: "Not Started",
      progress: 0,
      dueDate: "Feb 1, 2025",
      team: 4,
      tasks: { total: 22, completed: 0 },
    },
  ];

  return (
    <DashboardLayout
      topStrip={topStrip}
      rightPanel={rightPanel}
      rightPanelDefaultOpen={false}
    >
      <div className="p-12 space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl text-black mb-2 font-light" style={{ fontFamily: 'var(--font-heading)' }}>Projects</h1>
            <p className="text-sm font-light text-zinc-600">
              Track project progress and deliverables
            </p>
          </div>
          <button className="h-12 px-6 bg-black text-white rounded-full hover:bg-zinc-900 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest">
            <Plus size={14} />
            <span>New Project</span>
          </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[40px] p-10 hover:shadow-sm transition-all cursor-pointer"
              style={{ border: '1px solid #EEEEEE' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <FolderKanban size={18} className="text-zinc-400 mt-1" />
                  <div>
                    <h3 className="text-xl text-black mb-2 font-light" style={{ fontFamily: 'var(--font-heading)' }}>
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-6 text-sm font-light text-zinc-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>Due {project.dueDate}</span>
                      </div>
                      <span>·</span>
                      <span>{project.team} team members</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-full ${
                    project.status === "In Progress"
                      ? "bg-indigo-50 text-indigo-600"
                      : project.status === "Planning"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-gray-50 text-zinc-600"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-light text-zinc-600 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Progress</span>
                  <span className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Task Stats */}
              <div className="flex items-center gap-8 text-sm font-light">
                <div className="text-zinc-600">
                  Tasks:{" "}
                  <span className="text-black">
                    {project.tasks.completed}/{project.tasks.total}
                  </span>
                </div>
                <div className="text-zinc-600">
                  Remaining:{" "}
                  <span className="text-black">
                    {project.tasks.total - project.tasks.completed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <FolderKanban size={14} />
              <span>Total Projects</span>
            </div>
            <div className="text-5xl text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>3</div>
            <div className="text-xs font-light text-zinc-600">1 in progress</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <TrendingUp size={14} />
              <span>Avg Completion</span>
            </div>
            <div className="text-5xl text-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>27%</div>
            <div className="text-xs text-emerald-600 font-light">On track</div>
          </div>

          <div className="bg-white rounded-[40px] p-10" style={{ border: '1px solid #EEEEEE' }}>
            <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Calendar size={14} />
              <span>Next Milestone</span>
            </div>
            <div className="text-lg text-black mb-1 font-light" style={{ fontFamily: 'var(--font-heading)' }}>Phase 1 Done</div>
            <div className="text-xs font-light text-zinc-600">Dec 30, 2024</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
