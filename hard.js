let num = 266219;

let result = ((num + "").split("")).reduce((sum, current) => sum * current, 1);

let i = result ** 3;

console.log((i + "").substring(0, 2))
console.log(result)

let days = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]];
let lang = ru;
let resultWeek = lang = ru ? days[1] : lang = en ? days[0] : "Невалидное значение";
console.log(resultWeek);