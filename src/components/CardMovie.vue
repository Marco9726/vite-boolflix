<script>
export default {
    props:{
        card: Object
    },
    data(){
        return{
            path: 'http://image.tmdb.org/t/p/w500/'
        }
    }
}
</script>

<template>
    <div class="my-card">
        <!-- compongo il path con la proprietà 'poster_path' della prop 'card' per visualizzare l'immagine -->
        <img :src="this.path+`${card.poster_path}`" :alt="`${card.title}`" class="w-100 h-100 rounded-1">
    </div>
</template>

<style lang="scss">
    .my-card{
        display: inline-block;
        min-width: calc(100% / 6 - 5px);
        height: 14vh;
        margin-right: 5px;
        margin-bottom: 5px;
        cursor: pointer;

        img{
            object-fit: cover;
            object-position: center;
        }
    }
</style>