import React from "react";
import StyledSearch from "./Styled Components/StyledSearch";
import { searchStyle } from "./Styled Components/styleVariables";

const Search = ({setSearchQ, setRandom}) => {

    return (
        <StyledSearch >
            <input style={searchStyle} placeholder="Find character by name..."  type="text"
            onChange={(event) => {
                setSearchQ(event.target.value)
                console.log(event.target.value)
                }}
            />
            <button onClick={()=> {
                let randomChar = Math.round(Math.random() * 61)
                console.log(randomChar)
                setRandom(randomChar)}}>Random</button>
        </StyledSearch>
    )
}
export default Search