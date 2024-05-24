import Vue from 'vue'
import App from './App.vue'

// buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
// end buefy

// apexcharts
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
// end apexcharts

//dayjs
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'
dayjs.extend(customParseFormat)
//end dayjs für DatumFormatierung

// vue-router Für Reiterwechsel
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import HomePage from './components/pages/home'
import PlannerPage from './components/pages/planner'
import StatisticsPage from './components/pages/statistics'


const router = new VueRouter({
  routes: [{
    path: '/',
    component: HomePage
  }, {
    path: '/planner',
    component: PlannerPage
  }, {
    path: '/statistics',
    component: StatisticsPage
  }]
})
// end vue-router

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const dates = localStorage.getItem('dates')
if (!dates) {
  localStorage.setItem('dates', JSON.stringify({}))
}



