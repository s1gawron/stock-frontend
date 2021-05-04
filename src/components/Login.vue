<template>
  <div>
    <div id="registerHeaderContainer">
      <h3>Log in!</h3>
    </div>

    <div id="registerFormContainer">
      <form>

        <div class="errors">
          {{ customError }}
        </div>

        <h4>Username:</h4>
        <input style="width: 150px;" type="text" class="inputStyle" name="username"
               v-model="userLoginDTO.username" required>
        <div></div>

        <h4>Password:</h4>
        <input style="width: 150px;" type="password" class="inputStyle" name="password"
               v-model="userLoginDTO.password" required>
        <div></div>

        <input style="margin-top: 26px; margin-bottom: 26px;" type="button" class="confirm"
               value="Sign in!" @click="postUserCredentials">
      </form>

      <router-link id="registerLink" to='/user/register'>
        <div>First time? Sign up!</div>
      </router-link>
    </div>

    <div id="footer">It's good to see you again!
      <br/>2020&copy; Sebastian Gawron
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const URL = 'http://localhost:8080/user/login';

export default {
  name: 'Login',
  data() {
    return {
      userLoginDTO: {
        username: '',
        password: '',
      },
      customError: '',
    };
  },
  methods: {
    postUserCredentials() {
      const {
        username, password,
      } = this.userLoginDTO;

      axios.post(URL, {
        username,
        password,
      }).then((response) => {
        localStorage.setItem('token', response.headers.authorization);
        localStorage.setItem('lastLoginDate', new Date().getTime().toString());

        if (response.status === 200) {
          localStorage.setItem('username', username);
        }

        window.location = '/home';
      }).catch((error) => {
        if (error.response.status === 401) {
          this.customError = 'Bad credentials provided!';
        }
      });
    },
  },
};
</script>
