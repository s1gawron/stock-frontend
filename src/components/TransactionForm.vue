<template>
  <div>
    <div id="container">
      <div id="backArrow">
        <router-link :to="'/stockListings/' + $route.params.index">
          <i class="icon-left-small"></i>
        </router-link>
      </div>

      <div id="formContainer">
        <div id="headerNote">Fill in the following form to buy stocks:</div>
        <div class="separator"></div>

        <form action="@{/process-order}" method="post" object="${transaction}">
          <div class="errors" if="${#fields.hasErrors('*')}">
            <ul>
              <li each="err : ${#fields.errors('*')}" text="${err}"></li>
            </ul>
          </div>

          <h5 style="padding-bottom: 10px">Selected stock:</h5>

          <p>{{ result.name }}</p>
          <input hidden value="${stock.getTicker()}" id="stockTicker" name="stockTicker"/>
          <input hidden value="${stock.getPriceChange()}" id="priceChange" name="priceChange"/>
          <input hidden value="${stock.getLastUpdateDate()}" id="lastUpdateDate"
                 name="lastUpdateDate"/>

          <div class="separator"></div>

          <h5>Current stock price:</h5>
          <p>{{ result.price }} PLN</p>
          <p>{{ result.percentageChange }}</p>

          <div class="separator"></div>

          <h5>Transaction type:</h5>

          <select id="pickAction" field="*{transactionType}">
            <option value="PURCHASE">Purchase</option>
            <option value="SELL">Sell</option>
          </select>

          <div class="separator"></div>

          <input hidden value="${user.getUserId()}" id="userId" name="userId"/>
          <input hidden value="${stock.getStockIndex()}" id="stockIndex" name="stockIndex"/>

          <h5>How many stocks would you like to trade?</h5>
          <input class="inputStyle" type="number" step="1" min="1" v-model="quantity">
<!--          ${#fields.hasErrors('stockQuantity')}? 'error'-->

          <div class="separator"></div>

          <h5>Transaction cost:</h5>
          <p>{{ quantity * result.price }} PLN</p>

          <div class="separator"></div>

          <input class="confirm" type="submit" value="Submit">
        </form>
      </div>
    </div>

    <div id="footer">That's some kind of serious shopping!<br/>2020&copy; Sebastian Gawron</div>

  </div>

</template>

<script>
import axios from 'axios';

const URL = 'http://localhost:8080/stock/stockListings';

export default {
  name: 'TransactionForm',
  data() {
    return {
      result: {},
      quantity: 0,
    };
  },
  methods: {
    getStockDetails() {
      axios.get(`${URL}/${this.$route.params.index}/${this.$route.params.ticker}`)
        .then((response) => {
          this.result = response.data;
          console.log(this.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getStockDetails();
  },
};
</script>
