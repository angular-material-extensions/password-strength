import {Component, Input, ViewEncapsulation} from '@angular/core';

type Type = 'text' | 'password' ;

@Component({
  selector: 'mat-pass-toggle-visibility',
  templateUrl: './mat-pass-toggle-visibility.component.html',
  styleUrls: ['./mat-pass-toggle-visibility.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatPassToggleVisibilityComponent {

  @Input()
  isVisible: boolean;
  @Input()
  tabindex?: string;

  _type: Type = 'text';

  get type() {
    return this.isVisible ? 'text' : 'password';
  }

}
