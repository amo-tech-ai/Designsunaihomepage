import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Filter, 
  Download, 
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  Building2,
  Sparkles,
  Loader2,
  Check
} from 'lucide-react';
import { Card } from '../../ui/design-system/Card';
import { Typography } from '../../ui/design-system/Typography';
import { Button } from '../../ui/design-system/Button';
import { Badge } from '../../ui/design-system/Badge';
import { cn } from '../../ui/design-system/utils';
import { useIntelligence } from '../../../context/IntelligenceContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '../../ui/dropdown-menu';

export function SearchResults({ onViewBrief }: { onViewBrief?: () => void }) {
  const { searchResults, currentQuery, isThinking, selectLead } = useIntelligence();
  const [filterType, setFilterType] = useState<'relevance' | 'budget' | 'location' | 'date'>('relevance');

  // Helper to parse budget string (e.g. "$75k")
  const parseBudget = (str: string) => {
    const num = parseInt(str.replace(/[^0-9]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  const handleResultClick = (leadId: number) => {
    selectLead(leadId);
    onViewBrief?.();
  };

  const filteredResults = useMemo(() => {
    if (!searchResults) return [];
    
    const results = [...searchResults];
    
    switch (filterType) {
      case 'budget':
        return results.sort((a, b) => parseBudget(b.budget) - parseBudget(a.budget));
      case 'location':
        // Sort by location alphabetically for now
        return results.sort((a, b) => a.location.localeCompare(b.location));
      case 'date':
        // Simple string comparison for mock dates ("2 days ago")
        // In production, this would parse real timestamps
        return results.sort((a, b) => a.lastContact.localeCompare(b.lastContact));
      case 'relevance':
      default:
        // Already sorted by matchScore in context
        return results;
    }
  }, [searchResults, filterType]);

  if (isThinking) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-8 h-8 text-indigo-500" />
        </motion.div>
        <div className="text-slate-500 font-medium animate-pulse">
          Analyzing {currentQuery ? `"${currentQuery}"` : 'query'}...
        </div>
      </div>
    );
  }

  // Fallback if no query or no results
  if (!searchResults || searchResults.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8 pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium mb-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
           <Sparkles className="w-12 h-12 text-slate-300 mx-auto mb-4" />
           <Typography variant="h3" className="text-slate-900 mb-2">No results found</Typography>
           <p className="text-slate-500 max-w-md mx-auto">
             Try adjusting your search query. We couldn't find any leads matching "{currentQuery}".
           </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium mb-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <div className="flex items-baseline gap-3">
             <Typography variant="h2" className="text-2xl font-bold text-slate-900">
               "{currentQuery}"
             </Typography>
             <span className="text-slate-400 font-medium">{searchResults.length} results found</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" leftIcon={<Filter className="w-4 h-4" />}>
                Filter {filterType !== 'relevance' && `(${filterType})`}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Sort Results By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setFilterType('relevance')}>
                <span className="flex-1">Relevance (AI)</span>
                {filterType === 'relevance' && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('budget')}>
                <span className="flex-1">Budget (High to Low)</span>
                {filterType === 'budget' && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('location')}>
                <span className="flex-1">Location</span>
                {filterType === 'location' && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('date')}>
                <span className="flex-1">Last Contact</span>
                {filterType === 'date' && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>Export</Button>
          <Button variant="primary">Save Segment</Button>
        </div>
      </div>

      {/* Results Table (Desktop) */}
      <Card className="hidden md:block overflow-hidden border-slate-200 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500">
            <tr>
              <th className="px-6 py-4">Lead Name</th>
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Budget</th>
              <th className="px-6 py-4 w-1/4">AI Match Logic</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredResults.map((result) => (
              <tr 
                key={result.id} 
                className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                onClick={() => handleResultClick(result.id)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                      {result.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{result.name}</div>
                      <div className="text-slate-500 text-xs">{result.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    {result.company}
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{result.location}</td>
                <td className="px-6 py-4 font-medium text-slate-900">{result.budget}</td>
                <td className="px-6 py-4">
                  {result.matchReason && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-medium">
                      <Sparkles className="w-3 h-3 text-emerald-500" />
                      {result.matchReason}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-indigo-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-indigo-600 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {filteredResults.map((result) => (
          <Card 
            key={result.id} 
            className="p-5 flex flex-col gap-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleResultClick(result.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  {result.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{result.name}</div>
                  <div className="text-sm text-slate-500">{result.role} at {result.company}</div>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">{result.budget}</Badge>
            </div>
            
            <div className="flex flex-col gap-2 text-sm text-slate-600">
               <div className="flex items-center gap-2">
                 <Building2 className="w-4 h-4 text-slate-400" /> {result.location}
               </div>
               <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4 text-slate-400" /> Last contacted {result.lastContact}
               </div>
            </div>

            <div className="mt-2 pt-3 border-t border-slate-100">
               {result.matchReason && (
                 <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 mb-4">
                    <Sparkles className="w-3 h-3" />
                    {result.matchReason}
                 </div>
               )}
               <div className="grid grid-cols-2 gap-2">
                 <Button variant="outline" size="sm" className="w-full">Email</Button>
                 <Button variant="outline" size="sm" className="w-full">Call</Button>
               </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
