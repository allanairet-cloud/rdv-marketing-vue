import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import HomePage from '@/components/HomePage'
import 'buefy/lib/buefy.css'

Vue.use(Router)
Vue.use(Buefy)
window.Intercom('boot', {
  app_id: 'i4c1ksoj'
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
