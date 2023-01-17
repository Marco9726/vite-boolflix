<script>
    export default {
      data(){
        return{
          logoUrl: 'https://i0.wp.com/www.downloadfonts.io/wp-content/uploads/2021/09/Netflix-Logo-Font.png?fit=1024%2C581&ssl=1'
        }
      }
    }
</script>

<template>
  <header>
    <div class="my-container">
      <img :src="`${this.logoUrl}`" alt="" class="h-100">
    </div>
  </header>

</template>
<style lang="scss">
  @use '../scss/generals.scss' as *;
  header{
    height: 80px;
    background-color: black;
  }

</style>