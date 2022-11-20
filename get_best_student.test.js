const getBestStudents = require("./get_best_students.js");
const studentsData = require("./students-data.json");
let studentsArr = [];
let finalScope_0 = [{ name: "Ivan", score: 35, date: "2022-10-11" }];
let finalScope_1 = [{ name: "Marina", score: 25, date: "2022-10-01" }];
let finalScope_2 = [];
let finalScope_3 = [
  { name: "Viktor", score: 36, date: "2022-10-10" },
  { name: "Alina", score: 36, date: "2022-10-10" },
];
//let finalScope_4 = [];

for (let student of studentsData) {
  studentsArr.push(student);
}

describe("Набор тестов для функции getBestStudents", () => {
  it("Тест на то, что значения определены", () => {
    expect(getBestStudents(studentsArr[0])).toBeDefined();
  });
  it("Тест на то, что значения для функции не определены", () => {
    expect(getBestStudents()).toEqual([]);
  });
  it.each`
    stdArr            | i    | expected
    ${studentsArr[0]} | ${0} | ${finalScope_0}
    ${studentsArr[1]} | ${1} | ${finalScope_1}
    ${studentsArr[2]} | ${2} | ${finalScope_2}
    ${studentsArr[3]} | ${3} | ${finalScope_3}
    ${studentsArr[4]} | ${4} | ${finalScope_2}
  `(`Проверка на массиве значений $i`, ({ stdArr, expected }) => {
    expect(getBestStudents(stdArr)).toEqual(expected);
  });
});

