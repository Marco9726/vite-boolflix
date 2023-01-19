<script>
  import AppHeader from './components/AppHeader.vue';
  import AppJumbotron from './components/AppJumbotron.vue'
  import AppMain from './components/AppMain.vue';
  export default {
    components:{
      AppHeader,
      AppJumbotron,
      AppMain
    }
  }
</script>

<template>
  <AppHeader/>
  <AppJumbotron/>
  <AppMain />
</template>
<style lang="scss">
  @use './scss/generals.scss' as *;

</style>