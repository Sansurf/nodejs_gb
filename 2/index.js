const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(`Сделайте выбор: Орел(0) или Решка(1) (введите 0 или 1): `, answer => {
	if (answer == '0' || answer == '1') {

		let win0 = 'Вы выиграли! Ваш выбор совпал с Орлом ("0")\n',
			win1 = 'Вы выиграли! Ваш выбор совпал с Решкой ("1")\n',
			noWin = 'Вы проиграли. Ваш выбор не совпал с компьютером\n';

		// Выбираем случайное число между 0 и 1 и сравниваем с выбранным
		// Результат записываем в лог
		if ((Math.random() <= 0.49) && (answer == '0')) {
			fs.appendFile('log.txt', win0, () => {
				console.log(win0);
			})
		} else if ((Math.random() >= 0.5) && (answer == '1')) {
			fs.appendFile('log.txt', win1, () => {
				console.log(win1);
			})
		} else {
			fs.appendFile('log.txt', noWin, () => {
				console.log(noWin);
			})
		}

	} else {

		// Выдаем ошибку, если пользователь ввел не 0 или 1
		console.error(`Вы должны выбрать между "0" и "1"`);
	}
	rl.close();
});


