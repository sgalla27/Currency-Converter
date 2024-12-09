var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

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