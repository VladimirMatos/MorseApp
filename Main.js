const interface = require('readline-sync');
const morseFunction = require('npm-morsecode-vladi')

var label = interface.question("Introducir palabra o texto que desea traduccir a MorseCode: ")
console.log("Morse Code: " + morseFunction(label))