// console.log(__filename)
// console.log(__dirname);
// ===================================

// const count = [1,22,4,22,4];

// const getCount = require('./nodeExp');

// console.log(getCount.newArr(count));
// console.log(getCount.sum(54, 4));
// console.log(getCount.num);
// =======================================

const events = require('events');
// const myEvent = new events.EventEmitter();

// myEvent.on('other',(text) => {
//     console.log(text);
// });
// myEvent.emit('other','Событие сработало');

const util = require('util');

class Car {
    constructor(model) {
        this.model = model;
    }
}

util.inherits(Car, events.EventEmitter);

const audy = new Car('audy');
const BMW = new Car('BMW');
const reno = new Car('reno');

const arrCar = [audy,BMW,reno];

arrCar.forEach(car => {
    car.on('speed', (text) => {
        console.log(`Максимальная скорасть ${text}км/ч`);
    });
});

audy.emit('speed',240);
BMW.emit('speed',342);
reno.emit('speed',123);



