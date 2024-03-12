import { Link } from "react-router-dom"

function Header() {
    return (
        <header id="header">
           <h1>News Buddy 😃</h1>
           <nav id="nav">
             <Link to='/' className="links">Home</Link>
            <Link to='/articles' className="links">Articles</Link>
           </nav>
        </header>
       )
}

export default Header