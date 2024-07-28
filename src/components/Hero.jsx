import "../Styles/heroCta.css";
import imagePaths from '../helpers/imagePaths';

const Hero = () => {
    return (
        <section id="hero">
            <h1>Jogo do Bicho</h1>
            <p>Tudo que você precisa pra lucrar com o Jogo do Bicho.</p>
            <a className="cta-hero" href="https://bichomania.bet/cadastrar?indication=schnoo" target="_blank">
                Clique Aqui e jogue na Banca Online!  <br />
                (50% de Bônus no Primeiro Depósito)
            </a>
            <img className="mascote" src={imagePaths.mascote} alt="Mascote" width="40%" />
        </section>
    );
};

export default Hero;
