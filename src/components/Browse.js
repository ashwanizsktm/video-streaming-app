import Header from "./Header";
import { useNowPlayingMovies } from '../hooks/useNowplayingMovies';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedgMovies } from "../hooks/useTopRatedMovies";
import { useUpcominggMovies } from "../hooks/useUpcomingMovies";
 
const Browse = () => {
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedgMovies();
	useUpcominggMovies();
	
	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</div>
	)
}

export default Browse