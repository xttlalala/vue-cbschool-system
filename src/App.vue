<template>
  <div id="app">
    <myheader />
    <router-view id="router" v-bind:key="$route.path" />
    <myfooter />
    <alertdialog />
  </div>
</template>

<script>
export default {
  components: {
    alertdialog: () => import("@/components/AlertDialog.vue"),
    myheader: () => import("@/views/Header.vue"),
    // mycontent: () => import("@/views/HomePage.vue"),
    myfooter: () => import("@/views/Footer.vue")
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
