// let date = new Date();
// let min = date.getMinutes(.toString());
// let minhour = date.getHours(.toString());
// let time = hour + '.' + min;
// console.log(time);

// salutation begins

let date = new Date();
let hour = date.getHours();
if (hour >= 0.01 && hour <= 11.59) {
    document.write('Good Morning to You')
}
else if(hour >=12.00 && hour <= 15.30){
    document.write('Good Afternoon to You')
}
else if(hour >= 15.31 && hour <= 20.00){
    document.write('Good Evening to You')
}
// else if(hour >= 20.01 && hour <= 23.59){
//     document.getElementById('time').innerHTML('Good Night')
// }
else{
    document.getElementById('time').innerHTML("Good Night")
};

// salutation ends
