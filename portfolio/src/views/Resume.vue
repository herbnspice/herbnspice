<template>
  <div class="card">
    <div class="header"> 
      <span> 8+ Years of Experience </span>

        <h2> Resume </h2>
    </div>
    <div class="content">
      <div class="container">
      <div class="w-full flex">
          <div class="w-6/12 p-2">
              <h3> Experience </h3>
              <ul class="timeline">
                <li v-for="i in 5 " :key="i">
                    <h4> Programmer Analyst IV <span class="float-right "> Fintech  </span> </h4>
                    <a href="#"> 2021 | Siena Lending Group </a>
                    
                    <p> Create Vue Components based on highly complex software specifications </p>
                </li>
              </ul>
            </div>
            <div class="w-6/12 p-2">
                <h3> Experience </h3>
                <ul class="timeline">
                <li v-for="i in 5 " :key="i">
                    <h4> Programmer Analyst IV </h4>
                    <a href="#"> 2021 | Siena Lending Group </a>
                    <span class="float-right "> Fintech  </span>
                    <p> Create Vue Components based on highly complex software specifications </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full flex mt-14">
            <div class="w-6/12">
              <h3> Languages </h3>
              <div class="tags">
                <span class="tag" v-for="i in 5 " :key="i"> VueJs</span>
              </div>

            </div>
            <div class="w-6/12">
                <h3> Tools </h3>
                 <div class="tags">
                <span class="tag" v-for="i in 5 " :key="i"> VueJs</span>
              </div>
            </div>
          </div>
          <div class="w-full text-center mt-5">
              <button> Download Resume </button>
          </div>
        </div>
        
    </div>
  
  </div>
</template>
<style scoped>

button{
  @apply bg-green-400 px-5 py-2 font-bold rounded-md shadow-sm text-gray-100
}
 .content{
   @apply flex;
 }
 h3{
   @apply text-2xl font-bold mb-5
 }

 .timeline {
   @apply border-l-4 pl-5 relative m-2
 }

 .timeline::before{
   @apply absolute w-3 h-3 -top-0 -left-2 bg-green-600 rounded-full;
   content: "";
 }

  .timeline::after{
   @apply absolute w-3 h-3 -bottom-0 -left-2 bg-green-500 rounded-full;
   content: "";
 }

 .timeline li {
   @apply border rounded-lg shadow-sm relative mt-5 ; 
 }

 .timeline li::before{
   @apply w-4 h-4 -left-8 top-1/2 bg-green-100 absolute rounded-full;
   content: "";
      top: 44%
 }

 .timeline li::after{
   @apply w-5 h-1 -left-5 top-1/2 bg-green-100 absolute rounded-full;
   content: "";
   height: 1px;

 }

.timeline li h4{
  @apply m-0 bg-green-300 text-green-800 p-2 rounded-t-lg;
}
.timeline li a {
   @apply mt-2 p-2 text-green-600 text-sm;
}
.timeline li span{
  @apply text-sm mr-4 text-green-600
}
.timeline li p{
  @apply mt-2 p-2 pb-5
 
}

.tags{
  @apply flex;
}
.tag{
  @apply bg-green-200 text-green-800 py-2 px-3 mr-2 rounded-full shadow-2xl;  
}



</style>
