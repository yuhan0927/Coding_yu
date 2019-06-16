<template>
  <div>
    <counter />
    <counter-brother/>
  </div>
</template>

<script>
import counter from './components/Counter'
import counterBrother from './components/CounterBrother'

export default {
  name: 'App',
  components: {
    'counter':counter,
    'counter-brother':counterBrother
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
