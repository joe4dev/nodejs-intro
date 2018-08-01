// Synchronous
console.log('# Synchronous');
console.log('First');
console.log('Second');

// Asynchronous
console.log('# Asynchronous');
setTimeout(function() {
        console.log('First');
    }, 3000);
console.log('Second');

 // Asynchronous2 (equivalent alternative)
// console.log('# Asynchronous2');
// var first_function = function() {
//     console.log('First');
// }
// setTimeout(first_function, 3000);
// console.log('Second');
