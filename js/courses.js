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
