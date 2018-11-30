<template>
    <div style="width:500px; height:300px;">
        <h1>Bitcoin Price Index</h1>
  <div
    v-for="currency in info"
    class="currency"
  >
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
  </div>

    </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null
    };
  },
    filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted() {
    // axios
    //   .get("https://api.coindesk.com/v1/bpi/currentprice.json",{
    //      headers: {
    //       //  'Content-Type':'application/x-www-form-urlencoded',
    //       //  "Access-Control-Allow-Origin":"*"
    //     }

    //   })
    //   .then(response => {
    //       console.log(response.data.bpi)
    //     this.info = response.data.bpi;
    //   });
  }
};
</script>
