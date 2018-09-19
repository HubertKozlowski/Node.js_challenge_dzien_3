const fs = require('fs');
const crypto = require('crypto');

fs.readFile('./data/zadanieDnia1/testFile.txt', 'utf8', (err, data) => {
		if (err === null) {
				console.log('Poprawnie odczytano plik.');
				const hash = crypto.createHmac('sha256', data)
						.digest('hex');

				console.log(hash);

		} else {
				console.log('Błąd podczas odczytu pliku!', err);
		}
})
