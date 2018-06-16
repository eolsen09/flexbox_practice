console.log('this file is linked!');

var student1 = 'Student: Madeline Carr';
console.log(student1);

var major1 = 'Major: World Religion';
console.log(major1);

var maddyEmail = 'Email: maddog@cg.edu';
console.log(maddyEmail);

var maddyGpa = 'GPA: 3.0';
console.log(maddyGpa);

var maddyCourses = "Courses: Buddhism, Hinduism";
console.log(maddyCourses);

var classYear = [
  {"gYear": 2018,
  "gClass": "High School Senior"},

  {"gYear": 2019,
  "gClass": "High School Junior"},

  {"gYear": 2020,
  "gClass": "High School Sophmore"},

  {"gYear": 2021,
  "gClass": "High School Freshman"}
];

var yearPrompt = prompt("What month are you graduating?");
var classPrompt = prompt("What year are you graduating?");

function welcomeStudents() {
  if (!(yearPrompt == "May" || yearPrompt == "December")) {
    alert("This is not a valid month");
    return false;
  } else {
    for (var i = 0; i < classYear.length; i++) {
      var classG = classYear[i].gYear;
      var currentClass = classYear[i].gClass;
      if (classG == classPrompt) {
        alert("You're a " + currentClass + ". You will graduate in " + classG + ".");
      }
    }

  }
  console.log("Error");
  return false;
}

welcomeStudents();
