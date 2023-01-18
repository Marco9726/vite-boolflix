<script>
    import { store } from '../store.js';
    import Slider from './Slider.vue';
    export default {
        components:{
            Slider    
        },
        data(){
            return{
                store
            }
        },
        

    }
</script>

<template lang="">
    <main>
        <div class="my-container">
            <h3>Film</h3>
            <Slider />
            <h3>Serie TV</h3>
            <Slider />
        </div>
    </main>
</template>

<style lang="scss" scoped>
  @use '../scss/generals.scss' as *;
    ul{
        display: inline-block;
    }
    img{
        height: 1rem;
    }
</style>