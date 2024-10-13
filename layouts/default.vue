<script setup lang="ts">
const { defaultLinks } = linkProvider()
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full p-8
    bg-gradient-to-r
    from-orange-400 via-purple-500 to-green-500
    dark:from-pink-600 dark:via-purple-700 dark:to-blue-600
    poppins
    "
  >
    <div
      class="flex flex-col w-full h-full dark:bg-gray-900 bg-gray-100 rounded-xl
    shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
    >
      <UHorizontalNavigation
        :links="defaultLinks"
        class="shadow-xl"
      />
      <div class="w-full h-full p-2 overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
