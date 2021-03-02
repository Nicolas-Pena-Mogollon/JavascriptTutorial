/*var atrib = "firstname";
var person = {
	"first name": "pepito",
	"last name": "perez",
	"age": 30,
	"subjects": ["web development", "direrential calculous", "physiscs"],
	"Program": { "name": "Systems Engineer", "foundedAt": 1990 },
	"active": true
};
/*console.log(person["Program"]["name"])
*/

/*console.log(person.hasOwnProperty("code"));
*/
/*Un nuevo atributo*/
/*student["code"] = "20210115426";
student.code="fewmmewmkdwmkw";
delete student.code;
*/
/*Si no encuentra code lo pone como no definido*/
/*console.log(person["code"] || "No definido");
*/
/*Lista de estudiantes*/
var students = [{
	"first name": "pepito",
	"last name": "perez",
	"age": 30,
	"subjects": ["web development", "direrential calculous", "physiscs"],
	"Program": { "name": "Systems Engineer", "foundedAt": 1990 },
	"active": true
}, {
	"first name": "Ana",
	"last name": "xf",
	"age": 10,
	"subjects": ["web development", "physiscs"],
	"Program": { "name": "Systems Engineer", "foundedAt": 1990 },
	"active": true
}];

console.log(students[0]["first name"])
var arrayExample = [[1, 2], [3, 4], [0, 0]];
console.log(arrayExample[0][1]);
/*Agregar al final*/
students.push({
	"first name": "lola",
	"last name": "silva"
});
/*Quita el ultimo elemento del array*/
students.pop();

/*Remueve la primera posición de la lista*/
students.shift();

/*insersion al principio*/
students.unshift({
	"first name": "lola",
	"last name": "silva"
});

/*Funciones*/
function addStudent(message = "helo student") {
	return message
}

console.log(addStudent());
/*arrow functions comprimir funciones de una sola líne a de código*/

(message) => {
	return message;
}
console.log("holiwis")

var hello =(name) => "Hello"+name;

console.log(hello("/(°<>°)\\"));








