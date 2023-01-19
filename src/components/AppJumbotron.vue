<script>
    import { store } from '../store.js'
    export default {
        data(){
            return{
                store,
                path: 'http://image.tmdb.org/t/p/w1280/'
            }
        }
    }
</script>

<template>
    <div id="jumbotron" v-if="store.arrayMovies.length > 0 || store.arraySeries.length > 0">
        <img :src="this.path+`${store.objectActive.backdrop_path}` " :alt="`${store.objectActive.original_title}`">
    </div>
</template>

<style lang="scss">
  @use '../scss/generals.scss' as *;

  #jumbotron{
    height: 66vh;
    img{
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }
  }
    
</style>