import { Eye } from "lucide-react"
import styled from "styled-components"
import { IViewAnimeCard } from "../../../interfaces/IViewAnimeCard"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 84.3rem;
    gap: 2.5rem;

    @media screen and (min-width: 300px) and (max-width: 1200px) {
        width: fit-content;
    }
`

const Icon = styled.img`
    width: 14rem;
    height: 13.3rem;
    border-radius: 50%;
`

const Description = styled.p`
    color: rgba(255, 255, 255, 0.88);
    font-size: 1.7rem;
    font-weight: 400;
    text-shadow: 0px 2px 4px #000;

    @media screen and (min-width: 600px) and (max-width: 1200px) {
        width: 50%;
        font-size: 1.4rem;
    }
`

const Button = styled.button`
    color: #000;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: 600;
    width: 24rem;
    padding: 0.8rem 0rem;
    border-radius: 0.5rem;
    background: #FFF;
    cursor: pointer;
`

interface IProps extends IViewAnimeCard {
    onCickSeeAnime: () => void;
}

export default function ViewAnimeCard(data: IProps) {
    return (
        <Container>
            <Icon src={data.img} />
            <Description>
                {data.description}
            </Description>

            <Button onClick={data.onCickSeeAnime}>
                <Eye />
                SEE DETAILS
            </Button>
        </Container>
    )
}