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
// age = 20;
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

const person = {
    first_name:'Epiphany',
    age: 18,
    class: 'SS1',
    dob: 2000,
    current_year: 2022,
    current_age: function(){return `this man is aged ${this.current_year - this.dob} years old`},
    description: function(){
        return `${this.first_name} is a man aged ${this.age} and he is in ${this.class}`
    }
}
document.write(person.current_age());
// document.write(person.first_name + '' + person.age)