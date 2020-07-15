<template>
   <div>
      <video-background class="vdo"
            src="/vdo.mp4"
            style="max-height: 800px; height: 100vh;"
            overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)">
      </video-background>
      <div align="center">
         <h1 class="hidden-sm-and-up display-1 mt-5 font-weight-bold" >A Warm Welcome</h1>
         <h1 class="hidden-xs-only display-3 mt-10 font-weight-bold" >A Warm Welcome</h1>
         <p class="hidden-sm-and-up subtitle-1 my-4 ma-3 text--secondary">Welcome to Kirirom Institute of Technology, A University which 
            provide <span class="primary--text font-weight-bold">full scholarship</span> to Cambodian students locate in Kirirom
            Mountain, Kompong Speu Province.</p>
         <p class="hidden-xs-only headline my-8 ma-3 text--secondary">Welcome to Kirirom Institute of Technology, The best technology university which 
            provide <span class="primary--text font-weight-bold">full scholarship</span> to <br> Cambodian students locate in Kirirom
            Mountain, Kompong Speu Province, Cambodia.</p>
      </div>
      <v-card flat class="success mx-2">
         <v-row no-gutters>
            <v-col v-for="pic in pics" :key="pic.text" md="4">
            <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 16 : 2" class="mx-2" tile>
               <v-img width="900px" height="400px" :src="pic.src" class="headline white--text align-end">
                  <v-card-title v-if="!hover" class="d-none d-lg-flex display-2 font-weight-black justify-center">{{pic.text}}</v-card-title>
                  <v-card-title v-if="!hover" class="d-flex d-md-flex d-lg-none display-1 font-weight-black justify-center">{{pic.text}}</v-card-title>

               </v-img>
               <v-expand-transition>
                  <div v-if="hover" class="transition-fast-in-fast-out 
                  success v-card--reveal" style="height: 100%;">
                     <h1 class=" d-none d-lg-flex display-2 font-weight-black mt-5 justify-center">{{pic.text}}</h1>
                     <h1 class=" d-flex d-md-flex d-lg-none display-1 font-weight-black mt-5 justify-center">{{pic.text}}</h1>
                     <p class="d-none d-lg-flex headline text--secondary text-center">{{pic.content}}</p>
                     <p class="d-flex d-lg-none body-1 text--secondary text-center ma-2">{{pic.content}}</p>
                  </div>
               </v-expand-transition>
            </v-card>
            </v-hover>
            </v-col>
         </v-row>
      </v-card>
      <div align="center">
         <h1 class="hidden-sm-and-up display-1 mt-5 font-weight-bold" >Full Scholarship</h1>
         <h1 class="hidden-xs-only display-3 mt-10 font-weight-bold" >Full Scholarship</h1>
         <p class="hidden-sm-and-up subtitle-1 my-4 ma-3 text--secondary">We provide full scholarship to <span class="primary--text font-weight-bold">Cambodian</span> to students which include: </p>
         <p class="hidden-xs-only headline my-8 ma-3 text--secondary">We provide full scholarship to <span class="primary--text font-weight-bold">Cambodian</span> to students which include: </p>
      </div>
      <div>
         <v-row no-gutters class="justify-center">
            <v-col  v-for="scho in schos" :key="scho.text" sm="5">
            <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 16 : 2" class="ma-2" tile >
               <v-img width="800px" height="250px" :src="scho.src" class="white--text align-end">
                  <v-card-title v-if="!hover" class="d-none d-lg-flex display-2 font-weight-black justify-center">{{scho.text}}</v-card-title>
                  <v-card-title v-if="!hover" class="d-flex d-md-flex d-lg-none headline font-weight-black justify-center">{{scho.text}}</v-card-title>
               </v-img>
               <v-expand-transition>
                  <div v-if="hover" class="transition-fast-in-fast-out 
                  success v-card--reveal" style="height: 100%;">
                     <h1 class="d-none d-lg-flex display-2 font-weight-black mt-5 justify-center">{{scho.text}}</h1>
                     <h1 class="d-flex d-md-flex d-lg-none headline font-weight-black mt-3 justify-center">{{scho.text}}</h1>
                     <p class="d-none d-lg-flex headline text--secondary text-center my-5">{{scho.content}}</p>
                     <p class="d-flex d-lg-none body-1 text--secondary text-center ma-2">{{scho.content}}</p>
                  </div>
               </v-expand-transition>
            </v-card>
            </v-hover>
            </v-col>
         </v-row>
      </div>
       <div align="center">
         <h1 class="hidden-sm-and-up display-1 mt-5 font-weight-bold" >Department</h1>
         <h1 class="hidden-xs-only display-3 mt-10 font-weight-bold" >Department</h1>
         <p class="hidden-sm-and-up subtitle-1 my-4 ma-3 text--secondary">Our Institute have <span class="primary--text font-weight-bold">3</span> departments such as:  </p>
         <p class="hidden-xs-only headline my-8 ma-3 text--secondary">Our Institute have <span class="primary--text font-weight-bold">3</span> departments such as: </p>
      </div>
      <div>
         <v-card >
         <div v-for="cov in covs" :key="cov.id">
         <div v-if="cov.id== num"> 
         <v-img  :src="cov.src" height="600px">  
            <v-card-title v-for="dep in deps" :key="dep.text" class="pa-0 align-end flex-column">
               <v-hover v-slot:default="{ hover }" >
                  <v-card tile :elevation="hover ? 16 : 2" width="500px" height="200px" class="color1 white--text">
                     <v-card-title v-if="!hover" class="d-none d-md-flex d-lg-flex display-1 font-weight-black pt-10 mt-10  justify-center">{{dep.text}}</v-card-title>
                     <v-card-title v-if="!hover" class="d-flex d-sm-flex d-md-none headline font-weight-black pt-10 mt-10 justify-center">{{dep.text}}</v-card-title>
                     <v-expand-transition>
                        <div v-if="hover" class="transition-fast-in-fast-out 
                           success black--text v-card--reveal" style="height: 100%;">
                           <div v-if="dep.id =='1'" hidden>{{num = 1}}</div>
                           <div v-if="dep.id =='2'" hidden> {{num = 2}}</div>
                           <div v-if="dep.id =='3'" hidden> {{num = 3}}</div>
                           <h1 class="d-none d-md-flex d-lg-flex display-1 font-weight-black mt-3 justify-center">{{dep.text}}</h1>
                           <h1 class="d-flex d-sm-flex d-md-none headline font-weight-black mt-3 justify-center">{{dep.text}}</h1>
                           <p class="d-none d-lg-flex body-1 text--secondary text-center ma-3 mx-12 ">{{dep.content}}</p>
                           <p class="d-flex d-lg-none body-1 text--secondary text-center mt-2 mx-5">{{dep.content}}</p>
                        </div>
                     </v-expand-transition>   
                  </v-card>
               </v-hover>
            </v-card-title>
            </v-img>
            </div> 
            </div> 
         </v-card>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return{
         num: 1,
         pics:[
            {text: 'Our School', src:'/2a.jpg', content:'Kirirom Institute of Technology (KIT) is the best technology university in Cambodia. KIT provides full scholarship includes Accommodation, Meals,and study materials such as Laptop and VR. Especially, KIT is the main focus on internship which student can practice their skill with the virtual and actual company.'},
            {text: 'Our Environment', src:'/1a.jpg', content: 'The environment outside the school is full of beautiful forests and fresh air. Our school is built on the top of the mountain and the weather is really good, peaceful, silent and it fit our body make us improve more focus on study and Internship as well. The good weather makes us healthy and feels good with the environment surround. '},
            {text: 'Our Founder', src:'/3.jpg', content: 'Mr.Takeshi graduated from a department of Science and Engineering at Waseda University and received a Masters degree from Tokyo Institute of Technology. He established Digital Forest Inc. In 1998 while working at Andersen Consulting, with the successful leading of WEB Analytics Company in Japan.'}
         ],
         schos: [
            {text: 'Tuition Fee', src: '/a1.jpg', content: 'Free the tuition fee for the whole 4 years to students, and especially we guarantee students will get the job 100%.'},
            {text: 'Dormitory&Meals', src: '/a3.jpg', content: 'We provide comfortable dormitory with the housing material, cold and hot water. Moreover, we have three meals food per day with include western food and khmer food. '},
            {text: 'Study Accessories', src: '/a2.jpg', content: 'We provide the Laptop with high spec and VR(Virtual Reality) for student study and internship. '},
            {text: 'Laundry Service', src: '/a4.jpg', content:'Students no need to do the traditional laundry, We have the full set of laundry machines for student use. It makes the student make more focus on studying and internship. '},
            {text: 'Transportation', src: '/a5.jpg', content: 'We provide transportation from Phnom Penh to Kirirom and Kirirom to Phnom Penh for 36 times per year. And we book the tickets through the application(Vkirirom Shuttle Bus).'},
            {text: 'Health Care', src: '/a6.jpg', content: 'The more important is the students health, so we have a small clinic to help the students in the emergency, especially we also have health insurance for every student. '},
         ],
         deps:[
            {id: '1', text: 'Software Engineering',  content: 'Software engineering is the systematic application of engineering approaches to the development of software. Software engineering is a direct sub-field of engineering and has an overlap with computer science and management science.'},
            {id: '2', text: 'Hospitality Management',   content: 'Hospitality management is the study of the hospitality industry. A degree in the subject may be awarded either by a University college dedicated to the studies of hospitality management or a business school with a relevant department.'},
            {id: '3', text: 'Architecture',  content: 'Architecture is both the process and the product of planning, designing, and constructing buildings or any other structures. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art.'},
         ],
         covs:[
            {id:'1', src: '/b1.jpg'},
            {id:'2', src: '/b2.jpg'},
            {id:'3', src: '/b3.jpg'},
         ],
         
      }
   },
   methods:{
      
   }
   
}
</script>
<style scoped>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}


.stroke{ 
  -webkit-text-stroke: 1px black;
}
.color1{
   background-color: rgba(0, 0, 0, 0.2);
}




</style>