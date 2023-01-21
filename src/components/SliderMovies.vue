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
            // metodo per mostrare il cast e i generi
            showInfo(){
                // CAST 
                // compongo l'url per la chiamata api con l'uri ,l'id del media attivo e la mia APIkey
                let urlCast = store.uri + 'movie/' + store.objectActive.id + '/credits' + store.myApiKey;
                // chiamata axios 
                axios.get(urlCast).then((response) => {
                    // setto la proprietà 'arrayCast' dello store con i primi 5 oggetti dell'array di risposta della chiamata 
                    store.arrayCast = response.data.cast.slice(0,5)
                });
                // GENERI 
                // compongo l'url per la chiamata api con l'uri ,l'id del media attivo e la mia APIkey
                let urlGenres = store.uri + 'movie/' + store.objectActive.id + store.myApiKey;
                //chiamata axios
                axios.get(urlGenres).then((response) => {
                    // setto la proprietà 'arrayGenres' dello store con le stringhe contenute nell'array della proprietà 'genres'
                    store.arrayGenres = response.data.genres
                })
            }
        }
    }
</script>

<template>
    <div class="slider w-100 d-flex">
        <!-- ciclo le card nell'array dei film  e passo la prop 'card' a Card.vue -->
        <Card v-for="(item,index) in store.arrayMovies" :key="index" :card="item" @click="saveObject(item),showInfo()" />
    </div>
</template>

<style lang="scss" >
  @use '../scss/generals.scss' as *;

    .slider{
      overflow-x:auto;
      margin-bottom: 3rem!important;
      flex-wrap: nowrap;
    }
    
</style>