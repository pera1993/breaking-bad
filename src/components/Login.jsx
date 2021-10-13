import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import StyledForm from "./Styled Components/StyledForm"
import StyledInput from "./Styled Components/StyledInput"
import { getAllUsers } from "../service"
import { formDivStyle, linkStyle } from "./Styled Components/styleVariables"

// TREBACE MI STYLED FORM da stilizujem sve lepo umesto da ubacujem
// style u otvarajuci tag
const Login = ({ setUser }) => {
    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)

    const history = useHistory()
    //dole history.push(`/characters`) push govori na koju putanju da se ode

    return (
        <div style={formDivStyle}>
            <StyledForm
                onSubmit={(e) => {
                    e.preventDefault()
                    getAllUsers().then(res => {
                        let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)

                        if (user) {
                            setUser(user)
                            history.push(`/characters`)


                        } else {
                            // kako da mi ocisti iz inputa ako je pogresno upisano
                            console.log(`Neispravni podaci`, `aaaa`)
                            

                        }
                    })
                }} >
                <h2>LOGIN</h2>
                <StyledInput type="text" placeholder="Email or username..."
                    onChange={(e) => { setUsername(e.target.value) }} /><br />
                <StyledInput type="password" placeholder="Password..."
                    onChange={(e) => { setPassword(e.target.value) }} /><br />
                <StyledInput type="submit" value="Login" /><br />
                <div >
                    <Link style={linkStyle} to="/register">If you`re not registered, click here!</Link>
                </div>
            </StyledForm>
        </div>
    )
}

export default Login