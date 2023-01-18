import { reactive } from 'vue';

export const store = reactive({
    // base url movies 
    urlMovies: 'https://api.themoviedb.org/3/search/movie?api_key=e3ed1f013cf6f646f124a113802c7b5c&query=',
    arrayMovies: [],
    // base url seies
    urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=e3ed1f013cf6f646f124a113802c7b5c&query=',
    arraySeries: [],
    //campo di ricerca
    searchText: ''
})