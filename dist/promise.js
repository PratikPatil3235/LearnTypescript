var myPromise = new Promise(function (res, rej) {
    setTimeout(function () {
        var success = true;
        if (success) {
            res("Resolved");
        }
        else {
            rej("Rejected due to some error");
        }
    }, 2000);
});
myPromise.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
