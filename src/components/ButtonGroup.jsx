
import PropTypes from 'prop-types';

const ButtonGroup = ({ handleVictory, handleDefeat, handleReset }) => {
    return (
        <div className="button-group">
            <button id="vitoria" type="button" className="btn btn-success" onClick={handleVictory}>Vitória</button>
            <button id="derrota" type="button" className="btn btn-danger" onClick={handleDefeat}>Derrota</button>
            <button id="resetar" type="button" className="btn btn-info" onClick={handleReset}>Resetar</button>
        </div>
    );
};

ButtonGroup.propTypes = {
    handleVictory: PropTypes.func.isRequired,
    handleDefeat: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
};

export default ButtonGroup;