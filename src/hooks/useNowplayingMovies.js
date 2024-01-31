import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, MOVIES_NOW_PLAYING_LIST_API } from "../utils/constant";

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
	const getNowPlayingMovies = async () => {
		const data = await fetch(MOVIES_NOW_PLAYING_LIST_API, API_OPTIONS)
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	}
	useEffect(() => {
		getNowPlayingMovies();
	}, []);
}