<template>
   <div>
      <div align="center">
         <h1 class="hidden-sm-and-up display-1 mt-5 font-weight-bold" >Virtual Company</h1>
         <h1 class="hidden-xs-only display-3 mt-10 font-weight-bold" >Virtual Company</h1>
         <p class="hidden-sm-and-up subtitle-1 my-4 ma-3 text--secondary">The most <span class="primary--text font-weight-bold">Uniqueness</span> in KIT is we create the virtual company for students to work with the real project  and get many experience, There are many Virtual Company such as: </p>
         <p class="hidden-xs-only headline my-8 ma-3 text--secondary">The most <span class="primary--text font-weight-bold">Uniqueness</span> in KIT is we create the virtual company for students to work with the <br>real project and get many experience, There are many Virtual Company such as: </p>
      </div>
      <div>
         <v-row class="justify-center">
            <v-col v-for="vc in vcs" :key="vc" sm="2">
               <v-hover v-slot:default="{ hover }" open-delay="100">
               <v-card class="success mt-5" outlined>
                  <v-card-title v-if="!hover">
                     <img :src="vc.src" width="200px">
                  </v-card-title>
                  <v-expand-transition>
                     <v-card outlined v-if="hover" class="transition-fast-in-fast-out 
                     success v-card--reveal" style="height: 100%;">
                        <v-card-title>
                           <img  :src="vc.src1" width="200px">
                        </v-card-title>
                     </v-card>
                  </v-expand-transition>
               </v-card>
               </v-hover>
            </v-col>
         </v-row>
      </div>
   </div>
</template>
<script>
export default {
   data(){
      return{
         vcs: [
            {text: 'chain', src: '/vc1.png', src1: '/v1.png'},
            {text: 'chain', src: '/vc6.png', src1: '/v6.jpg'},
            {text: 'chain', src: '/vc3.png', src1: '/v3.png'},
            {text: 'chain', src: '/vc4.png', src1: '/v4.png'},
            {text: 'chain', src: '/vc10.png', src1: '/v10.png'},
            {text: 'chain', src: '/vc2.png', src1: '/v2.png'},
            {text: 'chain', src: '/vc7.png', src1: '/v7.png'},
            {text: 'chain', src: '/vc8.png', src1: '/v8.png'},
            {text: 'chain', src: '/vc5.png', src1: '/v5.png'},
         ],
      }
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

</style>