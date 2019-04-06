import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoVelhaComponent } from './jogo-velha.component';
import { JogoVelhaService } from './shared';

@NgModule({
  declarations: [
    JogoVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JogoVelhaComponent
  ],
  providers: [
    JogoVelhaService
  ]
})
export class JogoVelhaModule { }
