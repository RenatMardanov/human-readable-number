module.exports = function toReadable (number) {
    
    let num = {
        1: 'one',
        2: 'twen',
        3: 'thir',
        4: 'for',
        5: 'fif',
        6: 'six',
        7: 'seven',
        8: 'eigh',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
    }

    let fullNumber = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
    }

    let result = '';
    let firstNumber = number % 10 ;
    let secondNumber = Math.floor( number % 100 / 10);
    let thirdNumber = Math.floor( number % 1000 / 100);

//  3х знач числа
    if(+number.toString().length === 3 && secondNumber === 0 && firstNumber === 0){
        result = fullNumber[thirdNumber] + ' hundred'
    } else if(+number.toString().length === 3 && secondNumber === 1 && firstNumber === 0) {
        result = fullNumber[thirdNumber] + ' hundred ' + fullNumber[10]
    } else if(+number.toString().length === 3 && secondNumber === 1 && firstNumber === 1) {
        result = fullNumber[thirdNumber] + ' hundred ' + fullNumber[11]
    } else if(+number.toString().length === 3 && secondNumber === 1 && firstNumber === 2) {
        result = fullNumber[thirdNumber] + ' hundred ' + fullNumber[12]
    } else if(+number.toString().length === 3 && secondNumber === 1 && firstNumber === 4) {
        result = fullNumber[thirdNumber] + ' hundred ' + fullNumber[firstNumber] + 'teen'
    } else if(+number.toString().length === 3 && secondNumber === 1) {
        result = fullNumber[thirdNumber] + ' hundred ' + num[firstNumber] + 'teen'
    } else if(+number.toString().length === 3 && firstNumber === 0) {
        result = fullNumber[thirdNumber] + ' hundred ' + num[secondNumber] + 'ty'
    } else if (+number.toString().length === 3 && secondNumber === 0) {
        result = fullNumber[thirdNumber] + ' hundred ' + fullNumber[firstNumber]
    }else if(+number.toString().length === 3) {
        result = fullNumber[thirdNumber] +  ' hundred '  + num[secondNumber] + 'ty ' + fullNumber[firstNumber]
    } else if(+number.toString().length === 2 && secondNumber === 1 && firstNumber === 0) {
        result = fullNumber[10]
    } else if(+number.toString().length === 2 && secondNumber === 1 && firstNumber === 1) {
        result = fullNumber[11]
    } else if(+number.toString().length === 2 && secondNumber === 1 && firstNumber === 2) {
        result = fullNumber[12]
    } else if(+number.toString().length === 2 && secondNumber === 1 && firstNumber === 4) {
        result = fullNumber[firstNumber] + 'teen'
    } else if(+number.toString().length === 2 && secondNumber === 1) {
        result = num[firstNumber] + 'teen'
    } else if(+number.toString().length === 2 && firstNumber === 0) {
        result = num[secondNumber] + 'ty'
    } else if(+number.toString().length === 2) {
        result = num[secondNumber] +  'ty ' + fullNumber[firstNumber]
    } if (+number.toString().length === 1) {
        result = fullNumber[firstNumber]
    }
    return result
        
    }
    
    

