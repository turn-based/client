import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';
import { ClientComponent } from './client.component';
import { DebugComponent } from './debug.component';

@NgModule({
  declarations: [
    ClientComponent,
    DebugComponent,
  ],
  imports: [
    CommonModule,

    DynamicModule.withComponents(null),
  ],
  exports: [
    ClientComponent,
  ]
})
export class TurnBasedCoreModule {
}
