import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWheel]'
})
export class WheelDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mousewheel', ['$event']) onMouseWheel(event) {
    this.onWheel(event);
  }

  onWheel(event: any) {
    if ((<WheelEvent>event).deltaY > 0) {
      this.renderer.setStyle(this.element.nativeElement, "font-size", "20px");
    } else {
      this.renderer.setStyle(this.element.nativeElement, "font-size", "15px");
    }
  }

}
