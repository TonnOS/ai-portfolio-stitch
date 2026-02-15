<template>
  <div class="bg-slate-900/50 border border-primary/20 rounded-lg p-6 neon-glow hover:border-primary/40 transition-colors">
    <h3 class="text-xl font-bold text-primary mb-2">{{ title }}</h3>
    <p class="text-slate-400 text-sm">{{ description }}</p>
    <div class="mt-4 flex gap-2">
      <span v-for="tag in tags" :key="tag" class="text-xs px-2 py-1 bg-primary/20 rounded">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'tags'])
</script>
