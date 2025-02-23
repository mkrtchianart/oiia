'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function WebAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Dynamically import WebApp to avoid SSR issues
      import('@twa-dev/sdk').then((WebAppModule) => {
        const WebApp = WebAppModule.default;
        // Initialize the Web App
        WebApp.ready();

        // Set background color
        WebApp.setBackgroundColor('#15803d');

        // Lock orientation to portrait mode
        WebApp.lockOrientation();

        // Expand the app
        WebApp.expand();
        // Request full-screen mode
        WebApp.requestFullscreen();

        // Disable vertical swipes
        WebApp.disableVerticalSwipes();

        // Enable closing confirmation
        WebApp.enableClosingConfirmation();

        // Show back button only if not on home page
        if (pathname !== '/') {
          WebApp.BackButton.show();
        } else {
          WebApp.BackButton.hide();
        }

        // Handle back button clicks
        WebApp.onEvent('backButtonClicked', () => {
          window.history.back();
        });
      });
    }
  }, [pathname]); // Add pathname as dependency

  return (
    <div>
      {children}
    </div>
  );
} 