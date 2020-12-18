<template>
   <Layout>
       <div class="container mx-auto">
           <div class="p-4">
           <h2 class="text-lg font-bold">Portfolio</h2>
           <p>I mostly work on internal system or corporate application which I cannot present to you. Here is small websites which I can, mainly for my friends or as a help for non profit organizations.</p>
           </div>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               <div class="p-4">
                    <a href="https://domcek.org" target="_blank">
                       <img src="/portfolio/domcek.png" />
                   </a>
                   <h4 class="text-lg py-2 font-bold"> Domcek (Volunteer work) </h4>
                   <p>Here was done whole website by their design, and event registration system on site and also offline part on event place by scan QR codes.
                       Main technologies here is API in PHP, website based on vue and registration mobile app on Flutter.
                   </p>
               </div>

               <div class="p-4">
                   <a href="https://farasaca.sk" target="_blank">
                       <img src="/portfolio/fara.png" />
                   </a>
                   <h4 class="text-lg py-2 font-bold"> Fara Šaca (Volunteer work) </h4>
                   <p>Here was done whole website by my simple design, and content managment. Api based on GO and React frontend</p>
               </div>

               <div class="p-4">
                    <a href="https://veselahviezdicka.sk" target="_blank">
                       <img src="/portfolio/veselahviezdicka.png" />
                   </a>
                   <h4 class="text-lg py-2 font-bold">Vesela Hviezdicka</h4>
                   <p>Done simple design to reduce costs of client, GO API and React frontend.</p>
               </div>
           </div>
       </div>
   </Layout> 
</template>

<script>
    export default {
        name: "Not Found"
    }
</script>

<style scoped>

</style>