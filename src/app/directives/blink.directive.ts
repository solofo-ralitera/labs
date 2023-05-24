import { Directive, TemplateRef, ViewContainerRef, AfterViewInit, Input, ElementRef } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[blink]'
})
export class BlinkDirective implements AfterViewInit {
  @Input() blink: number = 1000;
  @Input('blinkColor') color: string = "#ffffff";

  private displayStatus: boolean = true;
  
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<unknown>,
    private elementRef: ElementRef,
  ) {    
  }

  ngAfterViewInit(): void {
    console.log(this.color);
    window.setInterval(() => {
      this.displayStatus ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
      this.displayStatus = !this.displayStatus;
    }, this.blink);
  }
}