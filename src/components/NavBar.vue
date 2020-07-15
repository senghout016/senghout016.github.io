<template>
  <nav>
    <v-app-bar flat app color="#1c00ff00" height="0px" class="mt-2 pt-10">
      <v-app-bar-title>
        <a href="/"><img src="/logo.png" alt="" width="230px"></a>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-title class="ma-7 d-none d-md-flex d-lg-flex d-xl-flex" v-for="link in links" :key="link.text" >
        <a :href="link.route" style="text-decoration:none" class="headline font-weight-medium black--text">{{link.text}}</a>
      </v-app-bar-title>
      <v-app-bar-nav-icon x-large class="d-md-none d-lg-none d-xl-none"  v-on:click="drawer =!drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer class="primary d-md-none d-lg-none d-xl-none" app temporary v-model="drawer" right >
      <v-list>
        <v-list-item class="ml-4" v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text" large>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text title font-weight-bold">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      drawer: false,
       links:     [
            {icon: 'school', text: 'Academic', route: '/academic'},
            {icon: 'group_work', text: 'Internship', route: '/internship'},
            {icon:  'event_note',  text: 'Admission', route: '/admission'},
            {icon: 'work', text: 'Career', route: '/career'},
            {icon:  'contact_phone',  text: 'Contact', route: '/contact'},
         ],
    }
  },
}
</script>
<style scoped>
</style>
