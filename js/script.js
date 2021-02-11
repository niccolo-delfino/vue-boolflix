var app = new Vue({
  el: `#app`,
  data: {
    query:'',
    apiKey: 'ebe10cc264f177fa09506aa0e10c3287',
    lang: 'it-IT',
    films:[],
    tv:[],
    // voteFilms: [],
    // voteTv: [],
    // prova: 0,
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
        // for (var i = 0; i < this.films.length; i++) {
        //   this.voteFilms.push(Math.ceil(this.films[i].vote_average / 2))
        // }
        // console.log(this.voteFilms);
        // for (var i = 0; i < this.voteFilms.length; i++) {
        //   this.prova = this.voteFilms[i];
        //   console.log(this.prova);
        // }
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
        // for (var i = 0; i < this.tv.length; i++) {
        //   this.voteTv.push(Math.ceil(this.tv[i].vote_average / 2))
        // }
        // console.log(this.voteTv);
      })
    },
    // FINE RICERCA
    voto(prova){
      return Math.ceil(prova / 2)
    }
  }
});
