// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

function Calculator() {
    this.result = 0;
}

Calculator.prototype.add = function (num) {
    this.result += num;
};

Calculator.prototype.subtract = function (num) {
    this.result -= num;
};

Calculator.prototype.multiply = function (num) {
    this.result *= num;
};

Calculator.prototype.divide = function (num) {
    if (num !== 0) {
        this.result /= num;
    } else {
        console.log("Ділення на нуль неможливе!");
    }
};

let calc = new Calculator();

calc.add(5);
console.log("Результат після додавання 5", calc.result);

calc.subtract(2);
console.log("Результат після віднімання 2", calc.result); 

calc.multiply(3);
console.log("Результат після множення на 3", calc.result);

calc.divide(3);
console.log("Результат після ділення на 3", calc.result); 