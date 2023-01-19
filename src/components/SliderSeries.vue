<script>
    import { store } from '../store.js'
    import CardSerie from './CardSerie.vue';
    export default {
        components:{
          CardSerie
        },
        data(){
            return{
                store
            }
        }
    }
</script>
<template>
    <div class="slider d-flex w-100">
        <!-- ciclo le card nell'array delle serie  e passo la prop 'card' a Card.vue -->
        <CardSerie v-for="(item,index) in store.arraySeries" :key="index" :card="item"/>
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