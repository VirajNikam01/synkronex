// Updated layout component
// Removed unused imports to fix lint errors
import React from 'react';
import Navbar from './navbar';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Footer from './Footer';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex w-full flex-col min-h-screen p-3 bg-background text-foreground">
        <Navbar />

        <div className="w-full max-w-7xl mx-auto py-2 sm:py-3 px-2 sm:px-5">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default layout;
