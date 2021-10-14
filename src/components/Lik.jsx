
import { StyledCharacter, StyledBackside, StyledButton } from "./Styled Components/StyledCharacter"
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
import { styleH2 } from "./Styled Components/styleVariables";

// { Jedan objekat character
//     char_id: 1,
//     name: "Walter White",
//     birthday: "09-07-1958",
//     occupation: [
//         "High School Chemistry Teacher",
//         "Meth King Pin"
//     ],
//     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
//     status: "Deceased",
//     appearance: [1, 2, 3, 4, 5],
//     nickname: "Heisenberg",
//     portrayed: "Bryan Cranston"
// }

// slika cover
// kako da prosledim link slike u StyledCharacter da ga stavi u background image
const Lik = ({ character }) => {

    const [isFlipped, setIsFlipped] = useState(false)

    return (

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <StyledCharacter imgLink={character.img} onClick={() => { setIsFlipped(prev => !prev) }}>
                <h2 style={styleH2}>{character.name}</h2>
            </StyledCharacter>
            <StyledBackside onClick={() => { setIsFlipped(prev => !prev) }}>
                <p>Nickname: {character.nickname}</p>
                <p>Birthday: {character.birthday}</p>
                <p>Occupation: {character.occupation[0]}</p>
                <p>Appeared in seasons: {character.appearance.join(", ")}</p>
                <p>Actor: {character.portrayed}</p>
                <StyledButton onClick={() => { }}>Add to favorites 	&#9825;
                </StyledButton>
            </StyledBackside>

        </ReactCardFlip>

    )
}
// https://www.npmjs.com/package/react-card-flip
// link za FlipCard foru, da stavim na prednju stranu sliku
// a pozadi informacije
export default Lik