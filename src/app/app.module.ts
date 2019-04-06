import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JogoVelhaModule } from './jogo-velha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    JogoVelhaModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
