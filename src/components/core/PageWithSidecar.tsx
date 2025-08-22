'use client';

import React from 'react';

interface PageWithSidecarProps {
  children: React.ReactNode;
  showSidecar?: boolean;
  sidecarMode?: 'overlay' | 'sidecar';
  onOverlayTrigger?: () => void;
  onSidecarClose?: () => void;
  onPanelModeChange?: (mode: 'overlay' | 'sidecar') => void;
  isOverlayOpen?: boolean;
}

export default function PageWithSidecar({ 
  children
}: PageWithSidecarProps) {
  // Render children normally - panel handling is done in the parent component
  return <>{children}</>;
}
