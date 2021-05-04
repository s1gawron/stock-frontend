import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import StockListings from '../components/StockListings.vue';
import WalletDetails from '../components/WalletDetails.vue';
import Registration from '../components/Registration.vue';
import TransactionForm from '../components/TransactionForm.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/user/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/user/register',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/stockListings/:index',
      name: 'StockListings',
      component: StockListings,
    },
    {
      path: '/user/myWallet',
      name: 'WalletDetails',
      component: WalletDetails,
    },
    {
      path: '/transaction/:index/:ticker',
      name: 'TransactionForm',
      component: TransactionForm,
    },
  ],
  mode: 'history',
});
