import axios from "axios"

const getAllUsers = () => axios.get(`http://localhost:3005/users`)

const registerUser = (user) => axios.post(`http://localhost:3005/users`, user)

const getAllCharacters = () => axios.get(`https://www.breakingbadapi.com/api/characters`)

export { getAllUsers, registerUser, getAllCharacters }