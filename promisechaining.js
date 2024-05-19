function createPromise(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time);
        }, time)
    });
}

/** METHOD - 1*/

createPromise(10000) 
.then((value) => {
    console.log("Value in first then", value);
    return value*2;
}) 
.then((value) => {
    console.log("Value in second then", value);
    return value*2;
}) 
.then((value) => {
    console.log("Value in third then", value);
    return value*2;
}) 
.then((value) => {
    console.log("Value in third then", value);
    return value*2;
});

/** METHOD - 2 */

createPromise(1000) // return pr1 {value: undefined, state: pending, onFulfilled: [f], onRejected: []}
.then(function f(value) {
    console.log("Value in first then", value);
    return value*2;
}) //return pr2 {value: undefined, state: pending, onFulfilled: [g], onRejected: []}
.then(function g(value) {
    console.log("Value in second then", value);
    return value*2;
}) //return pr3 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}
.then(function g(value) {
    console.log("Value in second then", value);
    return value*2;
}) //return pr4 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}


/** METHOD - 3 */

//  the above codes and below code is identical

 const pr1 = createPromise(10000);
 const pr2 = pr1.then(function f(value) {
    console.log("Value in first then", value);
    return value*2;
 });

 const pr3 = pr2.then(function g(value) {
    console.log("Value in second then", value);
    return value*2;
 });
 
 const pr4 = pr3.then(function h(value) {
    console.log("Value in third then", value);
    return value*2;
 }); 

