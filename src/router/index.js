import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import HomePage from '@/components/HomePage'
import 'buefy/lib/buefy.css'

Vue.use(Router)
Vue.use(Buefy)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
