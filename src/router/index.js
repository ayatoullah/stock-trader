import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../components/Portfolio'
import Stocks from '../components/Stocks'
import StockTrader from '../components/StockTrader'


const routes = [
  {
    path: '/',

    component: StockTrader
  },
  {
    path: '/Portfolio',

    component: Portfolio
  },
  {
    path: '/Stocks',

    component: Stocks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
