import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import axios from 'axios';
import qs from 'qs'
Vue.prototype.$http = axios
Vue.prototype.$qs=qs


var service=axios.create({
  baseURL:process.env.BASE_API,
  timeout:5000
})



service.interceptors.request.use(function(config){
  if(store.getters.token){
      config.headers['TOKEN']=getCookie('TOKEN')
  }
  return config
},function(error){
  return Promise.reject(error)
})


Vue.use(ElementUI);
Vue.config.productionTip = false;

// Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app');
