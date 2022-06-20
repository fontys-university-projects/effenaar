<template>
    <div id="app">
       <iframe id="livestream" allow="autoplay" class="frame" src="https://www.youtube.com/embed/UBOj6rqRUME?autoplay=1&mute=1"
            frameborder="0"
            allowfullscreen>

</iframe>
    <particlesComponent/>
  </div>
 
</template>

<script>
import particlesComponent from '../components/particlesComponent.vue'


export default {
  name: "App",
  components: {
    particlesComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#livestream{
   margin: auto;
   height: 50vh;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>
