const Cotacoes = () => {
    return (
        <section id="cotacoes">
            <h2>Cotações</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Modalidade</th>
                            <th>Premiação 1°</th>
                            <th>Premiação 1° ao 5°</th>
                            <th>Premiação 1° ao 6°</th>
                            <th>Premiação 1° ao 7°</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grupo</td>
                            <td>18x</td>
                            <td>3.6x</td>
                            <td>3x</td>
                            <td>2.57x</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Cotacoes;
