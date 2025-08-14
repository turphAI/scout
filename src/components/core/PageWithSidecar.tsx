'use client';

import React, { useState } from 'react';
import EnhancedSmartSuggestPanel from './EnhancedSmartSuggestPanel';

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
  children, 
  sidecarMode = 'sidecar',
  onSidecarClose,
  onPanelModeChange,
  isOverlayOpen = false
}: PageWithSidecarProps) {
  const [isRightPanel, setIsRightPanel] = useState(false);

  const handleSmartSuggestClose = () => {
    onSidecarClose?.();
  };

  // If sidecar mode is overlay, render children normally with overlay panel
  if (sidecarMode === 'overlay') {
    return (
      <>
        {children}
        {isOverlayOpen && (
          <EnhancedSmartSuggestPanel
            isOpen={isOverlayOpen}
            onClose={handleSmartSuggestClose}
            mode="overlay"
            isRightPanel={isRightPanel}
            onTogglePanel={() => setIsRightPanel(!isRightPanel)}
            onModeChange={onPanelModeChange}
          />
        )}
      </>
    );
  }

  // If sidecar mode is sidecar, just render children (sidecar handled separately)
  return <>{children}</>;
}
