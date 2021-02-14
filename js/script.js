var app = new Vue({
  el: `#app`,
  data: {
    query:'',
    apiKey: 'ebe10cc264f177fa09506aa0e10c3287',
    lang: 'it-IT',
    obj:[],
    // films:[],
    // tv:[],

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
        this.obj = result.data.results;
        console.log(this.obj);

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
        this.obj = result.data.results;
        console.log(this.obj);

      })
    },
    // FINE RICERCA
    voto(prova){
      return Math.ceil(prova / 2)
    },
    home(){
      this.obj.splice(0,this.obj.length);
    }
  }
});
