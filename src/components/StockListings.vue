<template>
  <div>
    <div id="container">
      <div id="menu">
        <ol>
          <li>
            <router-link to='/home'>Home</router-link>
          </li>
          <li>
            <router-link to='/stockListings/WIG20'
                         onclick="window.location.reload()">WIG20
            </router-link>
          </li>
          <li>
            <router-link to='/stockListings/WIG40'
                         onclick="window.location.reload()">mWIG40
            </router-link>
          </li>
          <li>
            <router-link to='/stockListings/WIG80'
                         onclick="window.location.reload()">sWIG80
            </router-link>
          </li>
        </ol>
      </div>

      <div id="stats">
        <br/>
        <div class="loader" v-if="loading"/>
        <table v-if="!loading">
          <tr id="sign">
            <th>Ticker</th>
            <th style="width: 120px;">Name</th>
            <th>Price</th>
            <th>Percentage price change</th>
            <th>Price change</th>
            <th>Volume</th>
            <th>Update date</th>
            <th authorize="isAuthenticated()" style="width: 250px;">Actions</th>
          </tr>

          <tr v-for="stock in results" :key="stock.ticker">
            <td class="oddTableData">{{ stock.ticker }}</td>
            <td>{{ stock.name }}</td>
            <td class="oddTableData">{{ stock.price }}</td>
            <td>{{ stock.percentageChange }}</td>
            <td class="oddTableData">{{ stock.priceChange }}</td>
            <td>{{ stock.volume }}</td>
            <td class="oddTableData">{{ stock.lastUpdateDate }}</td>
            <td authorize="isAuthenticated()">
              <div class="buttonWrapper">
                <router-link :to="`/transaction/${$route.params.index}/${stock.ticker}`">
                  <button type="button" id="buyLink">Buy</button>
                </router-link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div id="footer">Thank you for your visit! I hope, that purchases will be successful :)
      <br/>2020&copy; Sebastian Gawron
    </div>

  </div>
</template>

<script>
import axios from 'axios';

const URL = 'http://localhost:8080/stock/stockListings';

export default {
  name: 'StockListings',
  data() {
    return {
      results: [],
      loading: true,
    };
  },
  methods: {
    getStockListings() {
      axios.get(`${URL}/${this.$route.params.index}`)
        .then((response) => {
          this.results = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getStockListings();
  },
};
</script>
