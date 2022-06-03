const tempDisplay = document.querySelector('.temp-display');
const finalResult = document.querySelector('.result');
const tempResult = document.querySelector('.temp-result');
const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.operation');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        finalResult.innerText = dis2Num;
    })
});

operations.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    });
});


const mathOperation = () => {
    if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
};

const clickButton = (key) => {
    digits.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    });
};

const clickOperation = (key) => {
    operations.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
};

const clickEqual = () => {
    equalButton.click();
};

const clearVar = (name = '') => {
    dis1Num += dis2Num + ' ' + name + ' ';
    tempDisplay.innerText = dis1Num;
    finalResult.innerText = '';
    dis2Num = '';
    tempResult.innerText = result;
};

equalButton.addEventListener('click', (e) => {
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    finalResult.innerText = result;
    tempResult.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

clearButton.addEventListener('click', (e) => {
    tempDisplay.innerText = '0';
    finalResult.innerText = '0';
    tempResult.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
});