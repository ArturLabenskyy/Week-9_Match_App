import styled from "styled-components";

const Wrapped = styled.section`
    height: 100%;

    .game-play {
        width: 80%;
        height: 70%;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-align: center;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    button {
        height: 2rem;
        width: 5rem;
        margin: 1rem 10rem;
        font-size: 1.5rem;
    }

    img {
        width: 12rem;
        height: 12rem;
        border-radius: 10px;
    }
`;

export default Wrapped;
