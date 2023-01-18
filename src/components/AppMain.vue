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
                    <li>
                        <img v-if="item.original_language === 'it'" src="https://media.istockphoto.com/id/652665310/it/vettoriale/italia.jpg?s=612x612&w=0&k=20&c=mvAAMkECBE_6aj1aw5QZxloNkMI9yNgh-MMD-5kgVxQ=" alt="ita-flag">
                        <img v-else src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1280px-Flag_of_the_United_Kingdom_%282-3%29.svg.png" alt="eng-flag">
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