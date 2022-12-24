module.exports = function toReadable (num) {
    

        let words = ['one', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine', 'ten', 'eleven', 'twelve', 'teen', 'ty', 'hundred']
        let singleNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        let result = '';
        
        if (num.toString().length === 3) {
    
            for (let i = 0; i < 10; i++) {
    
                if (+num.toString()[0] === i) {
                    result = words[i-1] + ' ' + words[14]
                }
    
            }
    
            if (+num.toString()[1] === 1 && +num.toString()[2] === 1) {
                result = result + ' ' + words[10]
            } else if (+num.toString()[1] === 1 && +num.toString()[2] === 2) {
                result = result + ' ' + words[11]
            } else if (+num.toString()[1] === 1 && +num.toString()[2] === 0) {
                result = result + ' ' + words[9]
            } else
             if (+num.toString()[0] >= 2 ) {
                for (let i = 0; i < 10; i++) {
    
                    if (+num.toString()[0] === i) {
                        result = result + ' ' + words[i-1] + words[13]
                    }
    
                }
    
                for (let i = 0; i < 10; i++) {
                    if (+num.toString()[1] === 0) {
                        continue
                    } else if (+num.toString()[1] === i) {
                        result = result + ' ' + singleNum[i-1]
                    }
    
                }
            } else {
                for (let i = 0; i < 10; i++) {
    
                    if (+num.toString()[1] === i) {
                        result = words[i-1] + words[12]
                    }
    
                }
            }
    
    
        } else if (num.toString().length === 2) {
    
            if (+num.toString()[0] === 1 && +num.toString()[1] === 1) {
                result = words[10]
            } else if (+num.toString()[0] === 1 && +num.toString()[1] === 2) {
                result = words[11]
            } else if (+num.toString()[0] === 1 && +num.toString()[1] === 0) {
                result = words[9]
            } else
             if (+num.toString()[0] >= 2 ) {
                for (let i = 0; i < 10; i++) {
    
                    if (+num.toString()[0] === i) {
                        result = words[i-1] + words[13]
                    }
    
                }
    
                for (let i = 0; i < 10; i++) {
                    if (+num.toString()[1] === 0) {
                        continue
                    } else if (+num.toString()[1] === i) {
                        result = result + ' ' + singleNum[i-1]
                    }
    
                }
            } else {
                for (let i = 0; i < 10; i++) {
    
                    if (+num.toString()[1] === i) {
                        result = words[i-1] + words[12]
                    }
    
                }
            }
    
        } else {
            for (let i = 0; i < 10; i++) {
    
                if (+num.toString()[0] === i) {
                    result = singleNum[i-1]
                }
    
            }
        }
    
        
    }
    
    

