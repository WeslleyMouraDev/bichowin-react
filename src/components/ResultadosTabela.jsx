import { useState, useEffect } from 'react';

const animalEmojis = {
    Tigre: '🐅',
    Gato: '🐱',
    Cachorro: '🐶',
    Vaca: '🐮',
    Camelo: '🐫',
    Urso: '🐻',
    Burro: '🐴',
    Cobra: '🐍',
    Leão: '🦁',
    Cabra: '🐐',
    Veado: '🦌',
    Águia: '🦅',
    Cavalo: '🐴',
    Touro: '🐂',
    Galo: '🐓',
    Carneiro: '🐏',
    Elefante: '🐘',
    Pavão: '🦚',
    Avestruz: '🦩',
    Jacaré: '🐊',
    Borboleta: '🦋',
    Peru: '🦃',
    Macaco: '🐒',
    Porco: '🐷',
    Coelho: '🐇'
};

const getAnimalEmoji = (animalName) => {
    return animalEmojis[animalName] || "";
};

const ResultadosTabela = () => {
    const [resultados, setResultados] = useState([]);
    const [data, setData] = useState("");

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setData(today);
    }, []);

    const buscarResultados = () => {
        const banca = document.getElementById("banca").value;

        if (!data || !banca) return;

        fetch(`https://bichomania.bet/api/game/results/${data}/${banca}`)
            .then(response => response.json())
            .then(data => {
                setResultados(data);
            })
            .catch(error => console.error("Erro ao buscar resultados:", error));
    };

    return (
        <section id="resultados">
            <h2>Resultados das Bancas</h2>
            <form id="resultadoForm">
                <label htmlFor="data">Data:</label>
                <input
                    type="date"
                    id="data"
                    name="data"
                    value={data}
                    onChange={e => setData(e.target.value)}
                />

                <label htmlFor="banca">Banca:</label>
                <select id="banca" name="banca" className="form-select">
                    <option value="12">PIX</option>
                    <option value="2">Rio de Janeiro</option>
                    <option value="3">Federal</option>
                    <option value="4">Goiás</option>
                    <option value="5">Nacional</option>
                    <option value="13">Bahia</option>
                    <option value="14">Bahia Maluca</option>
                    <option value="6">São Paulo</option>
                    <option value="15">Paraíba</option>
                    <option value="9">Minas Gerais</option>
                    <option value="16">MaluquinhaRJ</option>
                    <option value="17">Brasília</option>
                </select>

                <button type="button" id="buscarResultados" onClick={buscarResultados}>Buscar Resultados</button>
            </form>
            <div className="table-container">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Loteria</th>
                            <th>1° Prêmio</th>
                            <th>2° Prêmio</th>
                            <th>3° Prêmio</th>
                            <th>4° Prêmio</th>
                            <th>5° Prêmio</th>
                            <th>6° Prêmio</th>
                            <th>7° Prêmio</th>
                        </tr>
                    </thead>
                    <tbody id="resultadosTabela">
                        {resultados.map((resultado, index) => (
                            <tr key={index}>
                                <td>{resultado.campo_loteria_descricao}</td>
                                <td>{resultado.campo_resultado_primeira_colocacao} - {resultado.campo_resultado_primeiro_animal} {getAnimalEmoji(resultado.campo_resultado_primeiro_animal)}</td>
                                <td>{resultado.campo_resultado_segunda_colocacao} - {resultado.campo_resultado_segundo_animal} {getAnimalEmoji(resultado.campo_resultado_segundo_animal)}</td>
                                <td>{resultado.campo_resultado_terceira_colocacao} - {resultado.campo_resultado_terceiro_animal} {getAnimalEmoji(resultado.campo_resultado_terceiro_animal)}</td>
                                <td>{resultado.campo_resultado_quarta_colocacao} - {resultado.campo_resultado_quarto_animal} {getAnimalEmoji(resultado.campo_resultado_quarto_animal)}</td>
                                <td>{resultado.campo_resultado_quinta_colocacao} - {resultado.campo_resultado_quinto_animal} {getAnimalEmoji(resultado.campo_resultado_quinto_animal)}</td>
                                <td>{resultado.campo_resultado_sexta_colocacao} - {resultado.campo_resultado_sexto_animal} {getAnimalEmoji(resultado.campo_resultado_sexto_animal)}</td>
                                <td>{resultado.campo_resultado_setima_colocacao} - {resultado.campo_resultado_setimo_animal} {getAnimalEmoji(resultado.campo_resultado_setimo_animal)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ResultadosTabela;
