// Задание 1
// Вариант №1:
// Нужно выводить текстовые сообщения в html блок (общий вид приведён в приложенном файле «messages.jpg»).

// В блоке 1 — по очереди показываются все сообщения из списка с интервалом в несколько секунд. Показываться они могут несколько раз, но если пользователь нажал «х» слева в блоке 1, то это сообщение больше не будет показываться.

// Блок 2 — отображает полный список сообщений, удалённые сообщения помечены знаком «х», новые сообщения добавляются в конец списка.

// Блок 3 и 4 для отправки сообщений и включения в очередь для показа.

const tasks = ['Первоя', 'Вторая', 'Третья'];
const messing = document.querySelector('.messing');
const span = messing.querySelector('span');
const input = document.querySelector('input');
const button = document.querySelector('.button');
const allMessing = document.querySelector('.all_messing');
const tagDelet = document.querySelector('b');


const getTask = (newTask) => {
    newTask.forEach((el, i) => {
        setTimeout(() => {
        span.textContent = el;
    }, (i + 1) * 2000);
  });
};

const boxTasks = (arr) => {
    allMessing.innerHTML = '';
    arr.forEach(el => {
        allMessing.innerHTML += `<span>${el}</span>`;
    });
};

const addNewTask = () => {
    tasks.push(input.value);
    input.value = '';
    boxTasks(tasks);
    getTask(tasks);
    console.log(tasks);
};

const taskDelete = () => {

};
// console.log(tasks)
getTask(tasks);
boxTasks(tasks);
// 

button.addEventListener('click',addNewTask);


