<template>
  <main
    class="text-center bg-gray-100 w-screen h-screen px-4 pt-5 pb-10 text-gray-700"
    dark="bg-purple-700"
    sm="block pt-7"
  >
    <NavBar />
    <router-view />
  </main>
</template>

<style scoped>
.hamburguer{
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
