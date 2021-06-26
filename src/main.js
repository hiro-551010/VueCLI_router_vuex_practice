import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

// ページ遷移時に行う処理をグローバルに行うための関数
router.beforeEach((to, from, next) => {
  if (to.path === "/users/1") {
    next(console.log("ユーザー１"));
  }
  next();
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
