import { Redirect } from "react-router"

const Home = ({ loggedIn }) => {

    return loggedIn ? <Redirect to="/characters" /> : <Redirect to="/login" />


}

export default Home