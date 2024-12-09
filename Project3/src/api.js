class Freecurrencyapi {
  baseUrl = 'https://api.freecurrencyapi.com/v1/';

<<<<<<< HEAD
  constructor(apiKey = '') {
      this.headers = {
          apikey: fca_live_jL5hrilxX1Sd47JRrMUCE2mI5b1kHxJtbdP6e5Vv
      };
  }

  call (endpoint, params = {}) {
      const paramString = new URLSearchParams({
          ...params
      }).toString();

      return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
          .then(response => response.json())
          .then(data => {
              return data;
          });
  }

  status () {
      return this.call('status');
  }

  currencies (params) {
      return this.call('currencies', params);
  }

  latest (params) {
      return this.call('latest', params);
  }

  historical (params) {
      return this.call('historical', params);
  }

}

export default Freecurrencyapi;
=======
// Fetch and update specific table rows
fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_5e1yhgIXi4IBEg7wWSzvpP1PYuoI3fnJhz1cJBXE", requestOptions)
    .then(response => response.json()) // Parse the response as JSON
    .then(result => {
        const exchangeRates = result.data; // Extract exchange rate data

        // Update table rows with specific currencies
        document.getElementById("currencyRate1").textContent = exchangeRates.EUR || "N/A"; // Euro
        document.getElementById("currencyRate2").textContent = exchangeRates.GBP || "N/A"; // Pound Sterling
        document.getElementById("currencyRate3").textContent = exchangeRates.CNY || "N/A"; // Chinese Yen
        document.getElementById("currencyRate4").textContent = exchangeRates.INR || "N/A"; // Indian Rupee
        document.getElementById("currencyRate5").textContent = exchangeRates.KRW || "N/A"; // South Korean Won
        document.getElementById("currencyRate6").textContent = exchangeRates.CAD || "N/A"; // Canadian Dollar
    })
    .catch(error => console.error('Error fetching exchange rates:', error));
>>>>>>> a1555d1021806fd4866ffc040e21b6ad03504e5a
