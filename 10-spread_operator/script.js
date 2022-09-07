let person = {
    name: "John",
    age: 35
}

let contact = {
    phoneNumber: 4566889900,
    email:"pswtei@gmail.com"
}

// let copia = {... person};
// copia.age = 30;

// console.log(person);
// console.log(copia);

// com Spread Operator não se referência, senão teria mudado a idade de person

var copia = {...person, cidade: "Joiville", ...contact};

copia.cidade = 88;
console.log(copia);

let notas1 = [10,5,8,7];

let notas2 = [8, 9, 9,8];

let allNotes = [...notas1, ...notas2];
console.log(allNotes);
