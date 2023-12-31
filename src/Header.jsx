import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ click, circle }) => {
  return (
    <HeaderContainer>
      {/* Header Background  */}
      <HeaderBackground>
        {/* Left  */}
        <HeaderBackgroundSvgLeft
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 355 108"
        >
          <SvgPath
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-71.4609 45.7412C-74.5785 13.9487 -41.7496 -9.03826 -12.9407 4.76502L331.22 169.663C359.511 183.219 362.718 222.23 337.02 240.224L30.1041 455.129C4.4064 473.122 -31.1552 456.766 -34.2168 425.545L-71.4609 45.7412Z"
            fill="white"
          />
        </HeaderBackgroundSvgLeft>

        {/* Middle */}
        <HeaderBackgroundSvgMiddle
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 355 108"
        >
          <SvgPath
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-71.4609 45.7412C-74.5785 13.9487 -41.7496 -9.03826 -12.9407 4.76502L331.22 169.663C359.511 183.219 362.718 222.23 337.02 240.224L30.1041 455.129C4.4064 473.122 -31.1552 456.766 -34.2168 425.545L-71.4609 45.7412Z"
            fill="white"
          />
        </HeaderBackgroundSvgMiddle>

        {/* Right  */}
        <HeaderBackgroundSvgRight
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 121 96"
        >
          <SvgPath
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.539125 -321.259C-2.57848 -353.051 30.2504 -376.038 59.0593 -362.235L403.22 -197.337C431.511 -183.781 434.718 -144.77 409.02 -126.776L102.104 88.1286C76.4064 106.122 40.8448 89.766 37.7832 58.5447L0.539125 -321.259Z"
          />
        </HeaderBackgroundSvgRight>
      </HeaderBackground>

      {/* Header  */}
      <HeaderDiv>
        {/* Title  */}
        <Link to="/">
          <HeaderTitle>devjobs</HeaderTitle>
        </Link>

        {/* Day & Night Changer Container  */}
        <DayNightContainer>
          <DayNightSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 112 24"
            fill="none"
          >
            <SvgRect x="36" width="48" height="24" rx="12" />
            <SvgCircle onClick={click} cx={circle} cy="12" r="7" />
            <SvgPath
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 5.36491C9.67033 5.36491 9.38775 5.07034 9.38775 4.72667V2.83649C9.38775 2.49282 9.67033 2.19824 10 2.19824C10.3297 2.19824 10.6122 2.49282 10.6122 2.83649V4.72667C10.6122 5.07034 10.3297 5.36491 10 5.36491ZM6.40172 7.95241C7.31472 7.10241 8.60365 6.55241 10 6.55241C11.3963 6.55241 12.6853 7.07741 13.5983 7.95241C14.5113 8.80241 15.102 10.0024 15.102 11.3024C15.102 12.6024 14.5113 13.8024 13.5983 14.6524C12.6853 15.5024 11.3963 16.0524 10 16.0524C8.60365 16.0524 7.31472 15.5274 6.40172 14.6524C5.48872 13.8024 4.89796 12.6024 4.89796 11.3024C4.89796 10.0024 5.46187 8.80241 6.40172 7.95241ZM3.0593 5.71033L4.54178 7.14803C4.83827 7.40943 5.26954 7.40943 5.51213 7.14803C5.78167 6.88663 5.78167 6.46839 5.51213 6.20699L4.02965 4.76929C3.76011 4.50789 3.32884 4.50789 3.0593 4.76929C2.78976 5.03069 2.78976 5.44893 3.0593 5.71033ZM0.658124 10.9066H2.60718C2.96156 10.9066 3.26531 11.1806 3.26531 11.5003C3.26531 11.82 2.96156 12.0941 2.60718 12.0941H0.658124C0.303749 12.0941 0 11.82 0 11.5003C0 11.1806 0.303749 10.9066 0.658124 10.9066ZM5.51213 15.8526C5.24259 15.5912 4.81132 15.5912 4.54178 15.8526L3.0593 17.2903C2.78976 17.5517 2.78976 17.97 3.0593 18.2314C3.32884 18.4928 3.76011 18.4928 4.02965 18.2314L5.51213 16.7937C5.78167 16.5323 5.78167 16.114 5.51213 15.8526ZM10 17.6357C10.3297 17.6357 10.6122 17.9303 10.6122 18.274V20.1642C10.6122 20.5078 10.3297 20.8024 10 20.8024C9.67033 20.8024 9.38775 20.5078 9.38775 20.1642V18.274C9.38775 17.9303 9.67033 17.6357 10 17.6357ZM16.9407 17.2903L15.4582 15.8526C15.1617 15.5912 14.7305 15.5912 14.4879 15.8526C14.2183 16.114 14.2183 16.5323 14.4879 16.7937L15.9704 18.2314C16.2399 18.4928 16.6712 18.4928 16.9407 18.2314C17.2102 17.97 17.2102 17.5517 16.9407 17.2903ZM16.7347 11.5003C16.7347 11.1806 17.0384 10.9066 17.3928 10.9066H19.3419C19.6963 10.9066 20 11.1806 20 11.5003C20 11.82 19.6963 12.0941 19.3419 12.0941H17.3928C17.0384 12.0941 16.7347 11.82 16.7347 11.5003ZM14.4879 7.14803C14.7574 7.40943 15.1887 7.40943 15.4582 7.14803L16.9407 5.71033C17.2102 5.44893 17.2102 5.03069 16.9407 4.76929C16.6712 4.50789 16.2399 4.50789 15.9704 4.76929L14.4879 6.20699C14.2183 6.46839 14.2183 6.88663 14.4879 7.14803Z"
              fill="white"
            />
            <SvgPath
              fillRule="evenodd"
              clipRule="evenodd"
              d="M106 6C104.358 6 102.842 6.69474 101.768 7.76842C100.663 8.84211 100 10.3579 100 12C100 13.6421 100.695 15.1579 101.768 16.2316C102.842 17.3368 104.358 18 106 18C107.642 18 109.158 17.3053 110.232 16.2316C111.305 15.1579 112 13.6421 112 12C112 11.8147 111.991 11.631 111.974 11.4494C111.867 12.369 111.438 13.2044 110.821 13.8211C110.105 14.5368 109.095 15 108 15C106.905 15 105.895 14.5579 105.179 13.8211C104.463 13.1053 104 12.0947 104 11C104 9.90526 104.442 8.89474 105.179 8.17895C105.895 7.46316 106.905 7 108 7C108.716 7 109.397 7.18933 109.982 7.52669C108.929 6.56718 107.519 6 106 6Z"
              fill="white"
            />
          </DayNightSvg>
        </DayNightContainer>
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.div(
  () => css`
    width: 100%;
    @media (min-width: 375px) {
      margin-bottom: 32px;
    }

    @media (min-width: 768px) {
      margin-bottom: 46px;
    }

    @media (min-width: 1440px) {
      margin-bottom: 44px;
    }
  `
);
const HeaderBackground = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      height: 145px;
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      background-color: #5964e0;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      width: 100%;
      height: 160px;
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      background-color: #5964e0;
      overflow: hidden;
      border-radius: 0px 0px 0px 100px;
    }
  `
);
const HeaderBackgroundSvgRight = styled.svg(
  () => css`
    @media (min-width: 375px) {
      width: 515px;
      height: 457px;
      transform: rotate(-35deg);
      fill: #fff;
      opacity: 0.0814;
      position: absolute;
      top: -280px;
      right: -180px;
    }

    @media (min-width: 768px) {
      width: 515px;
      height: 457px;
      transform: rotate(-10deg);
      fill: #fff;
      opacity: 0.0814;
      position: absolute;
      top: -330px;
      right: 170px;
    }
    
    @media (min-width: 1440px) {
      top: -200px;
      right: 100px;
      border-radius: 50%;
      transform: rotate(0deg);
    }
  `
);
const HeaderBackgroundSvgLeft = styled(HeaderBackgroundSvgRight)`
  width: 355px;
  height: 120px;
  transform: rotate(5deg);
  top: 50px;
  left: -30px;
`;
const HeaderBackgroundSvgMiddle = styled(HeaderBackgroundSvgLeft)`
  @media(min-width: 375px) {
    display: none;
  }
  @media(min-width: 768px) {
    display: none;
  }
  @media(min-width: 1440px) {
    display: block;
    top: -250px;
    left: 60px;
    width: 500px;
    height: 200px;
    transform: rotate(260deg);
    border-radius: 50%;
}
`
const SvgPath = styled.path(
  () => css`
    width: max-content;
  `
);
const HeaderDiv = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;
    }
  `
);
const HeaderTitle = styled.p(
  () => css`
    @media (min-width: 375px) {
      color: #fff;
      font-size: 32px;
      font-family: "kumbh sans";
      font-weight: 700;
    }
  `
);
const DayNightContainer = styled.div(
  () => css`
    @media (min-width: 375px) {
      display: flex;
      gap: 10px;
    }
  `
);
const DayNightSvg = styled.svg(
  () => css`
    width: 112px;
    height: 24px;
  `
);
const SvgRect = styled.rect(
  () => css`
    fill: white;
  `
);
const SvgCircle = styled.circle(
  () => css`
    fill: #5964e0;
    @media (min-width: 1440px) {
      &:hover {
        fill: #939BF4;
        cursor: pointer;
      }
    }
  `
);
