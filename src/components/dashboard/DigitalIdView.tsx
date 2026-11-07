import React from 'react';
import { LanyardCard } from '../ui/lanyard-card';

interface DigitalIdViewProps {
  className?: string;
  fullscreen?: boolean;
  onNavigateTab?: (tab: string) => void;
}

export default function DigitalIdView({
  className = '',
  fullscreen = false,
  onNavigateTab,
}: DigitalIdViewProps) {
  return (
    <LanyardCard
      className={className}
      fullscreen={fullscreen}
      onOpenPlaybook={() => {
        if (onNavigateTab) {
          onNavigateTab('Student Guide');
        }
      }}
    />
  );
}
