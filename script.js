class Person {
	constructor(name, age) {
		this.newName = name;
		this._newAge = age;
	}
	get name(){
		return this.newName;
	}
	set age(age) {
		//return this._age;
		this._newAge = age;
	}
}
class Student extends Person {
	study() {
		console.log(`${this.newName} is studying`);
	}
}
class Teacher extends Person {
	teach () {
		console.log(`${this.newName} is teaching`);
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

//You  to  Ayush Acciojob (direct message) 16:57
//complete this code

