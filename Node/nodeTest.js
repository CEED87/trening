// console.log(__filename)
// console.log(__dirname);
// ===================================

// const count = [1,22,4,22,4];

// const getCount = require('./nodeExp');

// console.log(getCount.newArr(count));
// console.log(getCount.sum(54, 4));
// console.log(getCount.num);
// =======================================

// Events

// const events = require('events');
// // const myEvent = new events.EventEmitter();

// // myEvent.on('other',(text) => {
// //     console.log(text);
// // });
// // myEvent.emit('other','Событие сработало');

// const util = require('util');

// class Car {
//     constructor(model) {
//         this.model = model;
//     }
// }

// util.inherits(Car, events.EventEmitter);

// const audy = new Car('audy');
// const BMW = new Car('BMW');
// const reno = new Car('reno');

// const arrCar = [audy,BMW,reno];

// arrCar.forEach(car => {
//     car.on('speed', (text) => {
//         console.log(`Максимальная скорасть ${text}км/ч`);
//     });
// });

// audy.emit('speed',240);
// BMW.emit('speed',342);
// reno.emit('speed',123);

// ====================================

// Read and write file

const fs = require('fs');

//  const text = fs.readFileSync('text.txt','utf-8');
//  console.log(text)
//  console.log('ssf3irfh')
// const mess = "Привет мир!\n" + text;

// fs.writeFileSync('text.txt', mess);
// console.log(write);

// fs.readFile('text.txt','utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

// fs.writeFile('newText.txt', 'Hi, it is me!', (err, data) => {});

// console.log('dsfdf')
// fs.unlink('newText.txt',() => {})

// fs.mkdirSync('newDir')
// fs.rmdirSync('newDir');

// fs.mkdir('new_dir', () => {
//     fs.writeFile('./new_dir/new_text.txt','Новый фйл в новой папке',() => {});
// });

fs.unlink('./new_dir/new_text.txt', () => {
    fs.rmdir('new_dir', () => {
        console.log('Всё успешно удалено');
    });
});



