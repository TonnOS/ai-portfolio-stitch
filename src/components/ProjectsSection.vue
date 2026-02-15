<template>
  <section id="projects" class="min-h-screen p-6 relative">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center glitch-text">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = ref([
  { title: 'Neural Interface', description: 'Real-time brain-computer interface with 99.9% accuracy', tags: ['Rust', 'CUDA'] },
  { title: 'Autonomous Systems', description: 'Self-learning robotics platform for industrial automation', tags: ['Python', 'ROS'] },
  { title: 'Quantum ML', description: 'Quantum machine learning framework for optimization', tags: ['Qiskit', 'TensorFlow'] },
  { title: 'Edge AI', description: 'Lightweight neural networks for embedded devices', tags: ['C++', 'TinyML'] },
])
</script>
