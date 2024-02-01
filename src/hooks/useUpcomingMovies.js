import { API_OPTIONS, MOVIES_UPCOMING_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";import { addUpcomingMovies } from "../utils/moviesSlice";
;

export const useUpcominggMovies = () => {
    const dispatch = useDispatch();
	const getUpcomingMovies = async () => {
		const data = await fetch(MOVIES_UPCOMING_API, API_OPTIONS)
		const json = await data.json();
		dispatch(addUpcomingMovies(json.results));
	}
	useEffect(() => {
		getUpcomingMovies();
	}, []);
}