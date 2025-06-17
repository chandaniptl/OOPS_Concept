class Car {
  constructor(model, engineType) {
    this.model = model;
    this.engineType = engineType;
    this._engineStatus = "off";
  }

  start() {
    this._engineStatus = "on";
    this._igniteEngine();
  }

  stop() {
    this._engineStatus = "off";
  }

  getEngineStatus() {
    return this._engineStatus;
  }

  _igniteEngine() {
      console.log("Engine ignition sequence initiated...");
      console.log("Engine is now running");
  }
}

const myCar = new Car("Sedan", "Gasoline");

myCar.start();
console.log("Engine status:", myCar.getEngineStatus());
myCar.stop();
console.log("Engine status:", myCar.getEngineStatus());
