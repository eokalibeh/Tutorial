// // document.write("External alert");
// // window.alert("my first alert")

// document.getElementById('demo').innerHTML='This is the new content of demo';

// // variables
// var happy = 'we are happy to see you. God bless you';

// document.getElementById('demo').innerHTML = happy;
// document.getElementById('demo2').innerHTML = happy;
// document.getElementById('demo3').innerText = happy


// // var fname = 'Sade';
// // document.getElementById('demo').innerHTML = 'Dear ' + fname + ', wishing you a happy birthday'; 

// var fname = 'Sade';
// // age = 20;
// date_of_birth = 2002;
// total = age + date_of_birth;

// document.getElementById('demo').innerHTML = `Dear ${fname} wishing you a happy birthday ${total}`;


// // arithmetic operators

// // var a = 10;
// // var b = 8;
// // var c = a + b;
// // document.getElementById('demo').innerHTML = c

// let a = 10, b = 8, c = a + b;
// document.getElementById('demo2').innerHTML = c

// document.write(c)

// let d = 10;
// d++;
// document.getElementById('demo3').innerHTML = d;
// document.getElementById('demo2').innerHTML =d+5;

// salutation begins

// let date = new Date();
// let hour = date.getHours();
// if (hour >= 0.01 && hour <= 11.59) {
//     document.write('Good Morning to You')
// }
// else if(hour >=12.00 && hour <= 15.30){
//     document.write('Good Afternoon to You')
// }
// else if(hour >= 15.31 && hour <= 20.00){
//     document.write('Good Evening to You')
// }
// // else if(hour >= 20.01 && hour <= 23.59){
// //     document.getElementById('time').innerHTML('Good Night')
// // }
// else{
//     document.getElementById('time').innerHTML("Good Night")
// };

// salutation ends

// const person = {
//     first_name: 'Epiphany',
//     // age: 18,
//     class: 'SS1',
//     dob: 2000,
//     current_year: 2022,
//     current_age: function () { return `this man is aged ${this.current_year - this.dob} years old` },
//     description: function () {
//         return `${this.first_name} is a man aged ${this.age} and he is in ${this.class}`
//     }
// }
// document.write(person.current_age());
// document.write(person.first_name + '' + person.age)



// function calcAge(p, _firstname){
//    document.write(`My age is ${p} and my name is ${_firstname}`);
// }
//  calcAge(19, 'Epiphany');



// function calcMath (q, r){
//     document.write(`${q + r}`);
// }
// calcMath(10, 5);

// const man = (q, r) => {
//     document.write(q+r);
// }
// man(10, 5)

// const man = (q, r) => q+r;
// document.write(man(10,5))

// const man = (q) => q;
// document.write(man(10));


















// const bald = (q, r) => q+r;
// document.write(bald(12,9))



// const students = ['star', 'freda', 'napoleon']
// // document.write(students[0])

// document.write(students[students.length - 1])


// // const studentInfo = [
// //     {
// //         name: 'Star',
// //         hobby: 'not coming to class'
// //     },
// //     {
// //         name: 'Freda',
// //         hobby: 'Disturbing in class',
// //     },
// //     {
// //         name: 'Napoleon',
// //         hobby: 'cracking dry jokes'
// //     },
// ]
// // document.write('<br>'+studentInfo[2].hobby)

// document.write('<br>' + students)


// let sentence = ''
// for (let i = 10; i <= 100; i += 10) {
//     sentence += `'<br>'They are ${i} in class today''<br>'`;
// }

// document.write(sentence);


// // let text = "";
// // for (let i = 0; i < 10; i++) {
// //   if (i === 3) { break; }
// //   document.write("'<br>'The number is " + i + "<br>");
// // }


// let text = "";
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { continue; }
//     document.write("'<br>'The number is " + i + "<br>");
// }



// const employees = [
//     {
//         name: 'Tobi',
//         active: true,
//         salary: 10000
//     },
//     {
//         name: 'Mike',
//         active: false,
//         salary: 12000
//     },
//     {
//         name: 'Kant',
//         active: true,
//         salary: 15000
//     },
//     {
//         name: 'Phlex',
//         active: true,
//         salary: 20000
//     },
//     {
//         name: 'Ola',
//         active: true,
//         salary: 20000
//     },
//     {
//         name: 'Dan',
//         active: false,
//         salary: 20000
//     },
//     {
//         name: 'Pere',
//         active: false,
//         salary: 18000
//     },
// ]


// // for (let empindex of employees) {
// //    document.write(`<br>Pay ${empindex.name} the amount of ${empindex.salary}'<br>'`)
// // };

// for (let empindex of employees) {
//     if (empindex.active === false){continue}
//     document.write(`<br>Pay ${empindex.name} the amount of ${empindex.salary} naira only'<br>'`)
//  };



//  let sms = 'qwertyuioplkjhgfdsaazxcvbnjmk'
//  let length= sms.length;
//  document.write(sms.length)



//  let texts = "Apple, Banana, Kiwi";
//  let part = texts.slice(7);
//  document.write(part)


//  let str = "Apple, Banana, Kiwi";
//  let parts = str.substr(6);
//  document.write(parts)

//  let texty = "Please visit Hotmail!";
//  let newText = texty.replace("Hotmail", "Gmail");
//  document.write(newText)


//  let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// document.write(text2)


let yep = "Mr Daniel is a facilitator at the DSiHub";
 let newYep = yep.replace("Daniel", "Epiphany");
 document.write(newYep)
