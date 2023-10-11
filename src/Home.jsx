import styled, { css } from "styled-components";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import vacancies from './data.json'

const Home = ({ click, circle }) => {
    const filterDiv = useRef(null)
    const [error, setError] = useState(false)
    const [titleInputValue, setTitleInputValue] = useState('')
    const [locationInputValue, setLocationInputValue] = useState('')
    const [fullTimeCheckbox, setFullTimeCheckbox] = useState(false)
    const [jobCount, setJobCount] = useState(12)
    const [filterComponentRender, setFilterComponentRender] = useState(false)
    const [loadMoreRender, setLoadMoreRender] = useState(true)
    const [jobList, setJobList] = useState([])
    
    const searchLocationClick = () => {
      let filtered;
      if(locationInputValue !== '') {
        if(fullTimeCheckbox) {
          filtered = vacancies.filter((job, index) => {
            return job.location.toLowerCase().indexOf(locationInputValue.toLowerCase()) !== -1 && job.contract === 'Full Time' && index < jobCount
          })
          setLoadMoreRender(false)
        } else {
          filtered = vacancies.filter((job, index) => {
            return job.location.toLowerCase().indexOf(locationInputValue.toLowerCase()) !== -1 && index < jobCount
          })
          setLoadMoreRender(false)
        }
      } else {
        if(fullTimeCheckbox) {
          filtered = vacancies.filter((job, index) => {
            return job.contract === 'Full Time' && index < jobCount
          })
          setLoadMoreRender(false)
        } else {
          filtered = vacancies.filter((job, index) => {
            return index < jobCount
          })
          setLoadMoreRender(true)
        }
      }
      setJobList(filtered)
      setFilterComponentRender(false)





    }

// console.log(titleInputValue)
// console.log(locationInputValue)


const searchTitleClick = () => {
  if(titleInputValue == '') {
    const filtered = vacancies.filter((job, index) => {
      return index < jobCount
    })
    setJobList(filtered)
  } else {
    const filtered = vacancies.filter((job, index) => {
      return job.position.toLowerCase().indexOf(titleInputValue.toLowerCase()) !== -1 && index < jobCount
    })
    setJobList(filtered)
  }
}


// Filter Component Click Function 
const filterHandle = (e) => {
  if(e.target === filterDiv.current) {
    setFilterComponentRender(false)
  }
}




// Job Count 
useEffect(() => {
  const jobs = vacancies.filter((job, index) => index < jobCount)
  setJobList(jobs)

  if(jobCount > 12) {
    setLoadMoreRender(false)
  }
}, [jobCount])

// Job List 
useEffect(() => {
  if(jobList.length == 0) {
    setLoadMoreRender(false)
    setError(true)
  } else if(jobList.length > 0 && jobList.length < 12) {
    setLoadMoreRender(false)
    setError(false)
  } else if(jobList.length === 12) {
    setLoadMoreRender(true)
    setError(false)
  } else if(jobList.length == 15) {
    setLoadMoreRender(false)
    setError(false)
  }
}, [jobList])



  return (
    <HomeContainer>
      {/* Header  */}
      <Header click={click} circle={circle} />

      {/* Filter  */}
      <FilterContainer circle={circle}>
        {/* Input Filter By Title */}
        <InputFilterByTitle
          value={titleInputValue}
          onChange={(e) => setTitleInputValue(e.target.value)}
          type="text"
          placeholder="Filter by title…"
          circle={circle}
        />
        {/* Search Container  */}
        <SearchContainer>
          {/* Filter Display Svg */}
          <Svg
            onClick={() => setFilterComponentRender(!filterComponentRender)}
            circle={circle}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <SvgPath d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z" />
          </Svg>

          {/* Search Button  */}
          <SvgSearch xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" onClick={() => searchTitleClick()}>
            <SvgRect width="48" height="48" rx="5"/>
            <SvgPath
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z"
              fill="white"
            />
          </SvgSearch>
        </SearchContainer>
      </FilterContainer>

        {/* Filter Component */}
        <FilterComponent filtercomponentrender={filterComponentRender}
         ref={filterDiv} onClick={(e) => filterHandle(e)}>
            <FilterComponenentContainer circle={circle}>
                {/* Input Filter By Location */}
                <InputFilterByLocationDiv>
                    <SvgLocation xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 24" fill="none">
                        <SvgPath fillRule="evenodd" clipRule="evenodd" d="M8.44772 0C10.6804 0 12.7797 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.44772 23.894L1.75059 14.2119C-0.747974 10.8781 -0.384871 5.37556 2.53695 2.45105C4.11577 0.870546 6.21462 0 8.44772 0ZM5.47359 8.29091C5.47359 9.97484 6.84274 11.3455 8.52487 11.3455C10.207 11.3455 11.5762 9.97484 11.5762 8.29091C11.5762 6.60698 10.207 5.23636 8.52487 5.23636C6.84274 5.23636 5.47359 6.60698 5.47359 8.29091Z" fill="#5964E0"/>
                    </SvgLocation>
                    <InputFilterByLocation
                        value={locationInputValue}
                        onChange={(e) => setLocationInputValue(e.target.value)}
                        type="text"
                        placeholder="Filter by location…"
                        circle={circle}/>
                </InputFilterByLocationDiv>
                {/* Input Border Bottom  */}
                <InputBorderBottom/>

                <FilterMainDiv>
                    {/* Full Time Checkbox */}
                    <CheckboxDiv>
                        <FullTimeCheckbox type="checkbox" onChange={(e) => setFullTimeCheckbox(e.target.checked)}/>
                        <FullTimeCheckboxLabel circle={circle}>Full Time Only</FullTimeCheckboxLabel>
                    </CheckboxDiv>

                    {/* Search Button  */}
                    <Search onClick={() => searchLocationClick()} circle={circle}>
                        <SearchButtonText>Search</SearchButtonText>
                    </Search>
                </FilterMainDiv>
            </FilterComponenentContainer>
        </FilterComponent>

        {/* Main  */}
        <Main>
            <JobListContainer circle={circle}>
              {jobList.length !== 0 &&
              
              jobList.map((job, index) => {
                if(index < jobCount) {
                  return (
                    <Link to={'/JobDetails/' + job.id} key={job.id}>
                    <JobContainer circle={circle}>
                        <CompanyLogo backgroundcolor={job.logoBackground}>
                          <CompanyLogoSvg src={job.logo}/>
                        </CompanyLogo>
                        <JobTimeContainer>
                            {/* Job Time  */}
                            <JobTime>{job.postedAt}</JobTime>
                            <Period/>
                            <JobTime>{job.contract}</JobTime>
                        </JobTimeContainer>
        
                        {/* Job Position  */}
                        <JobPosition circle={circle}>{job.position}</JobPosition>
        
                        {/* Company Name */}
                        <CompanyName>{job.company}</CompanyName>
        
                        {/* Company Location  */}
                        <CompanyLocation>{job.location}</CompanyLocation>
                    </JobContainer>
                    </Link>
                  )
                }
              })}

              {/* Error Message */}
              {error &&
                <ErrorMessage>
                  Not Jobs Found
                </ErrorMessage>
              }

              {/* Load More Button */}
              <Footer>
                {loadMoreRender &&
                <LoadmoreButton onClick={() => setJobCount(jobCount + 6)}>
                      Load More
                </LoadmoreButton>}
              </Footer>
            </JobListContainer>
        </Main>
    </HomeContainer>
  );
};

export default Home;

// Styled Components
const HomeContainer = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 100%;
      height: max-content;
      padding: 32px 24px 62px;
    }
  `
);
const Svg = styled.svg(
  (props) => css`
    width: 20px;
    height: 20px;
    fill: ${props.circle === "47" ? "#6E8098" : "#FFF"};
  `
);
const SvgSearch = styled.svg(
  () => css`
    width: 48px;
    height: 48px;
  `
);
const SvgLocation = styled.svg(
    () => css`
        width: 17px; 
        height: 24px;
    `
)
const SvgPath = styled.path(
  () => css`
    width: max-content;
  `
);

const SvgRect = styled.rect(
  () => css`
    fill: #5964E0;
  `
);
// const SvgCircle = styled.circle(() => css``);
const FilterContainer = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 100%;
      height: 80px;
      padding: 16px 16px 16px 24px;
      background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
      position: relative;
      z-index: 1;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media (min-width: 768px) {
      display: none;
    }
  `
);
const InputFilterByTitle = styled.input(
  (props) => css`
    @media (min-width: 375px) {
      width: 60%;
      background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
      color: ${props.circle === "47" ? "#19202D" : "#FFF"};
      font-family: "Kumbh Sans";
      font-size: 16px;
      border: none;
      outline: none;
      &::placeholder {
        opacity: 0.5;
        color: ${props.circle === "47" ? "#19202D" : "#FFF"};
        font-family: "Kumbh Sans";
        font-size: 16px;
      }
    }
  `
);
const InputFilterByLocation = styled(InputFilterByTitle)`
    width: 100%;
`
const SearchContainer = styled.div(
  () => css`
    @media (min-width: 375px) {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  `
);
const FilterComponent = styled.div(
    (props) => css`
        width: 100vw;
        height: 100%;
        display: ${props.filtercomponentrender? 'flex': 'none'};
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
        overflow: hidden;
        padding: 0 24px;
        
    `
)
const FilterComponenentContainer = styled.div(
    (props) => css`
        width: 100%;
        height: 220px;
        border-radius: 6px;
        background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
    `
)
const InputFilterByLocationDiv = styled.div(
    () => css`
        width: 100%;
        height: 72px;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 24px;
    `
)
const InputBorderBottom = styled.hr(
    () => css`
        width: 100%;
        height: 1px;
        opacity: 0.2;
        border: unset;
        background-color: #6E8098;
    `
)
const FilterMainDiv = styled.div(
    () => css`
        width: 100%;
        height: 67%;
        padding: 0 24px;
    `
)

const CheckboxDiv = styled.div(
    () => css`
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;
        z-index: 2;
        padding: 24px;
    `
)
const FullTimeCheckbox = styled.input(
    () => css`
        width: 24px;
        height: 24px;
        accent-color: #5964E0;
        outline: none;
        border: unset;
    `
)
const FullTimeCheckboxLabel = styled.p(
    (props) => css`
        color: ${props.circle === "47" ? "#19202D" : "#FFF"};
        font-family: 'Kumbh Sans';
        font-weight: 700;
    `
)
const Search = styled.div(
    () => css`
        width: 100%;
        height: 48px;
        border-radius: 5px;
        background-color: #5964E0;
        display: flex;
        align-items: center;
        justify-content: center;
    `
)
const SearchButtonText = styled.p(
    () => css`
    @media (min-width: 375px) {
        color: #FFF;
        font-family: 'Kumbh Sans';
        font-weight: 700;
    }
    `
)
const Main = styled.div(
    () => css`
        @media (min-width: 375px) {
            width: 100%;
            overflow-x: hidden;
        }
    `
)
const JobListContainer = styled.div(
    (props) => css`
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 57px;
        margin-top: 57px;
        justify-content: center;
        padding: 0 24px 64px;
        position: absolute;
        top: 185px;
        left: 0;
        background-color: ${props.circle === "47" ? "#F4F6F8" : "#121721"};
    `
)
const JobContainer = styled.div(
    (props) => css`
        @media (min-width: 375px) {
            width: 325px;
            height: 245px;
            background-color: ${props.circle === "47" ? "#FFF" : "#19202D"};
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0 32px 36px;
        }
    `
)
const CompanyLogo = styled.div(
    (props) => css`
        width: 50px;
        min-height: 50px;
        background-color: ${props.backgroundcolor};
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -25px;
    `
)
const CompanyLogoSvg = styled.img(
  () => css`
    @media (min-width: 375px) {
      width: max-content;
    }
  `
)
const JobTimeContainer = styled.div(
    () => css`
        display: flex;
        gap: 12px;
    `
)
const JobTime = styled.p(
    () => css`
        color: #6E8098;
        font-family: 'Kumbh Sans';
    `
)
const Period = styled.div(
    () => css`
        width: 4px;
        height: 4px;
        background-color: #6E8098;
        border-radius: 50%;
        margin-top: 11.5px;
    `
)
const JobPosition = styled.p(
    (props) => css`
        @media (min-width: 375px){
            color: ${props.circle === "47" ? "#19202D" : "#FFF"};
            font-family: 'Kumbh Sans';
            font-size: 20px;
            font-weight: 700;
            margin-top: 16px;
        }
        `
)
const CompanyName = styled(JobTime)`
    margin-top: 16px;
`
const CompanyLocation = styled.p(
    () => css`
        color: #5964E0;
        font-family: 'Kumbh Sans';
        font-size: 14px;
        font-weight: 700;
        margin-top: 44px;
    `
)
const LoadmoreButton = styled.div(
  () => css`
    @media (min-width: 375px) {
      width: 141px;
      height: 48px;
      background-color: rgba(89, 100, 224, 0.8);
      color: #FFF;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Kumbh Sans';
      font-weight: 700;
      border-radius: 6px;
      margin-top: -25px;
    }
  `
)
const Footer = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
`
)
const ErrorMessage = styled.p(
  () => css`
    @media (min-width: 375px) {
      font-size: 28px;
      font-family: 'Kumbh Sans';
      font-weight: 700;
      color: rgba(89, 100, 224, 0.8);
    }
  `
)
