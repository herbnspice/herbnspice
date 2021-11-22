<template>
  <div>
    <div class="content">
      <div class="w-full text-white">
        <h2> Resume </h2>
      </div>
    </div>
    <div class="content flex-wrap">
        <div class="w-full flex">
          <div class="w-6/12 p-2">
              <h3 data-aos="fade-down"  data-aos-delay="300"> <fa-icon :icon="iconBriefcase" class="icon"/>  Experience </h3>
              <ul class="timeline">
              <li v-for="i in experience " :key="i"  data-aos="fade-right" data-aos-delay="300"> 
                  <h4> {{i.title}} </h4>
                  <a href="#"> {{i.year}} | {{i.company}} </a>
                  <span class="float-right "> {{i.type }}  </span>
                  <p> {{i.intro }} </p>
                  <span class="item" v-for="(task, index) in i.tasks" :key="index"> {{task}} </span>
              </li>
            </ul>
          </div>

          <div class="w-6/12 p-2">
              <h3 data-aos="fade-down" data-aos-delay="300"> <fa-icon :icon="iconUserGraduate" class="icon" /> Education </h3>
              <ul class="timeline">
                <li v-for="i in education " :key="i"   data-aos="fade-right" data-aos-delay="300">  
                    <h4> {{i.course}} </h4>
                    <a href="#"> {{i.school}} </a>
                    <span class="float-right "> {{i.years }}  </span>
                </li>
              </ul>
              <div class="my-10 h-2"></div>
              <h3  data-aos="fade-down"  data-aos-delay="300">  <fa-icon :icon="iconCertificate" class="icon"/> Certification </h3>
              <ul class="timeline">
                <li v-for="i in certification " :key="i"  data-aos="fade-right"  data-aos-delay="300"> 
                    <h4> {{i.title}} </h4>
                    <a href="#"> {{i.year}} </a>
                </li>
              </ul>
              
              <div class="my-5 h-2"></div>

              <h3  data-aos="fade-down" data-aos-delay="300">  <fa-icon :icon="iconTalk" class="icon"/>  Talks </h3>
              <ul class="timeline">
                <li v-for="i in talks " :key="i"  data-aos="fade-right" data-aos-delay="300"> 
                    <h4> {{i.title}} </h4>
                    <strong> {{i.organization }}  </strong>
                    <a href="#" class="block"> {{i.year}} | {{i.type}} </a>
                    <span> {{i.content }} </span>
                </li>
              </ul>

              <div class="my-5 h-2"></div>

              <h3  data-aos="fade-down">  <fa-icon :icon="iconAward" class="icon"/>  Awards </h3>
              <ul class="timeline">
                <li v-for="i in award " :key="i"  data-aos="fade-right"> 
                    <h4> {{i.title}} </h4>
                    <strong> {{i.organization }}  </strong>
                    <a href="#" class="block"> {{i.year}} | {{i.type}} </a>
                    <span> {{i.content }} </span>
                </li>
              </ul>
              
          </div>
        </div>

        <div class="w-full flex mt-14 ">
          <div class="w-6/12 p-5">
            <h3  data-aos="fade-down">  <fa-icon :icon="iconLaptopCode" class="icon" />Skills </h3>
            <div class="tags"  data-aos="fade-right"> 
              <span class="tag" v-for="(skill, index) in skills " :key="index"> {{ skill }}</span>
            </div>
          </div>
          <div class="w-6/12 p-5"  data-aos="fade-right"> 
              <h3  data-aos="fade-down">  <fa-icon :icon="iconToolBox" class="icon"/> Tools </h3>
                <div class="tags">
              <span class="tag" v-for="( tool, i) in tools " :key="i"> {{tool}}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBriefcase, faUserGraduate, faCertificate, faLaptopCode, faToolbox,faAward, faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity'
export default {
   components:{
        'fa-icon' : FontAwesomeIcon
    },
    data() {
        return { 
            iconBriefcase : faBriefcase,
            iconUserGraduate: faUserGraduate,
            iconCertificate: faCertificate,
            iconLaptopCode : faLaptopCode,
            iconToolBox : faToolbox,
            iconAward: faAward,
            iconTalk: faChalkboardTeacher,
            show: false
        }
    },
  setup() {
    const experience = ref([
      { title : 'Programmer Analyst IV',
        year: '2021',
        company: 'Siena Lending',
        type: 'Fintech',
        intro: 'A Fintech leading independent asset-based lender (ABL)  serving lower and  middle-market companies that may have difficulty accessing traditional financing.',
        tasks: [
          '1. I analyze complex data and create Vue componenents',
          '2. I coordinate with the Backend Developers and Integrate the API',
          '3. I coordinate with Quality Assurance Engineers for bugs, issues and I am incharge on fixing reported issues.',
        ]
      },
     
      { title : 'Senior Front End Engineer',
        year: '2020 - 2021',
        company: 'CarBid 360 / Phoenix, Arizona',
        type: 'Auction',
        intro: 'CarBid 360 is a an innovation digital car auction platform for dealers.',
        tasks: [
          '1. I developed the website and web app for CarBid 360  using a Single page application framework',
          '2. I integrate user interface and convert as User experience.',
          '3. I manage and coordinate with other developers for team collaboration.',
          '4. I am in charge of the applications production and server releases for the front end'
        ]
      },
       { title : 'Senior Front End Engineer',
        year: '2017 - 2021',
        company: 'Virgin Mobile Mexico',
        type: 'Telecom',
        intro: 'A virtual mobile operator that offers mobile telephony services under the Virgin Mobile brand in Mexico.',
        tasks: [
          '1. I have created the website for virginmobile that helps increased the company revenue.',
          '2. I create tools that enhances the companies client and management experience.',
          '3. I integrate API , graphics, audio and video into the companies website.',
          '4. I write and integrate maintainable codes based on the designer specifications.'
        ]
      },
      { title : 'Front End Engineer',
        year: '2014 - 2017',
        company: 'Socialdraft',
        type: 'Social media',
        intro: 'A Social media calendar that handle scheduling post, and content calendars',
        tasks: [
          '1. Working alongside other teams to deliver a coherent front-end devvelopment task, this will involve pushing forwards API and schema changes.',
          '2. Developing responsive web applications and hybrid mobile applications to a high standard.',
          '3. Mentoring and training other developers as necessary.',
          '4. Manages on the app and api live release.'
        ]
      },
      { title : 'Front End Engineer',
        year: '2013 - 2014',
        company: 'FriendsEat',
        type: 'Blog',
        intro: 'Friendseat helps people find the Best Restaurants, Coupons, Deals and other Food Lovers',
        tasks: [
          '1. Developing responsive web applications and hybrid mobile applications to a high standard.',
          '2. Create Plugins and features for the site to optimize usability.',
          '3. Coordinate with testers and to ensure site is running smoothly',
        ]
      },
      { title : 'Web Developer',
        year: '2013 - 2020',
        company: 'Independent Consultant',
        type: 'Web Developer',
        intro: 'I was a Web developer and Web consultant in varios companies creating websites and plugins. Some of these companies are:',
        tasks: [
          `1. Goja: One of the world's largest Amazon sellers, GOJA, combines its software and
            strategies to accurately growth for its brands and partners on Amazon and
            beyond.`,
          `2. Check and Trust: Is a platform that protects your company from a multitude of dishonest and nefarious entities that represent a real threat for your business.`,
          `3. Fedosad: FEDOSAD is an association of personal services which has the
            particularity of grouping together activities likely to respond without interruption
            to your changing needs. `,
        ]
      },
    ])
    const certification = ref([
      {
        title:'Nuxt JS with Laravel API - Building SSR Vue JS',
        year: 'Issued 2021'
      },
      {
        title:'Build Web Apps With VueJS3 & Firebase',
        year: 'Issued 2021'
      },
      {
        title:'Complete Flexbox Real world Projects',
        year: 'Issued 2020'
      },
      {
        title:'Complete Flexbox Real world Projects',
        year: 'Issued 2020'
      },
       {
        title:'Polymer 3',
        year: 'Issued 2019'
      },
       {
        title:'ICDL ASIA International Computer Drivers License  (ICDL)',
        year: 'Issued 2007'
      },
    ])

    const education = ref([
      {
        course: 'BACHELOR OF SCIENCE IN INFORMATION MANAGEMENT',
        year: '2004-2008',
        school: 'West Visayas State University, Iloilo City'
      }
    ])

    const skills = ref([
      'VueJS', 'Vue CLI', 'Vuex', 'Vue Router', 'Buefy' , 'Vanilla', 'Javascript', 'Polymer', 'NodeJS', 'Tailwind', 'Bootstrap', 'HTML', 'CSS', 'SCSS', 'PHP', 'jQuery', 'GIT', 'Wordpress', 'Webpack', 'Laravel'
    ])
    const tools = ref([
      'GIT', 'Github Desktop', 'Vue Devtools', 'VSCode', 'Wave', 'Analytics', 'AWS', 'Restful', 'Adobe Suites', 'Photoshop', 'XD', 'Slack', 'JIRA', 'MS Teams', 'Skype', 'Noun Project', 'Lightbox'

    ])

    const talks = ref([
      { organization : "iSchools - Commission on Information and Communications Technology (Philippines)", 
        year: '2010 - 2012 ',
        type: "Resource Speaker",
        title: 'Web Development Training Course',
        content: "Passed the Commission on Information and Communications Technology (Philippines) spearkers worskhop and was assigned to deliver and be a resource speaker in web development in different parts of the country ( Romblon, Guimaras, Capiz, Aklan ). "
      },
      {
        organization : " Agricultural Training Institute ",
        type: "Resource Speaker",
        title: "Computer Based Data Management for Agricultural Extensions Workers",
        year: '2011',
        content: "Was able share my knowledge and experience as a resource speaker in Computer Data management for Agricultural Extension "
      },
      {
        organization: "Korean Internet Volunteer - Republic of Korea - Ministry of Publication Administration and Security National Information Society Agency",
        title: "Web Development Training",
        type: "Resource Speaker ",
        year: '2010',
        content: "Was able share my knowledge and experience as a resource speaker in web development in partnership of Korean Internet Volunteer at Aklan State University College of Industrial Technology"
      }
    ])

    const award = ref([
      {
        organization: "Philippine Association of State University and Colleges VI",
        title: "First Runner Up",
        type: "Research Paper Adviser",
        year: '2012',
        content: `Served as Thesis Adviser in Research paper entitled "Aswang" A multimedia platform game under the Information and Communiications Technology Research Category, during the 3rd PASUC VI RMC Regional Student Research Symposium helt at Western Visayas College of Science and Technology, Lapaz Iloilo City`
      }
    ])

    return { experience, certification, education, skills, tools, talks, award}
  },
}
</script>
<style scoped>
.icon{
  @apply mr-4
}
 .content{
   @apply flex;
 }
 h3{
   @apply text-2xl font-bold mb-5
 }

 .timeline {
   @apply border-l-4 pl-5 relative m-2 border-yellow-800
 }

 .timeline::before{
   @apply absolute w-3 h-3 -top-0 -left-2 bg-yellow-800 rounded-full;
   content: "";
 }

  .timeline::after{
   @apply absolute w-3 h-3 -bottom-0 -left-2 bg-yellow-800 rounded-full;
   content: "";
 }

 ul.timeline li {
   @apply border rounded-lg shadow-sm relative mt-8  border-yellow-800 text-white p-5; 
 }

 ul.timeline li::before{
   @apply w-4 h-4 -left-8 top-1/2 bg-yellow-700 absolute rounded-full;
   content: "";
    top: 0%;
    z-index: 1;
 }

 ul.timeline li::after{
   @apply w-6 h-6 -left-9 top-1/2 bg-yellow-800 absolute rounded-full;
   content: "";
  top: -4px;
  z-index: 0;
  

 }
span.item{
  @apply pl-3
}
ul.timeline li h4{
  @apply m-0 text-gray-100 p-2 rounded-t-lg;
}
ul.timeline li a {
   @apply mt-2 p-2 text-gray-400 text-sm;
}
ul.timeline li span{
  @apply text-sm mr-4 text-gray-400  p-2
}
ul.timeline li strong{
  @apply text-sm p-2 block
}
ul.timeline li p{
  @apply mt-2 p-2 pb-5
 
}

.tags{
  @apply flex flex-wrap;
}
.tag{
  @apply bg-yellow-800 text-gray-100 py-2 px-3 mr-2 rounded-full shadow-2xl my-1;  
}



</style>
