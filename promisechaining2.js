function createPromise(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(time);
        }, time)
    });
}

createPromise(1000) // return pr1 {value: undefined, state: pending, onFulfilled: [f], onRejected: []}
.then(function f(value) {
    console.log("Value in first then", value);
    return value*2;
}, function r1(value) {
    // rejector for pr1

    console.log("Executing r1", value);
    // return 700;
    throw 700;

}) //return pr2 {value: undefined, state: pending, onFulfilled: [g], onRejected: []}
.then(function g(value) {
    // fulfill calblback for pr2
    console.log("Value in second then", value);
    return value*2;
}, function r2(value) {
    // rejector for pr2

    console.log("Chill bro I m there", value);

}) //return pr3 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}
.then(function g(value) {
    console.log("Value in second then", value);
    return value*2;
}) //return pr4 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}







//  the above codes and below code is identical

//  const pr1 = createPromise(10000);
//  const pr2 = pr1.then(function f(value) {
//     console.log("Value in first then", value);
//     return value*2;
//  });

//  const pr3 = pr2.then(function g(value) {
//     console.log("Value in second then", value);
//     return value*2;
//  });
 
//  const pr4 = pr3.then(function h(value) {
//     console.log("Value in third then", value);
//     return value*2;
//  }); 

