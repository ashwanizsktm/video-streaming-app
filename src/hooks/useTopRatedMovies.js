import { API_OPTIONS, MOVIES_TOP_RATED_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

export const useTopRatedgMovies = () => {
    const dispatch = useDispatch();
	const topRatedMovies = useSelector(state => state.movies.topRatedMovies);
	const getTopRatedMovies = async () => {
		const data = await fetch(MOVIES_TOP_RATED_API, API_OPTIONS)
		const json = await data.json();
		dispatch(addTopRatedMovies(json.results));
	}
	useEffect(() => {
		!topRatedMovies && getTopRatedMovies();
	}, []);
}