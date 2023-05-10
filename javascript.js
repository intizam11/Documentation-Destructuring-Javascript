// destructuring assignment


// 1 
const coba = ["satu", "dua", "tiga"];
const [a, b, c] = coba
console.log(a);
console.log(b);
console.log(c);
// 1


// 2
const coba2 = ["satu", "dua", "tiga"];
const [a2, , c2] = coba2
console.log(a2);
console.log(c2);
// 2


// 3
// swap item
let a3 = 1;
let b3 = 2;
[a3, b3] = [b3, a3]
console.log(a3);
console.log(b3);
// 3

// 4
function coba() {
    return [1, 2]
}
// sebelum destructuring variabel
const a4 = coba();
console.log(a4);
// output [1,2]

// sesudah destructuring variabel
const [a5, b5] = coba();
console.log(a5);
// output 2

// 4


// 5
// rest parameter
const [a6, ...values] = [1, 2, 3, 4, 5];
console.log(a6);
// output 1
console.log(values);
// output [2,3,4,5]
// 5



//object

// object 1
const person = {
    nama: "intizam",
    umur: "20",
    email: "intizamkz@mail.com"
}
const { nama, umur, email } = person;
console.log(nama);
console.log(umur);
console.log(email);
// object 1


// object 2
const person2 = {
    nama2: "almanar",
    umur2: 20,
    email2: "intizamkz@gmail.com",
}
const { nama2, email2 } = person2
console.log(nama2);
console.log(email2);
// object 2


// object 3
const { nama3, umur3, email3 } = { nama3: "almanar", umur3: 20, email3: "intizamkz@gmail.com" };
console.log(nama3);
// output "almanar"

// object 3


// object 4
const person4 = {
    nama4: "almanar",
    umur4: 20,
    email4: "intizamkz@gmail.com",
}

const { nama3: n, umur3: u, email4: e4 } = person4
console.log(n);
// output "almanar"
// object 4


// object 5
// memberikan default value jika tidak ada di properti object
const person5 = {
    nama5: "almanar",
    umur5: 20,
    email5: "intizamkz@gmail.com",

}

const { nama4, umur4, email4, isMarried = false } = person4;
console.log(isMarried);
// output false
// object 5


// object 6
const person6 = {
    nama6: "almanar",
    umur6: 20,
    email6: "intizamkz@gmail.com",
}
const { nama5: n5, umur5: u5, email5: e5, isMarried2: i5 = false } = person6;
console.log(i5);
// output false

// object 6


// object 7 Rest Parameter
const person7 = {
    nama7: "almanar",
    umur7: 20,
    email7: "intizamkz@gmail.com",
}

const { nama7, ...value7 } = person7;
console.log(value7);
// output {umur7: 20, email7: "intizamkz@gmail.com"}

// object 7




// object 8

const person8 = {
    id: 1,
    nama8: "intizam",
    umur8: 20,
}

const getPerson = () => {
    return person8.id
}
console.log(getPerson(person8));
//   output 1


const person9 = {
    id: 1,
    nama8: "intizam",
    umur8: 20,
}

const getPerson1 = ({ id }) => {
    return id
}

console.log(getPerson1(person9))

// object 8



//object