import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]',
  standalone: true,
})
export class MultipleDirective { 
  constructor(private templateRef: TemplateRef<any>, private  viewContainer: ViewContainerRef){}

  @Input() 
  public set appMultiple(times : number) {
    this.viewContainer.clear();
    for(let i=0; i<times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
