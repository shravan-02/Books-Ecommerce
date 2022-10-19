import React from 'react'
import footerLogo from "../../assets/Library.svg"
const Footer = () => {
  return (
    <div><footer>
    <div class="container">
        <div class="row row__column">
            <a href="#">

                <figure class="footer__logo">
                    <img src={footerLogo} class="footer__logo--img" alt="" />
                </figure>
            </a>
            <div class="footer__list">
                <a href="" class="footer__link">Home</a>
                <a href="" class="footer__link no-cursor">About</a>
                <a href="#features" class="footer__link">Books</a>
                <a href="" class="footer__link no-cursor">Contact</a>
            </div>
            <div class="footer__copyright">Copyright &copy; 2022 Library</div>
        </div>
    </div>
</footer></div>
  )
}

export default Footer