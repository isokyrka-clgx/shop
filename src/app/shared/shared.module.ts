import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { WheelDirective } from './directives/wheel.directive';
import { ChangeSizeDirective } from './directives/change-size.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    WheelDirective,
    ChangeSizeDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    WheelDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
