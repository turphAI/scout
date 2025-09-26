'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { ConversationalButton } from '@/components/ui/conversational-button';

interface ConversationalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  allowWrapping?: boolean;
}

export default function ConversationalButtonWithIcon({ 
  children, 
  onClick, 
  className = "",
  allowWrapping = false
}: ConversationalButtonProps) {
  return (
    <ConversationalButton
      variant={allowWrapping ? "conversationalWrapped" : "conversational"}
      size={allowWrapping ? "wrapped" : "default"}
      onClick={onClick}
      className={className}
    >
      <Sparkles className="h-4 w-4 text-[#cf89e1] mr-2 flex-shrink-0" />
      <span className={allowWrapping ? "text-left" : ""}>{children}</span>
    </ConversationalButton>
  );
}
