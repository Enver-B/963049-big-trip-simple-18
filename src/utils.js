import dayjs from 'dayjs';
// Функция из интернета по генерации случайного числа из диапазона
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Рандомное(случайное) число
const getRandomElement = (elements) => {
  const randomElement = elements[Math.floor(Math.random() * elements.length)];
  return randomElement;
};

//получить случайный элемент из массива
const getArray = (elements) => [...new Set(elements)].slice(0, getRandomInteger(0, 8));

const humanizeTaskDueDate = (dueDate) => dayjs(dueDate).format('D MMMM');
const humanizeTaskDueTime = (dueTime) => dayjs(dueTime).format('HH:HH');

export {getRandomInteger, getRandomElement, getArray, humanizeTaskDueDate, humanizeTaskDueTime};
