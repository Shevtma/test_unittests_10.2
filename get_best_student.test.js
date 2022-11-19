const getBestStudents = require("./get_best_students.js");
const studentsData = require("./students-data.json");

describe("Набор тестов для функции getBestStudents", () => {
  let finalScope = `[{ "name": "Viktor", "score": 36, "date": "2022-10-10" },{ "name": "Alina", "score": 36, "date": "2022-10-10" }]`;
  it("Тест на то, что значения определены", () => {
    expect(getBestStudents(studentsData)).toBeDefined();
  });
  it("Тест на то, что значения для функции не определены", () => {
    expect(getBestStudents()).toBeNaN();
  });
});

