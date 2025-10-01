// Promise creation
// const promiseOne = new Promise(function (resolve, reject) {
//     // some asynchronous operation
//     // DB calls, Cryptography calls, API calls
//     setTimeout(function () {
//         console.log("Async operation 1 is completed");
//         resolve();
//     }, 1000);

// });

// // Consuming a promise
// promiseOne.then(function () {
//     console.log("Promise is consumed");
// });

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async operation 2 is completed");
//         resolve();
//     }, 2000);
// }).then(function () {
//     console.log("Promise 2 is consumed");
// });


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async operation 3 is completed");
//         resolve({ username: 'John', password: '12345' });
//     }, 3000);
// });

// promiseThree.then(function (user) {
//     console.log("User logged in", user);
//     return user.username;
// });

// promiseFour = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ email: 'adnan@something.com', password: 'test123' });
//         } else {
//             reject('Error in fetching user data');
//         }
//     }, 2000);
// });

// promiseFour.then((user) => {
//     console.log("User fetched", user);
//     return user.email;
// }).then((email) => {
//     console.log("Email is ", email);
// }).catch((error) => { console.log("Some error occured ", error) }).finally(() => {
//     console.log("Promise is resolved or rejected");
// });

promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ city: 'Surat', state: 'state' });
        } else {
            reject('Error in fetching location');
        }
    }, 2000);
});

async function fetchCity() {
    try {
        const response = await promiseFive;
        console.log("After promise is resolved " + response.city);
    }
    catch (error) {
        console.log("Some error occured " + error);
    }
}
fetchCity()
 
