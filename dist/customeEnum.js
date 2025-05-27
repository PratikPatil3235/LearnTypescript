var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Approved"] = 3] = "Approved";
    Status[Status["Rejected"] = 5] = "Rejected";
})(Status || (Status = {}));
console.log(Status.Approved);
// This is allowed only with number type if enums
