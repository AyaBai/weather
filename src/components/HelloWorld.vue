<script setup>
const apiKey = "fd6c1a65844461c1ec6bcbfff98ee418"

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fd6c1a65844461c1ec6bcbfff98ee418

const query = `https://api.openweathermap.org/data/2.5/weather?lat=43.128056&lon=77.080833&appid=${apiKey}&units=metric`;

fetch(query).then((response) => {
  return response.json()
}).then((data) => {
    console.log(data);
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;';
    // https://openweathermap.org/img/wn/13d@2x.png
    document.querySelector('.icon').innerHTML = `<img  src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`; 
    document.querySelector('.img_now').innerHTML = `<img  src = "https://shymbulak.com/_nuxt/img/day34.67177d5.png">`;
    document.querySelector('.wind').textContent = data.wind.speed +  "м/c";
    document.querySelector('.humidity').textContent = data.main.humidity +  "см";  


})

</script>

<template>
  <div class="container">
    <div class="header">
      <div>
        <button class="btn px-3 py-3.5 mr-5 my-4">
          <img src="images/menu.svg" alt="Shymbulak">
        </button>
        <button class="btn px-3 py-3.5 my-4">
          <img src="images/loupe.svg" alt="Shymbulak">
        </button>  
      </div>
      <div class="my-4">
        <img src="images/Logo.svg" alt="Shymbulak">
      </div>
      
      <div>
        <button class="btn px-3 py-3.5 mr-5 ml-12 my-4">
          <img src="images/User.svg" alt="Shymbulak">
        </button>
        <button class="btn px-3 py-3.5 mr-5 my-4">
          <img src="images/Heart.svg" alt="Shymbulak">
        </button>
        <button class="btn px-3 py-3.5 my-4 mr-12">
          <img src="images/bag.svg" alt="Shymbulak">
        </button>
      </div>
    </div>

    <div class="main">
      <h1 class="text-[#212225] text-3xl font-semibold mb-12 city">Погода-</h1>

      <div class="weather">
        <div class="today">
          
          <div class="now mr-4">
            <h3>Сейчас</h3>
            <div class="now_weather">
              <div class="img_now">
                <img src="" alt="Weather_img"> 
              </div>
              <div class="info_now">
                <div class="temp"></div>
                <hr/>
                <div class="now_media">Сейчас</div>
                <div class="condition">
                  <div class="wind">
                    <img src="" alt="wind"> 3.89 м/c  
                  </div>
                  <div class="humidity">
                    <img src="" alt="humidity"> 0.0 см 
                  </div>
                  
                </div>
              </div> 
            </div>  
          </div>

          <div class="day">
            <h3 class="text-lg font-semibold">Погода в течение дня</h3>
            <hr class="my-5 border border-[#E1E7EE] w-96" />
            <div class="day_forecast">
              <div class="day_wrapper">
                <div class="wrapper_cell">
                  <div class="time">00</div>
                  <div class="icon">
                    <img src="" alt="cloud">
                  </div>
                  <div class="temperature">26°</div>
                </div>
              </div>
            </div>  
          </div>

          
          

        </div>
        <div class="weather_days">
            <div class="days">
              <div class="title">
                <div>
                  <img src="" alt="calendar">
                </div>
              </div>
              <div class="forecast">
                hello
              </div>
            </div>
            
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
    // outline: 1px solid purple
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%

  .main
    // outline: 1px solid hotpink

  .footer
    // outline: 1px solid turquoise

  .btn
    background-repeat: no-repeat
    


  // WEATHER

  .weather  
    display: flex
    flex-direction: column
    width: 100%

  .today 
    display: flex
    justify-content: space-between

  // WEATHER NOW

  .now
    padding: 16px 90px 16px 16px
    // outline: 2px solid red
    background-color: #75B6F2
    color: #FFFFFF
    border-radius: 16px
    display: flex
    flex-direction: column
    height: 100%
    width: 50%

  .now_weather
    display: flex
    justify-content: space-between
    align-items: flex-start

  .info_now hr 
    width: 245px

  .temp
    font-weight: 700
    font-size: 56px
    
    line-height: 68px

  .now_media
    display: none
    font-size: 14px
    line-height: 17px
   
  .wind
    display: flex
    margin-right: 40px
    justify-content: center
    align-items: center

  .humidity
    display: flex
    justify-content: center
    align-items: center

  .condition
    display: flex

  .condition img
    margin-right: 8px

  .day 
    display: flex
    flex-direction: column

    border: 1px solid #DAE9F4
    border-radius: 16px
    width: 50%
    padding: 24px 20px

  .weather_days
    background-color: #fff
    border: 1px solid #DAE9F4
    border-radius: 16px

  .days
    display: flex 
    flex-direction: column

  .day_forecast
    align-items: center
    display: flex
    gap: 30px
    overflow-y: hidden
    width: 100%

  .day_wrapper
    display: flex
    overflow-x: auto
    padding-bottom: 10px
    scrollbar-width: none
    transition: .2s
    width: 80%

  .wrapper_cell
    
    display: flex
    flex-direction: column
    align-items: center 
    margin-right: 24px


</style>
