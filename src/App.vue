<template>
  <div>
    <div id="topbar">
      <div id="timeWrapper">
        <div id="welcome">Good Morning!</div>
        <div id="time"></div>
      </div>

      <div id="user">
        <i class="icon-user"></i><br/>
        <p v-if="isUserLogged === false">
          <router-link to="/user/login" id="signIn">Sign in</router-link>
        </p>

        <p v-if="isUserLogged" id="usernameDisplay">Zalogowano jako:
          <br/>{{ this.username }}</p>
      </div>

      <form v-if="isUserLogged" method="post">
        <input type="button" value="x" id="logout" @click="logOutManagement"/>
      </form>

      <div style="clear: both;"></div>
    </div>

    <router-view/>
  </div>

</template>

<script>
import clock from './assets/js/clock';

export default {
  name: 'App',
  data() {
    return {
      isUserLogged: false,
      username: '',
    };
  },
  methods: {
    isUserLoggedCheck() {
      if (localStorage.getItem('token') != null) {
        this.isUserLogged = true;
        this.username = localStorage.getItem('username');
      }

      if (localStorage.getItem('lastLoginDate') + (1000 * 60 * 60 * 24) < new Date().getTime()) {
        this.isUserLogged = false;
      }
    },
    logOutManagement() {
      localStorage.clear();
      window.location = '/user/login';
    },
  },
  beforeMount() {
    this.isUserLoggedCheck();
  },
  mounted() {
    clock();
  },
};
</script>

<style>
@import './assets/css/style.css';
@import './assets/fontello/css/fontello.css';
@import url('http://fonts.googleapis.com/css?family=Lato|Josefin+Sans&subset=latin,latin-ext');
</style>
