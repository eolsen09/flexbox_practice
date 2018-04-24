console.log('this file is linked!');

var classes1 = 'Courses: Astronomy, Physics';
console.log(classes1);

var teacher1 = "Teacher: Kinsey Oetjen";
console.log(teacher1);

var semester1 = "Semester: Fall 2018";
console.log(semester1);

var fallCourses = [
  ["Astronomy", "Science"],
  ["Biology", "Life Science"],
  ["web Development", "Computer Science"],
  ["Geometry", "Mathematics"],
  ["Buddism", "World Religions"]
];


function pickScience(courses) {
  for (var i = 0; i < courses.length; i++) {
    var currentCourse = courses[i]
    var department = currentCourse[1]
    if (department == "Science") {
      console.log("Science!");
    }
  }
}

pickScience(fallCourses)

var fallCourses = [
{
    "department": "Science",
  "course": "Astronomy"
 },
 {
    "department": "Life Science",
  "course": "Biology"
 },
 {
 "department": "Computer Science",
 "course": "Web Development"
 },
 {
 "department": "Mathematics",
 "course": "Geometry"
 },
 {
 "department": "World Religions",
 "course": "Buddhism"
 }
];
var userResponse = window.prompt(
    `What course would you like to pick?`
    );
// turn this back on or off
function isValidCourse (course) {
    for (var i = 0; i < fallCourses.length; i++) {
        if (fallCourses[i].course == course) {
      console.log("found correct course");
            return true;
        }
    }
  console.log("course does not exist");
    return false;
}
var successMsg = ('Enjoy ' + userResponse + '!');
var notFoundMsg = ('Please enter valid course.');
if (isValidCourse(userResponse) === true) {
  alert (successMsg);
} else {
  alert (notFoundMsg);
}
