import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';
import responsive from 'vue-responsive'

Vue.use(responsive)
Vue.use(Vuetify, {
   
});

export default new Vuetify({
   icons: {
      iconfont: 'md',
   },
   theme: {
      themes: {
         light: {
            primary: '#b30000',
            success: '#DFDADA'
         }
      }
   }
})
