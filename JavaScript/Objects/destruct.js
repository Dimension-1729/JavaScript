//How destructuting works

const course = {
    course_name : "Cyber Forensic",
    course_fees : 5000,
    course_instructor : "Arun Jaiswal"
}

//console.log(course.course_instructor);

//By using destructuring, we extract the value save it in a constant or var. and use it indefinite times we want.

const {course_name: foo} = course;
const {course_instructor: boo} = course;
console.log(foo);
console.log(boo);

