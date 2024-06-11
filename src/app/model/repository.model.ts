import { Injectable, Signal, signal } from "@angular/core";
import { SensorData } from "./sensordata.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class Model {
  private sensordata = signal<SensorData[]>([]);
  private locator = (d: SensorData, sensor?: string) => d.sensor == sensor;

  constructor(private dataSource: StaticDataSource) {
    this.sensordata.set(this.dataSource.getData());
  }

  get SensorData(): Signal<SensorData[]> {
    return this.sensordata.asReadonly();
  }

  getSensorData(sensor: string): SensorData | undefined {
    return this.sensordata().find(d => this.locator(d, sensor));
  }
}
