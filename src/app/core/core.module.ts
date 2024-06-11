import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [BrowserModule, ModelModule],
  declarations: [DashboardComponent],
  exports: [ModelModule, DashboardComponent],
  providers: []
})
export class CoreModule { }
