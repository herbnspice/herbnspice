<template>
  <div class="w-8/12 mx-auto">
      <div class="flex flex-wrap">
        <Info />
 
        <div class="w-2/3 p-5">
          <div class="card rounded-t-2xl relative p-5 ">
              <Navigation/>
              <router-view  data-aos="fade-up"/>
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