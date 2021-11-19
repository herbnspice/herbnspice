<template>
<div class="flex flex-wrap">
  <div  class="w-3/12">
    <div class="card">
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
  </div>
  <div class="w-7/12 p-10">
    <div class="card mt-2 rounded-t-2xl p-5">
      <div class="w-full h-20 flex justify-end align-middle">
      
        <div class="navigation mx-3">
            <router-link to="/" active-class="active" >Home</router-link>
            <router-link router-link to="/resume" active-class="active" > Resume  </router-link>
            <router-link router-link to="/about"  active-class="active" > Portfolio </router-link>
            <router-link router-link to="/about" active-class="active" > Contact </router-link>
            <router-link router-link to="/about" active-class="active" > Clients </router-link>
        </div>
        <button class="mx-5"> 
          <fa-icon :icon="iconElipsis" class="text-yellow-700 text-4xl "></fa-icon>  
        </button>
      </div>
        <div class="content">
          <div class="w-full my-10">
            <span> About me </span>
            <h3> WHO AM I   </h3>
            <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
          </div>
        </div>
        <div class="separator"></div>
       <div class="mt-2">
          <div class="content">
            <div class="w-full">
              <span> Services </span>
                <h3> WHAT I DO </h3>
                <div class="flex flex-wrap justify-center py-10">
                    <div class=" w-6/12 p-5 ">
                      <div class=" py-10 rounded-lg bg-gray-800 text-center">
                        <h4> Web App Developement</h4>
                        <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
                        <button class="py-2 px-5 bg-yellow-700 text-white rounded-lg mt-5"> Lets Discuss </button>
                      </div>
                    </div>
                    <div class=" w-6/12  p-5 ">
                      <div class=" py-10 rounded-lg bg-gray-800 text-center">
                        <h4> Website Developement</h4>
                        <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
                        <button class="py-2 px-5 bg-yellow-700 text-white rounded-lg mt-5"> Lets Discuss </button>
                      </div>
                    </div>
                </div>
            </div>
            <div class="separator"></div>

            <div class="w-full my-10 ">
                <span> Clients </span>
                <h3> WHO I WORKED WITH </h3>
                <div class="clients pt-10 mt-10 rounded-xl">
                    <div>
                      <img src="@/assets/images/logo/siena-lending.png" alt="">
                    </div>
                    <div>
                      <img src="@/assets/images/logo/vmx.svg" alt="">
                    </div>
                    <div>
                      <img src="@/assets/images/logo/manaty.png" alt="">
                    </div>
                    <div>
                      <img src="@/assets/images/logo/dish.png" alt="">
                    </div>
                    <div>
                      <img src="@/assets/images/logo/han.png" alt="">
                    </div>
                      <div>
                      <img src="@/assets/images/logo/carbid360.svg" alt="">
                    </div>
                    <div>
                      <img src="@/assets/images/logo/montalvo.png" alt="">
                    </div>
                    <div>
                      <img src="@/assets/images/logo/fedsad.png" alt="">
                    </div>
                </div>
            </div>
            <div class="separator"></div>
            <div class="w-full  my-10">
                <span> Reviews </span>
                <h3> WHAT SUCCESSFULL PEOPLE SAY ABOUT ME</h3>
                <div class="py-5">
                    <div class="review"> 
                      <img src="@/assets/images/avatar-montseratt.png" alt="">
                      <strong>Montserrat Rossas </strong>
                      <span>Head of Digital Marketing Virgin Mobile Mexico</span>
                      <fa-icon :icon="iconQoute" class="icon"/> 
                      <p> Herbert does a great job at Virgin Mobile - Integrate Design to Web components on Front End development using VueJS and JavaScript - Created custom web components and API integration to help increase company recurring payment. .... </p>
                    </div>
                    <div class="review">
                      <img src="@/assets/images/avatar-gustavo.png" alt="">
                      <strong>Gustavo Corchado Ramos </strong>
                      <span>Manager Client & Media Services LATAM </span>
                      <fa-icon :icon="iconQoute" class="icon"/> 
                      <p> I had the chance to work with Herbert during a year, in which he led the whole Front end development for the Virgin Mobile Mx site, is not easy define the skills as well as aptitudes does Herbert owns, since he come with a full package.  .... </p>
                    </div>
                    <div class="review">
                      <img src="@/assets/images/avatar-jeremy.png" alt="">
                        <strong>Jérémy Pollet </strong>
                        <span>Copywriter & Digital Consultant</span>
                        <fa-icon :icon="iconQoute" class="icon"/> 
                      <p>
                        I had the chance to work with Herbert on many web projects for more than two years. On top of his great technical skills, Herbert also has the best soft skill any project manager can dream of : reliability. Herbert is a quick learner who says what he does and does what he says. He makes working on complex projects a lot easier, that's why I think he would be a great asset to any team.
                      </p>
                    </div>
                    <div class="review">
                        <img src="@/assets/images/avatar-gary.png" alt="">
                        <strong>Gary Rieschick </strong>
                        <span>Head of Product Management & Strategy at Nrby </span>
                        <fa-icon :icon="iconQoute" class="icon"/> 
                        <p> Herbert was one of the lead development engineers at Carbid 360. His work ethic and quality of work were fantastic. He was always willing to work long days, weekends and just do whatever was needed to help the dev team and company for that matter.  .... </p>
                    </div>
                    <div class="review">
                      <img src="@/assets/images/avatar-nancy.png" alt="">
                        <strong>Nancy Avila </strong>
                        <span>Account Executive and Scrum Master at Manaty</span>
                        <fa-icon :icon="iconQoute" class="icon"/> 
                        <p> I had the pleasure to work with Herbert and always exceeded expectations. It is amazing to see how he manage personal and business skills to become a true leader with exceptional technical and client management skills. Pared with his loyalty, commitment, highest ethical behavior, charismatic and infectious energy naturally fuels teams to overachieve. A pleasure to work with and I will always recommend him!  </p>
                    </div>

                    <div class="review">
                      <img src="@/assets/images/avatar-daryl.png" alt="">
                        <strong>Daryl Anthony Jimenea </strong>
                        <span>UI/UIX  Designer</span>
                        <fa-icon :icon="iconQoute" class="icon"/> 
                        <p>I've been working with Herbert for the past several years now on several web projects and he's one of the most dependable person I know to get the job done. With his skills on front end, he's always a great asset to get him onboard on any project and into your team. </p>
                    </div>
                      <div class="review">
                      <img src="@/assets/images/avatar-chris.png" alt="">
                        <strong>Daryl Anthony Jimenea </strong>
                        <span>UI/UIX  Designer</span>
                        <fa-icon :icon="iconQoute" class="icon"/> 
                        <p>Herbert is one of the best colleague I had worked with. Outstanding team work and work ethics. He will definitely make the job done every time.</p>
                    </div>
                   
                </div>
                 <a href="" class="tag mx-auto block w-5/12 text-center"> See More </a>
            </div>
        </div>
    </div>
    </div>

     <div class="separator"></div>


  </div>
   
   
</div>
</template>
<script>
// @ is an alias to /src
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
  }
}
</script>
<style scoped>
.card .header{
  @apply bg-green-700
   relative flex-col
   flex sm:align-middle
   rounded-3xl 
   sm:justify-end
   md:justify-start;

   padding-top: 100px;
   margin-top:150px;
}
.download{
  @apply absolute bottom-5 right-6
}
.separator{
  height: 5px;
  @apply from-yellow-700 to-yellow-800 w-8/12 mx-auto rounded-full bg-gradient-to-bl shadow-2xl
}
.content{ 
  @apply  mt-5 flex flex-wrap rounded-3xl
}
.photo{
  @apply shadow-2xl h-52 w-52 sm:mx-auto md:mx-auto absolute top-0;
  left: 25%;
  top:-20%;
  
}
.socials{ 
  @apply flex justify-start w-5/12 text-3xl px-2;
}
.socials a{
  @apply shadow-2xl  mr-3
}
.photo  img{
  @apply rounded-full
}
.details{
  @apply flex flex-col align-middle justify-center text-left sm:items-center md:items-center md:w-full  sm:w-full;
}

.title {
  @apply flex flex-col sm:w-full sm:justify-center sm:mt-5 sm:items-center md:items-center md:w-full
}

.contact {
  @apply flex w-6/12 flex-wrap px-2 justify-start align-middle  pl-5 sm:w-full sm:pl-0 sm:mt-5 sm:items-center sm:justify-center md:w-7/12 md:justify-start md:items-start 
}

.contact div{
  @apply mx-5 sm:mx-0 sm:px-5 sm:text-center sm:my-1 md:text-left
}
.contact div span{
  @apply text-gray-200
}
.navigation{
  @apply bg-yellow-700 p-5 rounded-full  w-9/12  text-gray-100 font-bold text-lg flex align-middle items-center justify-center;
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
  @apply text-3xl font-bold m-0 p-0 text-gray-200 relative mt-5;
}
h3::before{
  @apply absolute w-8 h-2 rounded-full  bg-yellow-700 -top-3;
  content: " "
}
h4{
  @apply text-xl font-bold my-5 p-0;

}
h2 span{
   @apply bg-gray-800 p-2 rounded-2xl text-yellow-500
}
.card .header   h2.name {
  @apply text-3xl font-extrabold  m-0 p-0 text-left

}
span {
  @apply inline-block text-gray-200;
}
.clients{
  @apply flex flex-wrap items-center justify-center pt-10 bg-gray-800
}
.tag{
  @apply px-4 bg-yellow-700 rounded-full text-white py-2
}
.clients div{
   flex: 1 0 21%;
   @apply flex items-center justify-center p-5
}
.clients div img{
   max-width: 60%;
}
ul li span:first-child{
  min-width: 120px;
  @apply flex-1
}

.review{
  @apply rounded-3xl bg-gray-800 px-10 py-5 relative mt-14
}

.review img{
  @apply absolute -top-10 left-6
}

.review strong, .review span{
  @apply block text-left pl-28
}

.review strong{
  @apply font-bold text-2xl text-yellow-500
}
.review p{
  @apply text-left my-4 px-10
}
.review .icon {
   @apply float-left mt-5
}

.navigation a{
    @apply inline px-5 py-2 relative;
}
.navigation  a:hover::after, .navigation a.active::after{
    width: 25px;
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