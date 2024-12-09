import Freecurrencyapi from './../currency_API/@everapi/freecurrencyapi-js';

const apiKey = 'fca_live_jL5hrilxX1Sd47JRrMUCE2mI5b1kHxJtbdP6e5Vv'; // Replace with your API key
const api = new Freecurrencyapi(apiKey);

const fetchExchangeRates = async () => {
    const baseCurrency = 'USD';  // You can also make this dynamic based on user input

    try {
        // Call the latest exchange rates API
        const data = await api.latest({ base_currency: baseCurrency });
        console.log(data);
        
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        const output = document.getElementById('output');
        output.innerHTML = `<p>Error: ${error.message}</p>`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const fetchRatesButton = document.getElementById('fetchRates');
    if (fetchRatesButton) {
        fetchRatesButton.addEventListener('click', fetchExchangeRates);
    } else {
        console.error("Button with id 'fetchRates' not found.");
    }
});
