//Task1

function translateMorze() {
   let text = document.querySelector('.morze');
   text.value = decodeMorse(text.value);
}

var alphabet = {
   "-----": "0",
   ".----": "1",
   "..---": "2",
   "...--": "3",
   "....-": "4",
   ".....": "5",
   "-....": "6",
   "--...": "7",
   "---..": "8",
   "----.": "9",
   ".-": "A",
   "-...": "B",
   "-.-.": "C",
   "-..": "D",
   ".": "E",
   "..-.": "F",
   "--.": "G",
   "....": "H",
   "..": "I",
   ".---": "J",
   "-.-": "K",
   ".-..": "L",
   "--": "M",
   "-.": "N",
   "---": "O",
   ".--.": "P",
   "--.-": "Q",
   ".-.": "R",
   "...": "S",
   "-": "T",
   "..-": "U",
   "...-": "V",
   ".--": "W",
   "-..-": "X",
   "-.--": "Y",
   "--..": "Z",
   "/": " ",
   "-·-·--": "!",
   "·-·-·-": ".",
   "--··--": ","
};

function decodeMorse(str) {
   return str.split('   ').map(word => word.split(' ')
      .map(letter => alphabet[letter])
      .join('')).join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

