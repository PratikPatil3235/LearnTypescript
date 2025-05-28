interface PersonInterface {
  name: string;
  age: number;
  isMarried: boolean;
  gender: string;
  userLocation?: UserLocation;
}

interface UserLocation {
  city: string;
  pincode: number;
}

let personObj: PersonInterface = {
  name: "Pratik",
  age: 20,
  isMarried: false,
  gender: "male",
  userLocation: {
    city: "Pune",
    pincode: 416312,
  },
};

function displayPersonDetailsWithLocation(object: PersonInterface): void {
  console.log(
    `Name ${object.name}, Age: ${object.age}, Marriatel Status: ${
      object.isMarried ? "Married" : "Not Married"
    }, Gender: ${object.gender}.`
  );
  if (object.userLocation) {
    console.log(
      `city: ${object.userLocation.city} Pincode: ${object.userLocation.pincode}`
    );
  }
}

displayPersonDetailsWithLocation(personObj);
