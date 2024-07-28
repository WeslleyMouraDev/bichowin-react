import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cotacoes from './components/Cotacoes';
import Simulador from './components/Simulador';
import Resultados from './components/Resultados';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cotacoes />
      <Simulador />
      <Resultados />
    </div>
  );
};

export default App;
