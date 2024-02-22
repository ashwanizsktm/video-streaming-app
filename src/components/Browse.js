import Header from "./Header";
import { useNowPlayingMovies } from '../hooks/useNowplayingMovies';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
// import { useTopRatedgMovies } from "../hooks/useTopRatedMovies";
// import { useUpcominggMovies } from "../hooks/useUpcomingMovies";
import GptSearch from './GptSearch';
import { useSelector } from "react-redux";

const Browse = () => {
	const showGptSearch = useSelector(state => state.gpt.showGptSearch)
	useNowPlayingMovies();
	usePopularMovies();
	// useTopRatedgMovies();
	// useUpcominggMovies();

	return (
		<div>
			<Header />
			{showGptSearch ?
				<GptSearch /> :
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			}
		</div>
	)
}

export default Browse