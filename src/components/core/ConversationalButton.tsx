'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { ConversationalButton } from '@/components/ui/conversational-button';

interface ConversationalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ConversationalButtonWithIcon({ 
  children, 
  onClick, 
  className = "" 
}: ConversationalButtonProps) {
  return (
    <ConversationalButton
      variant="conversational"
      onClick={onClick}
      className={`px-4 py-2 ${className}`}
    >
      <Sparkles className="h-4 w-4 text-[#cf89e1] mr-2" />
      <span>{children}</span>
    </ConversationalButton>
  );
}
