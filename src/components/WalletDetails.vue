<template>
  <div>
    <div id="container">
      <div id="backArrow">
        <router-link to='/home'>
          <i class="icon-left-small"></i>
        </router-link>
      </div>

      <div id="myStock">
        <fieldset id="stock">
          <legend>Stocks in your wallet:</legend>

          <table id="stockTable">
            <tr id="sign">
              <th style="width: 120px;">Name</th>
              <th>Price</th>
              <th>Percentage price change</th>
              <th>Price change</th>
              <th>Quantity</th>
              <th>Average purchase price</th>
              <th>Profit/Loss</th>
              <th style="width: 250px;">Actions</th>
            </tr>

            <tr v-for="stock in userDTO.userStock" :key="stock.ticker">
              <td class="oddTableData">{{ stock.ticker }}</td>
              <td>{{ stock.price }}</td>
              <td class="oddTableData">{{ stock.percentageChange }}</td>
              <td>{{ stock.priceChange }}</td>
              <td class="oddTableData">{{ stock.quantity }}</td>
              <td>{{ stock.averagePurchasePrice }}</td>
              <td class="oddTableData">{{ stock.profitLoss }}</td>
              <td>
                <div class="buttonWrapper">
                  <router-link to='/transaction/WIG20/ALR'>
                    <button type="button" id="sellLink">Sell</button>
                  </router-link>
                </div>
              </td>
            </tr>
          </table>
        </fieldset>
      </div>

      <div id="quickStats">
        <fieldset id="fieldsetStats">
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
            <p>{{ userDTO.stockValue }} PLN</p>
            <br/><br/>
            <p>{{ userDTO.prevWalletValue }} PLN</p>
            <p>{{ userDTO.walletPercentageChange }} %</p>
          </div>
          <div style="clear: both"></div>
        </fieldset>
      </div>
    </div>

    <div id="footer">Thank you for your visit! I hope, that your wallet value is still going up!
      <br/>2020&copy; Sebastian Gawron
    </div>
  </div>

</template>

<script>
import getUserDetails from '../assets/js/getUserDetails';

export default {
  name: 'WalletDetails',
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
  mounted() {
    this.userDTO = getUserDetails;
  },
};
</script>
