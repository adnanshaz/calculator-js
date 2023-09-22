let currentResult = '0';

function updateDisplay() {
    document.getElementById('result').value = currentResult;
}

function appendToResult(value) {
    if (currentResult === '0' && value !== '.') {
        currentResult = value;
    } else {
        currentResult += value;
    }
    updateDisplay();
}

function clearResult() {
    currentResult = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        currentResult = eval(currentResult).toString();
    } catch (error) {
        currentResult = 'Error';
    }
    updateDisplay();
}

updateDisplay();















// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');

// let str = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.subsrting(0, string.length-1);
//             input.value = string;
            
//         }
//         else{
//         string += e.target.innerHTML;
//         input.value = string;
//         }
//     })
// })   
