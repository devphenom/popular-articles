import { Header } from './header';
import { Period } from '../../types/article';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  period: Period;
  onPeriodChange: (period: Period) => void;
}

export function Layout({ children, period, onPeriodChange }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen mx-auto flex-col">
      {/* header component */}
      <Header period={period} onPeriodChange={onPeriodChange} />
      {/* main area */}
      <main className="flex-1">
        <div className="container py-6 mx-auto px-2 md:px-0">{children}</div>
      </main>
      {/* footer */}
      <footer className="border-t py-6">
        <div className="container  mx-auto flex flex-col items-center justify-center gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a href="https://github.com/devphenom" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">
              Abdulsamad Ali
            </a>
            . The source code is available on{' '}
            <a href="https://github.com/devphenom/popular-articles" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
