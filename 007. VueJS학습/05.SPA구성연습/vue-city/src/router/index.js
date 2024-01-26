import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Foods from '@/components/FoodComp'
import Trip from '@/components/TripComp'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: "/trip",
      component: Trip,
    },
    // 두번째 루트
    {
      path: "/foods",
      component: Foods,
    },
    // 두번째 루트의 파라미터 버전 루트추가!
    {
        // 파라미터를 받는 같은 path의 루트는
        // 호출과 구분을 위해 반드시 name속성을 설정해야함!
        name: 'umsik',
        path:'/foods:item',
        // 경로 뒤에 콜론(:)을 쓰고 뒤에 파라미터 변수를 씀
        component: Foods,
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
