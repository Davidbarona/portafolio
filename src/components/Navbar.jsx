import React from 'react'
import logo from '../img/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'



export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img className='logoNavbar' src={logo} alt='img'/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#ffffff"}}/>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre Mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">how work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Portafolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
}
