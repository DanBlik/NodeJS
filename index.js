//ls1

console.log('Hello, Node Js!');

const ansi = require('ansi');
const color = require('colors');

//Создаем курсор
const cursor = ansi(process.stdout);
console.log('hello, Wrld'.red);
console.log('i like cake and pies'.underline.green) // outputs red underlined text
console.log('OMG Rainbows!'.rainbow); // rainbow
//cursor.beep();
console.log("\x07");

/*
.white() //color
.bg.green() //bg
.write('Hello, World!')
.reset()
.bg.reset()
.write('\n');*/