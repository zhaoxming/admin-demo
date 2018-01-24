
import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import vueedit from 'vue-quill-editor'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


import index from '@/components/index'
import password from '@/components/password'
import custom from '@/components/custom'
import me from '@/components/me'
import one from '@/components/apartment/one'
import two from '@/components/apartment/two'
import three from '@/components/apartment/three'
import four from '@/components/apartment/four'
import five from '@/components/apartment/five'
import six from '@/components/apartment/six'
import seven from '@/components/apartment/seven'
import eight from '@/components/apartment/eight'
import nine from '@/components/apartment/nine'
import source from '@/components/source'
import apply from '@/components/apply'
import order from '@/components/order'
import userAdd from '@/components/userAdd'
import userQuery from '@/components/userQuery'
import mapbox from '@/components/mapbox'
import map from '@/components/map'
import mapGlVue from 'mapbox-gl-vue'



Vue.use(ElementUI)
Vue.use(iView)
Vue.use(Router)
Vue.use(vueedit)
Vue.use(Resource)

Vue.use(mapGlVue)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children:[
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/password',
          name: 'password',
          component: password
        },
        {
          path: '/custom',
          name: 'custom',
          component: custom
        },
        {
          path: '/me',
          name: 'me',
          component: me
        },
        {
          path: '/one/:status',
          name: 'one',
          component: one
        },
        {
          path: '/two/:status',
          name: 'two',
          component: two
        },
        {
          path: '/map',
          name: 'map',
          component: map
        },
        {
          path: '/three/:status',
          name: 'three',
          component: three
        },
        {
          path: '/four/:status',
          name: 'four',
          component: four
        },
        {
          path: '/five/:status',
          name: 'five',
          component: five
        },
        {
          path: '/six/:status',
          name: 'six',
          component: six
        },
        {
          path: '/seven/:status',
          name: 'seven',
          component: seven
        },
        {
          path: '/eight/:status',
          name: 'eight',
          component: eight
        },
        {
          path: '/nine/:status',
          name: 'nine',
          component: nine
        },
        {
          path: '/source',
          name: 'source',
          component: source
        },
        {
          path: '/apply',
          name: 'apply',
          component: apply
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/userAdd',
          name: 'userAdd',
          component: userAdd
        },
        {
          path: '/userQuery',
          name: 'userQuery',
          component: userQuery
        },
        {
          path: '/mapbox',
          name: 'mapbox',
          component: mapbox
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/Login.vue'], resolve)
    }


  ]
})
