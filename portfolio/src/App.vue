<template>
  <div class="w-8/12 mx-auto">
      <div class="flex flex-wrap">
        <Info data-aos="fade-down"  data-aos-delay="300" /> 
 
        <div class="w-2/3 p-5">
          <div class="card rounded-t-2xl relative p-5 "  data-aos="fade-up" data-aos-delay="200">
              <Navigation class="z-10" />
              <router-view  data-aos="fade-up" data-aos-delay="400"/>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

import Info from './components/Info.vue'
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Info : Info,
    Navigation:Navigation,
  }, 
  setup() {
    
  },
}
</script>