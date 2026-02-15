<template>
  <section id="projects" class="min-h-screen p-6 py-24 relative">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-2 text-center glitch-text">Projects</h2>
      <p class="text-slate-400 text-center mb-12">Selected works in AI, ML, and systems engineering</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects.js'
</script>