<template>
    <div>
        <div class="content">
            <div class="w-full ">
                <h2> Deployed Projects </h2>
            </div>
         </div>
        <ul class="portfolio mt-10">
             <li v-for="( port, index) in portfolio " :key="index" data-aos="fade-down"  data-aos-delay="300">
                 <div class="hover" >
                     <div class="tags" data-aos="fade-down"  data-aos-delay="1200">
                        <span class="tag" v-for="( tag, idx) in port.tags" :key="idx">{{tag}}</span>
                     </div> 
                 </div>
                <a :href="port.link" :title="port.title" target="_blank" >
                    <img :src="port.img" :alt="port.title" data-aos="fade-down"  data-aos-delay="1000">
                </a>
            </li>
        </ul>

        <div >

        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const portfolio = ref([
            { 
                tags: [ 'API Integration', 'E Commerce', 'Telecom'],
                img : require('@/assets/images/portfolio/port-on.jpg'),
                title : 'On Network',
                link: 'https://www.oninternet.com.mx/'
            },
            { 
                tags: [ 'API Integration',  'E Commerce', 'Telecom'],
                img : require('@/assets/images/portfolio/port-dish.jpg'),
                title : 'Dish Network',
                link: 'https://www.dish.com.mx/'

            },
            { 
                tags: [ 'Content Management', 'Web development'],
                img : require('@/assets/images/portfolio/port-cambiando.jpg'),
                title : 'Cambiando Modelos',
                link: 'https://cambiandomodelos.org/'
            },
            { 
                tags: [ 'API Integration', 'Web App Development', 'Firebase', 'Conversion'],
                img : require('@/assets/images/portfolio/port-vmx-large.jpg'),
                title : 'Virgin Moile Mexico',
                link: 'https://virginmobile.mx/'
            },
             { 
                tags: [ 'API Integration', 'Web App Development', 'Firebase'],
                img : require('@/assets/images/portfolio/port-carbd-large.jpg'),
                title : 'Carbid 360'
            },
            { 
                tags: ['Web App Development', 'Single Page Application'],
                img : require('@/assets/images/portfolio/port-montalvo-large.jpg'),
                title : 'Montalvo',
                link:'http://agenciamontalvo.com/'
            },
              { 
                tags: ['Web App Development', 'Single Page Application'],
                img : require('@/assets/images/portfolio/port-han-large.jpg'),
                title : 'Han Capital',

            },
           
            { 
                tags: ['Web App Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-check-large.jpg'),
                title : 'Check and Trust',
                link: 'https://www.checkandtrust.fr/'
            },
            { 
                tags: ['Web  Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-cm-large.jpg'),
                title : 'Cambiando Modelos',
                link: 'https://cambiandomodelos.org/'
            },
            { 
                tags: ['Web  Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-fedosad-large.jpg'),
                title : 'Fedosad',
                link: 'https://www.fedosad.fr/'
            },
             { 
                tags: ['Web App Development', 'Content Management'],
                img : require('@/assets/images/portfolio/port-manaty-large.jpg'),
                title : 'Manaty',
                link: 'https://manaty.net/'
            },
           
        ])

        return { portfolio }
    },
}
</script>
<style scoped>
ul.portfolio li{
    @apply inline-block overflow-hidden w-1/2 relative p-2 xs:w-full;
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