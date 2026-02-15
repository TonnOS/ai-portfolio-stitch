<template>
  <section class="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <div class="absolute inset-0 cyber-grid z-0"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
    
    <nav class="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
          <span class="text-white font-bold text-xs">AI</span>
        </div>
      </div>
      <div class="flex gap-4">
        <a class="text-xs font-medium uppercase tracking-widest text-primary/80 hover:text-primary transition-colors" href="#projects">Projects</a>
        <a class="text-xs font-medium uppercase tracking-widest text-primary/80 hover:text-primary transition-colors" href="#contact">Contact</a>
      </div>
    </nav>
    
    <main class="relative z-20 flex flex-col items-center text-center max-w-lg">
      <div class="mb-4 py-1 px-3 bg-primary/20 border border-primary/30 rounded-full">
        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Neural Systems Online</span>
      </div>
      <h1 class="text-5xl md:text-6xl font-black mb-4 tracking-tighter leading-none glitch-text">
        AI<br/><span class="text-primary italic">ARCHITECT</span>
      </h1>
      <p class="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-10">
        Building the future of neural interfaces and autonomous systems through minimalist code and high-performance engineering.
      </p>
      <div class="flex flex-col gap-4 w-full px-8">
        <a href="#projects" class="bg-primary text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm neon-glow border border-primary/50 flex items-center justify-center gap-2 active:scale-95 transition-transform">
          View Projects
          <span class="material-icons text-sm">arrow_forward</span>
        </a>
        <a href="#contact" class="bg-transparent border border-primary/20 text-primary/80 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-primary/5 transition-colors">
          Contact Me
        </a>
      </div>
      <div class="mt-16 flex items-center gap-8">
        <div class="flex flex-col items-center gap-1">
          <span class="text-[10px] text-slate-500 uppercase tracking-widest">Latency</span>
          <span class="text-xs font-mono text-primary">12ms</span>
        </div>
        <div class="w-[1px] h-8 bg-primary/20"></div>
        <div class="flex flex-col items-center gap-1">
          <span class="text-[10px] text-slate-500 uppercase tracking-widest">Uptime</span>
          <span class="text-xs font-mono text-primary">99.9%</span>
        </div>
        <div class="w-[1px] h-8 bg-primary/20"></div>
        <div class="flex flex-col items-center gap-1">
          <span class="text-[10px] text-slate-500 uppercase tracking-widest">Build</span>
          <span class="text-xs font-mono text-primary">v2.4.0</span>
        </div>
      </div>
    </main>
  </section>
</template>
