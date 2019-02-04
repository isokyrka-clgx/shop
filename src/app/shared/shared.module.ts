import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { WheelDirective } from './directives/wheel.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    WheelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    WheelDirective
  ]
})
export class SharedModule { }
