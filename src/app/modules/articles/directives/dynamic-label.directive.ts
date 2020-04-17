import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDynamicLabelDirective]'
})
export class DynamicLabelDirective {
  @Input('appDynamicLabelDirective') minutes: any;
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this._renderer.setAttribute(this._el.nativeElement, 'title', this.minutes);
  }
}
