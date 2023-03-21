'use strict';


let title = prompt("Как называется ваш проект?", "");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные").toLowerCase().split();
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let rollback = 15;
let adaptive = !!prompt("Нужен ли адаптив на сайте", "");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "");
let servicePrice1 = +prompt("Сколько это будет стоить?", "1");
let service2= prompt("Какой дополнительный тип услуги нужен?", "");
let servicePrice2= +prompt("Сколько это будет стоить?", "1");
let fullPrice
let servicePercentPrice
let allServicePrice

const getAllServicePrice = function () {
    return servicePrice1 + servicePrice2
}();

const getFullPrice = function () {
    return fullPrice + allServicePrice
}();

// const getTitle = function () {

// }

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice*(rollback/100))
}();

switch (true) {
    case fullPrice > 30000:
        console.log("Скидка 10%");
        break
    case fullPrice < 30000 && fullPrice > 15000:
        console.log("Скидка 5%");
        break
    case fullPrice < 15000:
        console.log("Скидка не предусмотрена");
        break
    case fullPrice < 0:
        console.log("Что то пошло не так")
};



console.log(screens.length);
console.log("Стоимость верстки экранов " +  screenPrice +  " рублей");
console.log("Стоимость разработки сайтов " +  fullPrice +  " рублей");
console.log(screens);
console.log(fullPrice*(rollback/100))
console.log(title);
console.log(adaptive);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(rollback);
