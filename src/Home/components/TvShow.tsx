import { useQuery } from "react-query";
import { getDetailByTvId, getImagePath, getTopTvShow, getTvProducerAndActor, IDetailsTv, ITopTv, ITvProducer } from "../../common/api/movie.api";

import { AnimatePresence, useScroll } from "framer-motion";
import { faChevronLeft, faChevronRight, faCirclePlay, faCirclePlus, faHeart, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { TvBox, TvCircle, TvLeftBtn, TvLeftSliderBtnBox, TvRightBtn, TvRightSliderBtnBox, TvRow, TvShowContainer, TvSliderCircleBox, TvSliderTitle, TvTitleContainer } from "./TvShow.styles";
import { useState } from "react";
import { ActorsContainer, ActorsName, ActorsProfile, ActorsProfileBox, DetailQuickBox, DetailQuickDirector, DetailQuickGenre, DetailQuickInfoBox, DetailQuickOverView, DetailQuickPoster, DetailQuickRuntime, DetailQuickTitle, DetailQuickVoteCountBox, Genres, LeftIconBox, Overlay, QuickContentBg, QuickIcon, QuickIconBox, QuickInfo, QuickInfoBox, QuickInfoTitle, RightIconBox, VoteBarBox, VoteBarInner } from "../HomeStyles";
import { useRecoilState } from "recoil";
import { IsShow } from "../../common/atoms/atoms";
import { useMatch, useNavigate } from "react-router-dom";

function TvShow() {

    const { data: tvList } = useQuery<ITopTv>(["tv", "topTv"], getTopTvShow);
    const [index, setIndex] = useState(0)
    const [isExit, setIsExit] = useState(false)
    const [isBack, setIsBack] = useState(false)
    const [isDetail, setIsDetail] = useState(false)
    const [isShowQuickBox, setIsShowQuickBox] = useRecoilState(IsShow);

    const navigator = useNavigate()

    const { scrollY } = useScroll()
    const detailBox = useMatch("/tvs/:tvId");
    const tvId = detailBox?.params.tvId;
    const { data: detail } = useQuery<IDetailsTv>(["tvDetails", tvId], () => getDetailByTvId(tvId));
    const { data: producer } = useQuery<ITvProducer>(["tvProducer", tvId], () => getTvProducerAndActor(tvId));



    //---------------------------event--------------------------




    if (!detail) {
        return null;
    };

    console.log(`overview: ${detail.overview}`)


    if (!tvList) {
        return null;
    };
    const image = tvList.results.map((tv) => tv.poster_path)
    const maxIndex = Math.floor(image.length / 6);
    const specificTv = tvList.results.find((tv) => tv.id.toString() === tvId);
    const director = producer?.crew?.filter((a) => a.job === "Director");

    const sixActors = producer?.cast?.filter((a) => a.order < 6);
    const voteCount = detail.vote_average?.toFixed(1)
    const voteBarWidth = Number(voteCount) * 10
    //-----------------------------------event-----------------------
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


    }

    const onclickOverlay = () => {
        navigator("/")
        setIsShowQuickBox(false)
        setIsDetail(false)
    }

    const onDetail = () => {
        setIsDetail(true)
    }

    const onClickBox = (tvId: number) => {
        navigator(`tvs/${tvId}`)
        setIsShowQuickBox(true)
    }

    //---------------------------variants--------------------------

    const tvSliderVars = {
        hidden: (isBack: boolean) => ({ x: isBack ? window.innerWidth + 10 : -window.innerWidth + 10 }),
        visible: { x: 0 },
        exit: (isBack: boolean) => ({ x: isBack ? -window.innerWidth + 10 : window.innerWidth + 10 })
    }




    const tvBoxVars = {
        normal: { y: 0, scale: 1 },
        hover: { y: -40, scale: 1.3, zIndex: 11, transition: { duration: 0.3, delay: 0.5 } }
    };

    return (
        <>

            <TvShowContainer maxIndex={index}>
                <TvTitleContainer>
                    <TvSliderTitle>인기 TV</TvSliderTitle>
                    <TvSliderCircleBox>
                        <TvCircle active={index === 0}></TvCircle>
                        <TvCircle active={index === 1}></TvCircle>
                        <TvCircle active={index === 2}></TvCircle>
                        <TvCircle active={index === 3}></TvCircle>
                    </TvSliderCircleBox>
                </TvTitleContainer>

                <AnimatePresence custom={isBack} initial={false} onExitComplete={onExitComplete}>
                    <TvRow
                        key={index}
                        custom={isBack}
                        variants={tvSliderVars}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "linaer" }}>
                        {tvList.results
                            .slice(index * 6, index * 6 + 6)
                            .map((tv) => <TvBox
                                key={tv.id}
                                bgImage={getImagePath(tv.poster_path, "w500")}
                                variants={tvBoxVars}
                                whileHover="hover"
                                initial="normal"
                                layoutId={tv.id.toString()}
                                transition={{ type: "linaer", duration: 0.5 }}
                                onClick={() => onClickBox(tv.id)}
                            />)}
                    </TvRow>
                </AnimatePresence>

                <TvLeftSliderBtnBox >
                    <TvLeftBtn onClick={onLeftClick} icon={faChevronLeft} />
                </TvLeftSliderBtnBox>

                <TvRightSliderBtnBox>
                    <TvRightBtn onClick={onRightClick} icon={faChevronRight} />
                </TvRightSliderBtnBox>
            </TvShowContainer>
            <AnimatePresence>
                {isShowQuickBox ? <Overlay onClick={onclickOverlay} /> : null}
                {isShowQuickBox && specificTv ? <QuickInfoBox layoutId={tvId} style={{ top: scrollY.get() + 130 }}>
                    <QuickContentBg bgImage={getImagePath(specificTv.backdrop_path, "w500")} />
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
                        <QuickInfoTitle>{specificTv.name}</QuickInfoTitle>
                        <Genres >{`장르 ${detail?.genres.map((g) => `•${g.name} `).join(' ')}`}</Genres>
                    </QuickInfo>
                </QuickInfoBox> : null}

                {isDetail && specificTv ? <DetailQuickBox bgImage={getImagePath(specificTv.backdrop_path)} style={{ top: scrollY.get() + 100 }}>
                    <DetailQuickPoster poster={getImagePath(specificTv.poster_path)} />
                    <DetailQuickInfoBox>
                        <DetailQuickTitle>
                            <span>{specificTv.name}</span>
                            <span>({detail.first_air_date})</span>
                        </DetailQuickTitle>
                        <DetailQuickDirector>
                            <span>•시즌</span>
                            {director ? <span>{`${detail.number_of_seasons}개`}</span> : null}
                        </DetailQuickDirector>

                        <DetailQuickRuntime>
                            <span>•에피소드</span>
                            <span>{`${detail.number_of_episodes}개`}</span>
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

                        <DetailQuickOverView>{detail.overview}</DetailQuickOverView>

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

export default TvShow;