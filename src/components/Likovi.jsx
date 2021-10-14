import { useState, useEffect } from "react"
import { Redirect } from "react-router"
import { getAllCharacters } from "../service"
import Lik from "./Lik"
import Search from "./Search"
import StyledGrid from "./Styled Components/StyledGrid"


const Likovi = ({ loggedIn }) => {
    const [characters, setCharacters] = useState([])
    const [searchQ, setSearchQ] = useState(``)
    const [random, setRandom] = useState(null)

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
            <Search setSearchQ={setSearchQ} setRandom={setRandom}/>
            <StyledGrid za grid>
            { random ? <Lik key={characters[random - 1].char_id} character={characters[random - 1]} /> : 
            characters.filter(char => char.name.toLowerCase().includes(searchQ)).map(character => <Lik key={character.char_id} character={character} />)}
            </StyledGrid>
        </div>
        :
        <Redirect to="/login" />

}

export default Likovi