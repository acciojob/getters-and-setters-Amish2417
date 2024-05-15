//complete this code
class Person {
	constructor(name, age) {
		get name() {
    return this.name;
     }
	set age(age) {
		this.newAge = age;
    
     }
    
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
