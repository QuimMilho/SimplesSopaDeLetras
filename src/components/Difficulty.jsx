import React from 'react';
import { generateRandomCharArray, generateWords } from '../utils/letter';

// difficulty, setDifficulty, letters, setLetters, setWords, setPontos, setFinito

function DifficultySelect(props) {
	const generateNewGame = (difficulty) => {
        props.setPontos(0);
        props.setFinito(false);
		if (difficulty === 'easy') {
			const letters = generateRandomCharArray(10 * 10);
			props.setWords(generateWords(letters, 5, 10, props.setLetters));
		} else if (difficulty === 'hard') {
			const letters = generateRandomCharArray(20 * 20);
			props.setWords(generateWords(letters, 15, 20, props.setLetters));
		} else if (difficulty === 'medium') {
			const letters = generateRandomCharArray(15 * 15);
			props.setWords(generateWords(letters, 10, 15, props.setLetters));
		}
	};

	return (
		<div>
			<select
				defaultValue={props.difficulty}
				onChange={(e) => {
					const difficulty = e.target.value;
					props.setDifficulty(difficulty);
					generateNewGame(difficulty);
				}}
				className="difficultySelect"
			>
				<option value={'easy'}>Fácil</option> {/*10x10 3 palavras*/}
				<option value={'medium'}>Médio</option> {/*15x15 5 palavras*/}
				<option value={'hard'}>Difícil</option> {/*20x20 7 palavras*/}
			</select>
			<button onClick={() => generateNewGame(props.difficulty)}>Novo Jogo</button>
		</div>
	);
}

export default DifficultySelect;
