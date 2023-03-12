let num = 266219;

let result = ((num + "").split("")).reduce((sum, current) => sum * current, 1);

let i = result ** 3;

console.log((i + "").substring(0, 2))
console.log(result)