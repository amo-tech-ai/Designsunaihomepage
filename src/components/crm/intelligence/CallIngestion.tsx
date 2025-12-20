import React, { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, FileAudio, Shield, Lock } from 'lucide-react';
import { Card } from '../../ui/design-system/Card';
import { Typography } from '../../ui/design-system/Typography';
import { Button } from '../../ui/design-system/Button';
import { cn } from '../../ui/design-system/utils';
import { useIntelligence } from '../../../context/IntelligenceContext';

interface CallIngestionProps {
  onUploadComplete: () => void;
}

export function CallIngestion({ onUploadComplete }: CallIngestionProps) {
  const { ingestCall } = useIntelligence();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      startUpload(files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      startUpload(e.target.files[0]);
    }
  };

  const startUpload = async (file: File) => {
    setIsUploading(true);
    // Use Context to ingest call (simulates API)
    await ingestCall(file);
    onUploadComplete();
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] w-full p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-8">
          <Typography variant="h2" className="text-3xl font-bold text-slate-900 mb-2">
            Import Call Recording
          </Typography>
          <Typography variant="body" className="text-slate-500">
            Upload audio or video files to generate actionable intelligence.
          </Typography>
        </div>

        <Card 
          variant="solid"
          className={cn(
            "relative overflow-hidden transition-all duration-300 border-2 border-dashed p-12 flex flex-col items-center justify-center text-center group bg-white",
            isDragging ? "border-indigo-500 bg-indigo-50/50 scale-[1.02]" : "border-slate-200 hover:border-slate-300",
            isUploading && "pointer-events-none opacity-50"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            accept="audio/*,video/*"
            onChange={handleFileSelect}
          />

          <div className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300",
            isDragging ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
          )}>
            {isUploading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <UploadCloud className="w-10 h-10" />
              </motion.div>
            ) : (
              <UploadCloud className="w-10 h-10" />
            )}
          </div>

          <Typography variant="h4" className="font-semibold text-slate-900 mb-2">
            {isUploading ? "Uploading..." : "Drag & Drop Recording"}
          </Typography>
          
          <Typography variant="body" className="text-slate-400 mb-8 max-w-xs mx-auto">
            Support for MP3, WAV, M4A, and MP4. <br/>
            Files are processed securely.
          </Typography>

          <Button 
            variant="primary" 
            onClick={() => document.getElementById('file-upload')?.click()}
            disabled={isUploading}
          >
            Select File
          </Button>

          {/* Privacy Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <Shield className="w-3 h-3" />
            <span className="flex items-center gap-1">
              Secure <span className="text-slate-300">•</span> Private
            </span>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-6 text-slate-400">
           <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide">
              <Lock className="w-3 h-3" /> End-to-End Encrypted
           </div>
        </div>
      </motion.div>
    </div>
  );
}
