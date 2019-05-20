import Vue from 'vue'
import Router from 'vue-router'
import EmployeeSchedule from '@/views/EmployeeSchedule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'employeeSchedule',
      component: EmployeeSchedule
    }
  ]
})
