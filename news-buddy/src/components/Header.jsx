import { Link } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import { useContext } from "react"

function Header() {
    const { loggedInUser } = useContext(UserContext)

    return (
        <header id="header">
           <h1>News Buddy 😃</h1>
           <p id='logged-in-user'>Logged In: {loggedInUser.username}</p>
           <nav id="nav">
            <Link to='/' className="links">Home</Link>
            <Link to='/articles' className="links">Articles</Link>
           </nav>
        </header>
       )
}

export default Header