import axios from 'axios';

const URL = 'http://localhost:8080/stock/myWallet';

function getUserDetails() {
  const user = {
    name: '',
    stockValue: '',
    balanceAvailable: '',
    walletValue: '',
    prevWalletValue: '',
    walletPercentageChange: '',
    userStock: [],
  };

  axios.get(URL, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }).then((response) => {
    user.name = response.data.name;
    user.stockValue = response.data.stockValue;
    user.balanceAvailable = response.data.balanceAvailable;
    user.walletValue = response.data.walletValue;
    user.prevWalletValue = response.data.prevWalletValue;
    user.walletPercentageChange = response.data.walletPercentageChange;
    user.userStock = response.data.userStock;
  }).catch((error) => console.log(error));

  return user;
}

export default getUserDetails();
