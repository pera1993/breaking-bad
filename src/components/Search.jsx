import React from "react";
import StyledSearch from "./Styled Components/StyledSearch";
import { btnLogout, searchStyle } from "./Styled Components/styleVariables";

const Search = ({ setSearchQ, setRandom }) => {

    return (
        <StyledSearch >
            <input style={searchStyle} placeholder="Find character by name..." type="text"
                onChange={(event) => {
                    setSearchQ(event.target.value)
                    console.log(event.target.value)
                }}
            /><br/>
            <div>
            <button style={btnLogout} onClick={() => {
                let randomChar = Math.round(Math.random() * 61 + 1)
                console.log(randomChar)
                setRandom(randomChar)
            }}>Random</button>
            <button style={btnLogout} onClick={() => {
                setRandom(null)
            }}>Back to all</button>
            </div>
       
        </StyledSearch>
    )
}
export default Search