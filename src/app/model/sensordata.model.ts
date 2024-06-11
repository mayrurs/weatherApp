export class SensorData {

  constructor(public sensor: string,
              public value: number,
              public timestamp: string) { }

  static fromSensorData(d: SensorData) {
    return new SensorData(d.sensor, d.value, d.timestamp)
  }
}


