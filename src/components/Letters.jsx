import React from 'react';
import { verifyWords } from '../utils/letter';

// difficulty, letters, setLetters, setWords, words, pontos, setPontos, finito

function Letters(props) {
	const letterClick = (l) => {
        if (props.finito) return;
		let temp = [...props.letters];
		if (!l.selected && !l.used) props.setPontos(props.pontos - 1);
		temp[l.index].selected = true;
		props.setLetters(temp);
        if (!l.used) return;
		if (
			verifyWords(
				props.words,
				props.letters,
				props.difficulty === 'easy'
					? 10
					: props.difficulty === 'hard'
					? 20
					: 15,
				props.setWords,
				props.pontos,
				props.setPontos,
				props.difficulty === 'easy' ? 1 : props.difficulty === 'hard' ? 3 : 2
			)
		) {
			props.setFinito(true);
		}
	};

	return (
		<div
			className="letters"
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${
					props.difficulty === 'easy'
						? 10
						: props.difficulty === 'hard'
						? 20
						: 15
				}, 30px)`,
			}}
		>
			{props.letters.map((l) => (
				<div
					className="letter"
					key={l.index}
					onClick={() => letterClick(l)}
					style={{
						backgroundColor: l.used && l.selected ? `#00ff00` : `#ffffff`,
					}}
				>
					{l.char}
				</div>
			))}
		</div>
	);
}

export default Letters;
