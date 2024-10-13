export const linkProvider = () => {
  const defaultLinks = computed(() => [
    [{
      label: 'Beyza Yağmur',
      avatar: {
        src: 'https://github.com/byagmur.png', // github resmini otomatik olarak gösteriyor. Profil resmi yüklemek isteyebilirsin :)
      },
      click: () => window.open('https://github.com/TarikKilic248')
    }],
    [{
      label: 'Home',
      icon: 'i-heroicons-home',
      to: { name: 'home' }
    },{
      label: 'Todo List',
      icon: 'i-heroicons-calendar-days',
      to: { name: 'todo' }
    }, {
      label: 'Pokemon List',
      icon: 'i-heroicons-bug-ant',
      to: { name: 'pokemon' }
    },{
      label: 'Coming Soon..',
      disabled: true,
      icon: 'i-heroicons-question-mark-circle',
    },{
      class: 'flex items-center',
      label: isDarkMode.value ? 'Dark' : 'Light',
      icon: isDarkMode.value ? 'i-heroicons-moon' : 'i-heroicons-sun',
      click: () => toggleColorMode()
    }]
  ])

  return {
    defaultLinks,
  }
}