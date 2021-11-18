<template>
<div>
    <div class="card">
        <div class="header">
          <div class="photo">
            <img src="@/assets/avatar.jpg" alt="" srcset="">
          </div>
          <div class="details">
            <div class="title">
              <h2 class="name"> <span>Herbert</span> Saladar </h2>
              <p> Front End Engineer</p>
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
                <p> example@xample.com</p>
              </div>
              <div>
                <span> Phone  </span>
                <p> example@xample.com</p>
              </div>
              <div>
                <span> Location  </span>
                <p> example@xample.com</p>
              </div>
                <div>
                <span> Location  </span>
                <p> example@xample.com</p>
              </div>
            </div>
            
          </div>
          <a href="" class="download">
            <fa-icon :icon="iconDownload"></fa-icon>
          </a>
        </div>
    </div>
    <div class="card mt-2 rounded-t-2xl">
        <div class="content">
          <div class="w-full my-10">
            <span> About me </span>
            <h3> WHO AM I   </h3>
            <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
          </div>
         
        </div>
    </div>
    
    <div class="separator"></div>

    <div class="mt-2">
        <div class="content">
          <div class="w-full text-center">
             <span> Services </span>
              <h3> WHAT I DO </h3>
              <div class="flex flex-wrap justify-center py-10">
                  <div class=" w-4/12  px-5 pb-10 m-5 rounded-lg bg-gradient-to-tr from-gray-100 to-white shadow-md">
                    <h4> Web App Developement</h4>
                    <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
                    <button class="py-2 px-5 bg-green-500 text-white rounded-lg mt-5"> Lets Discuss </button>
                  </div>
                  <div class=" w-4/12 px-5 m-5  pb-10 rounded-lg bg-gradient-to-tr from-gray-100 to-white shadow-md">
                    <h4> Website Developement</h4>
                    <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
                    <button class="py-2 px-5 bg-green-500 text-white rounded-lg mt-5"> Lets Discuss </button>
                  </div>
              </div>
          </div>
          <div class="w-full text-center my-10 x">
              <span> Clients </span>
              <h3> WHO I WORKED WITH </h3>
              <div class="clients pt-10 bg-green-300 mt-10 rounded-xl">
                  <div>
                     <img src="@/assets/images/logo/dish.jpg" alt="">
                  </div>
                   <div>
                     <img src="@/assets/images/logo/han.png" alt="">
                  </div>
                     <div>
                     <img src="@/assets/images/logo/carbid360.svg" alt="">
                  </div>
                  <div>
                     <img src="@/assets/images/logo/manaty.png" alt="">
                  </div>
                   <div>
                     <img src="@/assets/images/logo/montalvo.png" alt="">
                  </div>
                   <div>
                     <img src="@/assets/images/logo/mx.png" alt="">
                  </div>
                   <div>
                     <img src="@/assets/images/logo/siena-lending.png" alt="">
                  </div>
                   <div>
                     <img src="@/assets/images/logo/fedsad.png" alt="">
                  </div>
              </div>
          </div>
          <div class="separator"></div>
          <div class="w-full text-center my-10">
              <span> Reviews </span>
              <h3> WHAT SUCCESSFULL PEOPLE SAY ABOUT ME</h3>
              <div>
                  <div>
                    <img src="@/assets/images/avatar-montseratt.png" alt="">
                  </div>
                  <div>
                    <img src="@/assets/images/avatar-gustavo.png" alt="">
                  </div>
                  <div>
                    <img src="@/assets/images/avatar-jeremy.png" alt="">
                  </div>
                  <div>
                    <img src="@/assets/images/avatar-gary.png" alt="">
                  </div>
                  <div>
                    <img src="@/assets/images/avatar-nancy.png" alt="">
                  </div>
              </div>
          </div>
        </div>
    </div>
</div>
</template>
<script>
// @ is an alias to /src
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faLinkedin, faSkype, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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
    }
  }
}
</script>
<style scoped>
.header{
  @apply bg-green-700
   text-white
   relative flex-wrap
   flex sm:align-middle
   rounded-3xl 
   sm:justify-end
   md:justify-start;
}
.download{
  @apply absolute bottom-5 right-6
}
.separator{
  height: 1px;
  @apply bg-green-100 w-full
}
.content{ 
  @apply  mt-5 flex flex-wrap rounded-3xl
}
.photo{
  @apply shadow-2xl h-32 w-32 sm:mx-auto md:mx-0;
  
}
.socials{ 
  @apply flex justify-start w-5/12 text-3xl px-2;
}
.socials a{
  @apply shadow-2xl  mr-3
}
.photo  img{
  @apply rounded-xl
}
.details{
  @apply flex flex-wrap align-middle justify-start text-left sm:items-center md:items-start md:w-9/12 ml-5  sm:w-full;
}

.title {
  @apply flex flex-col sm:w-full sm:justify-center sm:mt-5 sm:items-center md:items-start md:w-5/12
}

.contact {
  @apply flex w-6/12 flex-wrap px-2 justify-start align-middle  pl-5 sm:w-full sm:pl-0 sm:mt-5 sm:border-l-0 sm:items-center sm:justify-center md:w-7/12 md:justify-start md:items-start md:border-l-2
}

.contact div{
  @apply mx-5 sm:mx-0 sm:px-5 sm:text-center sm:my-1 md:text-left
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
h3, h2, p{
  @apply pt-2;
}
h3{
  @apply text-3xl font-bold m-0 p-0 text-green-600 ;
}
h4{
  @apply text-xl font-bold my-5 p-0;

}
h2 span{
   @apply bg-white p-2 rounded-2xl
}
.card .header   h2.name {
  @apply text-3xl font-extrabold  m-0 p-0 text-left

}
span {
  @apply inline-block text-green-800;
}
.clients{
  @apply flex flex-wrap items-center justify-center pt-10
}
.clients div{
   flex: 1 0 21%;
   @apply flex items-center justify-center p-5
}
.clients div img{
   max-width: 50%;
  filter: grayscale(1);
}
ul li span:first-child{
  min-width: 120px;
  @apply flex-1
}
</style>