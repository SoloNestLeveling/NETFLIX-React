import { useQuery } from "react-query";
import { getDetailByMovieId, getImagePath, getNowPlaying, IDetails, IGetResults } from "../../common/api/movie.api";
import { AddListBtn, BannerBox, BtnBox, DetailBox, Details, Info, Overview, PlayBtn, Title } from "../HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons"

export interface IDetailId {
    id: string,
}


function Banner({ id }: IDetailId) {
    const { data } = useQuery<IGetResults>(["movies", "nowPlaying"], getNowPlaying);
    const { data: details } = useQuery<IDetails>(["details", id], () => getDetailByMovieId(id));

    if (!data) {
        return null
    }

    if (!details) {
        return null
    }

    const image = data.results.map((movie) => movie.backdrop_path)

    return (
        <BannerBox bgImage={getImagePath(image[3])}>
            <Info>
                <Title>{data?.results[3].title}</Title>
                <Overview>{data?.results[3].overview}</Overview>
                <DetailBox>
                    <Details>{`•장르: ${details.genres.map((g) => g.name).join(", ")}  •평점: ${(details.vote_average).toFixed(1)}`}</Details>
                </DetailBox>

                <BtnBox>
                    <PlayBtn>
                        <FontAwesomeIcon icon={faPlay} size="xl" style={{ color: "white" }} />
                        <span>재생</span>
                    </PlayBtn>
                    <AddListBtn>
                        <FontAwesomeIcon icon={faPlus} size="xl" style={{ color: "white" }} />
                        <span>내가 찜한 리스트</span>
                    </AddListBtn>
                </BtnBox>
            </Info>


        </BannerBox>
    );
};

export default Banner;