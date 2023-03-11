let title = "Название проекта";
let screens = "Простые, Сложные, Интерактивные".toLowerCase().split();
let screenPrice = 100;
let rollback = 15;
let fullPrice = 1000000;
let adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " +  screenPrice +  " рублей");
console.log("Стоимость разработки сайтов " +  fullPrice +  " рублей");
console.log(screens);
console.log(fullPrice*(rollback/100))

