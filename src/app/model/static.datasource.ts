import { Injectable } from "@angular/core";
import { SensorData } from "./sensordata.model";

@Injectable()
export class StaticDataSource {
  private data: SensorData[];

  constructor() {
    this.data = new Array<SensorData>(
      new SensorData("temperature", 24, "2024-06-10 12:00:00"),
      new SensorData("humidity", 54, "2024-06-10 12:01:00"));
  }

  getData(): SensorData[] {
    return this.data;
  }
}
