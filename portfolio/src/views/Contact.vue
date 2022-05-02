<template>
    <div>
        <div class="content">
            <div class="w-full ">
                <h2> Contact </h2>
            </div>
        </div>
        <div class="content">
            <div class="contact">
                <img src="@/assets/avatar.jpg" alt="" srcset="">
                <div>
                    <ul>
                        <li>Email: hrbrtsldr@gmail.com</li>
                        <li>Mobile: +63 949 606 1858</li>
                        <li>Skype: herbert.m.saladar</li>
                        <li>Linkedin:  <a href="https://www.linkedin.com/in/herbertsaladar/"  target="_blank" >  herbert.m.saladar </a>   </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contact{
    @apply flex flex-wrap text-white font-bold p-4 justify-center items-center align-middle bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl w-3/4 mx-auto;
}
.contact img{
    @apply mr-5 h-32 w-32 rounded-full
}
</style>