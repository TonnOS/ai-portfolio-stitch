<template>
  <section class="min-h-screen flex flex-col items-center justify-center p-6 pt-24 relative overflow-hidden">
    <div class="absolute inset-0 cyber-grid z-0" aria-hidden="true"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
    
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
      <div class="flex flex-col gap-4 w-full max-w-xs">
        <a href="#projects" class="bg-primary text-white py-4 px-6 rounded-lg font-bold uppercase tracking-widest text-sm neon-glow border border-primary/50 flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-primary/90">
          View Projects
          <span class="material-icons text-sm" aria-hidden="true">arrow_forward</span>
        </a>
        <a href="#contact" class="bg-transparent border border-primary/20 text-primary py-4 px-6 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-primary/5 transition-colors">
          Contact Me
        </a>
      </div>
      
      <!-- Status indicators -->
      <div class="mt-16 flex items-center gap-8" aria-label="System status">
        <StatusIndicator label="Latency" value="12ms" />
        <Divider />
        <StatusIndicator label="Uptime" value="99.9%" />
        <Divider />
        <StatusIndicator label="Build" value="v2.4.0" />
      </div>
    </main>
  </section>
</template>

<script setup>
import StatusIndicator from './StatusIndicator.vue'
import Divider from './Divider.vue'
</script>