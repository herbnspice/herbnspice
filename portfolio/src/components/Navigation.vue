<template>
<div class="w-full h-20 flex  justify-end absolute right-1">
    <div class="navigation mx-3" :class="{'show': show == true }">
        <div class="links" :class="{'links-show': show == true }">
            <router-link to="/" active-class="active" >Home</router-link>
            <router-link router-link to="/resume" active-class="active" > Resume  </router-link>
            <router-link router-link to="/portfolio"  active-class="active" > Portfolio </router-link>
            <router-link router-link to="/contact" active-class="active" > Contact </router-link>
        </div>
        <button @click.prevent="show = !show"> 
            <fa-icon :icon="iconElipsis" />
        </button>
    </div>
</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default {
    components:{
        'fa-icon' : FontAwesomeIcon
    },
    data() {
        return { 
            iconElipsis : faEllipsisV,
            show: false
        }
    },
    setup() {
        
    },
}
</script>
<style scoped>
    .navigation{
        @apply   text-gray-100 font-bold text-lg h-16 w-16 relative bg-yellow-700 rounded-full justify-center flex items-center align-middle ;
        transition:  all 0.5s  ease-in-out;
        overflow: hidden;

    
    }
    button{
        @apply h-16 w-16 flex justify-center items-center align-middle bg-yellow-700 rounded-full absolute right-0
    }
    .navigation.show{
        @apply  w-9/12;
    }
    .navigation a{
        @apply inline-block px-5 py-2 relative;
    }
    .navigation  a:hover::after, .navigation a.active::after{
        width: 25px;
    }
    .links{
        @apply absolute -right-28;
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