function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function named(){}

}

function returnsAnAnonymousFunction() {

    return() => jaVonnIsAmazing
}

// const splitDrivers = function(drivers){
//     return drivers.slice(0, 2);
// };

// const returnTwoDrivers = function(drivers){
//     return drivers.slice(-2);
// };