"use strict";
let display = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let oldOption = document.querySelector('.angle');
let secondTray = document.querySelector('.second_tray');
let memoryActive = document.getElementsByClassName('memory_function');
let secondFunctions = document.getElementsByClassName('second_functions');
let arr_list = [];
let buttonText;
let screenOutput = '';
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = item.innerText;
        if (buttonText === 'x') {
            buttonText = '*';
            screenOutput += buttonText;
            display.value = screenOutput;
        }
        else if (buttonText === '÷') {
            buttonText = '/';
            screenOutput += buttonText;
            display.value = screenOutput;
        }
        else if (buttonText == 'C') {
            screenOutput = '';
            display.value = screenOutput;
        }
        else if (buttonText === '=') {
            screenOutput = eval(display.value);
            display.value = screenOutput;
        }
        else if (buttonText === '⌫') {
            screenOutput = display.value.substring(0, display.value.length - 1);
            display.value = screenOutput;
        }
        // Angle unit converter functions
        else if (buttonText === 'DEG') {
            screenOutput = parseFloat(display.value) * (180 / Math.PI);
            display.value = screenOutput;
            oldOption.innerText = 'RAD';
        }
        else if (buttonText === 'RAD') {
            screenOutput = parseFloat(display.value) * (Math.PI / 180);
            display.value = screenOutput;
            oldOption.innerText = 'DEG';
        }
        else if (buttonText === 'F-E') {
            let x = display.value;
            screenOutput = parseFloat(x).toExponential();
            display.value = screenOutput;
        }
        // Memory Functions
        else if (buttonText === 'MS') {
            arr_list = [];
            arr_list.push(parseFloat(display.value));
            for (let item of memoryActive) {
                item.style.color = "black";
            }
        }
        else if (buttonText === 'MC') {
            arr_list = [];
            for (let item of memoryActive) {
                item.style.color = "gray";
            }
        }
        else if (buttonText === 'M+') {
            screenOutput = (arr_list[arr_list.length - 1]) + parseFloat(display.value);
            arr_list.push(screenOutput);
            display.value = screenOutput;
        }
        else if (buttonText === 'M-') {
            screenOutput = (arr_list[arr_list.length - 1]) - parseFloat(display.value);
            display.value = screenOutput;
            arr_list[arr_list.length - 1] = screenOutput;
        }
        else if (buttonText === 'MR') {
            let arr_val = arr_list.slice(arr_list.length - 1, arr_list.length);
            display.value = arr_val.toString();
        }
        // Functions change on click form 1st-Tray to 2nd-Tray
        else if (buttonText === '2nd') {
            for (let item of secondFunctions) {
                let funValue = item.innerText;
                switch (funValue) {
                    case "x2":
                        item.innerHTML = 'x<sup>3</sup>';
                        break;
                    case "√x":
                        item.innerHTML = '<sup>3</sup>√x';
                        break;
                    case "xy":
                        item.innerHTML = 'x<sup>y</sup>';
                        break;
                    case "10x":
                        item.innerHTML = '2<sup>x</sup>';
                        break;
                    case "log":
                        item.innerHTML = 'log';
                        break;
                    case "ln":
                        item.innerHTML = 'e<sup>x</sup>';
                        break;
                }
                secondTray.innerText = "1st";
            }
        }
        else if (buttonText === '1st') {
            for (let item of secondFunctions) {
                let funValue = item.innerText;
                console.log(funValue);
                switch (funValue) {
                    case "x3":
                        item.innerHTML = 'x<sup>2</sup>';
                        break;
                    case "3√x":
                        item.innerHTML = '√x';
                        break;
                    case "xy":
                        item.innerHTML = 'x<sup>y</sup>';
                        break;
                    case "2x":
                        item.innerHTML = '10<sup>x</sup>';
                        break;
                    case "log":
                        item.innerHTML = 'log';
                        break;
                    case "ex":
                        item.innerHTML = 'ln';
                        break;
                }
                secondTray.innerText = "2nd";
            }
        }
        else if (buttonText === 'x2') {
            screenOutput = Math.pow(parseFloat(display.value), 2);
            display.value = screenOutput;
        }
        else if (buttonText === '√x') {
            screenOutput = Math.sqrt(parseInt(display.value));
            display.value = screenOutput;
        }
        else if (buttonText === 'xy') {
            buttonText = '**';
            screenOutput += buttonText;
            display.value = screenOutput;
        }
        else if (buttonText === '10x') {
            screenOutput = Math.pow(10, parseInt(display.value));
            display.value = screenOutput;
        }
        else if (buttonText === 'log') {
            screenOutput = Math.log10(parseInt(display.value));
            display.value = screenOutput;
        }
        else if (buttonText === 'ln') {
            screenOutput = Math.log(parseFloat(display.value));
            display.value = screenOutput;
        }
        else if (buttonText === 'x3') {
            screenOutput = Math.pow(parseInt(display.value), 3);
            display.value = screenOutput;
        }
        else if (buttonText === '3√x') {
            screenOutput = Math.cbrt(parseInt(display.value));
            display.value = screenOutput;
        }
        else if (buttonText === '2x') {
            screenOutput = Math.pow(2, parseInt(display.value));
            display.value = screenOutput;
        }
        else if (buttonText === 'ex') {
            screenOutput = Math.pow(Math.E, parseInt(display.value));
            display.value = screenOutput;
        }
        else if (buttonText === 'π') {
            screenOutput = Math.PI;
            display.value = screenOutput;
        }
        else if (buttonText === 'e') {
            screenOutput = Math.E;
            display.value = screenOutput;
        }
        else if (buttonText === 'n!') {
            var i, num, f;
            f = 1;
            num = parseInt(display.value);
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            i = i - 1;
            screenOutput = f;
            display.value = screenOutput;
        }
        else if (buttonText === '1/x') {
            if (display.value == '') {
                display.value = '0';
                screenOutput = 1 / parseInt(display.value);
                display.value = screenOutput;
            }
            else {
                screenOutput = 1 / parseInt(display.value);
                display.value = screenOutput;
            }
        }
        else if (buttonText === '|x|') {
            if (display.value == '') {
                display.value = '0';
                screenOutput = Math.abs(parseInt(display.value));
                display.value = screenOutput;
            }
            else {
                screenOutput = Math.abs(parseInt(display.value));
                display.value = screenOutput;
            }
        }
        else if (buttonText === 'exp') {
            if (display.value == '') {
                display.value = '0';
                screenOutput = Math.pow(Math.E, parseInt(display.value));
                display.value = screenOutput;
            }
            else {
                screenOutput = Math.pow(Math.E, parseInt(display.value));
                display.value = screenOutput;
            }
        }
        else if (buttonText === 'mod') {
            buttonText = '%';
            screenOutput += buttonText;
            display.value = screenOutput;
        }
        else if (buttonText === '+/-') {
            screenOutput = parseInt(display.value) * (-1);
            display.value = screenOutput;
        }
        // avoiding number of zeroes before valid operand
        else if (buttonText === '0') {
            if (display.value === '') {
                screenOutput = '';
                display.value = screenOutput;
            }
            else {
                screenOutput += buttonText;
                display.value = screenOutput;
            }
        }
        else {
            screenOutput += buttonText;
            display.value = screenOutput;
        }
    });
}
function trigno(fun) {
    switch (fun) {
        case "sine":
            screenOutput = Math.sin(parseFloat(display.value));
            display.value = screenOutput;
            break;
        case "cosine":
            screenOutput = Math.cos(parseFloat(display.value));
            display.value = screenOutput;
            break;
        case "tan":
            screenOutput = Math.tan(parseFloat(display.value));
            display.value = screenOutput;
            break;
    }
}
function dropDownFun(fun) {
    switch (fun) {
        case "floor":
            screenOutput = Math.floor(parseFloat(display.value));
            display.value = screenOutput;
            break;
        case "ceil":
            screenOutput = Math.ceil(parseFloat(display.value));
            display.value = screenOutput;
            break;
        case "random":
            screenOutput = Math.random();
            display.value = screenOutput;
            break;
    }
}
