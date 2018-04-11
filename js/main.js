console.log('this file is linked!');
var teacher1 = 'Teacher: Kinsey Oetjen';
console.log(teacher1);

var department1 = 'Department: Physics';
console.log(department1);

var oetjenRating = [3.4, 5.0, 4.2];

var getRatingAvg = oetjenRating.reduce((total, oetjenRating) => total + oetjenRating) / oetjenRating.length;

console.log(getRatingAvg); 
