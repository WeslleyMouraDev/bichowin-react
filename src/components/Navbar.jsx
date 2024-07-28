import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";
import imagePaths from '../helpers/imagePaths';

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <img className="mascote-logo" src={imagePaths.mascote} alt="Mascote" width="3.5%" />
            <nav ref={navRef}>
                <a onClick={showNavbar} href="https://bichomania.bet/cadastrar?indication=schnoo" target="_blank">🐱 Ir para a Banca 🐱</a>
                <a onClick={showNavbar} href="#cotacoes">Cotações</a>
                <a onClick={showNavbar} href="#simulador">Simulador</a>
                <a onClick={showNavbar} href="#resultados">Resultados</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;
