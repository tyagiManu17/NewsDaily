import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function NavBar (props) {

  const[text,setText]=useState("");

  const onchangeText = (event) => {
    setText(event.target.value);
  }

return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/NewsDaily/">NewsDaily</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse .navbar-expand" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 "> 
        <li className="nav-item" >
          <Link className="nav-link" aria-current="page" to="/NewsDaily/" >Top-Headlines</Link>
        </li>
         <li className="nav-item"><Link className="nav-link"  to="/NewsDaily/Business" >Business</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/NewsDaily/Entertainment">Entertainment</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/NewsDaily/Health">Health</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/NewsDaily/Sports">Sports</Link></li>
         <li className="nav-item"><Link className="nav-link"  to="/NewsDaily/Technology" >Technology </Link> </li>
         <li className="nav-item"><Link className="nav-link"  to="/NewsDaily/Science" >Science</Link></li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" value={text} onChange={onchangeText} placeholder="Search" aria-label="Search" />
        <Link to="/NewsDaily/search"><button className="btn btn-outline-success"  onClick={() => props.handleSearch(text)}>Search</button></Link>
      </form>
    </div>
  </div>
</nav>
</>
 )
}




