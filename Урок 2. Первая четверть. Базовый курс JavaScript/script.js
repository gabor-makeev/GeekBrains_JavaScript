function firstTask() {
    let a = +prompt('Введите первое число');
    let b = +prompt('Введите второе число');

    if (a >= 0 && b >= 0) {
        if (a > b) {
            alert(`Разница: ${(a - b)}`);
        } else {
            alert(`Разница: ${(b - a)}`);
        }
    } else if (a < 0 && b < 0) {
        alert(`Произведение чисел: ${(a * b)}`);
    } else if ((a >= 0 && b < 0) || (b >= 0 && a < 0)){
        alert(`Сумма чисел: ${(a + b)}`);
    }
}

function showNumbers () {
    let a = +prompt('Введите число в промежутке от 0 до 15:');
    let numbers = '';

    switch (a) {
        case 0:
            numbers += a++ + ' ';
        case 1:
            numbers += a++ + ' ';
        case 2:
            numbers += a++ + ' ';
        case 3:
            numbers += a++ + ' ';
        case 4:
            numbers += a++ + ' ';
        case 5:
            numbers += a++ + ' ';
        case 6:
            numbers += a++ + ' ';
        case 7:
            numbers += a++ + ' ';
        case 8:
            numbers += a++ + ' ';
        case 9:
            numbers += a++ + ' ';
        case 10:
            numbers += a++ + ' ';
        case 11:
            numbers += a++ + ' ';
        case 12:
            numbers += a++ + ' ';
        case 13:
            numbers += a++ + ' ';
        case 14:
            numbers += a++ + ' ';
        case 15:
            numbers += a;
    }

    alert(numbers);
}

function numbersAddition (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function numbersSubtraction (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function numbersMultiplication (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function numbersDivision (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return numbersAddition(arg1, arg2);
        case '-':
            return numbersSubtraction(arg1, arg2);
        case '*':
            return numbersMultiplication(arg1, arg2);
        case '/':
            return numbersDivision(arg1, arg2);
        default:
            alert('Вы ввели неверную арифметическую операцию...');
    }
}

function performCalc () {
    let firstNumber = +prompt('Введите первое число:');
    let secondNumber = +prompt('Введите второе число:');
    let calcType = prompt('Введите знак желаемой арифметической операции:\n(Используйте \'+\', \'-\', \'*\' или \'/\')');
    alert(mathOperation(firstNumber, secondNumber, calcType));
}

function power (val, pow) {
    if (pow >= 0) {
        if (pow === 0) {
            return 1;
        } else if (pow === 1) {
            return val;
        }

        return val * power(val, pow - 1);
    } else {
        if (pow === -1) {
            return 1 / val;
        }
        return 1 / val * power(val, pow + 1);
    }
}

function powerCalc () {
    let number = +prompt('Задайте число:');
    let pow = +prompt('Задайте степень:');

    alert(power(number, pow));
}

