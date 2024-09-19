import { AnimatePresence, useScroll } from "framer-motion";
import { Box, Circle, LeftBtn, LeftSliderBtnBox, NowPlayingContainer, NowPlayingTitleContainer, RightBtn, RightSliderBtnBox, Row, SliderCircleBox, SliderTitle } from "../components/NowPlaying.styles";
import { useQuery } from "react-query";
import { getDetailByMovieId, getImagePath, getNowPlaying, getProducerAndActor, IDetails, IGetResults, IProducer } from "../../common/api/movie.api";
import { useEffect, useState } from "react";
import { faChevronLeft, faChevronRight, faCirclePlus, faHeart, faCirclePlay, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { IsShow } from "../../common/atoms/atoms";
import { useMatch, useNavigate } from "react-router-dom";
import { ActorsContainer, ActorsName, ActorsProfile, ActorsProfileBox, DetailBox, DetailQuickBox, DetailQuickDirector, DetailQuickGenre, DetailQuickInfoBox, DetailQuickOverView, DetailQuickPoster, DetailQuickRuntime, DetailQuickTitle, DetailQuickVoteCountBox, Genres, LeftIconBox, Overlay, QuickContentBg, QuickIcon, QuickIconBox, QuickInfo, QuickInfoBox, QuickInfoTitle, RightIconBox, VoteBarBox, VoteBarInner } from "../HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function NowPlayingMovie() {



    const { data: movieList } = useQuery<IGetResults>(["movies", "nowMovie"], getNowPlaying);

    const [isShowQuickBox, setIsShowQuickBox] = useRecoilState(IsShow);
    const [index, setIndex] = useState(0)
    const [isExit, setIsExit] = useState(false)
    const [isBack, setIsBack] = useState(false)
    const [isDetail, setIsDetail] = useState(false)
    const navigator = useNavigate()

    const { scrollY } = useScroll()
    const detailBox = useMatch("/movies/:movieId");
    const movieId = detailBox?.params.movieId
    const { data: detail } = useQuery<IDetails>(["detail", movieId], () => getDetailByMovieId(movieId))
    const { data: producer } = useQuery<IProducer>(["producer", movieId], () => getProducerAndActor(movieId))
    //---------------------------event--------------------------

    // useEffect(() => {
    //     if (isShowQuickBox && selectMovieId !== null) {

    //         navigator(`/movies/${selectMovieId}`)
    //     }
    // }, [isShowQuickBox, navigator, selectMovieId])





    if (!movieList) {
        return null
    }

    if (!producer) {
        return null
    }

    const director = producer?.crew?.filter((a) => a.job === "Director")

    const image = movieList.results.map((movie) => movie.poster_path)
    const maxIndex = Math.floor(image.length / 6) - 1
    const specificMovie = movieList.results.find((movie) => movie.id.toString() === movieId)

    if (!detail) {
        return null
    };

    const voteCount = detail.vote_average?.toFixed(1)
    const voteBarWidth = Number(voteCount) * 10

    const sixActors = producer.cast?.filter((a) => a.order < 6)



    const onExitComplete = () => {
        setIsExit((prev) => !prev)
    }


    const onLeftClick = () => {
        if (isExit) {
            return
        }

        setIsExit(true)
        setIndex((prev) => prev > 0 || maxIndex >= prev ? prev - 1 : 0); // 1 . 3 
        setIsBack(false)


    }

    const onRightClick = () => {
        if (isExit) {
            return
        }

        setIsExit(true)
        setIndex((prev) => prev >= 0 || prev < maxIndex ? prev + 1 : 0);
        setIsBack(true)


    };

    const onClickBox = (movieId: number) => {
        navigator(`movies/${movieId}`)
        setIsShowQuickBox(true)
        setIsDetail(false)
    }

    const onclickOverlay = () => {
        setIsShowQuickBox(false)
        navigator("/")
        setIsDetail(false)
    }


    const onDetail = () => {
        setIsDetail(true)
    }


    //---------------------------variants--------------------------

    const sliderVars = {
        hidden: (isBack: boolean) => ({ x: isBack ? window.innerWidth + 10 : -window.innerWidth + 10 }),
        visible: { x: 0 },
        exit: (isBack: boolean) => ({ x: isBack ? -window.innerWidth + 10 : window.innerWidth + 10 })
    }




    const boxVars = {
        normal: { y: 0, scale: 1 },
        hover: { y: -40, scale: 1.3, zIndex: 11, transition: { duration: 0.5, delay: 0.5 } }
    };



    return (
        <>
            <NowPlayingContainer maxIndex={index}>
                <NowPlayingTitleContainer>
                    <SliderTitle>현재 상영중인 영화</SliderTitle>
                    <SliderCircleBox>
                        <Circle active={index === 0}></Circle>
                        <Circle active={index === 1}></Circle>
                        <Circle active={index === 2}></Circle>
                    </SliderCircleBox>
                </NowPlayingTitleContainer>

                <AnimatePresence custom={isBack} initial={false} onExitComplete={onExitComplete}>
                    <Row
                        key={index}
                        custom={isBack}
                        variants={sliderVars}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "linaer" }}>
                        {movieList.results
                            .slice(1)
                            .slice(index * 6, index * 6 + 6)
                            .map((movie) => <Box
                                key={movie.id}
                                bgImage={getImagePath(movie.poster_path, "w500")}
                                variants={boxVars}
                                whileHover="hover"
                                initial="normal"
                                transition={{ type: "linaer", duration: 0.5 }}
                                onClick={() => { onClickBox(movie.id) }}
                                layoutId={movie.id.toString()}

                            />)}
                    </Row>
                </AnimatePresence>

                <LeftSliderBtnBox >
                    <LeftBtn onClick={onLeftClick} icon={faChevronLeft} />
                </LeftSliderBtnBox>

                <RightSliderBtnBox>
                    <RightBtn onClick={onRightClick} icon={faChevronRight} />
                </RightSliderBtnBox>
            </NowPlayingContainer>

            <AnimatePresence>
                {isShowQuickBox ? <Overlay onClick={onclickOverlay} /> : null}
                {isShowQuickBox && specificMovie ? <QuickInfoBox layoutId={movieId} style={{ top: scrollY.get() + 130 }}>
                    <QuickContentBg bgImage={getImagePath(specificMovie.backdrop_path, "w500")} />
                    <QuickIconBox>
                        <LeftIconBox>
                            <QuickIcon icon={faCirclePlay} />
                            <QuickIcon icon={faCirclePlus} />
                            <QuickIcon icon={faHeart} />
                        </LeftIconBox>

                        <RightIconBox>
                            <QuickIcon icon={faUpRightAndDownLeftFromCenter} onClick={onDetail} />
                        </RightIconBox>
                    </QuickIconBox>

                    <QuickInfo>
                        <QuickInfoTitle>{specificMovie.title}</QuickInfoTitle>
                        <Genres >{`장르 ${detail?.genres.map((g) => `•${g.name} `).join(' ')}`}</Genres>
                    </QuickInfo>
                </QuickInfoBox> : null}

                {isDetail && specificMovie ? <DetailQuickBox bgImage={getImagePath(specificMovie.backdrop_path)} style={{ top: scrollY.get() + 100 }}>
                    <DetailQuickPoster poster={getImagePath(specificMovie.poster_path)} />
                    <DetailQuickInfoBox>
                        <DetailQuickTitle>
                            <span>{specificMovie.title}</span>
                            <span>({detail.release_date})</span>
                        </DetailQuickTitle>
                        <DetailQuickDirector>
                            <span>•감독</span>
                            {director ? <span>{director.map((a) => a.name)}</span> : null}
                        </DetailQuickDirector>

                        <DetailQuickRuntime>
                            <span>•런타임</span>
                            <span>{`${detail.runtime}분`}</span>
                        </DetailQuickRuntime>

                        <DetailQuickGenre>
                            <span>•장르</span>
                            <span>{detail.genres.map((a) => a.name).join(' , ')}</span>
                        </DetailQuickGenre>

                        <DetailQuickVoteCountBox>
                            <span>•평점</span>
                            <span>{voteCount}</span>
                            <VoteBarBox>
                                <VoteBarInner
                                    innerWidth={`${voteBarWidth}%`}
                                    style={{
                                        backgroundColor:
                                            voteBarWidth < 30 ? "rgb(163, 0, 0)"
                                                : voteBarWidth > 30 && voteBarWidth < 80 ? "rgb(214, 207, 1)"
                                                    : voteBarWidth > 80 ? "rgb(0, 174, 0)" : "transparent"
                                    }} />
                            </VoteBarBox>
                        </DetailQuickVoteCountBox>

                        <DetailQuickOverView>{specificMovie.overview}</DetailQuickOverView>

                        <span style={{ marginTop: "40px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>•출연배우</span>
                        <ActorsContainer>
                            {sixActors ? sixActors.map((actor) =>
                                <ActorsProfileBox>
                                    <ActorsProfile profileImage={getImagePath(actor.profile_path)} />
                                    <ActorsName>{actor.name}</ActorsName>
                                </ActorsProfileBox>
                            ) : null}

                        </ActorsContainer>
                    </DetailQuickInfoBox>
                </DetailQuickBox> : null}
            </AnimatePresence>

        </>
    );
};

export default NowPlayingMovie;