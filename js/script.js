var app = new Vue({
  el: `#app`,
  data: {
    query:'',
    apiKey: 'ebe10cc264f177fa09506aa0e10c3287',
    lang: 'it-IT'
  },
  mounted(){

  },
  methods: {

    // RICERCA CON CHIAMATA PER I FILM
    search(){
      axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          language: this.lang,
          api_key: this.apiKey,
          query: this.query
        }
      })
      .then((result) =>{
        console.log(result.data);
      })
    }
    // FINE RICERCA
  }
});
