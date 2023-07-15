import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[blink]',
  standalone: true,
})
export class BlinkDirective implements OnChanges, OnInit, AfterViewInit {
  @Input()
  blink: string = 'yellow';

  @Input()
  delay: number = 1000;

  protected visible: boolean = true;

  constructor(protected ref: ElementRef) {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.ref.nativeElement.style.color = changes['blink'].currentValue;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.ref.nativeElement.style.visibility = this.visible ? 'hidden' : '';
      this.visible = !this.visible;
    }, this.delay);
  }

  ngAfterViewInit(): void {
  }

  @HostListener('click')
  clickme() {
    console.log('Clicked');
  }

  @HostListener('mouseover')
  hoverme() {
    console.log('Hover');
  }
}
