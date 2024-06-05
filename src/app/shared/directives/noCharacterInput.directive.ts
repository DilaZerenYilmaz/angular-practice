import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true,
})
export class NoCharacterInputDirective {

  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent): void {
    const inputElement = this.element.nativeElement as HTMLInputElement;

    const numbersRemovedTimeout = setTimeout(() => {
      let newValue = inputElement.value.replace(/[0-9]/g, '');
      inputElement.value = newValue;
    }, 50);

    inputElement.addEventListener('input', function inputListener() {
      clearTimeout(numbersRemovedTimeout);
      inputElement.removeEventListener('input', inputListener);
    });
  }
}
