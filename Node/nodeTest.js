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

// const audy = new Car('audi');
// const BMW = new Car('BMW');
// const reno = new Car('reno');

// const arrCar = [audi,BMW,reno];

// arrCar.forEach(car => {
//     car.on('speed', (text) => {
//         console.log(`Максимальная скорасть ${text}км/ч`);
//     });
// });

// audi.emit('speed',240);
// BMW.emit('speed',342);
// reno.emit('speed',123);

// ====================================

// Read and write file

// const fs = require('fs');

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

// fs.unlink('./new_dir/new_text.txt', () => {
//     fs.rmdir('new_dir', () => {
//         console.log('Всё успешно удалено');
//     });
// });

// ==============================
// Local server

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('URL страницы' + req.url);
//     res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
//     res.end('Локальный сервер');
// });

// server.listen(5500, '127.0.0.1');
// console.log('Мы отслеживаем порт 5500');

// ============================================

// Потоки

// const fs = require('fs');

// const readText = fs.createReadStream(__dirname + '/text.txt');
// const writeText = fs.createWriteStream(__dirname + '/newText.txt');
// readText.on('data', (chunk) => {
//     console.log('Подгрузка данных:');
//     writeText.write(chunk)
// });

// ===============================================
// Функция pipe() и поточная загрузка данных на стораницу

// const fs = require('fs');



// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('URL страницы' + req.url);
    // res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    
    // const readText = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    // readText.pipe(res);

    // res.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
//     const obj = {
//         model: 'BMW',
//         speed: '240 km',
//         color: 'red'
//     };
//     res.end(JSON.stringify(obj));
// });

// server.listen(5500, '127.0.0.1');
// console.log('Мы отслеживаем порт 3000');
// ==================================================

// Переход с одной страницы на другую

// const fs = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
// console.log('URL: ' + req.url);
//     if (req.url === '/index' || req.url === '/') {
//         res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if (req.url === '/page2') {
//         res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//         fs.createReadStream(__dirname + '/page2.html').pipe(res);
//     } else if (req.url === '/page3') {
//         res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//         fs.createReadStream(__dirname + '/page3.html').pipe(res);
//     } else {
//         res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
    
// });

// server.listen(5500, '127.0.0.1');
// console.log('Мы отслеживаем порт 3000');
// ==================================================

// Library EXPRESS

// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//     console.log('URL: ' + req.url);
//     res.send('This is page 1');
// });
// app.get('/news', (req, res) => {
//     console.log('URL: ' + req.url);
//     res.send('This is news');
// });
// app.get('/news/:id', (req, res) => {
//     console.log('URL: ' + req.url);
//     res.send('ID is - ' + req.params.id);
// });

// =======
// const app = express();

// app.set('view engine', 'ejs');
// app.use('/public', express.static('public'));

// app.get('/', (req, res) => {
//     console.log('URL: ' + req.url);
//     res.render('home');
// });
// app.get('/page2', (req, res) => {
//     console.log('URL: ' + req.url);
//     res.render('twoPage');
// });
// app.get('/news/:id', (req, res) => {
//     console.log('URL: ' + req.url);
//     const obj = {
//         title: 'Новости',
//         id: 35,
//         arr: ['Названия статей','Страницы','Числа 1 2 3 4',48894]
//     };
//     res.render('news', {newsId: req.params.id, obj: obj});
// });

// app.listen(5500);

// =====================================================

// Forma

const express = require('express');
var bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    // console.log('URL: ' + req.url);
    res.render('home');
});
app.get('/page2', (req, res) => {
    // console.log('URL: ' + req.url);
    res.render('twoPage');
});

app.post('/page2',urlencodedParser, (req, res) => {
    // if (!req.body) {return res.sendStatus(400);}
    console.log(req.body);
    res.render('ansForm', {data: req.body});
});
app.get('/news/:id', (req, res) => {
    // console.log('URL: ' + req.url);
    const obj = {
        title: 'Новости',
        id: 35,
        arr: ['Названия статей','Страницы','Числа 1 2 3 4',48894]
    };
    res.render('news', {newsId: req.params.id, obj: obj});
});


app.listen(5500);

