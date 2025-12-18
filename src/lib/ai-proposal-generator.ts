import { WizardFormData } from './schemas';

export interface AIProposal {
  title: string;
  summary: string;
  timeline: string;
  budgetRange: string;
  phases: Array<{ name: string; duration: string; status: string }>;
  deliverables: number;
  aiInsights: {
    nextStep: string;
    risks: string[];
    recommendations: string[];
  };
  generatedDeliverables: any[]; // Using any[] for now to match structure, will define proper type
}

export function generateProposal(data: WizardFormData): AIProposal {
  const isChatbot = data.services.includes('Custom Chatbot') || data.services.includes('AI Chatbot');
  const isWebApp = data.services.includes('AI Web App');
  const isAutomation = data.services.includes('Workflow Automation');
  
  // Default values
  let title = "Custom AI Solution";
  let summary = `A tailored solution to help ${data.companyName || 'your company'} achieve its goals of ${data.goals.join(', ') || 'growth and efficiency'}.`;
  let timeline = "4-6 weeks";
  let budgetRange = `$${data.budget.toLocaleString()} - $${(data.budget * 1.5).toLocaleString()}`;
  
  const phases = [
    { name: 'Discovery & Strategy', duration: '1 week', status: 'upcoming' },
    { name: 'Core Development', duration: '2-3 weeks', status: 'upcoming' },
    { name: 'Testing & Handoff', duration: '1 week', status: 'upcoming' },
  ];

  const risks = ['Data availability for model training'];
  const recommendations = ['Start with a proof-of-concept (MVP)'];
  
  // Generate Deliverables based on type
  const generatedDeliverables = [];
  const today = new Date();
  const addDays = (days: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  };

  // Common Deliverables
  generatedDeliverables.push({
    id: 'd-init-1',
    title: 'Project Architecture Document',
    description: 'Technical blueprint outlining the system architecture, stack, and data flow.',
    category: 'backend',
    status: 'pending',
    dueDate: addDays(7),
    owner: 'Solution Architect',
    progress: 0,
    linkedRequirements: ['System Architecture'],
    createdAt: today.toISOString().split('T')[0]
  });

  generatedDeliverables.push({
    id: 'd-init-2',
    title: 'UI/UX Wireframes',
    description: 'Low-fidelity wireframes for key user journeys.',
    category: 'ui-ux',
    status: 'pending',
    dueDate: addDays(10),
    owner: 'Design Team',
    progress: 0,
    createdAt: today.toISOString().split('T')[0]
  });

  // Logic to customize based on inputs
  if (isChatbot && isWebApp) {
    title = "Integrated AI Chatbot & Web Platform";
    timeline = "8-12 weeks";
    summary = `A comprehensive web application featuring an embedded, context-aware AI chatbot designed to automate customer interactions and streamline ${data.goals[0] || 'operations'}.`;
    phases[1].duration = "6-8 weeks";
    risks.push("Integration complexity with existing systems");
    recommendations.push("Implement a knowledge base CMS for easy updates");
    
    generatedDeliverables.push({
      id: 'd-chat-1',
      title: 'Chatbot Conversation Flow',
      description: 'Detailed diagram of conversation paths and fallback logic.',
      category: 'ai',
      status: 'pending',
      dueDate: addDays(14),
      owner: 'AI Engineer',
      progress: 0,
      createdAt: today.toISOString().split('T')[0]
    });
     generatedDeliverables.push({
      id: 'd-web-1',
      title: 'Dashboard Frontend Implementation',
      description: 'React-based admin dashboard for managing chatbot logs.',
      category: 'ui-ux',
      status: 'pending',
      dueDate: addDays(30),
      owner: 'Frontend Dev',
      progress: 0,
      createdAt: today.toISOString().split('T')[0]
    });

  } else if (isChatbot) {
    title = "Intelligent AI Chatbot Assistant";
    timeline = "4-6 weeks";
    summary = `A specialized AI assistant trained on your specific business data to handle inquiries, automate support, and drive engagement 24/7.`;
    phases[1].duration = "3-4 weeks";
    recommendations.push("Connect to your CRM for lead capture");

    generatedDeliverables.push({
      id: 'd-chat-core',
      title: 'AI Model Fine-tuning',
      description: 'Training the LLM on your provided company data.',
      category: 'ai',
      status: 'pending',
      dueDate: addDays(21),
      owner: 'AI Engineer',
      progress: 0,
      createdAt: today.toISOString().split('T')[0]
    });

  } else if (isWebApp) {
    title = "AI-Powered Web Application";
    timeline = "8-10 weeks";
    summary = `A modern, scalable web application leveraging AI for content generation, personalization, or data analysis, tailored to ${data.companyName}.`;
    phases[1].duration = "5-7 weeks";
    
    generatedDeliverables.push({
      id: 'd-app-1',
      title: 'Frontend Component Library',
      description: 'Reusable React components based on the design system.',
      category: 'ui-ux',
      status: 'pending',
      dueDate: addDays(14),
      owner: 'Frontend Team',
      progress: 0,
      createdAt: today.toISOString().split('T')[0]
    });
     generatedDeliverables.push({
      id: 'd-app-2',
      title: 'API Integration Layer',
      description: 'Backend services to handle data processing and AI calls.',
      category: 'backend',
      status: 'pending',
      dueDate: addDays(25),
      owner: 'Backend Team',
      progress: 0,
      createdAt: today.toISOString().split('T')[0]
    });

  } else if (isAutomation) {
    title = "Business Process Automation Suite";
    timeline = "3-5 weeks";
    summary = `A set of intelligent workflows designed to eliminate manual data entry and streamline communication across your existing tool stack.`;
    phases[1].duration = "2-3 weeks";
    risks.push("API rate limits on third-party services");

    generatedDeliverables.push({
      id: 'd-auto-1',
      title: 'Workflow Logic Map',
      description: 'Documentation of triggers, actions, and conditions.',
      category: 'automation',
      status: 'pending',
      dueDate: addDays(5),
      owner: 'Automation Expert',
      progress: 0,
      createdAt: today.toISOString().split('T')[0]
    });
  }

  // Budget Adjustments
  if (data.budget > 20000) {
    phases.unshift({ name: 'Technical Architecture', duration: '1 week', status: 'upcoming' });
    phases.push({ name: 'Post-Launch Support', duration: '2 weeks', status: 'upcoming' });
  }

  return {
    title,
    summary,
    timeline,
    budgetRange,
    phases,
    deliverables: generatedDeliverables.length,
    generatedDeliverables,
    aiInsights: {
      nextStep: "Schedule a 15-min strategy call to refine these requirements.",
      risks,
      recommendations
    }
  };
}
