import type { Todo } from "~/types"

export const useTodoStore = defineStore('todo', () => {

  const todoList = ref<Todo[]>() 
  // neden undefined olarak başlatıyorum?
  // çünkü bu fetch işleminin daha yapılmadığı anlamına gelir.
  // boş bir array olarak başlatsaydım; fetch işlemi daha yapılmadı mı yoksa yapıldı da boş mu geldi anlayamazdım.
  // bu şekilde kullanıcıya 'veriler yükleniyor' veya 'kayıtlı veri yok' yazılarını göstermemi sağlayan farkı elde ederim.
  // eğer fetch işleminde hata meydana geldi durumunu da veri üzerinden ele almak istiyorsan todoListin tipini <Todo[] | 'error'> yaparak catch durumunda 'error' stringini atayabilirsin.
  const fetchTodoList = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((_response) => _response.json())
      .then((_data) => todoList.value = _data)
  }

  return {
    todoList,
    fetchTodoList,
  }
})