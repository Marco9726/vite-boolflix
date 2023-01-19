<script>
    import { store } from '../store.js'
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div id="searchbar" class="d-flex align-items-center">
        <span class="input-group-text h-50 d-flex justify-content-center bg-black">
            <i id="glass" class="fa-solid fa-magnifying-glass text-white" @click="$emit('search')"></i> <!--emit collegata ad AppHeader-->
        </span>     <!-- passo il valore dell'input tramite v-model alla proprietà 'searchText' dello store--> <!--emit collegata ad AppHeader-->
        <input type="text" class="small-text h-50 bg-black text-white" placeholder="Titoli, persone, generi" v-model="store.searchText" @keyup.enter="$emit('search')">
    </div>
</template>

<style lang="scss">
@use '../scss/generals.scss' as *;

#searchbar{
    border: 1px solid white;

    span,
    input{
        border: none;
        outline: none;
        &::placeholder{
        color: rgb(165, 165, 165);
        }
    }

    i{
        font-size: 1.25rem;
    }

    #glass{
        transform: rotate(-15deg);
    }
}
    
</style>