import Vue from 'vue';
import Router from 'vue-router';
// import PageOne from './views/myPage/PageOne.vue';
import PageTwo from './views/myPage/PageTwo.vue';
// import PageThree from './views/myPage/PageThree.vue';
import PageFour from './views/myPage/PageFour.vue';
import PageThree from './views/myPage/PageThree.vue';
import PageFive from './views/myPage/PageFive.vue';
import Detail1 from './views/detail/Detail1.vue';
import Home from './views/Home.vue';
import PersonManage from './views/layout/PersonManage.vue';
import User from './views/layout/User.vue';
import Roster from './views/layout/Roster.vue';
import ProcessCenter from './views/layout/ProcessCenter.vue';
import Login from './views/login/Login.vue'

// import PageFive from './views/myPage/PageFive.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //首页门户
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
 

    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
          path: '/GSMH',
          component: User,
          name: 'user'
        },
        {
          path: '/RSGL',
          component: PersonManage,
        },
        {
          path: '/YGHMC',
          component: Roster,
        },
        {
          path: '/LCZX',
          component: ProcessCenter,
        },
        {
          path: '/GRKQ',
          component: Detail1,
        },
      ]
    },

   
    {
      path: '/myPage/pageTwo',
      component: PageTwo,
      name:'rt'
    },
    {
      path: '/myPage/pageThree',
      component: PageThree,
    },
    {
      path: '/myPage/pageFour',
      component: PageFour,
    },
    {
      path: '/myPage/pageFive',
      component: PageFive,
    },
   
    // {
    //   path: '/myPage/PageFive',
    //   component: PageFive,
    // },
  ],
});