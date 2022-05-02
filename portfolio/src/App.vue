<template>
  <div class="w-8/12 mx-auto">
      <div class="flex flex-wrap">
      <Info data-aos="fade-down"  data-aos-delay="300" >
        <template v-slot:navigation>
          <Navigation class="z-10" > </Navigation>
        </template>  
        <template v-slot:view>
          <div class="w-full ">
            <div >
                <router-view  data-aos="fade-down " data-aos-delay="400"  class="card rounded-t-2xl relative p-5  bg-gray-200 shadow-sm" />
            </div>
          </div>
        </template>
      </Info>
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