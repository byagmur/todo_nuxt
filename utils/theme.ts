export const isDarkMode = computed(() => useColorMode().value === 'dark')
export const toggleColorMode = () => {
  const colorMode = useColorMode()
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}