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
}, function r1() {
    console.log("handler for pr1")
    throw 300;
}) //return pr2 {value: undefined, state: pending, onFulfilled: [g], onRejected: []}
.then(function g(value) {
    // fulfill calblback for pr2
    console.log("Value in second then", value);
    return value*2;
}) //return pr3 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}
.then(function g(value) {
    console.log("Value in second then", value);
    return value*2;
}) //return pr4 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}
.catch((error) => {
    // exception handler
    console.log("Some execption came in between", error)
})