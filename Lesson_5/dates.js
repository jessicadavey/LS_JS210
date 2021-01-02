// 1.

let today = new Date();

// 2.

// console.log(`Today's day is ${today.getDay()}.`);

// 3.

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// console.log(`Today's day is ${daysOfWeek[today.getDay()]}.`);

// 4. 

let dayOfWeek = daysOfWeek[today.getDay()];
let date = today.getDate();

// console.log(`Today's date is ${dayOfWeek}, the ${date}th.`);

// 5.

let dateSuffix = function(date) {

  let suffix;

  if (date === 11 || date === 12 || date === 13) {
    suffix = 'th';
  } else if (date % 10 === 1) {
    suffix = 'st';
  } else if (date % 10 === 2) {
    suffix = 'nd';
  } else if (date % 10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return String(date) + suffix;
}

// console.log(`Today's date is ${dayOfWeek}, the ${dateSuffix(date)}.`);

// 6.

let month = today.getMonth();
// console.log(`Today's date is ${dayOfWeek}, ${month} ${dateSuffix(date)}`);

// 7.

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// console.log(`Today's date is ${dayOfWeek}, ${months[month]} ${dateSuffix(date)}`);

// 8.

let formattedMonth = function(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
};

let formattedDay = function(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
};

let formattedDate = function(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  console.log(`Today's date is ${day}, ${month} ${dateSuffix(date.getDate())}.`);
}

// formattedDate(today);

// 9.

// console.log(today.getFullYear());
// console.log(today.getYear());

// 10.

// console.log(today.getTime());

// 11.

let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);

// formattedDate(tomorrow);

// 12.

let nextWeek = new Date(today.getTime());

// console.log(nextWeek === today);

// 13.

// console.log(nextWeek.toDateString() === today.toDateString());

// nextWeek.setDate(nextWeek.getDate() + 7);

// console.log(nextWeek.toDateString() === today.toDateString());

// 14. 

let padZeroes = function(stringNum) {
  if (stringNum.length === 1) {
    return '0' + stringNum;
  } else {
    return stringNum;
  }
}

let formatTime = function(date) {
  let minutes = String(date.getMinutes());
  let hours = String(date.getHours());


  return `${padZeroes(hours)}:${padZeroes(minutes)}`;
};

console.log(formatTime(today));