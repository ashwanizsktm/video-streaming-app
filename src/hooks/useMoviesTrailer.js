import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
    
    const dispatch = useDispatch();
    // fetch trailer video & updating the store with the trailer video data
    const getMoviesVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const moviesVideo = await data.json();
        const filteredData = moviesVideo.results.filter(video => video.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : moviesVideo.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMoviesVideos();
    }, []);
}

export default useMoviesTrailer;