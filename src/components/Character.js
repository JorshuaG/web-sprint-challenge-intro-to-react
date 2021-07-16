// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: #fce300;
`;

function Character({ character }) {
  const [active, setActive] = useState(false);

  return (
    <StyledCharacter>
      <p>{character.name}</p>
      <button onClick={() => setActive(!active)}>Details</button>

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
