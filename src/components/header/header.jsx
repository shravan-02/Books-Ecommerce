import React from "react";
import booksImg from "../../assets/Undraw_Books.svg"
const Header = () => {
  return (
    <div>
      <header>
        <div class="header__container">
          <div class="header__description">
            <h1>India's most awarded online library platform</h1>
            <h2>
              Find your dream book with <span class="purple">Library</span>
            </h2>
            <a href="#features">
              <button class="btn">Browse books</button>
            </a>
          </div>
          <figure class="header__img--wrapper">
            <img src={booksImg} alt="" />
          </figure>
        </div>
      </header>
    </div>
  );
};

export default Header;
