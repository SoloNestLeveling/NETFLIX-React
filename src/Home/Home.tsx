import { useQuery } from "react-query";
import { Overlay, Wrapper } from "./HomeStyles";
import { getNowPlaying, IGetResults, } from "../common/api/movie.api";
import Banner from "./components/Banner";
import NowPlayingMovie from "./components/NowPlaying";
import TvShow from "./components/TvShow";
import { useRecoilState } from "recoil";
import { IsShow } from "../common/atoms/atoms";
import { useNavigate } from "react-router-dom";

function Home() {

    const { data: movieList } = useQuery<IGetResults>(["movies", "nowPlaying"], getNowPlaying);



    //-------------------variable--------------------------

    if (!movieList) {
        return null
    }
    const bannerId = movieList.results[0].id.toString()






    return (
        <Wrapper>
            <Banner id={bannerId} />
            <NowPlayingMovie />
            <TvShow />
        </Wrapper>

    );
};

export default Home;