import styled, { css } from "styled-components";
import Header from "./Header";

const Home = ({click, circle}) => {
    return (
        <HomeContainer>
            {/* Header  */}
            <Header click={click} circle={circle}/>

            {/* Filter  */}
            <FilterContainer circle={circle}>
                {/* Input */}
                <InputFilterByTitle type='text' placeholder="Filter by title…" circle={circle}/>
            </FilterContainer>



        </HomeContainer>
    );
}
 
export default Home;

// Styled Components 
const HomeContainer = styled.div(
    () => css`
        @media (min-width: 375px) {
            width: 100%;
            height: max-content;
        }
    `
)
const Svg = styled.svg(
    () => css`
        width: 112px;
        height: 24px;
    `
);
const SvgPath = styled.path(
    () => css`
      width: max-content;
    `
  );

const SvgRect = styled.rect(
    () => css`
        fill: white;
    `
);
const SvgCircle = styled.circle(() => css``)
const FilterContainer = styled.div(
    (props) => css`
        @media (min-width: 375px) {
            width: 100%;
            height: 80px;
            padding: 16px 16px 16px 24px;
            background-color: ${props.circle === '47'? '#FFF': '#19202D'};
            position: relative;
            z-index: 1;
            border-radius: 6px;
            display: flex;
            align-items: center;
        }

        @media (min-width: 768px) {
            display: none;
        }
    `
)
const InputFilterByTitle = styled.input(
    (props) => css`
        @media (min-width: 375px) {
            width: 60%;
            background-color: ${props.circle === '47'? '#FFF': '#19202D'};
            color: ${props.circle === '47'? '#19202D': '#FFF'};
            font-family: 'Kumbh Sans';
            font-size: 16px;
            border: none;
            outline: none;
            &::placeholder {
                opacity: 0.5;
                color: ${props.circle === '47'? '#19202D': '#FFF'};
                font-family: 'Kumbh Sans';
                font-size: 16px;
            }
    }
    `
)
