import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./index.js";
import Character from "./components/Character";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "Tourney", cursive;
`;

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>

      {data.map((character) => (
        <Character
          character={character}
          masterData={data}
          name={data.name}
          height={data.height}
          eye_color={data.eye_color}
          gender={data.gender}
          image={data.homeworld}
        />
      ))}
    </StyledApp>
  );
};

export default App;
