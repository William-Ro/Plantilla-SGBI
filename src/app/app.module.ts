import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { MaterialComponent } from './components/material/material.component';

@NgModule({
  declarations: [AppComponent, MaterialComponent],
  imports: [BrowserModule, AppRoutingModule, AppLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
