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
                    <li>{{ item.original_language }}</li>
                    <li>{{ item.vote_average }}</li>
                </ul>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    
</style>