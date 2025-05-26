const myPromise: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
        let success: boolean = true;
        if (success) {
            res("Resolved");
        } else {
            rej("Rejected due to some error");
        }
    }, 2000);
});

myPromise.then((data: string) => {
    console.log(data);
}).catch((err: string) => {
    console.log(err);
});

