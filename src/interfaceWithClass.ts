interface Devices {
  name: string;

  display: () => void;
}

class CellPhone implements Devices {
  name;
  constructor(name: string) {
    this.name = name;
  }
  display() {
    console.log(`${this.name}`);
  }
}

const myDevice = new CellPhone("Asus");
myDevice.display();
