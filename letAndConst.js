//  The code below will work in JS 
var container = document.getElementById('container');
for (var x = 0; x < 5; x++) {
    var current = x;
    container.innerHTML = current.toString();
}
console.log(current);
// Similar code using ES6
// Let enables to prevent variable current to be accessible outside for loop
// *NOTE COMMENT THE LINES 3-10*
var container = document.getElementById('container');
for (var x = 0; x < 5; x++) {
    var current_1 = x;
    container.innerHTML = current_1.toString();
}
console.log(current);
