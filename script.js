//complete this code
class Person {
	constructor(name, age) {
		this.newName = name;
        this.newAge = age;	
    }
	get name() {
    return this.newName;
     }
	set age(value) {
		this.newAge = value;
     }
	
}

class Student extends Person {
	study(){
		console.log(this.name + " is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
