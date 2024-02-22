import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, MOVIES_NOW_PLAYING_LIST_API } from "../utils/constant";

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
	const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies);
	const getNowPlayingMovies = async () => {
		const data = await fetch(MOVIES_NOW_PLAYING_LIST_API, API_OPTIONS)
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	}
	useEffect(() => {
		// this is memoization technique which is used for performance here in this example we are calling api 
		// only the movies are not present in the store
		 getNowPlayingMovies();
	}, []);
}