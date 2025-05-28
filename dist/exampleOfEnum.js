"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
function getAccess(role) {
    if (role === Role.Admin) {
        return "Full Access";
    }
    return "Limited Access";
}
const userRole = Role.Guest;
console.log(getAccess(userRole));
