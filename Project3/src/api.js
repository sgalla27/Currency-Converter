var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// Fetch and update specific table rows
fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_5e1yhgIXi4IBEg7wWSzvpP1PYuoI3fnJhz1cJBXE", requestOptions)
    .then(response => response.json()) // Parse the response as JSON
    .then(result => {
        const exchangeRates = result.data; // Extract exchange rate data

        const convertCurrency = (usdAmount, rate) => (usdAmount * rate).toFixed(2);

        const currencies = [
            { id: "euro", rate: exchangeRates.EUR },
            { id: "pound", rate: exchangeRates.GBP },
            { id: "yen", rate: exchangeRates.JPY },
            { id: "rupee", rate: exchangeRates.INR },
            { id: "won", rate: exchangeRates.KRW },
            { id: "canadian", rate: exchangeRates.CAD }
        ];

        currencies.forEach(currency => {
            const inputField = document.querySelector(`#${currency.id}Input`);
            const button = document.querySelector(`#${currency.id}Convert`);
            const resultField = document.querySelector(`#${currency.id}Result`);

        button.addEventListener("click", () => {
            const usdAmount = parseFloat(inputField.value);
            if (!isNaN(usdAmount)) {
                resultField.textContent = convertCurrency(usdAmount, currency.rate);
            } else {
                resultField.textContent = "Invalid input";
            }
        });
        });


        // Update table rows with specific currencies
        document.getElementById("currencyRate1").textContent = exchangeRates.EUR || "N/A"; // Euro
        document.getElementById("currencyRate2").textContent = exchangeRates.GBP || "N/A"; // Pound Sterling
        document.getElementById("currencyRate3").textContent = exchangeRates.JPY || "N/A"; // Japanese Yen
        document.getElementById("currencyRate4").textContent = exchangeRates.INR || "N/A"; // Indian Rupee
        document.getElementById("currencyRate5").textContent = exchangeRates.KRW || "N/A"; // South Korean Won
        document.getElementById("currencyRate6").textContent = exchangeRates.CAD || "N/A"; // Canadian Dollar
    })
    .catch(error => console.error('Error fetching exchange rates:', error));