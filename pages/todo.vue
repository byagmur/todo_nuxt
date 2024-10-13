<script setup lang="ts">
definePageMeta({
  name: 'todo',
})

const todoStore = useTodoStore()

onMounted(async () => {
  await todoStore.fetchTodoList()
})
// GÖREV 2
// elindeki userId lere göre bu kullanıcıların resimlerini ve isimlerini göstermelisin https://randomuser.me/
// bunun için Todo tipini değiştirmen gerekecek yeni tipte nasıl bir yapı izleyeceğin çok önemli.
// opsiyonel: zorluk istiyorsan fakerapi kullanarak kullanıcı bilgilerini detaylandırabilirsin ama bu yola girersen todonun eklenme tarihini görmek ve bunu filtreleyebilmek isterim

// yapılan görevler, yapılmayan görevler ve tümünü göster filtresi olmalı
// aynı kullanıcının birden fazla taskı olabiliyor, kullanıcıya göre filtrelenebilmeli. nuxtui dan selectmenu kullanarak bu filtrelemeyi yapmalısın ve filtrelerken userların resimlerini de görmek istiyorum
</script>

<template>
  <NuxtLayout name="default">
    <div class="p-8 text-center 'söz uçar forecolor :D' flex h-full overflow-auto">
      {{ todoStore.todoList }}
    </div>
  </NuxtLayout>
</template>
