let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.name);
console.log(student["Grad Year"]);
student.greeting();
console.log(student["Favorite Teacher"].name);
console.log(student.courseLoad[0]);
