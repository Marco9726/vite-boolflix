<script>
    import { store } from '../store.js'
    import Card from './Card.vue';
    export default {
        components:{
          Card
        },
        data(){
            return{
                store
            }
        },
        
    }
</script>
<template>
    <div class="slider d-flex">
        <!-- ciclo le card nell'array delle serie  e passo la prop 'card' a Card.vue -->
        <Card v-for="(item,index) in store.arraySeries" :key="index" :card="item" />
    </div>
</template>
<style lang="scss">
  @use '../scss/generals.scss' as *;

    .slider{
      overflow-x:scroll;
      margin-bottom: 3rem;
      flex-wrap: nowrap;
    }
    
</style>