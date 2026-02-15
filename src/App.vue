<template>
  <div class="bg-dark text-slate-100 min-h-screen">
    <div class="scan-line" aria-hidden="true"></div>
    <Navbar />
    <main>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// Lazy load components for better performance
const Navbar = defineAsyncComponent(() => import('./components/Navbar.vue'))
const HeroSection = defineAsyncComponent(() => import('./components/HeroSection.vue'))
const ProjectsSection = defineAsyncComponent(() => import('./components/ProjectsSection.vue'))
const ContactSection = defineAsyncComponent(() => import('./components/ContactSection.vue'))
const FooterSection = defineAsyncComponent(() => import('./components/FooterSection.vue'))
</script>