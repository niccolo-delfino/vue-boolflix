var app = new Vue({
  el: `#app`,
  data: {
    query:'',
    apiKey: 'ebe10cc264f177fa09506aa0e10c3287',
    lang: 'it-IT',
    films:[],
    tv:[]
  },
  mounted(){

  },
  methods: {

    // RICERCA CON CHIAMATA PER I FILM
    search(){
      this.searchFilm();
      this.searchTv();
    },
    searchFilm(){
      axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          language: this.lang,
          api_key: this.apiKey,
          query: this.query
        }
      })
      .then((result) =>{
        this.films = result.data.results;
        console.log(this.films);
      })
    },
    searchTv(){
      axios
      .get("https://api.themoviedb.org/3/search/tv",{
        params: {
          language: this.lang,
          api_key: this.apiKey,
          query: this.query
        }
      })
      .then((result) =>{
        this.tv = result.data.results;
        console.log(this.tv);
      })
    }
    // FINE RICERCA
  }
});
