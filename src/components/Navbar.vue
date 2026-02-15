<template>
  <nav class="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-dark/80 backdrop-blur-sm">
    <a href="#" class="flex items-center gap-2">
      <div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
        <span class="text-white font-bold text-xs">AI</span>
      </div>
      <span class="text-primary font-bold text-sm hidden sm:block">ARCHITECT</span>
    </a>
    <div class="flex gap-4 sm:gap-6">
      <a 
        v-for="link in links" 
        :key="link.href"
        class="text-xs font-medium uppercase tracking-widest text-primary/80 hover:text-primary transition-colors" 
        :href="link.href"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]
</script>