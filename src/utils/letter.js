export function generateRandomCharArray(size) {
	var result = [];
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ';
	var charactersLength = characters.length;
	for (var i = 0; i < size; i++) {
		result.push({
			char: characters.charAt(Math.floor(Math.random() * charactersLength)),
			index: i,
			selected: false,
			used: false,
		});
	}
	return result;
}

const wordList = [
	'CAO',
	'GATO',
	'PATO',
	'PEIXE',
	'PORCO',
	'ABELHA',
	'GIRAFA',
	'GALINHA',
	'CABRA',
	'VACA',
	'FOCA',
	'ESQUILO',
	'MARMOTA',
	'OVELHA',
	'BURRO',
	'CAVALO',
	'MINHOCA',
	'JACARE',
	'PREGUIÇA',
	'PUMA',
];

export function generateWords(letters, n, size, setLetters) {
	let words = [];
	let wordL = [...wordList];
	let temp = [...letters];
	for (let i = 0; i < n; i++) {
		let k = Math.floor(Math.random() * wordL.length);
		let word = wordL[k];
		wordL.splice(k, 1);

		let pos = Math.floor(Math.random() * size * 2);
		let pos2 = Math.floor(Math.random() * (size - word.length));

		if (pos < size) {
			for (let h = 0; h < word.length; h++) {
				temp[pos * size + pos2 + h].char = word[h];
				temp[pos * size + pos2 + h].used = true;
			}
		} else {
			let col = pos - size;
			for (let h = 0; h < word.length; h++) {
				temp[col + (h + pos2) * size].char = word[h];
				temp[col + (h + pos2) * size].used = true;
			}
		}

		words.push({ word, pos, pos2, done: false });
	}
	setLetters(temp);
	return words;
}

export function generateRandomId(size) {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < size; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export function verifyWords(
	words,
	letters,
	size,
	setWords,
	pontos,
	setPontos,
	multi
) {
	let w = [...words];
	for (let i = 0; i < words.length; i++) {
		const word = w[i];
		if (word.pos < size) {
			if (
				checkLine(letters, word.pos, word.pos2, word.word.length, size) &&
				!word.done
			) {
				word.done = true;
				setPontos(pontos + word.word.length * multi);
			}
		} else {
			if (
				checkCol(letters, word.pos, word.pos2, word.word.length, size) &&
				!word.done
			) {
				word.done = true;
				setPontos(pontos + word.word.length * multi);
			}
		}
	}
	setWords(w);
	for (let i = 0; i < w.length; i++) {
		const word = w[i];
		if (!word.done) return false;
	}
	return true;
}

function checkLine(letters, pos, pos2, length, size) {
	for (let i = 0; i < length; i++) {
		if (!letters[pos * size + pos2 + i].selected) {
			return false;
		}
	}
	return true;
}

function checkCol(letters, pos, pos2, length, size) {
	const col = pos - size;
	for (let i = 0; i < length; i++) {
		if (!letters[col + (i + pos2) * size].selected) {
			return false;
		}
	}
	return true;
}
