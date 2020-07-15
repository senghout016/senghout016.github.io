import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Academic from './views/Academic'
import Internship from './views/Internship'
import Admission from './views/Admission'
import Career from './views/Career'
import Contact from './views/Contact'

Vue.use(Router)
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/academic', name: 'Academic', component: Academic },
		{ path: '/internship', name: 'Internship', component: Internship },
		{ path: '/admission', name: 'Admission', component: Admission },
		{ path: '/career', name: 'Career', component: Career },
		{ path: '/contact', name: 'Contact', component: Contact }
	],
});