<template>
  <div id="app">
    <router-view style="flex: 1 1 auto;"/>
    <!-- <Footer v-if="$route.name !== 'PageNoteFound'"></Footer> -->
  </div>
</template>

<script>
// import Footer from '@/components/Footer'

export default {
  name: 'app'
  // components: {
  //   Footer
  // }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 50px);
  width: 96.5%;
  background: #e9e9e9;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 60px;
  background: url(img/1.jpg);
  background-size: cover;
  background-position: center;
}
body {
  margin: 0;
  padding: 0;
}
</style>
