import {Component, Input, OnInit} from '@angular/core';
import {MatPasswordStrengthComponent} from '../mat-password-strength/mat-password-strength.component';
import {animate, animateChild, keyframes, query, stagger, style, transition, trigger, useAnimation} from '@angular/animations';
import {shake} from '../../animations/index';

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
      transition(':enter', [
        style({'backface-visibility': 'visible'}),
        animate(
          '{{ timing }}s {{ delay }}s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
              offset: 0,
            }),
            style({
              opacity: 1,
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
              offset: 0.4,
            }),
            style({
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
              offset: 0.6,
            }),
            style({
              transform:
                'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
              offset: 0.8,
            }),
            style({
              transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
              offset: 1,
            }),
          ])
        ),
      ], {params: {timing: 1, delay: 0, rotateX: 1, rotateY: 0}}),
    ]),
    trigger('negativeState', [
      transition(':enter', useAnimation(shake)),
    ]),
  ],
})
export class MatPasswordStrengthInfoComponent implements OnInit {

  @Input()
  passwordComponent: MatPasswordStrengthComponent;

  @Input()
  enableScoreInfo = false;

  @Input()
  lowerCaseCriteriaMsg = 'contains at least one lower character';

  @Input()
  upperCaseCriteriaMsg = 'contains at least one upper character';

  @Input()
  digitsCriteriaMsg = 'contains at least one digit character';

  @Input()
  specialCharsCriteriaMsg = 'contains at least one special character';

  @Input()
  customCharsCriteriaMsg = 'contains at least one custom character';

  @Input()
  minCharsCriteriaMsg: string;

  @Input()
  matIconDone = 'done';

  @Input()
  matIconError = 'error';

  ngOnInit(): void {
    if (!this.minCharsCriteriaMsg) {
      this.minCharsCriteriaMsg = `contains at least ${this.passwordComponent.min} characters`
    }
  }

}
