export default class ApiService {
    constructor() {
        this.baseUrl = 'https://pixabay.com/api/';
        this.API_KEY = '19686819-03f2ab0cba3a581dcc64d8dd3';
        this.query = '';
        this.pageNumber = 1;
        this.perPage = 12;
        this.imageType = 'photo';
        this.orientation = 'horizontal';
    };

    get queryValue() {
        return this.query;
    };
    set queryValue(val) {
        return (this.query = val);
    };
    setPage = () => {
        return this.pageNumber += 1;
    };
    resetPage = () => {
        return this.pageNumber = 1;
    };

    fetchImages = () => {
        // if (inputValue && inputValue.length > 0) {
        //   this.queryValue = inputValue;
        // } 
        const params = `?image_type=${this.imageType}
        &orientation=${this.orientation}&q=${this.query}&page=${this.pageNumber}
        &per_page=${this.perPage}&key=${this.API_KEY}`;
        const url = `${this.baseUrl}${params}`;
        return fetch(url)
        .then((res) => res.json())
        .then((result) => {
          return result.hits;   
        });
        
    };
};