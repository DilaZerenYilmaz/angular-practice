import { Directive, Input, NgZone, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true,
})
export class WelcomeDirective implements OnInit {
  @Input() appWelcome?: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.viewContainer.clear();

      const welcomeView = this.viewContainer.createEmbeddedView(this.templateRef);
      welcomeView.rootNodes[0].textContent = "This content will change after 3000ms...";

      setTimeout(() => {
        this.viewContainer.clear();
        this.ngZone.run(() => {
          this.viewContainer.createEmbeddedView(this.templateRef);
        });
      }, this.appWelcome);
    });
  }
}
