import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import VueResource from 'vue-resource';

import './common/style/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// });
let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
router.start(app, '#app');
router.go('/goods');
