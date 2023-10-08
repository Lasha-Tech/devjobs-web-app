import styled, { css } from "styled-components";
import Header from "./Header";

const JobDetails = ({click, circle}) => {
    return (
        <JobDetailsComponent>
            {/* Header */}
            <Header click={click} circle={circle}/>

            {/* About Company Container */}
            <AboutCompanyContainer circle={circle}>
                {/* Logo  */}
                <CompanyLogo backgroundcolor='orange'/>

                {/* Name  */}
                <CompanyName circle={circle}>Scoot</CompanyName>

                {/* Link  */}
                <CompanyLink>Scoot.com</CompanyLink>

                {/* Company Site Button  */}
                <CompanySiteButton href="scoot.com">
                <CompanySiteButtonBackground/>
                <CompanySiteButtonText>Company Site</CompanySiteButtonText>
                </CompanySiteButton>
            </AboutCompanyContainer>
        </JobDetailsComponent>
    );
}
 
export default JobDetails;

// Styled Components 
const JobDetailsComponent = styled.div(
    (props) => css`
        @media (min-width: 375px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `
)
const AboutCompanyContainer = styled.div(
    (props) => css`
        @media (min-width: 375px) {
            width: 100%;
            height: 225px;
            border-radius: 6px;
            background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
            margin-top: 32px;
        }
    `
)
const CompanyLogo = styled.div(
    (props) => css`
        width: 50px;
        height: 50px;
        background-color: ${props.backgroundcolor};
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -25px;
    `
)
const CompanyName = styled.p(
    (props) => css`
        color: ${props.circle === "47" ? "#19202D" : "#FFF"};
        font-family: 'Kumbh Sans';
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 13px;
    `
)
const CompanyLink = styled.p(
    (props) => css`
        color: #6E8098;
        font-family: 'Kumbh Sans';
        margin-bottom: 27px;
    `
)
const CompanySiteButton = styled.div(
    () => css`
        @media (min-width: 375px) {
            width: 45%;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `
)
const CompanySiteButtonBackground = styled.div(
    () => css`
            width: 100%;
            height: 100%;
            background-color: #5964E0;
            border-radius: 5px;
            opacity: 0.1;
            position: relative;
            z-index: 1;
    `
)
const CompanySiteButtonText = styled.p(
    () => css`
        @media (min-width: 375px) {
            position: absolute;
            color: #5964E0;
            font-family: 'Kumbh Sans';
            font-weight: 700;
        }
    `
)