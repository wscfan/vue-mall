import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/goodsList'
import Page1 from '@/views/page1'
import Page2 from '@/views/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goodsList',
      components: {
        default: GoodsList,
        page1: Page1,
        page2: Page2
      },
      children: [
        {
          path: 'page1',
          name: 'page1',
          component: Page1
        },
        {
          path: 'page2',
          name: 'page2',
          component: Page2
        }
      ]
    }
  ]
})
