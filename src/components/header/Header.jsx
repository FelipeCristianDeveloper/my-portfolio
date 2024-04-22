import React from 'react';
import './Header.css';
import iconLinkedin from '../../assets/linkedin.png';
import iconGithub from '../../assets/github.png';
import iconWhatsapp from '../../assets/whatsapp.png';

const Header = () => {

    const btnMobile = document.querySelector('#btn-mobile');
    const menuOpen = document.querySelector('.nav-list');

    function handleClick() {
        btnMobile.classList.toggle('active');
        menuOpen.classList.toggle('active');
    }

  return (
    
    <div className='header'>
        <div className="navbar">
            <div className="nav-logo">
                <a href="#"><h2>Porfólio</h2></a>
            </div>

            <nav className="nav-menu">
                <ul className="nav-list">
                    <li><a href="#"><span class="material-symbols-outlined">home</span>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="socials-media">
                <a href="#" target="_blank"><img src={iconLinkedin} alt="" /></a>
                <a href="#" target="_blank"><img src={iconGithub} alt="" /></a>
                <a href="#" target="_blank"><img src={iconWhatsapp} alt="" /></a>
            </div>

            <button className="btn-mobile" id='btn-mobile' onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
  )
}

export default Header;