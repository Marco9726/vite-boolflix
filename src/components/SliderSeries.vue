<script>
    import { store } from '../store.js'
    import Card from './Card.vue';
    import axios from 'axios';
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
             // metodo per settare la card cliccata come l'objectActive 
             saveObject(item){
                store.objectActive = item;
            },
            // metodo per mostrare il cast 
            showCast(){
                // compongo l'url per la chiamata api con l'id del media attivo 
                let urlCast = "https://api.themoviedb.org/3/movie/" + store.objectActive.id + "/credits?api_key=e3ed1f013cf6f646f124a113802c7b5c&language=en-US";
                // chiamata axios 
                axios.get(urlCast).then((response) => {
                    // setto la proprietà 'arrayCast' dello store con i primi 5 oggetti dell'array di risposta della chiamata 
                    store.arrayCast = response.data.cast.slice(0,5)
                })
            }
        }
        
    }
</script>
<template>
    <div class="slider d-flex">
        <!-- ciclo le card nell'array delle serie  e passo la prop 'card' a Card.vue -->
        <Card v-for="(item,index) in store.arraySeries" :key="index" :card="item" @click="saveObject(item),showCast()" />
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