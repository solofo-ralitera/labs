import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[blink]',
  standalone: true,
})
export class BlinkDirective implements OnChanges {
  @Input('blink') blink: boolean = true;

  @Input('blinkElse')
  blinkElse!: TemplateRef<undefined>;

  protected display: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['blink'].currentValue) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.createEmbeddedView(changes['blinkElse'].currentValue);
    }
  }

  constructor(
    protected container: ViewContainerRef,
    protected template: TemplateRef<undefined>
  ) {    
  }

}
