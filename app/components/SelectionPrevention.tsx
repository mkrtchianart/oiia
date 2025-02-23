'use client';

import { useEffect } from 'react';

export function SelectionPrevention() {
  useEffect(() => {
    // Prevent right click
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    // Prevent text selection on mobile
    const handleSelectStart = (e: Event) => {
      if (!(e.target as HTMLElement).matches('input, textarea')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return null;
} 