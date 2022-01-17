<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default { name: "App" }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300;400;700&family=Poppins:wght@300;400;500;700&display=swap');

html, body, * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Aleo", sans-serif;
  font-weight: 500;
}

html, body {
  width: 100%;
  height: 100vh;
}

.app {
  width: 100%;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
}
</style>
