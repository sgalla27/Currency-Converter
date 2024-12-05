<script lang="js">

  
  export default {
    components: {
      Button,
    },
    methods: {
      handleClick() {
        console.log('Button clicked!');
        getApi();
      },
    },
  };

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const getApi = () => {
    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?base=gbp&symbols=cny,gbp,inr,jpy,usd,cad,eur&apikey=09de422e23c341969b442cb6348a9e46", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };
</script>

