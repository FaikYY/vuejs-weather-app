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
  <div 
    id="app" 
    :class="typeof weather.main != 'undefined' && checkWeatherForBackground">
    <main>
      <SearchBar />
      <WeatherInfo />
    </main>
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
import SearchBar from './components/SearchBar.vue';
import WeatherInfo from './components/WeatherInfo.vue';

export default {
  components: { SearchBar, WeatherInfo },
  name: 'app',
    computed:{
     weather: {
      get() {
        return this.$store.state.weather;
      },
    },
    checkWeatherForBackgroundFromStore(){
      return this.$store.dispatch("checkWeatherForBackground")
    },
    checkWeatherForBackground(){
      if(this.$store.state.weather.weather[0].main == 'Clear'){
        console.log("Clear weather background")
        return 'clear'
      }
      else if(this.$store.state.weather.weather[0].main == 'Clouds' && Math.round(this.$store.state.weather.main.temp) >= 16){
        console.log("Clouds weather background")
        return 'clouds-warm'
      }
      else if(this.$store.state.weather.weather[0].main == 'Clouds' && Math.round(this.$store.state.weather.main.temp) < 16){
        console.log("Clouds weather background")
        return 'clouds-cold'
      }
      else if(this.$store.state.weather.weather[0].main == 'Snow'){
        console.log("Snow weather background")
        return 'snow'
      }
      else{
        return ''
      }
    }
  },
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-image: url('./assets/default.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.clouds-warm{
  background-image: url('./assets/clouds-warm.jpg');
}

#app.clouds-cold{
  background-image: url('./assets/clouds-cold.jpg');
}

#app.snow{
  background-image: url('./assets/snow.jpg');
}

#app.clear{
  background-image: url('./assets/clear.jpg');
}
main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>


// TODO: Place the search bar to the bottom when its on mobile
// TODO: Seperate the components
// TODO: Fix the background on desktop mode