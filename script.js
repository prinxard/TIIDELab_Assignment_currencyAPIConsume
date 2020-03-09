new Vue({
    el: '#app',
    data () {
        return {
          items: {},
          base: null
        }
      },
      mounted () {
        axios
        .get('https://api.exchangeratesapi.io/latest')
        .then(response => {
          this.items = response.data.rates
          this.base = response.data
        })
      }  
})