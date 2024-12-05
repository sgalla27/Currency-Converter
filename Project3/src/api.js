var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const getApi = () => {
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_5e1yhgIXi4IBEg7wWSzvpP1PYuoI3fnJhz1cJBXE", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };