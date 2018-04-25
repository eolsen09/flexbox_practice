console.log('this file is linked!');
var teacher1 = 'Kinsey Oetjen';
console.log('Teacher: ' + teacher1);

var department1 = 'Physics';
console.log('Department: ' + department1);

var oetjenRating = [3.4, 5.0, 4.2];

function getRatingAvg(ratings){
  console.log(ratings);
  const sum = ratings.reduce((a,b) => a + b, 0);
  console.log(sum);
  return (sum / ratings.length);
}

console.log(getRatingAvg(oetjenRating));

var teacher2 = 'Michelle Reuther';
console.log('Teacher: ' + teacher2);

var department2 = 'Science';
console.log('Department: ' + department2);

var reutherRating = [3.5, 3.5, 3.5];

console.log(getRatingAvg(reutherRating));

var teacher3 = 'Lucia Brodribb';
console.log('Teacher: ' + teacher3);

var department3 = 'Mathematics';
console.log('Department: ' + department3);

var brodribbRating = [4.2, 4.2, 4.2];

console.log(getRatingAvg(brodribbRating));

var teacher4 = 'Erika Olsen';
console.log('Teacher: ' + teacher4);

var department4 = 'Computer Science';
console.log('Department: ' + department4);

var olsenRating = [4.0, 4.0, 4.0];

console.log(getRatingAvg(olsenRating));

var teacher5 = 'Bridgett Johnson';
console.log('Teacher: ' + teacher5);

var department5 = 'World Religions';
console.log('Department: ' + department5);

var johnsonRating = [3.9, 3.9, 3.9];

console.log(getRatingAvg(johnsonRating));

function addTeacherRating (ratings, newRating) {
  ratings.push(newRating);
}

do {
  var userRating = window.prompt('We would like for you to review Erika Olsen. Please enter a rating between 0.0 - 5.0')
  console.log(userRating);
  var userRatingInt = parseInt(userRating);
}
while (!(userRating >= 0.0 && userRating <= 5.0));

addTeacherRating (olsenRating, userRatingInt)
alert ('Thank you for your review! ' + teacher4 + ' average rating is now ' + getRatingAvg(olsenRating) + '.');
