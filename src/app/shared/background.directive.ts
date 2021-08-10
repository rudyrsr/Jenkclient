import { Directive, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[codeBackground]'
})
export class BackgroundDirective implements OnDestroy, AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('login-background');
  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('login-background');
  }

}
