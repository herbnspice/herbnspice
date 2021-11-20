<template>
    <div class="p-10">
        <a href="#" 
            v-for="(tab, index) in tabs" 
            :key="index" 
            class="
                font-bold
                m-5"
            :class="{'active' : activeIndex == index }"
            @click="showTab(index)">  
                {{ tab.name }}
        </a>
         <div 
            v-for="(tab, index) in tabs"
            :key="index"
            v-show="activeIndex == index"
            class="pt-10">
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
        const showTab = ( index ) => {
            activeIndex.value = index
        }

        return { tabs, showTab, activeIndex}
    },


}
</script>