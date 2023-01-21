<script>
    export default {
        props:{
            card: Object
        },
        data(){
            return{
                path: 'http://image.tmdb.org/t/p/w780/'
            }
        },
        methods: {
            //metodo per calcolare le stelle piene in base al voto
            filledStars(){
                return Math.round(this.card.vote_average / 2);
            }       
        }          
    }
</script>

<template>
    <div class="my-card">
        <!-- compongo il path con la proprietà 'poster_path' della prop 'card' per visualizzare l'immagine -->
        <img :src="this.path+`${card.poster_path}`" :alt="`${card.title}`" class="w-100 h-100 rounded-1">
        <div class="info title text-white rounded-1">
            <h5 v-if="(card.title)">{{ card.title }}</h5> 
            <h5 v-else >{{ card.name }}</h5>
            <div class="stars">
                <!-- creo stelle piene in base al numero calcolato nei methods  -->
                <i v-for="(item,index) in filledStars()" class="fa-solid fa-star" :key="index" :star="item"></i>
                <!-- sottraggo il numero di stelle piene a 5 per calcolare le restanti vuote  -->
                <i v-for="(item,index) in (5 - filledStars())" class="fa-regular fa-star" :key="index" :star="item"></i>
            </div>
        </div> 

    </div>
</template>

<style lang="scss">
 @use '../scss/generals.scss' as *;

    .my-card{
        min-width: calc(100% / 6 - .5rem);
        height: 300px;
        margin-right: .5rem;
        margin-bottom: 5px;
        cursor: pointer;
        position: relative;

        img{
            object-fit: cover;
            object-position: center;
        }
        .info.title{
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 1rem .5rem;
            line-height: .75rem;
            background: rgb(0,0,0);
            background: linear-gradient(3deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 91%);
            display: none;

            span{
                text-shadow: 0px 0px 10px rgb(0,0,0);
            }
            
        }
        //mostro le info all'over sulla card
        &:hover .info.title{
            display: block;
        }
    }
</style>