class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set setSize(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}
let newThing = new Thing();
newThing.setSize = 30;
console.log(newThing._size);
