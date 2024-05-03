function createPromise(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time);
        }, time)
    });
}


const pr1 = createPromise(10000); //first Promise Object
console.log("PR1", pr1);

const pr2 = pr1.then((val) => console.log("Resolving with", val), (val) => console.log("Rejecting with", val));
console.log("PR2", pr2); //Second promise Object