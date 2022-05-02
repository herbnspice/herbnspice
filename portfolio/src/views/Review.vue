<template>
    <div class="mt-10">
        <div class="w-full my-10 ">
          <span data-aos="fade-down"  data-aos-delay="300"> Clients </span>
          <h3 data-aos="fade-down"  data-aos-delay="300"> WHO I WORKED WITH </h3>
          <div class="clients pt-10 mt-10 rounded-xl">
              <div data-aos="fade-down"  :data-aos-delay="300+(1*50)">
                <img src="@/assets/images/logo/siena-lending.png" alt="">
              </div>
              <div data-aos="fade-down"  :data-aos-delay="300+(1*50)">
                <img src="@/assets/images/logo/vmx.svg" alt="">
              </div>
              <div data-aos="fade-down"  :data-aos-delay="300+(2*50)">
                <img src="@/assets/images/logo/manaty.png" alt="">
              </div>
              <div data-aos="fade-down"  :data-aos-delay="300+(3*50)">
                <img src="@/assets/images/logo/dish.png" alt="">
              </div>
              <div data-aos="fade-down"  :data-aos-delay="300+(4*50)">
                <img src="@/assets/images/logo/han.png" alt="">
              </div>
                <div data-aos="fade-down"  :data-aos-delay="300+(5*50)">
                <img src="@/assets/images/logo/carbid360.svg" alt="">
              </div>
              <div data-aos="fade-down"  :data-aos-delay="300+(6*50)">
                <img src="@/assets/images/logo/montalvo.png" alt="">
              </div>
              <div data-aos="fade-down"  :data-aos-delay="300+(7*50)">
                <img src="@/assets/images/logo/fedsad.png" alt="">
              </div>
          </div>
      </div>
      <div class="separator"></div>
      <div class="w-full my-32" data-aos="fade-down"  data-aos-delay="300">
          <span data-aos="fade-down"  data-aos-delay="300"> Reviews </span>
          <h3 data-aos="fade-down"  data-aos-delay="300"> WHAT SUCCESSFULL PEOPLE SAY ABOUT ME</h3>
          <div class="py-5 review-container" data-aos="fade-down"  data-aos-delay="300">
             <div class="review" data-aos="fade-down"  data-aos-delay="300">
                  <img src="@/assets/images/avatar-gary.png" alt="">
                  <strong>Gary Rieschick </strong>
                  <span>Head of Product Management & Strategy at Nrby </span>
                  <fa-icon :icon="iconQoute" class="icon"/> 
                  <p> Herbert was one of the lead development engineers at Carbid 360. His work ethic and quality of work were fantastic. He was always willing to work long days, weekends and just do whatever was needed to help the dev team and company for that matter.  .... </p>
              </div>
              <div class="review" data-aos="fade-down"  data-aos-delay="300"> 
                <img src="@/assets/images/avatar-montseratt.png" alt="">
                <strong>Montserrat Rossas </strong>
                <span>Head of Digital Marketing Virgin Mobile Mexico</span>
                <fa-icon :icon="iconQoute" class="icon"/> 
                <p> Herbert does a great job at Virgin Mobile - Integrate Design to Web components on Front End development using VueJS and JavaScript - Created custom web components and API integration to help increase company recurring payment. .... </p>
              </div>
              <div class="review" data-aos="fade-down"  data-aos-delay="300">
                <img src="@/assets/images/avatar-gustavo.png" alt="">
                <strong>Gustavo Corchado Ramos </strong>
                <span>Manager Client & Media Services LATAM </span>
                <fa-icon :icon="iconQoute" class="icon"/> 
                <p> I had the chance to work with Herbert during a year, in which he led the whole Front end development for the Virgin Mobile Mx site, is not easy define the skills as well as aptitudes does Herbert owns, since he come with a full package.  .... </p>
              </div>
              <div class="review" data-aos="fade-down"  data-aos-delay="300">
                <img src="@/assets/images/avatar-jeremy.png" alt="">
                  <strong>Jérémy Pollet </strong>
                  <span>Copywriter & Digital Consultant</span>
                  <fa-icon :icon="iconQoute" class="icon"/> 
                <p>
                  I had the chance to work with Herbert on many web projects for more than two years. On top of his great technical skills, Herbert also has the best soft skill any project manager can dream of : reliability. Herbert is a quick learner who says what he does and does what he says. He makes working on complex projects a lot easier, that's why I think he would be a great asset to any team.
                </p>
              </div>
             
              <div class="review" data-aos="fade-down"  data-aos-delay="300">
                <img src="@/assets/images/avatar-nancy.png" alt="">
                  <strong>Nancy Avila </strong>
                  <span>Account Executive and Scrum Master at Manaty</span>
                  <fa-icon :icon="iconQoute" class="icon"/> 
                  <p> I had the pleasure to work with Herbert and always exceeded expectations. It is amazing to see how he manage personal and business skills to become a true leader with exceptional technical and client management skills. Pared with his loyalty, commitment, highest ethical behavior, charismatic and infectious energy naturally fuels teams to overachieve. A pleasure to work with and I will always recommend him!  </p>
              </div>

              <div class="review" data-aos="fade-down"  data-aos-delay="300">
                <img src="@/assets/images/avatar-daryl.png" alt="">
                  <strong>Daryl Anthony Jimenea </strong>
                  <span>UI/UIX  Designer</span>
                  <fa-icon :icon="iconQoute" class="icon"/> 
                  <p>I've been working with Herbert for the past several years now on several web projects and he's one of the most dependable person I know to get the job done. With his skills on front end, he's always a great asset to get him onboard on any project and into your team. </p>
              </div>
                <div class="review" data-aos="fade-down"  data-aos-delay="300">
                <img src="@/assets/images/avatar-chris.png" alt="">
                  <strong>Christian Francis Callero </strong>
                  <span>Remove Android Developer</span>
                  <fa-icon :icon="iconQoute" class="icon"/> 
                  <p>Herbert is one of the best colleague I had worked with. Outstanding team work and work ethics. He will definitely make the job done every time.</p>
              </div>
          </div>
          <div class="w-full text-center"> 
          <a href="https://www.linkedin.com/in/herbertsaladar/"  target="_blank" class="tag mx-auto  "> See More </a>
          </div>
      </div>
    </div>
</template>
<style scoped>
.clients{
  @apply grid-cols-4 grid  gap-4 xs:grid-cols-2
}
.clients div{
   flex: 1 0 21%;
   @apply flex items-center justify-center p-5 bg-green-600 rounded-xl ; 
}
.clients div img{
  @apply xs:max-w-full;
   max-width: 80px;

}
.review-container{
  @apply  w-full flex-wrap align-middle items-center justify-center 
}
.review{
  @apply rounded-xl bg-green-600 px-5 mx-2 py-5 relative mt-14 mb-5 w-full xs:flex xs:flex-col xs:items-center; 
}

.review img{
  @apply absolute -top-10 left-6 xs:relative xs:w-24 xs:top-0 xs:left-0
}

.review strong, .review span{
  @apply block text-left pl-32 text-white xs:p-0 xs:text-center
}

.review strong{
  @apply font-bold text-2xl 
}
.review p, .content p, .content h4{
  @apply text-left my-4 px-10 text-white
}
.review .icon {
   @apply float-left mt-5 text-green-100
}
</style>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default {
     components:{
    'fa-icon' : FontAwesomeIcon
  },
    setup() {
        const iconQoute = faQuoteLeft
      return { iconQoute }

    },
}
</script>