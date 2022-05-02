<template>
    <div class="p-10">
        <a href="#" 
            v-for="(tab, index) in tabs" 
            :key="index" 
            class="
                font-bold
                m-5"
            :class="{'active' : activeIndex == index, }"
            @click="showTab(activeIndex, index)">  
                {{ tab.name }}
        </a>
         <div 
            v-for="(tab, index) in tabs"
            :key="index"
            v-show="activeIndex == index"
            class="pt-10" :class="{'slide-right' : sliderClass == 'less' ,  'slide-left' : sliderClass == 'great' }">
            {{index}}
                <div v-if="index == 1">
                    <img src="image here">
                    <p> paragraph here 1 </p>
                </div>
                <div v-if="index == 2">
                    <img src="image here">
                    <p> paragraph here 2 </p>
                </div>
                <div v-if="index == 3">
                    <img src="image here">
                    <p> paragraph here 3 </p>
                </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const tabs = ref([
            { name: 'Descuentos'  },
            { name: 'Beneficios'  },
            { name: 'Acopanantes' },
        ])

        const activeIndex = ref(0)
        const sliderClass = ref('')
        const showTab = ( active, index ) => {

            if( active > index ){
                sliderClass.value = 'great'
            } else {
                sliderClass.value = 'less'
            }
            activeIndex.value = index
        }
        return { tabs, showTab, activeIndex, sliderClass}
    },


}
</script>
<style scoped>
.slide-left {
	-webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.slide-right {
	-webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
} 
@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
  }
}

@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes slide-left {
  0% {
     -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
  }  
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}


</style>