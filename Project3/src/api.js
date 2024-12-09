class Freecurrencyapi {
  baseUrl = 'https://api.freecurrencyapi.com/v1/';

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