import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[dialog]',
  standalone: true,
})
export class DialogDirective {
  constructor(protected ref: ElementRef) {

  }

  @HostListener('click')
  public click(): void {
    console.log('Dialog click');
  }
}