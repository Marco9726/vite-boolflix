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
            <li v-for="(item,index) in store.arrayMovies">
                <h3>{{ item.title }}</h3>
                <ul>
                    <li>{{ item.original_title }}</li>
                    <li>    <!--mostro la bandiere corrispondente alla proprietà 'original_language'-->
                        <img :src="`../public/${item.original_language}.png`" :alt="`${item.original_language}`-flag">
                    </li>
                    <li>{{ item.vote_average }}</li>
                </ul>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    img{
        height: 1rem;
    }
</style>