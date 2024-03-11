import { Link } from "react-router-dom"

function Header() {
    return (
        <header id="header">
           <h1>News Buddy 😃</h1>
           <nav id="nav">
             <Link to='/'>Home</Link>
            <Link to='/articles'>Articles</Link>
           </nav>
        </header>
       )
}

export default Header