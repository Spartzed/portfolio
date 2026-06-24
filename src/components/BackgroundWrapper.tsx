'use client';

import {NeuralNetworkBg} from '@/components/ui/neural-network-bg';

export function BackgroundWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background gradient - same as Hero */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-950/20 via-background to-background dark:via-zinc-950 dark:to-zinc-950 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent -z-10" />

      {/* Neural Network Animation */}
      <NeuralNetworkBg />

      {/* Content */}
      {children}
    </div>
  );
}
