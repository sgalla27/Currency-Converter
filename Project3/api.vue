<script lang="js">

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const getApi = () => {
    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?base=gbp&symbols=pkr,usd,cad,eur&apikey=09de422e23c341969b442cb6348a9e46", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(this.response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>