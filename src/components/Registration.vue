<template>
  <div>
    <div id="registerHeaderContainer">
      <h3>Sign up now to be able to trade stocks!</h3>
    </div>

    <div id="container">
      <div id="backArrow">
        <router-link to='/user/login'>
          <i class="icon-left-small"></i>
        </router-link>
      </div>

      <div id="registerFormContainer">
        <form>

          <div class="errors">
            {{ customError }}
          </div>

          <h4>Username:</h4>
          <input style="width: 150px;" type="text" class="inputStyle"
                 required v-model="userRegisterDTO.name">

          <h4>E-mail:</h4>
          <input style="width: 150px;" type="email" class="inputStyle"
                 required v-model="userRegisterDTO.email">

          <h4>Password:</h4>
          <input style="width: 150px;" type="password" class="inputStyle"
                 required v-model="userRegisterDTO.password">

          <h4>Choose your initial capital:</h4>
          <select v-model="userRegisterDTO.balanceAvailable">
            <option selected value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
          </select>
          <div/>

          <input style="margin-top: 26px; margin-bottom: 26px;" type="button" class="confirm"
                 value="Sign up!" @click="postData">
        </form>
      </div>
    </div>

    <div id="footer">Enjoy being a trader!<br/>2020&copy; Sebastian Gawron</div>
  </div>

</template>

<script>
import axios from 'axios';

const URL = 'http://localhost:8080/user/register';

export default {
  name: 'Registration',
  data() {
    return {
      userRegisterDTO: {
        name: '',
        email: '',
        password: '',
        balanceAvailable: '',
      },
      customError: '',
    };
  },
  methods: {
    postData() {
      const {
        name, email, password, balanceAvailable,
      } = this.userRegisterDTO;

      axios.post(URL, {
        name,
        email,
        password,
        balanceAvailable,
      }).then(() => {
        window.location = '/user/login';
      })
        .catch((error) => {
          this.customError = error.response.data.message;
        });
    },
  },
};
</script>
