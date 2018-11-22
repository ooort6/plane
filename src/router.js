import Vue from 'vue';
import Router from 'vue-router';
import PageOne from './views/myPage/PageOne.vue';
import PageTwo from './views/myPage/PageTwo.vue';
// import PageThree from './views/myPage/PageThree.vue';
import PageFour from './views/myPage/PageFour.vue';
import PageThree from './views/myPage/PageThree.vue';
import PageFive from './views/myPage/PageFive.vue';
import Detail1 from './views/detail/Detail1.vue';
// import PageFive from './views/myPage/PageFive.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pageone',
      component: PageOne,
    },
    {
      path: '/myPage/pageOne',
      component: PageOne,
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
