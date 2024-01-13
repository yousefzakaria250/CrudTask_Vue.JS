import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeesView from '../views/Employees/View.vue'
import EmployeeCreate from '../views/Employees/Create.vue'
import EmployeeEdit from '../views/Employees/Edit.vue'

import Register from '../views/Register.vue'
import LoginForm from'../views/SignIn.vue'


/*const auth = (to, from, next) => {
  //if (localStorage.getItem("token")) {
    return next();
  //}
   //else {
    //return next("/login");
  //}
};
const guest = (to, from, next) => {
  if (!localStorage.getItem("token")) {
    return next();
  } else {
    return next("/");
  }
};
const admin2 = (to, from, next) => {
  if (localStorage.getItem("token")&&localStorage.getItem("role")=='Admin') {
    return next();
  } else {
    return next("/login");
  }
};*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    //  beforeEnter: auth,
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Employees',
      name: 'Employees',
      //beforeEnter: guest,
      component: EmployeesView
    },
    {
      path: '/Employee/Create',
      name: 'EmployeeCreate',
      //beforeEnter: guest,
      component: EmployeeCreate
    },
    
    {
      path: '/Employee/:id',
      name: 'EmployeeEdit',
      //beforeEnter: admin2,
      component: EmployeeEdit
    },
    {
      path: '/login',
      name: 'login',
      //beforeEnter: guest,
      component: LoginForm
    },
    {
      path: '/Register',
      name: 'Register',
      //beforeEnter: guest,
      component: Register
    },
  ]
  
    
})

export default router
