import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Start from '@/components/Start'
import GameMap from '@/components/GameMap'
import Question from '@/components/Question'
import Summary from '@/components/Summary'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   name:'Hello',
    //   component:Hello
    // },
    {
      path: '/',
      name: 'start',
      component: GameMap,
    },
    {
      path: '/gameMap',
      name: 'gameMap',
      component: GameMap
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    }
  ]
})
