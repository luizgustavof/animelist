import { useQuery } from "@tanstack/react-query"
import { Star } from "lucide-react"
import styled from "styled-components"
import { jikanApi } from "../../utils/jikan"
import { useParams } from "react-router-dom"

const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 3rem;
    padding: 3rem;
    align-items: center;

    @media screen and (min-width: 700px) and (max-width: 1200px) {
        display: block;

        iframe {
            width: 800px !important;
        }
    }

    @media screen and (min-width: 300px) and (max-width: 600px) {
        display: block;

        iframe {
            width: 522px !important;
        }
    }

    overflow-y: auto;
`

const Title = styled.h1`
    color: #FFF;
    font-size: 3.1rem;
    font-weight: 700;
    text-shadow: 0px 2px 4px #000;
`

const Description = styled.p`
    color: rgba(255, 255, 255, 0.88);
    font-size: 1.7rem;
    text-shadow: 0px 2px 4px #000;
`

const LeftAside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 50%;

    @media screen and (min-width: 300px) and (max-width: 1200px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`

const RatingText = styled.p`
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.71);

    span {
        font-size: 1.4rem;
        color: white;
    }
`

const ListInformations = styled.ul`
    list-style: none;

    li {
        width: 100%;
        padding: 1.5rem 1.1rem;
        border-bottom: 1px solid #FFF;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(38px);

        font-size: 1.4rem;
        color: white;
        font-weight: 400;

        span {
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 0.71);
        }

        margin-bottom: 1.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const GenresList = styled.ul`
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
        border-bottom: 1px solid #FFF;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(38px);
        padding: 0.8rem 1.1rem;

        font-size: 1.7rem;
        color: white;
        font-weight: 400;
    }
`


export default function SeeAnimePage() {
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ['view-full-anime'],
        queryFn: () => jikanApi.getAnimeFullById(Number(id))
    })

    return (
        <Container>
            <LeftAside>
                <Title>{data?.title}</Title>
                <Description>{data?.synopsis}</Description>

                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <Star color="white" fill="white" />
                    <Star color="white" fill="white" />
                    <Star color="white" fill="white" />
                    <Star color="white" fill="white" />
                    <Star color="white" fill="white" />

                    <RatingText>| Score: <span>{data?.score}</span> | <span>{data?.members}</span> Members</RatingText>
                </div>


                <GenresList>
                    {data?.genres.map(genre => <li>{genre.name}</li>)}
                </GenresList>


                <ListInformations>
                    <li>Status: <span>{data?.status}</span></li>
                    <li>Duration: <span>{data?.duration}</span></li>
                    <li>Episodes: <span>{data?.episodes}</span></li>
                </ListInformations>

            </LeftAside>

            <iframe
                style={{ width: '900px', height: '500px', borderBottom: '1px solid white' }}
                src={`https://www.youtube.com/embed/${data?.trailer.youtube_id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />


        </Container>
    )
}