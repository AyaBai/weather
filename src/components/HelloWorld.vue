<script>
  import axios from 'axios';

  
  export default{
    data() {
      return {
        apiKey: 'fd6c1a65844461c1ec6bcbfff98ee418',
        weather: null,
        wind: '',
        humidity: '',
        condition:'',
        days: Array,
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png"
      };
    },
    mounted() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=43.1042&lon=77.0480&appid=${this.apiKey}&units=metric&lang=ru`)
        .then(response => {
          const data = response.data;
            console.log(data);
          this.weather = Math.round(data.main.temp);
          this.wind = data.wind.speed;
          this.humidity = data.main.humidity;
          this.condition = data.weather[0].description;
          // this.icon = data.weather.url(`<img  src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`) 
          
      })
      .catch(error => {
        console.log(error);
      });

      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=43.128056&lon=77.080833&appid=${this.apiKey}&units=metric&lang=ru`)
        .then(response => {
          const forecast = response.data;
            console.log(forecast);
            this.days = forecast.list;
            // this.icon = "https://openweathermap.org/img/wn/${forecast.weather Array[40]['icon']}@2x.png";
            console.log(this.days)
        });
    },
  };


</script>

<template>
  <div class="px-4 md:container md:mx-auto">
    <div class="header">
      <div>
        <button class="btn px-2.5 py-3 md:px-3 md:py-3.5 mr-3 md:mr-5">
          <img src="images/menu.svg" alt="menu">
        </button>
        <button class="btn px-2.5 py-2.5 md:px-3 md:py-3.5">
          <img src="images/loupe.svg" alt="loupe">
        </button>  
      </div>
      <div class="my-4">
        <img src="images/Logo.svg" alt="logo">
      </div>
      
      <div class="header_right">
        <button class="btn px-2.5 py-2.5 md:px-3 md:py-3.5 mr-3 md:mr-5">
          <img src="images/User.svg" alt="user">
        </button>
        <button class="btn heart px-3 py-3.5 md:mr-5">
          <img src="images/Heart.svg" alt="heart">
        </button>
        <button class="btn px-3 py-2.5 md:px-4 md:py-3.5 md:my-4">
          <img src="images/bag.svg" alt="bag">
        </button>
      </div>
    </div>

    <div class="main">
      <h1 class="text-[#212225] text-3xl font-semibold mb-6 md:mb-12">Погода</h1>

      <div class="weather">
        <div class="today">
          
          <div class="now mb-4">
            <h3 class="text-lg hidden">Сейчас</h3>
            <div class="now_weather">
              <div class="img_now">
                <img src="" alt="Weather_img" :bind = "icon"> 
              </div>
              <div class="info_now">
                <div class="temp">{{weather}}&deg;C</div>
                <hr/> 
                
                <div class="condition">
                  <div class="wind hidden sm:block">
                    <img src="images/wind.8842246.svg" alt="wind">
                    <div class="wind_cell">{{wind}} м/c</div> 
                  </div>
                  <div class="humidity hidden sm:block">
                    <img src="images/precipitation.ada3750.svg" alt="humidity">
                    <div class="humidity_cell">{{humidity}} см</div> 
                  </div>
                  <div class="mobile_only flex flex-col md:hidden">
                    <div class="description font-semibold text-xl md:hidden">{{condition}}</div>
                    <h3 class="text-sm font-light md:hidden">Сейчас</h3>
                  </div>
                </div>
              </div> 
            </div>  
          </div>

          <div class="day mb-6">
            <div class="flex items-center">
              <div class="w-3,5 h-3,5">
                <img src="images/clock.svg" alt="clock">   
              </div>
              <h3 class="text-lg font-semibold pl-2">Погода в течение дня</h3>
            </div>
            <hr class="my-5"/>
            <div class="day_forecast">
              <div class="day_wrapper">
                <div class="wrapper_cell" v-for="day in days" :key="day.id">
                  <div class="time">{{ day.dt_txt}}</div>
                  <div class="icon w-7 h-7">
                    {{ day.icon }}
                    <img src="" alt="">
                  </div>
                  <div class="temperature">{{ Math.round(day.main.temp) }}</div>

                </div>
              </div>
            </div>  
          </div>

        </div>
        <div class="weather_days mb-12">
            <div class="days">
              <div class="title px-4 py-4">
                <img src="images/calendar.cae4879.svg" alt="calendar">
                <h3 class="ml-2">Погода на 7 дней</h3>
              </div>
              
              <div class="forecast flex flex-col">
                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Сегодня</div>
                    <div class="date_calender hidden  ">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>

                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Пн</div>
                    <div class="date_calender hidden  ">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>

                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Вт</div>
                    <div class="date_calender hidden  ">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>

                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Ср</div>
                    <div class="date_calender hidden  ">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>

                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Чт</div>
                    <div class="date_calender hidden  ">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>

                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Пт</div>
                    <div class="date_calender hidden  ">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>
            
              </div>

                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Сб</div>
                    <div class="date_calender hidden  ">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>

                <div class="forecast_cell">
                  <div class="date_forecast">
                    <div class="date_week pr-4">Вс</div>
                    <div class="date_calender hidden">14 апреля</div>
                  </div>
                  <div class="icon_small pr-4">
                    <img src="images/weather/sun.svg" alt="">
                    <div class="percent">80%</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>мин.</div>
                    <div>16°</div>
                  </div>
                  <div class="min_max_temp pr-4 flex">
                    <div>макс.</div>
                    <div>28°</div>
                  </div>
                </div>
            </div>
            
          </div>
      </div>
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
    border: 1px solid #DAE9F4
    border-radius: 12px 

  .heart
    display: none

  .header_right
    display: flex
    align-items: center


  // WEATHER

  .weather  
    display: flex
    flex-direction: column
    width: 100%

  .today 
    display: flex
    justify-content: space-between
    flex-direction: column


  // WEATHER NOW


  .now
    padding: 30px 24px
    // outline: 2px solid red
    background-color: #75B6F2
    color: #FFFFFF
    border-radius: 16px
    display: flex
    flex-direction: column
    height: 100%
    // width: 50%

  .now_weather
    display: flex
    justify-content: space-between
    align-items: flex-start

  .info_now hr 
    width: 100%
    border: 1px solid #e1e7ee
    margin-bottom: 8px

  .temp
    font-weight: 700
    font-size: 56px
    
    line-height: 68px

  .now_media
    display: none
    font-size: 14px
    line-height: 17px

  .description
    text-transform: capitalize
    font-weight: 600
    font-size: 21px
   
  .wind
    // display: flex
    margin-right: 40px
    justify-content: center
    align-items: center

  .humidity

    // display: flex
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
    // width: 50%
    padding: 24px 20px
    hr
      border: 1px solid #e1e7ee

  .weather_days
    background-color: #fff
    border: 1px solid #DAE9F4
    border-radius: 16px

  .days
    display: flex 
    flex-direction: column
    background: #F4F8FD
    border-radius: 16px

  .day_forecast
    align-items: center
    display: flex
    justify-content: center
    gap: 30px
    overflow-y: hidden
    width: 100%

  .day_wrapper
    display: flex
    overflow-x: auto
    padding-bottom: 10px
    scrollbar-width: none
    // width: 80%

  .wrapper_cell
    
    display: flex
    flex-direction: column
    align-items: center 
    margin-right: 24px

  .title
    display: flex
    align-items: center
  
 

  .title h3
    font-weight: 600
    font-size: 18px
    line-height: 22px
    color: #212225

//FOOTER
body
  margin: 0
  padding: 0






@media (min-width: 768px) 

  .heart
    display: block

  .today  
    flex-direction: row

  .now
    width: 50%
    margin-right: 12px  
  
  .day
    width: 50%


</style>
