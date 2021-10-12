import { useState, useEffect } from "react"
import { Redirect } from "react-router"
import { getAllCharacters } from "../service"
import Lik from "./Lik"
import Search from "./Search"
import StyledGrid from "./Styled Components/StyledGrid"

// hocu i search da ubacim

const Likovi = ({ loggedIn }) => {
    const [characters, setCharacters] = useState([])
    const [searchQ, setSearchQ] = useState(``)

    useEffect(() => {
        let mounted = true

        if (!loggedIn) return
        getAllCharacters().then(res => {
            console.log(res.data)
            if (mounted)
                setCharacters(res.data)
        })

        return () => { mounted = false }
    }, [loggedIn])
    return loggedIn ?
        <div>
            <Search setSearchQ={setSearchQ}/>
            <StyledGrid za grid>
            {characters.map(character => <Lik key={character.char_id} character={character} />)}
            </StyledGrid>
        </div>
        :
        <Redirect to="/login" />

}

export default Likovi