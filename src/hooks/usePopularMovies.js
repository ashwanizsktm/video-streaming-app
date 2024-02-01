import { API_OPTIONS, MOVIES_POPULAR_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

export const usePopularMovies = () => {
    const dispatch = useDispatch();
	const getPopularMovies = async () => {
		const data = await fetch(MOVIES_POPULAR_API, API_OPTIONS)
		const json = await data.json();
		dispatch(addPopularMovies(json.results));
	}
	useEffect(() => {
		getPopularMovies();
	}, []);
}