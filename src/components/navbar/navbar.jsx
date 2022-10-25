import React from 'react'
import { Link } from 'react-router-dom'
import library from "../../assets/Library.svg"
const Navbar = () => {
  return (
    <div>
        <nav>
            <div class="nav__container">

                <img class = "logo" src={library} alt="" />
                <ul class="nav__links">
                    <li> <a href="#" class="nav__link">Home</a></li>
                    <Link to='/cart' >

                    <li> <a href="#" class="nav__link">Cart</a></li>
                    </Link>
                    <Link to='/' >

                    <li> <a href="#" class="nav__link nav__link--primary">Logout</a></li>
                    </Link>
                    
                </ul>
            
            <button class="btn__menu" onclick="openMenu()"><i class="fas fa-bars"></i>
            </button>
            <div class="menu__backdrop">
                <button class="btn__menu btn__menu--close" onclick="closeMenu()">
                    <i class="fas fa-times"></i>
                </button>
                <ul class="menu__links">
                    <li class="menu__list"><a href="#" class="menu__link" onclick="closeMenu()">Home</a></li>
                    <li class="menu__list"><a href="#" class="menu__link" onclick="closeMenu()">Contact</a></li>
                    <li class="menu__list"><a href="#features" class="menu__link" onclick="closeMenu()">Books</a></li>

                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar