<script setup>

</script>

<template>
  <div class="container">
    <div class="header">
      <div>
        <button class="btn px-3 py-3.5 mr-5 ml-12 my-4">
          <img src="/menu.svg" alt="Shymbulak">
        </button>
        <button class="btn px-3 py-3.5 my-4">
          <img src="/loupe.svg" alt="Shymbulak">
        </button>  
      </div>
      <div class="my-4">
        <img src="/Logo.svg" alt="Shymbulak">
      </div>
      
      <div>
        <button class="btn px-3 py-3.5 mr-5 ml-12 my-4">
          <img src="/User.svg" alt="Shymbulak">
        </button>
        <button class="btn px-3 py-3.5 mr-5 my-4">
          <img src="/Heart.svg" alt="Shymbulak">
        </button>
        <button class="btn px-3 py-3.5 my-4 mr-12">
          <img src="/bag.svg" alt="Shymbulak">
        </button>
      </div>
    </div>

    <div class="main">

      <div class="weather">
        <div class="today">
          <div class="now"></div>
          <div class="day"></div>
        </div>
      </div>
    </div>

    <div class="footer">
      
    </div>
    
  </div>
  
    
    
</template>

<style scoped lang="sass">
  .container
    // outline: 2px solid greenyellow

  .header
    outline: 1px solid purple
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%

  .main
    outline: 1px solid hotpink

  .footer
    outline: 1px solid turquoise

  .btn
    background-repeat: no-repeat
    background-position: contain


  // WEATHER

  .weather
    display: flex
    flex-direction: column
    width: 100%
   

  


</style>
