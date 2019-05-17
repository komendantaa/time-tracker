import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '@tracker/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    PipesModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule {}
