import styled from "styled-components";
import { IAnimeCard } from "../../../interfaces/IAnimeCard";
import { HTMLAttributes } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
`

const Picture = styled.picture`
    img {
        width: 100%;
        height: 41.7rem;
    }
`

const Text = styled.h4`
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 3rem;
    height: 3rem;
    text-align: center;

    overflow: hidden;
    text-overflow: clip;

`

type TProps = HTMLAttributes<HTMLDivElement> & IAnimeCard


export default function AnimeCard(data: TProps) {
    return (
        <Container {...data}>
            <Picture>
                <img src={data.img} />
            </Picture>
            <Text>{data.title}</Text>
        </Container>
    )
}