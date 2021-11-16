<template>
  <div>
      <div class="w-8/12  mx-auto">
        <header>
            <h1> Herbert <span> Saladar </span> </h1>
            <div class="nav">
              <router-link to="/" active-class="active" >Home</router-link>
              <router-link router-link to="/resume" active-class="active" > Resume  </router-link>
              <router-link router-link to="/about"  active-class="active" > Portfolio </router-link>
              <router-link router-link to="/about" active-class="active" > Contact </router-link>
              <router-link router-link to="/about" active-class="active" > Clients </router-link>
            </div>
        </header>
      <router-view />
    </div>
  </div>
</template>
<style scoped>
header{
  @apply p-5 m-5;
}
  header h1{
    @apply float-left
  }
  header h1 span{
    @apply inline rounded-md text-white p-2 bg-green-500 
  }
  header .nav{
    @apply float-right
  }

  header .nav a {
    @apply inline px-5 py-2 relative;
  }

  a:hover::after, a.active::after{
    width: 25px;
  }

  a:after{
    height:2px;
    width: 0px;
    position: absolute;
    right: 0;
    left: 0;
    bottom:0;
    content: "";
    background-color: #2eca7f;
    transition: all .15s ease-in-out;
    margin: 0 auto;
  }



</style>

