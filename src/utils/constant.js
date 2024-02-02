export const BANNER_BG_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/2560px-Netflix_2014_logo.svg.png"
export const BANNER_BG_ORIGINAL_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const API_OPTIONS = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: "Bearer" + process.env.REACT_APP_TMDB_API_CONFIG
	}
}
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const MOVIES_NOW_PLAYING_LIST_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const MOVIES_POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const MOVIES_TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1'
export const MOVIES_UPCOMING_API = 'https://api.themoviedb.org/3/movie/upcoming?page=1'
export const SEARCH_MOVIES_API = 'https://api.themoviedb.org/3/search/movie?query=';
export const SEARCH_MOVIES_API_FITER = '&include_adults=false&language=en-US&page=1'
export const MOVIES_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/'