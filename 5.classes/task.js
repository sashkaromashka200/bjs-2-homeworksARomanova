class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	get state() {
		return this._state;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	fix() {
		this.state = this.state * 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0];
			}
		}
		return null;
	}
}

// Тестовый сценарий
const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
const issuedBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);

if (issuedBook) {
	console.log("Состояние книги до повреждения: " + issuedBook.state);
	issuedBook.state = 20;
	console.log("Состояние книги после повреждения: " + issuedBook.state);

	issuedBook.fix();
	console.log("Состояние книги после восстановления: " + issuedBook.state);

	library.addBook(issuedBook);
	console.log("Количество книг после попытки вернуть: " + library.books.length);
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			console.log(`Ошибка: оценка ${mark} не добавилась. Должна быть от 2 до 5`);
			return false;
		}

		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
		console.log(`✅ Добавлена оценка ${mark} по предмету "${subject}"`);
		return true;
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject] || this.marks[subject].length === 0) {
			console.log(`⚠️ По предмету "${subject}" нет оценок`);
			return 0;
		}


		const sum = this.marks[subject].reduce((total, mark) => total + mark, 0);
		const average = sum / this.marks[subject].length;

		return average;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);

		if (subjects.length === 0) {
			console.log("⚠️ Нет оценок по любым предметам");
			return 0;
		}

		const totalSum = subjects.reduce((sum, subject) => {
			return sum + this.getAverageBySubject(subject);
		}, 0);

		const overallAverage = totalSum / subjects.length;

		return overallAverage;
	}

	getSubjects() {
		return Object.keys(this.marks);
	}

	getStats() {
		const stats = {};
		const subjects = this.getSubjects();

		subjects.forEach(subject => {
			stats[subject] = {
				marks: this.marks[subject],
				average: this.getAverageBySubject(subject),
				count: this.marks[subject].length
			};
		});

		return stats;
	}
}

console.log("=== ТЕСТИРОВАНИЕ ЖУРНАЛА УСПЕВАЕМОСТИ ===\n");

const student = new Student("Олег Никифоров");


console.log("1. Добавление оценок:");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");
student.addMark(1, "математика");
student.addMark(3, "математика");
student.addMark(4, "математика");

console.log("\n2. Средние оценки по предметам:");
console.log("Физика:", student.getAverageBySubject("физика").toFixed(2));
console.log("Химия:", student.getAverageBySubject("химия").toFixed(2));
console.log("Математика:", student.getAverageBySubject("математика").toFixed(2));
console.log("Биология:", student.getAverageBySubject("биология"));

console.log("\n3. Общая средняя оценка:");
console.log("Общий средний балл:", student.getAverage().toFixed(2));

console.log("\n4. Все предметы студента:");
console.log(student.getSubjects());

console.log("\n5. Подробная статистика:");
console.log(student.getStats());

console.log("\n6. Структура данных marks:");
console.log(student.marks);

console.log("\n=== ДОПОЛНИТЕЛЬНЫЕ ТЕСТЫ ===");

const newStudent = new Student("Иван Иванов");
console.log("Средний балл нового студента:", newStudent.getAverage());
console.log("Предметы нового студента:", newStudent.getSubjects());


newStudent.addMark(0, "история");
newStudent.addMark(10, "литература");
newStudent.addMark(5, "история");
console.log("Статистика после добавления корректных оценок:");
console.log(newStudent.getStats());