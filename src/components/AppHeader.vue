<script>
    export default {
      data(){
        return{

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
            <img src="../../src/assets/netflix-logo.png" alt="netflix-logo">
          </div>
        </div>
        <!-- parte destra  -->
        <div id="col-right" class="col-2 d-flex align-items-center justify-content-end">
          <!-- searchbar  -->
          <div id="searchbar" class="d-flex align-items-center">
            <span class="input-group-text h-50 d-flex justify-content-center bg-black">
              <i id="glass" class="fa-solid fa-magnifying-glass text-white"></i>
            </span>
            <input type="text" class="small-text h-50 bg-black text-white" placeholder="Titoli, persone, generi">
          </div>
        </div>
      </div>
    </div>
  </header>

</template>
<style lang="scss">
  @use '../scss/generals.scss' as *;
  header{
    height: 70px;
    background-color: black;
    
    #logo img{
      height: 38px;
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
