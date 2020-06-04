<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body, html, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

</style>
