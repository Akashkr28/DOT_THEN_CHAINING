function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(time);
        }, time)
    });
}

createPromise(1000)
.then(function f(value) {
    console.log("Value in first then", value);
    return value*2;
})
.catch(function r1(err) {
    console.log("Don't worry r1 is here", err);
    throw "akash";
})
.catch(function g(value) {
    console.log("Value in second then", value);
    return value*2
})
.catch(function r2(err){
    console.log("Don't worry r2 is here", err);
    return 99;
})
.then(function h(value) {
    console.log("Value in third then", value);
    return value*2;
})