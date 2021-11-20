<template>
<div  class="w-1/3">
    <div class="card mx-10" >
        <div class="header">
            <div class="photo">
            <img src="@/assets/avatar.jpg" alt="" srcset="">
            </div>
            <div class="details">
            <div class="title">
                <h2 class="name"> <span>Herbert</span> Saladar </h2>
                <p class="my-2"> Front End Engineer</p>
                <div class="socials">
                <a href=""><fa-icon :icon="iconLinkedIn" > </fa-icon></a>
                <a href=""><fa-icon :icon="iconSkype" > </fa-icon></a>
                <a href=""><fa-icon :icon="iconInstagram" > </fa-icon></a>
                <a href=""><fa-icon :icon="iconGithub" > </fa-icon></a>            
                </div>
                <p> Philippines </p>
            </div>
            <div class="contact">
                <div>
                <span> Email </span>
                <p> hrbrtsldr@gmail.com</p>
                </div>
                <div>
                <span> Phone  </span>
                <p> 0949 606 1858</p>
                </div>
                <div>
                <span> Location  </span>
                <p> Philippines</p>
                </div>
                <div>
                <span> Website  </span>
                <p> herbertsaladar.com</p>
                </div>
            </div>
            
            </div>
            <a href="" class="download">
            <button>
                <fa-icon :icon="iconDownload"></fa-icon>
            </button>
            </a>
        </div>
    </div>
</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faLinkedin, faSkype, faInstagram, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faQuoteLeft, faEllipsisV} from '@fortawesome/free-solid-svg-icons'

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
      iconElipsis : faEllipsisV
    }
  },
  setup() {
    
  },
}
</script>
<style scoped>
.card .header{
  @apply bg-green-700
   relative flex-col
   flex sm:align-middle
   rounded-3xl 
   sm:justify-end
   md:justify-start
   pb-16;
   padding-top: 100px;
   margin-top:150px;
}

.photo{
  @apply shadow-2xl h-52 w-52 sm:mx-auto md:mx-auto absolute top-0 rounded-full shadow-2xl;
  left: 20%;
  top:-22%;
  
}
.photo  img{
  @apply rounded-full
}


.socials{ 
  @apply flex justify-center w-5/12 text-3xl px-2;
}
.socials a{
  @apply shadow-2xl  mr-3
}
.details{
  @apply flex flex-col align-middle justify-center text-left sm:items-center md:items-center md:w-full  sm:w-full;
}

.title {
  @apply flex flex-col sm:w-full sm:justify-center sm:mt-5 sm:items-center md:items-center md:w-full
}

h2 span{
   @apply bg-gray-800 p-2 rounded-2xl text-yellow-500
}
.card .header   h2.name {
  @apply text-3xl font-extrabold  m-0 p-0 text-left

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
  @apply bg-yellow-800 text-white rounded-full p-2 h-10 w-10
}

</style>