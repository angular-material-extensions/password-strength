import {Component, Input} from '@angular/core';
import {MatPasswordStrengthComponent} from '../mat-password-strength/mat-password-strength.component';
import {animate, animateChild, stagger, style, transition, trigger, useAnimation} from '@angular/animations';
import {query} from '@angular/animations';
import {flipInY, shake} from '../../animations';

@Component({
  selector: 'mat-password-strength-info',
  exportAs: 'matPasswordStrengthInfo',
  templateUrl: './mat-password-strength-info.component.html',
  styleUrls: ['./mat-password-strength-info.component.scss'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@items',
          stagger(300, animateChild())
        )
      ]),
    ]),
    trigger('items', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({transform: 'scale(1)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'scale(1)', opacity: 1, height: '*'}),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px'}))
      ]),
    ]),
    trigger('positiveState', [
      transition(':enter', useAnimation(flipInY)),
      // transition(':leave', useAnimation(flipInY)),
    ]),
    trigger('negativeState', [
      transition(':enter', useAnimation(shake)),
    ]),
  ],
})
export class MatPasswordStrengthInfoComponent {

  @Input()
  passwordComponent: MatPasswordStrengthComponent;

  @Input()
  enableScoreInfo = false;

}
