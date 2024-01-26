// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 뷰액스스토어 js 불러오기
import store from './store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 라우터 사용등록
  router,
  store,
  components: { App },
  template: '<App/>',
  // 뷰인스턴스생성직후 데이터 초기화
  created(){
    store.commit('initSet');
  },
})

