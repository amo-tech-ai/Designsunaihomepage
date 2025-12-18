import React from 'react';
import { Typography } from './Typography';
import { Button } from './Button';
import { Card } from './Card';
import { AlertCircle, CheckCircle, PackageOpen, Loader2 } from 'lucide-react';

// --- Types ---
interface StateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

// --- Empty State ---
export function EmptyState({ title, description, actionLabel, onAction, className }: StateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 md:p-12 ${className}`}>
      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
        <PackageOpen className="w-8 h-8 text-slate-400" />
      </div>
      <Typography variant="h3" className="text-slate-900 mb-2">{title}</Typography>
      <Typography variant="body" className="text-slate-500 max-w-sm mb-8">{description}</Typography>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}

// --- Error State ---
export function ErrorState({ title, description, actionLabel, onAction, className }: StateProps) {
  return (
    <Card variant="outline" className={`border-red-100 bg-red-50/50 flex flex-col items-center text-center p-8 ${className}`}>
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <AlertCircle className="w-6 h-6 text-red-500" />
      </div>
      <Typography variant="h4" className="text-red-900 mb-2">{title}</Typography>
      <Typography variant="body-sm" className="text-red-700 max-w-sm mb-6">{description}</Typography>
      {actionLabel && onAction && (
        <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-100 hover:border-red-300" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Card>
  );
}

// --- Success State ---
export function SuccessState({ title, description, actionLabel, onAction, className }: StateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 ${className}`}>
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-emerald-100 rounded-full blur-xl opacity-50 animate-pulse" />
        <div className="relative w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
      </div>
      <Typography variant="h3" className="text-slate-900 mb-2">{title}</Typography>
      <Typography variant="body" className="text-slate-500 max-w-sm mb-8">{description}</Typography>
      {actionLabel && onAction && (
        <Button variant="primary" className="bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

// --- Loading State ---
export function LoadingState({ title = "Loading...", className }: { title?: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center p-12 ${className}`}>
      <Loader2 className="w-8 h-8 text-orange-500 animate-spin mb-4" />
      <Typography variant="body-sm" className="text-slate-400 font-medium tracking-wide uppercase">{title}</Typography>
    </div>
  );
}
