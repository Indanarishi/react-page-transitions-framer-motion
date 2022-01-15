import styled from "styled-components"


const Section = styled.section`
    background: url(${({ image }) => image && image}) no-repeat top;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
`

const Container = styled.div`
    color: #fff;
    padding: 2rem;
    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0,0.4);
    margin: 2rem;
    border-radius: 10px;

    h1 {
        font-size: clamp(2rem, 8vw, 5rem);
        margin-bottom: 0.5rem;
    }

    p {
        font-size: clamp(1rem, 6vw, 2.5rem);
        margin-bottom: 1rem;
    }

    button {
        font-size: clamp(.8rem, 4vw, 1.2rem);
        padding: .8rem 2rem;
        color: #fff;
        background: #ffb347;
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }
`

const Hero = ({ image, title, desc }) => {
    return (
        <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>Learn More</button>
            </Container>
        </Section>
    )
}

export default Hero
