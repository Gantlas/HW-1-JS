//==================================================== LEARN.JS N = 2.1

// alert("Я JavaScript!");

//==================================================== LEARN.JS N = 2.4
//==================== Работа с переменными
// let name = "John";
// let admin = name;
// alert(admin);

//==================== Придумайте правильные имена
// const ourPlanetName = "Earth";
// const currentUser = "John"; // лучше currentUserName

//==================== Какие буквы (заглавные или строчные) использовать для имён констант?
// В данном примере я бы не использовал

//==================================================== LEARN.JS N = 2.9

// let userName = prompt("Enter your name:", "");
// alert(`Hello, ${userName}`);

//==================================================== LEARN.JS N = 2.10
//==================== Название JavaScript
// const officialName = prompt("What is the official name of JavaScript?", "");

// if (officialName === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You are wrong. ECMAScript!");
// }

//==================== Покажите знак числа
// const number = prompt("Enter the number:", "");

// if (number < 0) {
//   alert(-1);
// } else if (number > 0) {
//   alert(1);
// } else {
//   alert(0);
// }

//==================== Перепишите 'if' в '?'
// a = Number(prompt("Enter a:", ""));
// b = Number(prompt("Enter b:", ""));

// let result = a + b < 4 ? "Few" : "A lot";
// alert(result);

//==================== Перепишите 'if..else' в '?'
// const login = prompt("Enter your login:", "");
// let message;

// message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Boss"
//     ? "How do you do?"
//     : login === ""
//     ? "There is no login"
//     : "Incorrect input";

// alert(message);

//==================================================== LEARN.JS N = 2.11
//==================== Проверка значения из диапазона
// const age = prompt("Enter the age", "");

// if (age >= 14 && age <= 90) {
//   alert("age in [14;90]");
// } else {
//   alert("age NOT in [14;90]");
// }

//==================== Проверка логина
// const login = prompt("Enter your login", "");

// if (login === "admin") {
//   const password = prompt("Enter your password", "");
//   if (password === "Boss") {
//     alert("How do you do?");
//   } else if (password === "" || password === null) {
//     alert("Canceled!");
//   } else {
//     alert("Incorrect password");
//   }
// } else if (login === "" || login === null) {
//   alert("Canceled!");
// } else {
//   alert("Incorrect login");
// }
