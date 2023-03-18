// let num = 266219;

// let result = ((num + "").split("")).reduce((sum, current) => sum * current, 1);

// let i = result ** 3;

// console.log((i + "").substring(0, 2))
// console.log(result)

let days = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]];
let lang = "ru";
let result1 = lang === "ru" ? console.log(days[1][0]) : 
lang === "en" ? console.log(days[0]) : 
console.log("Невалидное значение");

