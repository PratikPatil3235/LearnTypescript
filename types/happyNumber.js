function isHappy(num) {
    while (true) {
        let sum = 0;
        while (num > 0)
        {
            let rem = num % 10;
            sum += rem * rem;
            num = Math.floor(num / 10); 
        }
        if (sum == 1) return true
        else if (sum > 1 && sum <= 4)
        {
            return false;
        } else {
            num = sum;
        }
    }
}
export { isHappy };
