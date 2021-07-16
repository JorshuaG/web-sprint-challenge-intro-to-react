// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: #fce300;
`;

const StyledButton = styled.button`
  box-shadow: 0 8px 16px 0 rgba(252, 227, 0, 0.2),
    0 6px 20px 0 rgba(252, 227, 0, 0.19);
  background-color: black;
  color: #fce300;
`;

function Character({ character }) {
  const [active, setActive] = useState(false);

  return (
    <StyledCharacter>
      <p>{character.name}</p>
      <StyledButton onClick={() => setActive(!active)}>Details</StyledButton>

      {active && (
        <div>
          <p>Name: {character.name}</p>
          <p>Height: {character.height}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Gender: {character.gender}</p>
        </div>
      )}
    </StyledCharacter>
  );

  //   const characterListArr = props.masterData.map((character) => (
  //     <div>
  //       {character.name}
  //       <button>Details</button>
  //     </div>
  //   ));
  //   console.log(characterListArr);
  //   return characterListArr;
}

export default Character;
