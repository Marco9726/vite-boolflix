<script>
    import { store } from '../store.js'
    export default {
        data(){
            return{
                store
            }
        },
        

    }
</script>

<template lang="">
    <main>
        <ul>
            <h2>FILM</h2>
            <li v-for="(item,index) in store.arrayMovies">
                <h3>{{ item.title }}</h3>
                <ul>
                    <li>{{ item.original_title }}</li>
                    <li>    <!--mostro la bandiere corrispondente alla proprietà 'original_language'-->
                        <img :src="`../public/flags/${item.original_language}.png`" :alt="`${item.original_language}`-flag">
                    </li>
                    <li>{{ item.vote_average }}</li>
                </ul>
            </li>
        </ul>
        <ul>
            <h2>SERIE TV</h2>
            <li v-for="(item,index) in store.arraySeries">
                <h3>{{ item.name }}</h3>
                <ul>
                    <li>{{ item.original_name }}</li>
                    <li>    <!--mostro la bandiere corrispondente alla proprietà 'original_language'-->
                        <img :src="`../public/flags/${item.original_language}.png`" :alt="`${item.original_language}`-flag">
                    </li>
                    <li>{{ item.vote_average }}</li>
                </ul>
            </li>
 
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    ul{
        display: inline-block;
    }
    img{
        height: 1rem;
    }
</style>