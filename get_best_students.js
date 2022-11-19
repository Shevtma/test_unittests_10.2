//let studentsData = require("./students-data.json");

function getBestStudents(studentsData) {
  let maxScore = 0;
  let datesArr = [];
  let scoresArray = [];
  let bestScoreStudentsArr = [];
  let minDate = "";
  let finalScope = [];

  // Формируем массив из баллов
  for (let studentsArr of studentsData) {
    scoresArray.push(...studentsArr.map((student) => student.score));
  }
  // Вычисляем значение максимального балла
  maxScore = Math.max(...scoresArray);

  // Отбираем информацию о студентах с максимальными баллами и отдельно формируем массив с датами
  for (let studentsArr of studentsData) {
    for (let student of studentsArr) {
      if (student.score == maxScore) {
        bestScoreStudentsArr.push(student);
        datesArr.push(student.date);
      }
    }
  }
  // Находим минимальную дату в массиве из лучших студентов
  minDate = datesArr.sort()[0];

  // Формируем окончательную выборку из студентов с максимальным баллом и самой ранней датой
  for (let student of bestScoreStudentsArr) {
    if (student.date == minDate) {
      finalScope.push({
        name: student.name,
        score: student.score,
        date: student.date,
      });
    }
  }
  // Выводим сообщение в консоль
  for (let student of finalScope) {
    console.log(
      `Congratulations for the best student ${student.name} with the score of ${student.score} and the earliest date ${student.date}!`
    );
  }
  // Возвращаем массив с отобранными данными
  return finalScope;
}

module.exports = getBestStudents;

//console.log(getBestStudents(studentsData));

