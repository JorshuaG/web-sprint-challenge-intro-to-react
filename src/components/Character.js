// Write your Character component here
import React, { useState } from "react";

function Character({ character }) {
  const [active, setActive] = useState(false);

  return (
    <div>
      {character.name}
      <button onClick={() => setActive(!active)}>Details</button>

      {active && (
        <div>
          <p>Name: {character.name}</p>
          <p>Height: {character.height}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Gender: {character.gender}</p>
        </div>
      )}
    </div>
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
