import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    min-height: 5rem;
    border-bottom: 0.5px solid rgba(241, 241, 241, 0.24);
    background: rgba(0, 0, 0, 0.767);
    backdrop-filter: blur(51.5px);
    display: flex;
    justify-content: flex-end;
    padding: 0 2rem;
    align-items: center;
`

export default function Header() {
    return (
        <Container>
            {/* <Heart color="white" size={30} strokeWidth={1.5}/> */}
        </Container>
    )
}