//complete this code
class Person {
	constructor(name, age) {
		this.newName = name;
        this.newAge = age;	
    }
	get name() {
    return this.newName;
     }
	set age(age) {
		this.newAge = age;
     }
	
}

class Student extends Person {
	study(){
		console.log(this.newName + " is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.newName + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
