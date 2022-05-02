<template>
  <div class="relative">
    <div class="w-full bg-green-200  h-96"></div>
    <div class="w-5/12 mx-auto -mt-96 relative xs:w-full sm:w-full">
        <div class="flex flex-wrap">
        <Info data-aos="fade-down"  data-aos-delay="300" >
          <template v-slot:navigation>
            <Navigation class="z-10" > </Navigation>
          </template>  
          <template v-slot:view>
            <div class="w-full ">
              <div >
                  <router-view  data-aos="fade-down " data-aos-delay="400"  class=" rounded-t-2xl relative p-5   shadow-sm" />
              </div>
            </div>
          </template>
        </Info>
      </div>
      <button class="rounded-full bg-green-300 fixed bottom-4 right-0 h-14 w-14 text-center text-white shadow-sm" @click.prevent="scrollTopBottom">
        <fa-icon :icon="iconArrowUp" class="icon" v-if="isBottom"/> 
        <fa-icon :icon="iconArrowDown" class="icon" v-else/>
      </button>
    </div>
    <div class="text-center p-5">
      &copy; Herbert Saladar <a href="https://creativecommons.org/licenses/by-sa/4.0/"> (CC BY-SA 4.0) </a>
    </div>
  </div>
</template>
<script>

 import Info from './components/Info.vue'
 import Navigation from './components/Navigation.vue'
 import { faArrowUp, faArrowDown} from  '@fortawesome/free-solid-svg-icons'
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from '@vue/reactivity'

export default {
  components: {
    Info : Info,
    Navigation:Navigation,
    'fa-icon' : FontAwesomeIcon,
  }, 
  setup() {
    const isBottom = ref( false )
    const handleScroll = () => {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        console.log('scrolled to the bottom')
        isBottom.value = true
      } else{
        isBottom.value = false
      }
    }
    

    const iconArrowUp = faArrowUp
    const iconArrowDown = faArrowDown

    const scrollTopBottom = () => {
       const params = isBottom.value ?  { top: 0, behavior: 'smooth' } : { top: document.body.scrollHeight, behavior: 'smooth' }
       console.log( params)
       window.scrollTo( params );

    }

    window.addEventListener('scroll', handleScroll)
    return { iconArrowUp, isBottom, iconArrowDown, scrollTopBottom} 
    
  },
}
</script>