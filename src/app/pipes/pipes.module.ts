import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment.pipe';
import { CounterPipe } from './counter/counter.pipe';
import { SpentPipe } from './spent/spent.pipe';

@NgModule({
  imports: [],
  declarations: [
    MomentPipe,
    CounterPipe,
    SpentPipe,
  ],
  exports: [
    MomentPipe,
    CounterPipe,
    SpentPipe,
  ]
})
export class PipesModule {}
