<template>
<div class=" navigation-container">
    <div class="navigation mx-3" :class="{'show': show == true }">
        <div class="links" :class="{'links-show': show == true }">
            <router-link to="/about" active-class="active" >About</router-link>
             <router-link to="/review" active-class="active" >Reviews </router-link>
            <router-link router-link to="/resume" active-class="active" > Timeline  </router-link>
            <router-link router-link to="/portfolio"  active-class="active" > Showcase </router-link>
              <router-link router-link to="/blog"  active-class="active" > Blog </router-link>
        </div>
        <button @click.prevent="show = !show"> 
            <fa-icon :icon="iconArrowRight" v-if="show"/>
            <fa-icon :icon="iconArrowLeft" v-if="!show"/>
        </button>
    </div>
</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default {
    components:{
        'fa-icon' : FontAwesomeIcon,
    },
    data() {
        return { 
            iconArrowLeft: faArrowLeft,
            iconArrowRight: faArrowRight,
            show: false
        }
    },
    setup() {
        
    },
}
</script>
<style scoped>
    .navigation-container{
        @apply  w-full h-20 flex justify-end absolute -right-7 -top-7 xs:fixed xs:top-0 xs:h-96 xs:rounded-none;
    }
    .navigation{
        @apply text-gray-100 font-bold text-lg h-16 w-16 relative bg-green-700 rounded-full justify-center flex items-center align-middle xs:h-full xs:rounded-2xl;
        transition:  all 0.3s  ease-in-out;
        overflow: hidden;
    }
    button{
        @apply h-16 w-16 flex justify-center items-center align-middle bg-green-700 rounded-full absolute right-0 hover:bg-green-400
    }
    .navigation.show{
        @apply  w-full xs:rounded-2xl;
    }
    .navigation a{
        @apply inline-block px-5 py-2 relative;
    }
    .navigation  a:hover::after, .navigation a.active::after{
        @apply xs:w-full md:w-6;
    }
    .links{
        @apply absolute -right-28 xs:relative xs:flex xs:flex-col;
        display: none;
        overflow: hidden;
        transition:  all 0.1s  ease-in-out;
        width: 0;
    }
    .links-show{
        @apply left-9 flex justify-start;
        overflow: hidden;
        width: 100%;
    }

    .navigation  a:after{
        @apply bg-gray-100;
        height:2px;
        width: 0px;
        position: absolute;
        right: 0;
        left: 0;
        bottom:0;
        content: "";
        transition: all .15s ease-in-out;
        margin: 0 auto;
    }
</style>