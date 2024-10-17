<script setup lang="ts">
const props = defineProps<{
    label: string
}>() // bu hata eslint konfigrasyonundan kaynaklı bir problem kod çalışmaya sorunsuz devam edecektir.
</script>

<template>
<button
  class="group/button w-64 h-24 relative inline-flex items-center justify-center overflow-hidden rounded-md dark:bg-gray-950 bg-white backdrop-blur-lg px-6 py-2 text-base dark:text-white text-gray-950 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50"
>
  <span class="text-lg">{{ props.label }}</span>
  <div
    class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
  >
    <div class="relative h-full w-10 dark:bg-white/20 bg-gray-100"></div>
  </div>
</button>

</template>
