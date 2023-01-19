<script>
    import axios from 'axios';
    import { store } from '../store.js'
    import AppSearch from './AppSearch.vue'
    export default {
      components:{
        AppSearch
      },
      data(){
        return{
          store
        }
      },
      methods: {
            //metodo per mostrare le card
            showCards(){
                let newUrlMovies = store.urlMovies + store.searchText
                //chiamata axios per mostrare i film
                axios.get(newUrlMovies).then((response) => {
                    store.arrayMovies = response.data.results
                });
                let newUrlSeries = store.urlSeries + store.searchText
                //chiamata per mostrare le serie tv
                axios.get(newUrlSeries).then((response) => {
                    store.arraySeries = response.data.results
                })
            }

        }
    }
</script>

<template>
  <header>
    <div class="my-container">
      <div class="row h-100 justify-content-between">
        <!-- parte sinistra  -->
        <div id="col-left" class="col-6 h-100 d-flex align-items-center">
          <!-- LOGO  -->
          <div id="logo">
            <img src="../../public/netflix-logo.png" alt="netflix-logo">
          </div>
        </div>
        <!-- parte destra  -->
        <div id="col-right" class="col-2 d-flex align-items-center justify-content-end">
          <!-- searchbar  --> <!--emit arrivata da AppSearch per chiamare il metodo per generare le cards-->
        <AppSearch @search="showCards" />
        </div>
      </div>
    </div>
  </header>

</template>
<style lang="scss" scoped>
  @use '../scss/generals.scss' as *;
  @use '../scss/partials/variables' as *;

  header{
    height: 70px;
    background-color: black;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, $dark 100%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    #logo img{
      height: 30px;
    }

  }
</style>
