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
        methods: {
            // saveObject(item){
            //     store.
            // }
        },
    }
</script>

<template>
    <div class="slider w-100 d-flex">
        <!-- ciclo le card nell'array dei film  e passo la prop 'card' a Card.vue -->
        <Card v-for="(item,index) in store.arrayMovies" :key="index" :card="item" @click="saveObject(item)" />
    </div>
</template>

<style lang="scss">
  @use '../scss/generals.scss' as *;

    .slider{
      overflow-x:auto;
      margin-bottom: 3rem!important;
      flex-wrap: nowrap;
    }
    
</style>