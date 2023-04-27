import { useState } from 'react';
import DifficultySelect from './components/Difficulty';
import Letters from './components/Letters';
import {
	generateRandomCharArray,
	generateRandomId,
	generateWords,
} from './utils/letter';

import './styles/global.css';
import Finito from './components/Finito';

let done = false;

function App() {
	const [difficulty, setDifficulty] = useState('easy');
	const [letters, setLetters] = useState(generateRandomCharArray(100));
	const [words, setWords] = useState([]);
	const [pontos, setPontos] = useState(0);
	const [finito, setFinito] = useState(false);

	if (!done) {
		setWords(generateWords(letters, 3, 10, setLetters));
		done = true;
	}

	return (
		<div className="App">
			<Finito finito={finito} pontos={pontos} />
			<DifficultySelect
				difficulty={difficulty}
				setDifficulty={setDifficulty}
				letters={letters}
				setLetters={setLetters}
				setWords={setWords}
				setPontos={setPontos}
				setFinito={setFinito}
			/>
			<div className="game">
				<Letters
					difficulty={difficulty}
					letters={letters}
					setLetters={setLetters}
					setWords={setWords}
					words={words}
					pontos={pontos}
					setPontos={setPontos}
					setFinito={setFinito}
				/>
				<div className="words">
					<div>
						Pontuação: <div className="pontos">{pontos}</div>
					</div>
					{words.map((w) => (
						<div
							key={generateRandomId(10)}
							style={{
								color: w.done ? `#ff0000` : `#000000`,
								textDecoration: w.done ? `line-through` : `none`,
							}}
						>
							{w.word}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
