import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module"
import { DashboardComponent } from "./core/dashboard.component"

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, ModelModule, CoreModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
