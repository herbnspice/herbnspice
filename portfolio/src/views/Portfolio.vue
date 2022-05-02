<template>
    <div>
        <div class="content">
            <div class="w-full ">
                <h2> Portfolio </h2>
            </div>
         </div>
        <ul class="portfolio">
             <li v-for="( port, index) in portfolio " :key="index" data-aos="fade-down"  data-aos-delay="300">
                 <div class="hover">
                     <div class="tags" data-aos="fade-down"  data-aos-delay="1200">
                        <span class="tag" v-for="( tag, idx) in port.tags" :key="idx">{{tag}}</span>
                     </div> 
                 </div>
                <img :src="port.img" :alt="port.title" data-aos="fade-down"  data-aos-delay="1000">
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const portfolio = ref([
            { 
                tags: [ 'API Integration', 'Web App Development', 'Firebase', 'Conversion'],
                img : require('@/assets/images/portfolio/port-vmx-large.jpg'),
                title : 'Virgin Moile Mexico'
            },
             { 
                tags: [ 'API Integration', 'Web App Development', 'Firebase'],
                img : require('@/assets/images/portfolio/port-carbd-large.jpg'),
                title : 'Carbid 360'
            },
            { 
                tags: ['Web App Development', 'Single Page Application'],
                img : require('@/assets/images/portfolio/port-montalvo-large.jpg'),
                title : 'Montalvo'
            },
              { 
                tags: ['Web App Development', 'Single Page Application'],
                img : require('@/assets/images/portfolio/port-han-large.jpg'),
                title : 'Han Capital'
            },
           
            { 
                tags: ['Web App Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-check-large.jpg'),
                title : 'Check and Trust'
            },
            { 
                tags: ['Web  Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-cm-large.jpg'),
                title : 'Cambiando Modelos'
            },
            { 
                tags: ['Web  Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-fedosad-large.jpg'),
                title : 'Fedosad'
            },
             { 
                tags: ['Web App Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-manaty-large.jpg'),
                title : 'Manaty'
            },
           
        ])

        return { portfolio }
    },
}
</script>
<style scoped>
ul.portfolio li{
    @apply inline-block overflow-hidden w-1/2 relative p-2;
    cursor: pointer;
}


ul.portfolio li img{
    @apply rounded-2xl shadow-xl;
    width: 100%;
}

ul.portfolio li img:hover{
    cursor: pointer;
    transition: all 0.2s ease-in;
}

ul.portfolio li .hover{
   @apply h-full absolute top-0 left-0 w-full;
   height: 100%
}
.tags{
    @apply absolute bottom-0  p-4;
    z-index: 1
}
.tag{
  @apply bg-green-800 text-gray-100 py-2 px-3 mr-2 rounded-full shadow-2xl my-1 text-center inline-block text-xs;   
}
</style>