<template>
  <div>
    <div id="container">
      <div class="square">
        <fieldset id="fieldset1">
          <legend>Actions:</legend>

          <router-link to='/stockListings/WIG20'>
            <div id="tile1">Stock listings<br/>
              <i class=" icon-chart-line"></i>
            </div>
          </router-link>

          <router-link to='/user/myWallet'>
            <div id="tile2">Wallet details<br/>
              <i class=" icon-info"></i>
            </div>
          </router-link>
        </fieldset>
      </div>

      <div class="square">
        <fieldset id="fieldset2">
          <legend><i class="icon-wallet"></i>My wallet:</legend>
          <div id="walletLegend">
            <p>Wallet value:</p>
            <p>Balance available:</p>
            <p>Stock value:</p>
            <br/><br/>
            <p>Previous wallet value:</p>
            <p>Wallet percentage change:</p>
          </div>

          <div id="walletData">
            <p>{{ userDTO.walletValue }} PLN</p>
            <p>{{ userDTO.balanceAvailable }} PLN</p>
            <p> {{ userDTO.stockValue }} PLN</p>
            <br/><br/>
            <p> {{ userDTO.prevWalletValue }} PLN</p>
            <p>{{ userDTO.walletPercentageChange }} %</p>
          </div>
          <div style="clear: both"></div>
        </fieldset>
      </div>

      <div style="clear: both;"></div>
    </div>

    <div id="footer">Thank you for your visit! I hope, that purchases will be successful :)
      <br/>2020&copy; Sebastian Gawron
    </div>
  </div>
</template>

<script>
import getUserDetails from '../assets/js/getUserDetails';

export default {
  name: 'Home',
  data() {
    return {
      userDTO: {
        name: '',
        stockValue: '',
        balanceAvailable: '',
        walletValue: '',
        prevWalletValue: '',
        walletPercentageChange: '',
        userStock: [],
      },
    };
  },
  methods: {
    getUserDetails() {

    },
  },
  mounted() {
    this.getUserDetails();
    this.userDTO = getUserDetails;
  },
};
</script>
