import { Component } from "@angular/core";
import { SensorData } from "../model/sensordata.model";
import { Model } from "../model/repository.model";

@Component({
  selector: "paDashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"]
})
export class DashboardComponent {

  constructor(private model: Model) { }

  getSensorData(sensor: string): SensorData | undefined {
    return this.model.getSensorData(sensor);
  }

  get temperature(): number {
    let data = this.model.getSensorData('temperature')

    if (data != undefined) {
      return data.value
    } else {
      return -1000
    }
  }
}
