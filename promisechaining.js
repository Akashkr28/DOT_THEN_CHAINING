function createPromise(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time);
        }, time)
    });
}


createPromise(10000) // returb pr1 {value: undefined, state: pending, onFulfilled: [f], onRejected: []}
.then((value) => {
    console.log("Value in first then", value);
    return value*2;
}) //return pr2 {value: undefined, state: pending, onFulfilled: [g], onRejected: []}
.then((value) => {
    console.log("Value in second then", value);
    return value*2;
}) //return pr3 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}
.then((value) => {
    console.log("Value in third then", value);
    return value*2;
}); //return pr4 {value: undefined, state: pending, onFulfilled: [h], onRejected: []}