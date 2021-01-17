import { Link } from "gatsby"
import React from "react"
import "../style/menuArticles.css"

const MenuArticles = () => {
  return (
    <nav className="nav-menu-secundary bg-dark-green mb-2">
      <div className="container">
        <ul id="menu-second_menu-1" className="menu-nav-secundary-item">
          <li><Link to={"/articles"}>ARTIKLE</Link>  </li>
          <li><Link to={"/webinarer"}>WEBINAR</Link>  </li>
          <li><Link to={"/maler"}>MALER</Link>  </li>
          <li><Link to={"/fristkalender"}>FRISTKALENDER</Link>  </li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuArticles
