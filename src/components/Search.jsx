import React from "react";
// import bootstrap from "../../node_modules/bootstrap/dist/css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import StyledSearch from "./Styled Components/StyledSearch";

const Search = ({setSearchQ}) => {

    return (
        <StyledSearch >
            <input style={{width: "50%"}} placeholder="search for countries by name" className="form-control" type="text"
            onChange={(event) => {
                setSearchQ(event.target.value)
                console.log(event.target.value)
                }}
            />
        </StyledSearch>
    )
}
export default Search