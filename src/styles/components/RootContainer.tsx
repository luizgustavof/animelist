import styled from "styled-components";
import Header from "./Header";
import { HashRouter } from "react-router-dom";
import AppRoutes from "../../routes";
import { useBackgroundContainerContext } from "../../contexts/BackgroundContainer";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(https://media.discordapp.net/attachments/1126309039882653696/1155998167490375691/image.png?width=1261&height=670);
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #000 25.48%, rgba(0, 0, 0, 0.00) 88.28%);
`

export default function RootContainer() {
    const { backgroundImageRef } = useBackgroundContainerContext()

    return (
        <Container ref={backgroundImageRef}>
            <Wrapper>
                <HashRouter>
                    <Header />
                    <AppRoutes />
                </HashRouter>
            </Wrapper>
        </Container>
    )
}