let mat = require('date-format');

let time = mat('hh:mm:ss', new Date());

let date = mat('dd/MM/yyyy', new Date());

console.log(time);

console.log(date);