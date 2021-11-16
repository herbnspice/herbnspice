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
        </div>
    </div>
    <div class="card mt-2 rounded-t-2xl">
        <div class="content">
          <div class="w-full my-10">
            <span> About me </span>
            <h3> WHO AM I   </h3>
            <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
          </div>
          <div class="separator"></div>
          <div class="w-full text-center my-12">
             <span> Services </span>
              <h3> WHAT I DO </h3>
              <div class="flex flex-wrap justify-center py-10">
                  <div class=" w-5/12  px-5 py-10 m-5 rounded-2xl bg-gradient-to-tr from-gray-100 to-white shadow-md">
                    <h4> Web App Developement</h4>
                    <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
                  </div>
                  <div class=" w-5/12 px-5 py-10 m-5 rounded-2xl bg-gradient-to-tr from-gray-100 to-white shadow-md">
                    <h4> Website Developement</h4>
                    <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
                  </div>
              </div>
          </div>
          <div class="w-full text-left">
              <span> Clients </span>
              <h3> WHO I WORKED WITH </h3>
              <div>

              </div>
          </div>
          <div class="w-full text-center">
              <span> What other people say about me </span>
              <h3> Companies that trusted me </h3>
              <div>
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
      iconGithub : faGithub
    }
  }
}
</script>
<style scoped>
.header{
  @apply bg-green-700 text-white  relative flex-wrap flex align-middle rounded-3xl;
 
}
.separator{
  height: 1px;
  @apply bg-green-100 w-full
}
.content{ 
  @apply  mt-5 flex flex-wrap rounded-3xl
}
.photo{
  @apply shadow-2xl h-32 w-32;
  
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
  @apply flex flex-wrap align-middle justify-start text-left items-center w-9/12 ml-5;
}

.title {
  @apply flex w-5/12 flex-col
}

.contact {
  @apply flex w-6/12 flex-wrap px-2 justify-start align-middle border-l-2 pl-5
}
.contact div{
  @apply mx-5
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
ul li span:first-child{
  MIN-width: 120px;
}
</style>