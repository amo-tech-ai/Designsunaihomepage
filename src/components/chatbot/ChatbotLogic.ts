export interface ChatResponse {
  text: string;
  action?: 'wizard' | 'booking' | 'contact';
}

const KNOWLEDGE_BASE = [
  {
    keywords: ['price', 'cost', 'expensive', 'rate', 'quote', 'fee', 'much'],
    response: "Our pricing depends on scope. MVPs typically range from $15k-$25k, while full enterprise AI Agents start at $45k. I recommend using our Project Wizard to get an exact estimate.",
    action: 'wizard'
  },
  {
    keywords: ['process', 'work', 'steps', 'timeline', 'long'],
    response: "Our 'Zero-to-One' process typically takes 8-10 weeks. 1. Discovery & Strategy. 2. UX/UI Design. 3. AI Development. 4. Deployment. Do you want to start a project brief?",
    action: 'wizard'
  },
  {
    keywords: ['agent', 'bot', 'chatbot', 'support'],
    response: "We build autonomous AI agents using GPT-4o and Claude 3.5 Sonnet. They can handle customer support, sales qualification, and internal workflows. Would you like to see a demo?",
    action: 'contact'
  },
  {
    keywords: ['mvp', 'startup', 'launch', 'new product'],
    response: "For startups, we offer a specialized 'Founder MVP' package designed to get you to market in under 6 weeks with a scalable architecture.",
    action: 'wizard'
  },
  {
    keywords: ['audit', 'consulting', 'strategy', 'help'],
    response: "We offer comprehensive AI Audits to identify automation opportunities in your business. This is a great starting point if you're unsure where to begin.",
    action: 'booking'
  },
  {
    keywords: ['hello', 'hi', 'hey', 'start'],
    response: "Hello! I'm the Sun AI Assistant. I can help you scope a project, estimate costs, or explain our services. What are you looking to build?",
    action: undefined
  },
  {
    keywords: ['contact', 'email', 'phone', 'call', 'talk'],
    response: "You can book a strategy call directly with our team, or start a project brief to get a faster response.",
    action: 'booking'
  }
];

export function getSmartResponse(input: string): ChatResponse {
  const lowerInput = input.toLowerCase();
  
  // Find best match based on keywords
  const match = KNOWLEDGE_BASE.find(entry => 
    entry.keywords.some(keyword => lowerInput.includes(keyword))
  );

  if (match) {
    return {
      text: match.response,
      action: match.action as any
    };
  }

  // Default fallback
  return {
    text: "I understand you're interested in AI. Could you be a bit more specific? For example, ask about 'pricing', 'process', or 'AI agents'.",
    action: undefined
  };
}
