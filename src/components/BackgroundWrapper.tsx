'use client';

import {NeuralNetworkBg} from '@/components/ui/neural-network-bg';

export function BackgroundWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-100/30 via-background to-green-50/20 dark:from-green-950/20 dark:via-zinc-950 dark:to-zinc-950 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/15 via-transparent to-transparent dark:from-green-500/10 -z-10" />

      {/* Subtle grid pattern for light mode */}
      <div className="fixed inset-0 opacity-10 dark:opacity-20 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Neural Network Animation */}
      <NeuralNetworkBg />

      {/* Content */}
      {children}
    </div>
  );
}
