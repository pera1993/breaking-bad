// ovde cu da pravim div za jednog lika
// trebace mi stilizovane komponente
// al kako da uradim flip card tako

import StyledCharacter from "./Styled Components/StyledCharacter"

// treba da mi u Likovi.jsx prosledi ceo objekat character

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
    return (
            <StyledCharacter imgLink={character.img}>
                
               
                
                
                <h2 style={{color: `white`, textAlign: `center` }}>{character.name}</h2>
               
            </StyledCharacter>
        
    )
}
// https://www.npmjs.com/package/react-card-flip
// link za FlipCard foru, da stavim na prednju stranu sliku
// a pozadi informacije
export default Lik