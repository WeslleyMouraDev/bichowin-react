import PropTypes from 'prop-types';

const ResultadosSimulador = ({ quantApostas, vit, der, saldoInicial, saldoFinal, lucro }) => {
    const lucroClass = lucro > 0 ? 'positivo' : lucro < 0 ? 'negativo' : 'neutro';
    const saldoFinalClass = saldoFinal > saldoInicial ? 'positivo' : saldoFinal < saldoInicial ? 'negativo' : 'neutro';

    return (
        <div className="resultados-simulador">
            <p>Quantidade de Apostas: {quantApostas}</p>
            <p>Vitórias: {vit}</p>
            <p>Derrotas: {der}</p>
            <p>Saldo Inicial: R${saldoInicial.toFixed(2)}</p>
            <p className={lucroClass}>Lucro: R${lucro.toFixed(2)}</p>
            <p className={saldoFinalClass}>Saldo Final: R${saldoFinal.toFixed(2)}</p>
        </div>
    );
};

ResultadosSimulador.propTypes = {
    quantApostas: PropTypes.number.isRequired,
    vit: PropTypes.number.isRequired,
    der: PropTypes.number.isRequired,
    saldoInicial: PropTypes.number.isRequired,
    lucro: PropTypes.number.isRequired,
    saldoFinal: PropTypes.number.isRequired,
};

export default ResultadosSimulador;
