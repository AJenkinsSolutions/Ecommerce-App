import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ScreenSizeSignal } from '../../signals/screen-size-signal';

@Directive({
  selector: '[appScreenSize]',
  standalone: true
})
export class ScreenSizeDirective {


  updatedScreenSize!: string;

  constructor(private screenSizeSignal: ScreenSizeSignal, private renderer: Renderer2, private el: ElementRef) { }

  private setScreenSize(){

    const width = this.el.nativeElement.ownerDocument.defaultView.innerWidth;

    //1. Check the current screen width 
    if(width < 600){
      this.updatedScreenSize = 'small';
    } else if (width >= 600 && width < 1024) {
      this.updatedScreenSize = 'medium';
    } else {
      this.updatedScreenSize = 'large';
    }
    //2. Update the screen size signal
    this.screenSizeSignal.currentScreenSize.set(this.updatedScreenSize)
  }

}
