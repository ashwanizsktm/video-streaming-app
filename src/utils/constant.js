export const BANNER_BG_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/2560px-Netflix_2014_logo.svg.png"

export const API_OPTIONS = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTNjNmRkMGVhNjM2N2U5ZDllYWM1M2RiNzIzODU5OCIsInN1YiI6IjY1YjYzNGQyYWZlMjI0MDE2MzM5OWJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMUPa9WmLpJMo9mGG_oXJVrhY-im95fB4CELv2i7FbY'
	}
}

export const MOVIES_NOW_PLAYING_LIST_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const MOVIES_POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const MOVIES_TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1'
export const MOVIES_UPCOMING_API = 'https://api.themoviedb.org/3/movie/upcoming?page=1'
export const MOVIES_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/'