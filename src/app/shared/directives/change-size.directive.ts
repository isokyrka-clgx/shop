import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeSize]'
})
export class ChangeSizeDirective {

  @Input() size: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') onElementClick() {
    if (this.size) {
      this.renderer.setStyle(this.element.nativeElement, 'font-size', this.size);
    }
  }
}
