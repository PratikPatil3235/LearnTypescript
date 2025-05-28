"use strict";
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            res("Resolved");
        }
        else {
            rej("Rejected due to some error");
        }
    }, 2000);
});
myPromise
    .then((data) => {
    console.log(data);
})
    .catch((err) => {
    console.log(err);
});
