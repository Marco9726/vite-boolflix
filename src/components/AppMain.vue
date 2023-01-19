<script>
    import { store } from '../store.js';
    import SliderMovies from './SliderMovies.vue';
    import SliderSeries from './SliderSeries.vue'
    export default {
        components:{
            SliderMovies,
            SliderSeries
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template lang="">
    <main>
        <div class="my-container">
            <h1 v-if="store.arrayMovies.length === 0 && store.arraySeries.length === 0" class="text-center text-white">
                COSA GUARDERAI STASERA?
            </h1>
            <!-- //visualizzo i titoli se i relativi array contengono elementi  -->
            <h3 v-if="store.arrayMovies.length > 0">Film</h3>
            <SliderMovies />
            <h3 v-if="store.arraySeries.length > 0">Serie TV</h3>
            <SliderSeries />
        </div>
    </main>
</template>

<style lang="scss" scoped>
  @use '../scss/generals.scss' as *;
  @use '../scss/partials/variables' as *;

    main{
        position: relative;
        bottom: 70px;

        h1{
            margin-top: 140px;
        }
    }
    
</style>