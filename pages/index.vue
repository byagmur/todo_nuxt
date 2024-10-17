<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

// GÖREV 'istediğin zaman yapabilirsin'
// bu sayfa için görevin kendini burda başarılı bir şekilde tanıtman
// değerlendireceğim şey tasarım ve doğru component kullanımı olacak
</script>

<template>
  <NuxtLayout>
    <div class="w-full h-full flex justify-center items-center gap-6">
      <ButtonGiant label="Todo List" @click="navigateTo({ name: 'todo' })" />
      <ButtonGiant label="Pokemon List" @click="navigateTo({ name: 'pokemon' })" />
    </div>
  </NuxtLayout>
</template>
