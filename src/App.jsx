import { useState } from "react";
import styled, { css } from "styled-components";
import Home from "./Home";
import JobDetails from "./JobDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [circle, setCircle] = useState("47");

  // Day & Night Click Function
  const handleCircleClick = () => {
    if (circle === "47") {
      setCircle("73");
    } else {
      setCircle("47");
    }
  };

  return (
    <Router>
      <AppDiv circle={circle}>
        <Routes>
          <Route
            path="/"
            element={<Home click={() => handleCircleClick()} circle={circle} />}
          />
          <Route
            path="/JobDetails/:id"
            element={<JobDetails click={() => handleCircleClick()} circle={circle} />}
          />
        </Routes>
      </AppDiv>
    </Router>
  );
}

export default App;

// Styled Components
const AppDiv = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      background-color: ${props.circle === "47" ? "#F4F6F8" : "#121721"};
    }
  `
);
