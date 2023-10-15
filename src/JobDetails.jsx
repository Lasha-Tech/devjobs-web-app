import styled, { css } from "styled-components";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import jobs from "./data.json";

const JobDetails = ({ click, circle }) => {
  const { id } = useParams();
  let currentJob;

  jobs.map((job) => {
    if (id !== 0) {
      if (job.id == id) {
        currentJob = job;
      }
    }
  });

  return (
    <JobDetailsComponent>
      <ParentContainer>
        {/* Header */}
        <Header click={click} circle={circle} />

        {/* About Company Container */}
        <AboutCompanyContainer circle={circle}>
          {/* Left Container  */}
          <LeftContainer>
            {/* Logo  */}
            <CompanyLogo backgroundcolor={currentJob.logoBackground}>
              <CompanyLogoSvg src={currentJob.logo} />
            </CompanyLogo>

            <CompanyNameLinkContainer>
              {/* Name  */}
              <CompanyName circle={circle}>{currentJob.company}</CompanyName>
              {/* Link  */}
              <CompanyLink>{currentJob.website}</CompanyLink>
            </CompanyNameLinkContainer>
          </LeftContainer>

          {/* Company Site Button  */}
          <CompanySiteButtonLink
            circle={circle}
            target="_blank"
            href={currentJob.website}
          >
            <CompanySiteButton>Company Site</CompanySiteButton>
          </CompanySiteButtonLink>
        </AboutCompanyContainer>

        {/* Main */}
        <MainContainer circle={circle}>
          {/* Main Header */}
          <MainHeaderContainer>
            <AboutJobDetails>
              {/* Time  */}
              <JobTimeContainer>
                <JobTime>{currentJob.postedAt}</JobTime>
                <Period>.</Period>
                <JobTime>{currentJob.contract}</JobTime>
              </JobTimeContainer>

              {/* Position  */}
              <JobPosition circle={circle}>{currentJob.position}</JobPosition>

              {/* Location  */}
              <CompanyLocation>{currentJob.location}</CompanyLocation>
            </AboutJobDetails>

            {/* Apply Now Button  */}
            <CompanyApplyNowLink target="_blank" href={currentJob.apply}>
              <ApplyNowButton>Apply Now</ApplyNowButton>
            </CompanyApplyNowLink>
          </MainHeaderContainer>

          {/* Description  */}
          <JobDetailsText circle={circle}>
            {currentJob.description}
          </JobDetailsText>

          {/* Requirements */}
          <JobDetailsRequirementsTitle circle={circle}>
            Requirements
          </JobDetailsRequirementsTitle>
          <JobDetailsText circle={circle}>
            {currentJob.requirements.content}
          </JobDetailsText>

          {/* Requirements List  */}
          <JobDetailsListDiv>
            <JobDetailsUnnumberedList>
              {currentJob.requirements.items.map((item) => {
                return (
                  <ListItem circle={circle} key={Math.random()}>
                    {item}
                  </ListItem>
                );
              })}
            </JobDetailsUnnumberedList>
          </JobDetailsListDiv>

          {/* Role  */}
          <JobDetailsRoleTitle circle={circle}>
            What Will You Do
          </JobDetailsRoleTitle>
          <JobDetailsText circle={circle}>
            {currentJob.role.content}
          </JobDetailsText>

          {/* Role List */}
          <JobDetailsListDiv>
            <JobDetailsNumberedList>
              {currentJob.role.items.map((item) => {
                return (
                  <ListItem circle={circle} key={Math.random()}>
                    {item}
                  </ListItem>
                );
              })}
            </JobDetailsNumberedList>
          </JobDetailsListDiv>
        </MainContainer>
      </ParentContainer>

      {/* Footer */}
      <FooterContainer circle={circle}>
        {/* Position */}
        <PositionDiv>
          <JobPositionFooter circle={circle}>
            {currentJob.position}
          </JobPositionFooter>
          <JobDetailsText>So Digital Inc.</JobDetailsText>
        </PositionDiv>

        {/* Apply Now Button  */}
        <CompanyApplyNowLink target="_blank" href={currentJob.apply}>
          <ApplyNowButton>Apply Now</ApplyNowButton>
        </CompanyApplyNowLink>
      </FooterContainer>
    </JobDetailsComponent>
  );
};

export default JobDetails;

// Styled Components
const JobDetailsComponent = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `
);
const ParentContainer = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      height: max-content;
      padding: 32px 24px 64px;
    }
  `
);
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

    @media (min-width: 768px) {
      width: 100%;
      height: 140px;
      border-radius: 6px;
      background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
      margin-top: 46px;
    }
  `
);
const LeftContainer = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 768px) {
      width: fit-content;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 40px;
    }
  `
);
const CompanyLogo = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 50px;
      height: 50px;
      background-color: ${props.backgroundcolor};
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: -25px;
    }

    @media (min-width: 768px) {
      width: 140px;
      height: 100%;
      background-color: ${props.backgroundcolor};
      border-radius: 0px 0px 0px 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: unset;
    }
  `
);
const CompanyLogoSvg = styled.img(
  () => css`
    @media (min-width: 375px) {
      width: max-content;
    }
  `
);
const CompanyNameLinkContainer = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media (min-width: 768px) {
      align-items: flex-start;
    }
  `
);
const CompanyName = styled.p(
  (props) => css`
    color: ${props.circle === "47" ? "#19202D" : "#FFF"};
    font-family: "Kumbh Sans";
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 13px;
  `
);
const CompanyLink = styled.p(
  () => css`
    color: #6e8098;
    font-family: "Kumbh Sans";
    @media (min-width: 375px) {
      margin-bottom: 27px;
    }
    @media (min-width: 768px) {
      margin: 0;
    }
  `
);
const CompanySiteButton = styled.div(
  () => css`
    @media (min-width: 375px) {
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(89, 100, 224, 0.1);
      border-radius: 5px;
    }
  `
);
const CompanySiteButtonLink = styled.a(
  (props) => css`
    @media (min-width: 375px) {
      width: 45%;
      color: #5964e0;
      font-family: "Kumbh Sans";
      font-weight: 700;
      text-decoration: none;
    }
    @media (min-width: 768px) {
      color: ${props.circle === "47" ? "#5964e0" : "#FFF"};
      width: 147px;
      margin-right: 40px;
    }
  `
);
const CompanyApplyNowLink = styled(CompanySiteButtonLink)`
  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0;
  }
`;
const MainContainer = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px 24px;
      margin-top: 24px;
      border-radius: 6px;
      background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
    }

    @media (min-width: 768px) {
      padding: 48px 40px;
    }
  `
);
const MainHeaderContainer = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 54px;
      align-items: flex-start;
      margin-bottom: 32px;
    }

    @media (min-width: 768px) {
      width: 100%;
      height: max-content;
      display: flex;
      gap: 54px;
      align-items: flex-start;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 44px;
    }
  `
);
const AboutJobDetails = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: max-content;
    }
  `
);
const JobTimeContainer = styled.div(
  () => css`
    display: flex;
    gap: 12px;
  `
);
const JobTime = styled.p(
  () => css`
    color: #6e8098;
    font-family: "Kumbh Sans";
  `
);
const Period = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    background-color: #6e8098;
    border-radius: 50%;
    margin-top: 11.5px;
  `
);
const JobPosition = styled.p(
  (props) => css`
    @media (min-width: 375px) {
      color: ${props.circle === "47" ? "#19202D" : "#FFF"};
      font-family: "Kumbh Sans";
      font-size: 20px;
      font-weight: 700;
      margin: 11px 0 12px;
    }
  `
);
const JobPositionFooter = styled.p(
  (props) => css`
    @media (min-width: 375px) {
      color: ${props.circle === "47" ? "#19202D" : "#FFF"};
      font-family: "Kumbh Sans";
      font-size: 20px;
      font-weight: 700;
    }
  `
);
const CompanyLocation = styled.p(
  () => css`
    color: rgb(89, 100, 224);
    font-family: "Kumbh Sans";
    font-size: 14px;
    font-weight: 700;
  `
);
const ApplyNowButton = styled.button(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      height: 48px;
      border-radius: 5px;
      background-color: rgba(89, 100, 224, 0.8);
      color: #fff;
      border: unset;
      font-size: 16px;
      font-family: "Kumbh Sans";
      font-weight: 700;
    }

    @media (min-width: 768px) {
      width: 141px;
    }
  `
);
const JobDetailsText = styled.p(
  (props) => css`
    @media (min-width: 375px) {
      color: ${props.circle === "47" ? "#6E8098" : "#9DAEC2"};
      font-family: "Kumbh Sans";
      line-height: 26px;
    }
  `
);
const JobDetailsRequirementsTitle = styled.p(
  (props) => css`
    @media (min-width: 375px) {
      color: ${props.circle === "47" ? "#19202D" : "#FFF"};
      font-family: "Kumbh Sans";
      font-size: 20px;
      font-weight: 700;
      margin: 40px 0 28px;
    }
  `
);
const JobDetailsRoleTitle = styled(JobDetailsRequirementsTitle)`
  margin: 32px 0 28px;
`;
const JobDetailsListDiv = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 32px;
    }
  `
);
const JobDetailsUnnumberedList = styled.ul(
  () => css`
    @media (min-width: 375px) {
      width: 90%;
      margin-left: 12px;
    }
    @media (min-width: 375px) {
      margin-left: 16px;
    }
  `
);
const JobDetailsNumberedList = styled.ol(
  () => css`
    @media (min-width: 375px) {
      width: 90%;
      margin-left: 12px;
    }
    @media (min-width: 375px) {
      margin-left: 16px;
    }
  `
);
const ListItem = styled.li(
  (props) => css`
    max-width: 100%;
    word-wrap: break-word;
    word-break: break-all;
    font-family: "Kumbh Sans";
    line-height: 26px;
    margin-bottom: 8px;
    color: ${props.circle === "47" ? "#6E8098" : "#9DAEC2"};
    &::marker {
      color: rgba(89, 100, 224, 0.8);
      font-weight: 700;
    }
  `
);
const FooterContainer = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 100%;
      height: 96px;
      padding: 24px;
      background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
      border-radius: 6px 6px 0 0;
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
    }
  `
);
const PositionDiv = styled.div(
  () => css`
    @media (min-width: 375px) {
      display: none;
    }
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: fit-content;
      height: 100%;
      gap: 12px;
    }
  `
);
