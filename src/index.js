const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codedLetterList = [];
    let firstNumber = 0;
    for (let i = 0; i < expr.length / 10; i++) {
        codedLetterList.push( expr.slice(firstNumber, firstNumber + 10) );
        firstNumber += 10;
    }
  
    let morseCodedList = [];
    for (let letter of codedLetterList) {
        let codedString = '';
        while(letter.length) {
            switch(letter.slice(0, 2)) {
                case '10':
                    codedString += '.';
                    break;
        
                case '11':
                    codedString += '-';
                    break;
                
                case '**':
                    if (codedString[codedString.length - 1] !== ' ') {
                        codedString += ' ';
                    }
                    break;
        
                case '00':
                    codedString += '';
                    break;
            }
            letter = letter.slice(2);
        }
        morseCodedList.push(codedString);
    }
  
    let decodedString = '';
    for (let codedLetter of morseCodedList) {      
        if (codedLetter === ' ') {
            decodedString += codedLetter;
        }
        for (let key in MORSE_TABLE) {
            if (key === codedLetter) {
                decodedString += MORSE_TABLE[key];
            }
        }
    }
    return decodedString;
}

module.exports = {
    decode
}
