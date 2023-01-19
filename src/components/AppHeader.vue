<script>
    import { store } from '../store.js';
    import axios from 'axios';
    export default {
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
                    store.allMediaArray.push(response.data.results)
                });
                let newUrlSeries = store.urlSeries + store.searchText
                //chiamata per mostrare le serie tv
                axios.get(newUrlSeries).then((response) => {
                    store.arraySeries = response.data.results
                    store.allMediaArray.push(response.data.results)
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
          <!-- searchbar  -->
          <div id="searchbar" class="d-flex align-items-center">
            <span class="input-group-text h-50 d-flex justify-content-center bg-black">
              <i id="glass" class="fa-solid fa-magnifying-glass text-white" @click="showCards"></i>
            </span>                               <!-- passo il valore dell'input tramite v-model alla proprietà 'searchText' dello store--> <!--richiamo il metodo per mostrare le card premendo enter-->
            <input type="text" class="small-text h-50 bg-black text-white" placeholder="Titoli, persone, generi" v-model="store.searchText" @keyup.enter="showCards">
          </div>
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

    #col-right{

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
    }
  }
</style>
