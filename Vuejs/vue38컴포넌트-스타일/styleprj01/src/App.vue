<template>
                <div id="app">
                    <h2>{{msg}}</h2>
                    <child1 />
                    <child2 />
                </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import child1  from "./components/Child1.vue"
import child2  from "./components/Child2.vue"

export default {
  name: 'App',
  components: {
    child1,
    child2,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
