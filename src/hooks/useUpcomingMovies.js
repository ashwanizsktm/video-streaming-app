import { API_OPTIONS, MOVIES_UPCOMING_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

export const useUpcominggMovies = () => {
    const dispatch = useDispatch();
	const upcomingMovies = useSelector(state => state.movies.upcomingMovies);
	const getUpcomingMovies = async () => {
		const data = await fetch(MOVIES_UPCOMING_API, API_OPTIONS)
		const json = await data.json();
		dispatch(addUpcomingMovies(json.results));
	}
	useEffect(() => {
		!upcomingMovies && getUpcomingMovies();
	}, []);
}