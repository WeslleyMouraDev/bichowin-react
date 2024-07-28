import { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import ResultadosSimulador from './ResultadosSimulador';

const Simulador = () => {
    const [saldoInicial, setSaldoInicial] = useState(26);
    const [saldoFinal, setSaldoFinal] = useState(26);
    const [valorAposta, setValorAposta] = useState(0.10);
    const [tipoAposta, setTipoAposta] = useState(18);
    const [quantidadeGrupos, setQuantidadeGrupos] = useState(4);
    const [quantApostas, setQuantApostas] = useState(0);
    const [vit, setVit] = useState(0);
    const [der, setDer] = useState(0);
    const [lucro, setLucro] = useState(0);
    const [historicoApostas, setHistoricoApostas] = useState([]);

    const handleVictory = () => {
        const lucroAposta = valorAposta * tipoAposta - (valorAposta * quantidadeGrupos);
        setVit(vit + 1);
        setQuantApostas(quantApostas + 1);
        setHistoricoApostas([...historicoApostas, 'victory']);
        setLucro((prevLucro) => parseFloat((prevLucro + lucroAposta).toFixed(2))); // Atualiza lucro na vitória
        setSaldoFinal((prevSaldo) => parseFloat((prevSaldo + lucroAposta).toFixed(2)));
    };

    const handleDefeat = () => {
        const perdaAposta = valorAposta * quantidadeGrupos;
        setDer(der + 1);
        setQuantApostas(quantApostas + 1);
        setHistoricoApostas([...historicoApostas, 'defeat']);
        setLucro((prevLucro) => parseFloat((prevLucro - perdaAposta).toFixed(2))); // Atualiza lucro na derrota
        setSaldoFinal((prevSaldo) => parseFloat((prevSaldo - perdaAposta).toFixed(2)));
    };

    const handleReset = () => {
        setSaldoInicial(26);
        setSaldoFinal(26);
        setValorAposta(0.10);
        setTipoAposta(18);
        setQuantidadeGrupos(4);
        setQuantApostas(0);
        setVit(0);
        setDer(0);
        setLucro(0);
        setHistoricoApostas([]);
    };

    const handleUndo = () => {
        if (historicoApostas.length === 0) return;

        const lastAposta = historicoApostas[historicoApostas.length - 1];
        setHistoricoApostas(historicoApostas.slice(0, -1));

        if (lastAposta === 'victory') {
            const lucroAposta = valorAposta * tipoAposta - valorAposta;
            setVit(vit - 1);
            setLucro((prevLucro) => parseFloat((prevLucro - lucroAposta).toFixed(2))); // Reverte lucro na vitória
            setSaldoFinal((prevSaldo) => parseFloat((prevSaldo - lucroAposta).toFixed(2)));
        } else if (lastAposta === 'defeat') {
            const perdaAposta = valorAposta * quantidadeGrupos;
            setDer(der - 1);
            setLucro((prevLucro) => parseFloat((prevLucro + perdaAposta).toFixed(2))); // Reverte lucro na derrota
            setSaldoFinal((prevSaldo) => parseFloat((prevSaldo + perdaAposta).toFixed(2)));
        }

        setQuantApostas(quantApostas - 1);
    };

    return (
        <section id="simulador">
            <h2>Simulador</h2>
            <form>
                <label htmlFor="saldoInicial">Saldo Inicial:</label>
                <input
                    type="number"
                    id="saldoInicial"
                    name="saldoInicial"
                    value={saldoInicial}
                    onChange={(e) => {
                        const newSaldo = parseFloat(e.target.value);
                        setSaldoInicial(newSaldo);
                        setSaldoFinal(newSaldo);
                    }}
                />

                <label htmlFor="valorAposta">Valor da Aposta:</label>
                <input
                    type="number"
                    id="valorAposta"
                    name="valorAposta"
                    step="0.01"
                    value={valorAposta}
                    onChange={(e) => setValorAposta(parseFloat(e.target.value))}
                />

                <label htmlFor="tipoAposta">Tipo de Aposta:</label>
                <select
                    id="tipoAposta"
                    name="tipoAposta"
                    className="form-select"
                    value={tipoAposta}
                    onChange={(e) => setTipoAposta(parseFloat(e.target.value))}
                >
                    <option value={18}>Grupo</option>
                    <option value={3.6}>Grupo 1 ao 5</option>
                </select>

                <label htmlFor="quantidadeGrupos">Quantidade de Grupos:</label>
                <input
                    type="number"
                    id="quantidadeGrupos"
                    name="quantidadeGrupos"
                    min="1"
                    max="25"
                    value={quantidadeGrupos}
                    onChange={(e) => setQuantidadeGrupos(parseInt(e.target.value))}
                />
            </form>
            <ButtonGroup handleVictory={handleVictory} handleDefeat={handleDefeat} handleReset={handleReset} />
            <button type="button" onClick={handleUndo}>Apagar Última Aposta</button>
            <ResultadosSimulador quantApostas={quantApostas} vit={vit} der={der} saldoInicial={saldoInicial} lucro={lucro} saldoFinal={saldoFinal} />
        </section>
    );
};

export default Simulador;
