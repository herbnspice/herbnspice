<template>
<div  class="w-full">
    <div class=" mx-10 relative" >
       <slot name="navigation" class="relative "></slot>
       <div class="header ">
            <div class="photo">
              <img src="@/assets/avatar.jpg" alt="" srcset="">
            </div>
            <div class="details">
              <div class="title">
                  <h2 class="name"> Hi I'm Herbert </h2>
                  <p class="my-2"> Front End Engineer</p>
                  <div class="socials">
                    <a href="https://www.linkedin.com/in/herbertsaladar/" target="_blank"><fa-icon :icon="iconLinkedIn" > </fa-icon></a>
                    <a href="#" target="_blank"><fa-icon :icon="iconSkype" > </fa-icon></a>
                    <a href="https://www.instagram.com/herbert.saladar/" target="_blank"><fa-icon :icon="iconInstagram" > </fa-icon></a>
                    <a href="https://github.com/herbnspice" target="_blank"><fa-icon :icon="iconGithub" > </fa-icon></a> 
                    <a href="tel:+639496061858" target="_blank" title="+63 949 606 1858"><fa-icon :icon="iconPhone" class="text-2xl"> </fa-icon></a>
                    <a href="mailto:hrbrtsldr@gmail.com" target="_blank" title="hrbrtsldr@gmail.com"><fa-icon :icon="iconEmail" class="text-2xl"> </fa-icon></a>
                    <a href="tel:+639496061858" target="_blank" title="herbertsaladar.com"><fa-icon :icon="iconLink" class="text-2xl"> </fa-icon></a>
                  </div>
                  <p> Philippines </p>
              </div>
            </div>
            
            <a href="" class="download">
            <button>
                <fa-icon :icon="iconDownload"></fa-icon>
            </button>
            </a>
        </div>
        <slot name="view"></slot>
    </div>
</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faLinkedin, faSkype, faInstagram, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faQuoteLeft, faEllipsisV, faPhone, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Home',
  components:{
    'fa-icon' : FontAwesomeIcon
  },
   data(){
    return {
      iconLinkedIn : faLinkedin,
      iconFacebook : faFacebookSquare,
      iconSkype : faSkype,
      iconInstagram: faInstagram,
      iconGithub : faGithub,
      iconDownload: faDownload,
      iconQoute : faQuoteLeft,
      iconElipsis : faEllipsisV,
      iconPhone: faPhone,
      iconLink: faLink,
      iconEmail: faEnvelope,
    }
  },
  setup() {
    
  },
}
</script>
<style scoped>
.header{
  @apply from-gray-100  to-white bg-gradient-to-tr
   relative 
   flex sm:align-middle
   rounded-xl 
   items-center
   md:justify-center
   sm:justify-center
     lg:justify-center
   pb-16 shadow-xl
   mb-10
   md:flex-row
   xs:flex-col
   sm:flex-col
   justify-center
   ;
  
  
   padding-top: 50px;
   margin-top:150px;
}

.photo{
  @apply h-28 top-0 rounded-full  w-28 md:w-64  md:h-64 mr-10;

  
}
.photo  img{
  @apply rounded-full w-28 md:max-w-full shadow-lg xs:h-28 md:w-64  md:h-64

}


.socials{ 
  @apply flex justify-evenly w-full text-3xl px-2;
}
.socials a{
  @apply shadow-2xl  mr-3 text-green-500 hover:text-green-300
}
.details{
  @apply flex flex-col align-middle justify-center text-left sm:items-center md:items-center sm:text-center;
}

.title {
  @apply flex flex-col sm:w-full sm:justify-center sm:mt-5 sm:items-center md:items-center md:w-full xs:justify-center xs:items-center
}

.card .header   h2.name {
  @apply text-3xl font-black  m-0 p-0 text-left

}


.contact {
  @apply flex w-6/12 flex-wrap px-2 justify-center align-middle  pl-5 sm:w-full sm:pl-0 sm:mt-5 sm:items-center sm:justify-center md:w-7/12 md:justify-center md:items-center 
}

.contact div{
  @apply mx-5 sm:mx-0 sm:px-5 sm:text-center sm:my-1 md:text-center
}
.contact div span{
  @apply text-gray-200
}
.contact p{
  @apply p-0 text-sm font-semibold;
}
.contact span{
  @apply p-0 text-xs uppercase 
}


.download{
  @apply absolute bottom-5 right-6
}
.download button{
  @apply bg-green-700 text-white rounded-full p-2 h-10 w-10 hover:bg-green-400
}

</style>