import styled from "styled-components"
// props
const StyledCharacter = styled.div`
    width: 250px;
    height: 400px;
    background-color: white;
    border: 2px solid black
    border-radius: 5px;
    margin: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({ imgLink }) => imgLink});
`

const StyledBackside = styled.div`
position: relative;
    width: 250px;
    height: 400px;
    background-color: white;
    border: 2px solid black
    border-radius: 5px;
    margin: 20px;
    background-position: center;
    font-size: 25px;
    background-color:  ;
`
const StyledButton = styled.button`
margin-left: 40px;
position: absolute;
bottom: 2%;
font-size: 20px;

`

// 
export { StyledCharacter, StyledBackside, StyledButton }