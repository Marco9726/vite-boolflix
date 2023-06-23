<script>
    import { store } from '../store.js';
    import axios from 'axios';
    export default {
        data(){
            return{
                store,
                path: 'http://image.tmdb.org/t/p/w1280/',
            }
        },
        methods: {
            setDate(){
                if(store.objectActive.release_date){
                    return store.objectActive.release_date.split('-')[0]
                }
                else{
                    return store.objectActive.first_air_date.split('-')[0]
                }
            }
        }
    }
</script>

<template>
    <!-- visibile solo se almeno un array contenga almeno un contenuto  -->
    <div id="jumbotron" v-if="store.arrayMovies.length > 0 || store.arraySeries.length > 0">
        <img :src="this.path+`${store.objectActive.backdrop_path}` " :alt="`${store.objectActive.original_title}`">
        <div class="my-container d-flex align-items-center text-white">
            <div id="descritions" class="w-50">
                <h1 v-if="(store.objectActive.title)">{{ store.objectActive.title }}</h1> 
                <h1 v-else >{{ store.objectActive.name }}</h1>
                <p>{{ store.objectActive.overview }}</p>
                <span class="date">{{ setDate() }}</span>
                <div class="cast">
                    <h5 class="mb-0 mt-3">Cast:</h5>
                    <ul class="d-flex p-0">
                        <!-- ciclo i 5 membri del cast dell'arrayCast  -->
                        <li v-for="(item,index) in store.arrayCast" :key="index" class="small-text">{{ item.name }}</li>
                    </ul>
                </div>
                <div class="genres">
                    <ul class="d-flex p-0">
                        <!-- ciclo i generi nell'arrayGenres  -->
                        <li v-for="(item,index) in store.arrayGenres" :key="index">{{ item.name }}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
  @use '../scss/generals.scss' as *;
  @use '../scss/partials/variables' as *;

  #jumbotron{
    height: 66vh;
    position: relative;
    img{
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }

    .my-container{
        position: absolute;
        bottom: 0;
        left: 3.5%;
        text-shadow: black 0 0 8px;
        #descritions{
            p{
                font-size: $small;
            }

            ul{
                li:not(:last-child){
                    margin-right: .5rem;
                    &::after{
                        content: ',';
                    }
                    
                }
            }
        }
    }
  }
    
</style>