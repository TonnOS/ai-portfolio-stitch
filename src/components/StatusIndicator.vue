<template>
  <div class="flex flex-col items-center gap-1">
    <span class="text-[10px] text-slate-500 uppercase tracking-widest">{{ label }}</span>
    <span class="text-xs font-mono text-primary">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true }
})
</script>