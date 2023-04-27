import React from 'react';

// finito

function Finito(props) {
	if (props.finito)
		return (
			<div style={{ color: '#00ff00' }}>
				Parabéns, acabaste o jogo! Conseguiste {props.pontos} pontos!
			</div>
		);
	else return <div />;
}

export default Finito;
