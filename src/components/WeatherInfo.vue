<!-- 
   /$$                                       /$$             /$$              
  | $$                                      | $$            | $$              
 /$$$$$$    /$$$$$$  /$$$$$$/$$$$   /$$$$$$ | $$  /$$$$$$  /$$$$$$    /$$$$$$ 
|_  $$_/   /$$__  $$| $$_  $$_  $$ /$$__  $$| $$ |____  $$|_  $$_/   /$$__  $$
  | $$    | $$$$$$$$| $$ \ $$ \ $$| $$  \ $$| $$  /$$$$$$$  | $$    | $$$$$$$$
  | $$ /$$| $$_____/| $$ | $$ | $$| $$  | $$| $$ /$$__  $$  | $$ /$$| $$_____/
  |  $$$$/|  $$$$$$$| $$ | $$ | $$| $$$$$$$/| $$|  $$$$$$$  |  $$$$/|  $$$$$$$
   \___/   \_______/|__/ |__/ |__/| $$____/ |__/ \_______/   \___/   \_______/
                                  | $$                                        
                                  | $$                                        
                                  |__/                                        
-->
<template>
  <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
    <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
    rel="stylesheet"
  />
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">
            {{ Math.round(weather.main.temp) }}°c
            <p class="humidity"> <span class="fas fa-tint"></span> : {{ weather.main.humidity }}%</p>
            <p class="pressure"><span class="fas fa-temperature-low"></span>: {{ weather.main.pressure }} Pa</p>
          </div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
</template>

<!-- 
                               /$$             /$$    
                              |__/            | $$    
  /$$$$$$$  /$$$$$$$  /$$$$$$  /$$  /$$$$$$  /$$$$$$  
 /$$_____/ /$$_____/ /$$__  $$| $$ /$$__  $$|_  $$_/  
|  $$$$$$ | $$      | $$  \__/| $$| $$  \ $$  | $$    
 \____  $$| $$      | $$      | $$| $$  | $$  | $$ /$$
 /$$$$$$$/|  $$$$$$$| $$      | $$| $$$$$$$/  |  $$$$/
|_______/  \_______/|__/      |__/| $$____/    \___/  
                                  | $$                
                                  | $$                
                                  |__/                
-->
<script>
export default {
computed:{
     weather: {
      get() {
        return this.$store.state.weather;
      },
    },
  }
}
</script>

<!-- 
             /$$               /$$          
            | $$              | $$          
  /$$$$$$$ /$$$$$$   /$$   /$$| $$  /$$$$$$ 
 /$$_____/|_  $$_/  | $$  | $$| $$ /$$__  $$
|  $$$$$$   | $$    | $$  | $$| $$| $$$$$$$$
 \____  $$  | $$ /$$| $$  | $$| $$| $$_____/
 /$$$$$$$/  |  $$$$/|  $$$$$$$| $$|  $$$$$$$
|_______/    \___/   \____  $$|__/ \_______/
                     /$$  | $$              
                    |  $$$$$$/              
                     \______/               
-->
<style>
.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 5rem;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFF;
  font-size: 3em;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box p{
  margin: 1rem;
  font-size: 2rem; 
  text-align: left;
}

@media only screen and (max-width: 600px) {
  .weather-box p{
    font-size: 1.5rem;
  }

  .weather-box .temp{
    font-size: 4rem;
  }

  .weather-box .weather {
  font-size: 2.5em;
}
}
</style>