import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import StyledForm from "./Styled Components/StyledForm"
import StyledInput from "./Styled Components/StyledInput"
import { registerUser } from "../service"

// TREBACE MI STYLED FORM da stilizujem sve lepo umesto da ubacujem
// style u otvarajuci tag

const Register = ({ setUser }) => {

    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)
    const [firstName, setFirstName] = useState(``)
    const [lastName, setLastName] = useState(``)
    const [email, setEmail] = useState(``)
    const [repeatPass, setRepeatPass] = useState(``)

    const history = useHistory()
    //dole history.push(`/characters`) push govori na koju putanju da se ode

    return (
        <div style={{
            width: `100%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', background: "transparent"
        }}>
            <StyledForm
                onSubmit={(e) => {
                    e.preventDefault()
                    // prvo treba validacija
                    // pa se pravi user
                    if (password === repeatPass) {
                        let newUser = { first_name: firstName, last_name: lastName, email: email, username: username, password: password }
                        registerUser(newUser).then(res => {
                            console.log(res.data)
                            history.push(`/characters`)
                        })
                    } else {
                        console.log(`Nije tacno ponovljena lozinka`)
                    }

                }} >
                <h2>REGISTER</h2>
                <StyledInput type="text" placeholder="First name.."
                    onChange={(e) => { setFirstName(e.target.value) }} /><br />
                <StyledInput type="text" placeholder="Last name..."
                    onChange={(e) => { setLastName(e.target.value) }} /><br />
                <StyledInput type="email" placeholder="Email..."
                    onChange={(e) => { setEmail(e.target.value) }} /><br />
                <StyledInput type="text" placeholder="Username..."
                    onChange={(e) => { setUsername(e.target.value) }} /><br />
                <StyledInput type="password" placeholder="Password..."
                    onChange={(e) => { setPassword(e.target.value) }} /><br />
                <StyledInput type="password" placeholder="Repeat password"
                    onChange={(e) => { setRepeatPass(e.target.value) }} /><br />
                <StyledInput type="submit" value="Login" /><br />
                <div>
                    <Link to="/register"><p>If you`re not registered, click here!</p></Link>
                </div>
            </StyledForm>


        </div>
    )
}

export default Register