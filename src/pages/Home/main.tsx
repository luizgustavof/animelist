import React from 'react'
import styled from "styled-components"
import ViewAnimeCard from "./components/ViewAnimeCard"
import AnimeCard from "./components/AnimeCard"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useQuery } from "@tanstack/react-query";
import { jikanApi } from "../../utils/jikan";
import { IRecomendation } from '../../interfaces/jikan/IRecomendation';
import { useNavigate } from 'react-router-dom';
import { useBackgroundContainerContext } from '../../contexts/BackgroundContainer';

const Container = styled.main`
    width: 100%;
    height: 100%;
    padding-top: 5rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    @media screen and (min-width: 600px) and (max-width: 1200px) {
        padding-left: 1rem;
    }
`

export default function HomePage() {
    const navigate = useNavigate()
    const [selectedAnime, setSelectedAnime] = React.useState<IRecomendation>()
    const { backgroundImageRef } = useBackgroundContainerContext()

    const { data: recomendationsList } = useQuery({
        queryKey: ['animes-recomendations'],
        queryFn: jikanApi.getRecentAnimeRecommendations,
        cacheTime: 90,
    })

    React.useEffect(() => {
        if (!(recomendationsList && backgroundImageRef.current)) {
            return;
        }

        setSelectedAnime(recomendationsList[0])
        backgroundImageRef.current.style.backgroundImage = `url(${recomendationsList[0].entry[0].images.jpg.large_image_url})`

    }, [recomendationsList])


    return (
        <Container>
            {
                selectedAnime && (
                    <ViewAnimeCard
                        onCickSeeAnime={() => {
                            navigate(`/see-anime/${selectedAnime.entry[0].mal_id}`)
                        }}
                        description={selectedAnime.content}
                        img={selectedAnime.entry[0].images.jpg.image_url}
                        title={selectedAnime.entry[0].title}
                    />
                )
            }

            <h1 style={{ color: 'white', fontWeight: 500, fontSize: '2.2rem', marginTop: '15rem', marginBottom: '1.5rem' }}>Recommendations for you</h1>

            <Swiper
                grabCursor={true}
                slidesPerView={6}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                      },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                }}

                style={{ width: '100%' }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    recomendationsList?.map(data =>
                        <SwiperSlide style={{ width: '35rem' }}>
                            <AnimeCard
                                onClick={() => {
                                    if(!backgroundImageRef.current) {
                                        return;
                                    }
                                    navigate(`/see-anime/${data.entry[0].mal_id}`)
                                    backgroundImageRef.current.style.backgroundImage = `url(${data.entry[0].images.jpg.large_image_url})`
                                }}
                                img={data.entry[0].images.jpg.large_image_url}
                                title={data.entry[0].title}
                            />
                        </SwiperSlide>
                    )
                }


            </Swiper>

        </Container>
    )
}