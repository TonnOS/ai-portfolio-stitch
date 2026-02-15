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
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
