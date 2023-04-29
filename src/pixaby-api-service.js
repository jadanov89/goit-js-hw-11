import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20180121-6058dbf0c2d40e7fb1402d980';

export default class PixabayApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
    }
    async fetchImages() {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo$orientation=horizontal$safesearch=true&per_page=40&page=${this.page}`
      );
      return response.data;
    }
    incrementPege() {
      this.page += 1;
    }
    resetPage() {
      this.page = 1;
    }
    get query() {
      return this.searchQuery;
    }
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
  }