import Vue from 'vue';
import Router from 'vue-router';
// import PageOne from './views/myPage/PageOne.vue';
import PageTwo from './views/myPage/PageTwo.vue';
// import PageThree from './views/myPage/PageThree.vue';
import PageFour from './views/myPage/PageFour.vue';
import PageThree from './views/myPage/PageThree.vue';
import PageFive from './views/myPage/PageFive.vue';
import Detail1 from './views/detail/Detail1.vue';
import Home from './views/layout/Home.vue';
import PersonManage from './views/layout/PersonManage.vue';
import Roster from './views/layout/Roster.vue';

// import PageFive from './views/myPage/PageFive.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //首页门户
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/myPage/pageOne',
    //   component: PageOne,
    // },
    {
      path: '/layout/home',
      component: Home,
    },
    {
      path: '/layout/personManage',
      component: PersonManage,
    },
    {
      path: '/layout/roster',
      component: Roster,
    },
    {
      path: '/myPage/pageTwo',
      component: PageTwo,
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
    {
      path: '/detail/detail1',
      component: Detail1,
    },
    // {
    //   path: '/myPage/PageFive',
    //   component: PageFive,
    // },
  ],
});
