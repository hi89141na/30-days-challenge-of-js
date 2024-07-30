//! Day 14: Classes
//! Tasks/Activities:
//todo Activity 1: Class Definition
//* Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person{
    constructor(fname, lname, age){
        this.firstName = fname;
        this.lastName=lname
        this.age = age;
        }
        greet(){
            return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years`;
        }
}
let person = new Person("Hina", "Nadeem", 18);
console.log(person.greet());
//* Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge= function(a){
    this.age = a;
}
 person.updateAge(20);
 console.log(`Updated age is ${person.age}`);
 

//todo Activity 2: Class Inheritance
//* Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID. 
class Student extends Person{
    constructor(fname, lname, age, id){
        super(fname,lname, age);
        this.studentID = id;
        Student.incrementCount();
    }
    static count=0;
    static incrementCount(){
        Student.count++;
    }
    getStudentID(){
        return this.studentID;
    }
}
let student = new Student("Hina", "Nadeem", 18, 44);
console.log(`Student ID is ${student.studentID}`);

//* Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
Student.prototype.greet= function(){
    return `Hello, my name is ${this.firstName}  ${this.lastName} and I am ${this.age} years and my StudentID is ${this.studentID}`;
}
console.log(student.greet());

//todo Activity 3: Static Methods and Properties
//* Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.genericGreeting = function() {
    return "Hello! How can I assist you today?";
};
console.log(Person.genericGreeting());
//* Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(`Total Number of students: ${Student.count}`);
//todo Activity 4: Getters and Setters
//* Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
console.log(`Full Name: ${student.getFullName()}`);
//* Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
Person.prototype.setName = function(fname, lname){
    this.firstName = fname;
    this.lastName = lname;
    }
person.setName("Nayab", "Nadeem");
    console.log(`Updated Full Name: ${person.getFullName()}`);