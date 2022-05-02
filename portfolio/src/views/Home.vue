<template>
<div>
  <div class="content">
    <div class="w-full ">
      <h2> About me </h2>
      <div class="h2 mt-10"></div>
      <span data-aos="fade-down"  data-aos-delay="300">Know me</span>
      <h3 data-aos="fade-down"  data-aos-delay="300"> WHO AM I </h3>
      <p data-aos="fade-down"  data-aos-delay="300">  I've been working as a  Web Front end engineer with over 8 years of  experience in the industry and a passion for creating web applications that are focused and easy to use.  My skill set includes UX and API integration.</p>
      <p data-aos="fade-down"  data-aos-delay="300">My Objectives is to help  companies build a platform  using my skills to reach the company goals.</p>
    </div>
  </div>
  <div class="my-36">
    <div class="content"  >
      <div class="w-full " >
        <span data-aos="fade-down"  data-aos-delay="300"> Interests </span>
          <h3 data-aos="fade-down"  data-aos-delay="300"> WHAT I AM INTERESTED IN </h3>
          <div class="interest">
              <a href="#" title="Gadgets" data-aos="fade-left" :data-aos-delay="500+(1*50)" > <fa-icon :icon="iconLaptop"></fa-icon> </a>
              <a href="#" title="Travel" data-aos="fade-left" :data-aos-delay="500+(2*50)" > <fa-icon :icon="iconGlobe"></fa-icon> </a>
              <a href="#" title="Listening Music" data-aos="fade-left" :data-aos-delay="500+(3*50)" > <fa-icon :icon="iconMusic"></fa-icon> </a>
              <a href="#" title="Photography" data-aos="fade-left" :data-aos-delay="500+(4*50)"  > <fa-icon :icon="iconCamera"></fa-icon> </a>
              <a href="#" title="Watch Movies" data-aos="fade-left" :data-aos-delay="500+(5*50)"  > <fa-icon :icon="iconMovie"></fa-icon> </a>
              <a href="#" title="Hiking" data-aos="fade-left" :data-aos-delay="500+(6*50)" > <fa-icon :icon="iconHiking"></fa-icon> </a>
              <a href="#" title="Swiming" data-aos="fade-left" :data-aos-delay="500+(7*50)"  > <fa-icon :icon="iconSwiming"></fa-icon> </a>
          </div>
      </div>
    </div>
  </div>

  <div class="my-36">
    <div class="content"  >
      <div class="w-full " >
        <span data-aos="fade-down"  data-aos-delay="300"> Services </span>
          <h3 data-aos="fade-down"  data-aos-delay="300"> WHAT I DO </h3>

          <div class="w-full">
            <div class="w-full ">
              <h4  data-aos="fade-down">  <fa-icon :icon="iconLaptopCode" class="icon" />Skills </h4>
              <div class="tags"  data-aos="fade-down"> 
                <span class="tag" v-for="(skill, i) in skills " :key="i"  data-aos="fade-left" :data-aos-delay="500+(i*50)"> {{ skill }}</span>
              </div>
            </div>
            <div class="w-full mt-10"  data-aos="fade-down"> 
                <h4  data-aos="fade-down">  <fa-icon :icon="iconToolBox" class="icon"/> Tools </h4>
                  <div class="tags">
                <span class="tag" v-for="( tool, i) in tools " :key="i" data-aos="fade-left" :data-aos-delay="500+(i*50)"> {{tool}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

  
  <div class="my-36">
    <div class="content"  >
      <div class="w-full " >
        <span data-aos="fade-down"  data-aos-delay="300"> Socials </span>
          <h3 data-aos="fade-down"  data-aos-delay="300"> Lets Connect! </h3>


          <div class="w-full">
            <div class="w-full">
              <div class=" bg-green-500 p-5 rounded-md flex items-center align-middle justify-center my-5 shadow-sm xs:flex-col" data-aos="fade-down"  data-aos-delay="300"> 
                <fa-icon :icon="iconHands" class="icon text-9xl text-white rotate-12" />
                <div class="socials">
                  <p>I'm active on multiple Social Media platforms. Reach out - let's follow each other and connect.</p>

                  <div class="social-items">
          
                  <a href="https://www.linkedin.com/in/herbertsaladar/" target="_blank" data-aos="fade-left"  :data-aos-delay="500+(1*50)" ><fa-icon :icon="iconsSocial.iconLinkedIn" class="text-2xl" > </fa-icon></a>
                  <a href="#" target="_blank"  data-aos="fade-left"  :data-aos-delay="500+(2*50)" ><fa-icon :icon="iconsSocial.iconSkype" class="text-2xl" > </fa-icon></a>
                  <a href="https://www.instagram.com/herbert.saladar/" target="_blank"  data-aos="fade-left"  :data-aos-delay="500+(3*50)"><fa-icon :icon="iconsSocial.iconInstagram" class="text-2xl" > </fa-icon></a>
                  <a href="https://github.com/herbnspice" target="_blank"  data-aos="fade-left"  :data-aos-delay="500+(4*50)"><fa-icon :icon="iconsSocial.iconGithub" class="text-2xl" > </fa-icon></a> 
                  <a href="tel:+639496061858" target="_blank" title="+63 949 606 1858"  data-aos="fade-left"  :data-aos-delay="500+(5*50)"><fa-icon :icon="iconsSocial.iconPhone" class="text-2xl"> </fa-icon></a>
                  <a href="mailto:hrbrtsldr@gmail.com" target="_blank" title="hrbrtsldr@gmail.com"  data-aos="fade-left"  :data-aos-delay="500+(6*50)"><fa-icon :icon="iconsSocial.iconEmail" class="text-2xl"> </fa-icon></a>
                  <a href="tel:+639496061858" target="_blank" title="herbertsaladar.com"  data-aos="fade-left"  :data-aos-delay="500+(7*50)"><fa-icon :icon="iconsSocial.iconLink" class="text-2xl"> </fa-icon></a>
                  </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faLinkedin, faSkype, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import { faQuoteLeft, faGlobeAsia, faLaptop, faMusic, faCamera, faFilm, faHiking, faSwimmer, faHandshake, faLaptopCode, faTools, faPhone, faLink, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components:{
    'fa-icon' : FontAwesomeIcon
  },

  setup(){
        const skills = ref([
      'Vue 3.x', 'Vue 2.x', 'Vue CLI', 'Vuex', 'Vue Router', 'Buefy' ,  'ES6', 'Vanilla', 'Javascript',  'Ramda', 'Polymer', 'NodeJS', 'Tailwind', 'Bootstrap', 'HTML5', 'CSS3', 'SCSS', 'PHP', 'jQuery', 'GIT', 'Wordpress', 'Webpack', 'Laravel', 'RestAPI'
    ])
    const tools = ref([
      'GIT', 'Github Desktop', 'Vue Devtools', 'VSCode', 'Wave', 'Analytics', 'AWS', 'Restful', 'Adobe Suites', 'Photoshop', 'XD', 'Slack', 'JIRA', 'MS Teams', 'Skype', 'Noun Project', 'Lightbox'
    ])
    const iconQoute = faQuoteLeft
    const iconGlobe = faGlobeAsia
    const iconLaptop =  faLaptop
    const iconMusic = faMusic
    const iconCamera = faCamera
    const iconMovie = faFilm
    const iconHiking = faHiking
    const iconSwiming = faSwimmer
    const iconHands =  faHandshake
    const iconLaptopCode = faLaptopCode
    const iconToolBox = faTools
    const iconsSocial = {
      iconLinkedIn : faLinkedin,
      iconFacebook : faFacebookSquare,
      iconSkype : faSkype,
      iconInstagram: faInstagram,
      iconGithub : faGithub,
      iconQoute : faQuoteLeft,
      iconEmail: faEnvelope,
      iconPhone: faPhone,
      iconLink : faLink
    }


    return {skills, tools , iconQoute, iconGlobe, iconLaptop, iconMusic, iconCamera, iconMovie, iconHiking,iconSwiming, iconHands, iconLaptopCode, iconToolBox, iconsSocial}
  }
}
</script>
<style scoped>
.countdown {
   @apply flex justify-center my-10
}
.countdown  a{
  @apply p-5 text-4xl text-white hover:bg-green-400 bg-green-400 mx-2 rounded-sm
}
.interest{ 
  @apply flex justify-center my-10
}
.interest a {
  @apply p-5 text-3xl text-white hover:bg-green-400 bg-green-400 mx-2 rounded-sm

}
.separator{
  height: 5px;
  @apply from-green-500 to-green-500 w-8/12 mx-auto rounded-full bg-gradient-to-bl 
}
.content{ 
  @apply  mb-5 flex flex-wrap rounded-3xl
}

h3, h2, p{
  @apply pt-2;
}
h3{
  @apply text-3xl font-bold m-0 p-0  relative mt-5;
}
h3::before{
  @apply absolute w-8 h-2 rounded-full  bg-green-700 -top-3;
  content: " "
}
h4{
  @apply text-xl font-bold my-5 p-0;

}
span {
  @apply inline-block ;
}

.tag{
  @apply px-4 bg-green-500 rounded-full text-white py-2 hover:bg-green-300
}

ul li span:first-child{
  min-width: 120px;
  @apply flex-1
}

.tag{
  @apply bg-green-200  py-2 px-2 mr-2 rounded-sm shadow-2xl my-1 cursor-pointer text-green-800;   
}

.socials{
  @apply flex justify-center p-5 my-5 bg-green-600 rounded-md flex-col text-white shadow-sm xs:flex-col
}

.social-items {
  @apply flex flex-row my-4 xs:flex-col
}
.social-items a {
  @apply  justify-center flex  text-4xl w-full bg-white m-2 rounded-full text-green-600 shadow-sm hover:text-green-700  p-2 
}
</style>