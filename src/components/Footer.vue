<script>
  
</script>
<template>
  <footer class="footer">
    <div class="">
      <div class="footer_logo px-4 py-4 mb-8">
        <a href="https://shymbulak.com/ru" target="blank">
          <img src="images/footer_logo.svg" alt="">
        </a>
      </div>
      <div class="row">
        <div class="resort">
          <h3>Курорт</h3>
          <ul class="resort_row">
            <li><a href="#">Отели</a></li>
            <li><a href="#">Магазин</a></li>
            <li><a href="#">Рестораны</a></li>
            <li><a href="#">Детям</a></li>
            <li><a href="#">Развлечения</a></li>     
          </ul>
          
        </div>
        <div class="ski">
          <h3 class="pt-5">Катания</h3>
          <ul class="resort_row">
            <li><a href="#">Билеты</a></li>
            <li><a href="#">Школа</a></li>
            <li><a href="#">Прокат</a></li>
            <li><a href="#">Паркинг</a></li>
          </ul>
        </div>
        <div class="ski">
          <h3 class="pt-5">Инфо</h3>
          <ul class="resort_row">
            <li><a href="#">Правила</a></li>
            <li><a href="#">Как добраться</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Тех. поддержка</a></li>
          </ul>
        </div>
        <div class="ski">
          <h3 class="pt-5">Контакты</h3>
          <div class="flex mb-4">
            <span class="fa-icon">
              <font-awesome-icon :icon="['fab', 'facebook']" size="sm" style="color: #000000;"/>
            </span>
            <span class="fa-icon">
              <font-awesome-icon :icon="['fab', 'youtube']" size="sm" style="color: #000000;" />
            </span>
            <span class="fa-icon">
              <font-awesome-icon :icon="['fab', 'instagram']" size="sm" style="color: #000000;" />
            </span>
            <span class="fa-icon">
              <font-awesome-icon :icon="['fab', 'vk']" size="sm" style="color: #000000;" />
            </span>
            <span class="fa-icon">
              <font-awesome-icon :icon="['fab', 'whatsapp']" size="sm" style="color: #000000;" />
            </span>

            
          </div>
  
          <ul class="text-[#A0A7AF] text-base font-normal">
            <li class="mb-4">E-mail: olya101394@gmail.com</li>
            <li class="mb-4">Тел: +7 727 331 77 77</li>      
          </ul>
          <div class="apps flex my-10">
            <div class="app_link mr-8">
              <a href="https://play.google.com/store/apps/details?id=kz.shymbulak&pli=1" target="blank">
                <img src="/images/g10.svg" alt="playGoogle">
              </a>
            </div>
            <div class="app_link">
              <a href="https://apps.apple.com/kz/app/shymbulak-mountain-resort/id1591411405" target="blank">
                <img src="/images/Appstore.svg" alt="appStore">
              </a>
            </div>
          </div>
        </div>
        
        <p class="text-[#4F5864] text-sm">&copy; 2022 ТОО «Chimbulak Development»</p>
      </div>
    </div>
  </footer>
</template>

<style lang="sass">
  .footer
    background-color: #212225
    color: #ffffff
  .resort,
  .ski
    border-bottom: 1px solid #2c2c2c
    font-weight: 500
    font-size: 18px
    // line-height: 120%
    padding-left: 16px
    h3
      margin-bottom: 20px

  .forecast_cell
    color: #4F5864
    font-weight: 500
    font-size: 16px
    border-top: 1px solid #e1e7ee
    align-items: center
    display: flex
    justify-content: flex-end
    gap:20px
    padding: 8px
    img
      width: 22px
      height: 22px
    .percent
      color: #75B6F2
      font-weight: 600
      font-size: 12px
      align-items: center
      margin-bottom: 8px

  .date_forecast
    display: flex
    margin-right: auto

  .time
    font-weight: 500
    font-size: 14px
    color: #6D7784


  .temperature
    font-weight: 500
    font-size: 18px
    color: #4F5864

  .resort_row
    color: #A0A7AF
    font-weight: 400
    font-size: 16px
    display: grid
    grid-template-columns: 1fr 1fr
    li
      margin-bottom: 16px
      a
        color: #A0A7AF

  .fa-icon
    display: flex
    align-content: center
    justify-content: center
    flex-wrap: wrap
    margin-right: 16px
    background-color: #FFFFFF
    border-radius: 50px
    width: 32px
    height: 32px

    
</style>