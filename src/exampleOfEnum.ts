enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

function getAccess(role: Role) {
  if (role === Role.Admin) {
    return "Full Access";
  }
  return "Limited Access";
}

const userRole: Role = Role.Guest;
console.log(getAccess(userRole));
