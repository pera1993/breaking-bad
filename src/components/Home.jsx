import { Redirect } from "react-router"
// radim kao Andjela u pocetku, moram da razmislim sta da mi bude Home
// tj kako da izgleda
// treba nam u propsu LoggedIn da prikazemo razlicito u zavisnosti od toga
//dal je user ulogovan ili ne
//takodje treba i setUser, da na dugme Izloguj se mozemo da setujemo prazno
//kao da se izlogovao korisnik

//hocu ako je ulogovan da prebaci na Characters a ako nije da prebaci na Login
// za to postoji Redirect komponenta, mora da se importuje
const Home = ({ loggedIn }) => {
    return loggedIn ? <Redirect to="/characters" /> : <Redirect to="/login" />


}

export default Home