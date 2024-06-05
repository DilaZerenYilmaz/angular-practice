import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {

  @Input() appButton: string = '';

  constructor(private element: ElementRef<HTMLElement>){}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appButton
  }
}
