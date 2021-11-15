<template>
  <div class="card">
      <div class="header">
        <div class="photo">
          <img src="@/assets/avatar.jpg" alt="" srcset="">
        </div>
        <div class="title">
          <h2> Herbert Saladar </h2>
          <p> Front End Engineer</p>
          <div class="socials">
            <a href=""><fa-icon :icon="iconLinkedIn" > </fa-icon></a>
            <a href=""><fa-icon :icon="iconSkype" > </fa-icon></a>
            <a href=""><fa-icon :icon="iconInstagram" > </fa-icon></a>
            <a href=""><fa-icon :icon="iconGithub" > </fa-icon></a>

            
          </div>
        </div>
      </div>
      <div class="content">
        <div   class="w-5/12">
          <h3> About me </h3>
          <p> Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies. </p>
          <button>Donwload CV</button>
        </div>
        <div class="w-6/12">
            <ul>
              <li> <span> Residence </span> <span> Philippines</span> </li>
              <li> <span> Residence </span> <span> Philippines</span> </li>
              <li> <span> Residence </span> <span> Philippines</span> </li>
            </ul>
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
  @apply bg-green-700 text-white  relative;
  min-height: 300px
}

.content{
  @apply flex justify-between mt-5
}
button{
  @apply bg-green-400 px-5 py-2 font-bold rounded-md shadow-sm text-gray-100
}
.photo{
  @apply shadow-2xl inline-block absolute top-10 rounded-2xl
}
.socials{ 
  @apply flex justify-evenly w-5/12 text-3xl 
}
.socials a{
  @apply shadow-2xl
}
.photo  img{
  @apply rounded-xl
}
.title{
  @apply w-6/12 flex flex-col align-middle items-center justify-center float-right my-10
}
h3, h2, p{
  @apply p-2;
}
h2{
  @apply text-5xl font-extrabold text-center
}
span {
  @apply inline-block;
}
ul li span:first-child{
  MIN-width: 120px;
}
</style>