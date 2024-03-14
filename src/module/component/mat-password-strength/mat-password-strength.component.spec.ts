import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MatPasswordStrengthComponent} from './mat-password-strength.component';
import {MatProgressBarModule} from '@angular/material';
import {SimpleChange} from '@angular/core';
import {NgxCombinationGeneratorService} from 'ngx-combination-generator';
import {Colors} from '../../enum/colors.enum';

describe('PasswordStrengthComponent', () => {
  let component: MatPasswordStrengthComponent;
  let fixture: ComponentFixture<MatPasswordStrengthComponent>;
  const generator = new NgxCombinationGeneratorService();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule],
      declarations: [MatPasswordStrengthComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a password input', () => {
    expect(component.password).toBeUndefined();
  });

  it('should have a warn color and strength equal to 0 when no password is provided', () => {
    expect(component.color).toBe(Colors.warn);
    expect(component.strength).toBe(0);
  });

  it('should not calculate the strength of the password', () => {
    const calculatePasswordStrengthSpy = jest.spyOn(component, 'calculatePasswordStrength');
    component.password = 'testPass';
    component.externalError = true;
    component.ngOnChanges({
      password: new SimpleChange(null, component.password, true),
      externalError: new SimpleChange(null, component.externalError, true)
    });
    fixture.detectChanges();
    expect(calculatePasswordStrengthSpy).not.toHaveBeenCalled();
    expect(component.color).toBe(Colors.warn);
  });

  it('should not calculate the strength of the password when externalError is provided', () => {
    const calculatePasswordStrengthSpy = jest.spyOn(component, 'calculatePasswordStrength');
    component.password = 'testPass123!';
    component.externalError = true;
    component.ngOnChanges({
      password: new SimpleChange('testPass', component.password, false),
      externalError: new SimpleChange(false, component.externalError, false)
    });
    fixture.detectChanges();
    expect(calculatePasswordStrengthSpy).not.toHaveBeenCalled();
    // todo: 19.4.18 - to check
    // expect(component.color).toBe(Colors.warn);
  });

  it('should calculate the strength of the password', () => {
    const calculatePasswordStrengthSpy = jest.spyOn(component, 'calculatePasswordStrength');
    component.password = 'testPass2';
    component.externalError = true;
    component.ngOnChanges({
      password: new SimpleChange('testPass', component.password, false),
    });
    fixture.detectChanges();
    expect(calculatePasswordStrengthSpy).toHaveBeenCalled();
  });

  it('should calculate the strength of the password on int if the password is provided', () => {
    const calculatePasswordStrengthSpy = jest.spyOn(component, 'calculatePasswordStrength');
    component.password = '#A2lsam,#af21af1!';
    component.ngOnInit();
    fixture.detectChanges();
    expect(calculatePasswordStrengthSpy).toHaveBeenCalled();
  });

  it('should calculate the strength of the password when password is directly provided', () => {
    const calculatePasswordStrengthSpy = jest.spyOn(component, 'calculatePasswordStrength');
    component.password = 'testPass3';
    component.externalError = false;
    component.ngOnChanges({
      password: new SimpleChange(component.password, component.password, false),
    });
    fixture.detectChanges();
    expect(calculatePasswordStrengthSpy).toHaveBeenCalled();
  });

  it('should have min input', () => {
    const calculatePasswordStrengthSpy = jest.spyOn(component, 'calculatePasswordStrength');
    component.ngOnInit();
    // default values
    expect(component.min).toEqual(8);
    expect(component.containAtLeastMinChars).toBeUndefined();
    component.min = 5;
    component.password = '1234';
    component.ngOnChanges({
      min: new SimpleChange(component.min, 5, false),
      password: new SimpleChange(undefined, component.password, false),
    });
    fixture.detectChanges();
    expect(calculatePasswordStrengthSpy).toHaveBeenCalled();
    expect(component.containAtLeastMinChars).toBeFalsy();
    component.password = '12345';
    component.ngOnChanges({
      password: new SimpleChange('1234', component.password, false),
    });
    fixture.detectChanges();
    expect(component.containAtLeastMinChars).toBeTruthy();
  });

  it('should strength = 20 and color = warn when the password only contain one char ', () => {
    const testChars = ['A', '1', 'a', '.'];
    testChars.forEach(char => {
      component.password = char;
      component.calculatePasswordStrength();
      expect(component.strength).toBe(20);
      expect(component.color).toBe(Colors.warn);
    });
  });

  it('should strength = 40 and color = accent when the password ave at least 8 chars with lower case letters',
    () => {
      component.password = 'abcdefgw';
      component.calculatePasswordStrength();
      expect(component.strength).toBe(40);
      expect(component.color).toBe(Colors.accent);
    });

  it('should strength = 40 and color = accent when the password fulfills 2 criteria ',
    () => {
      const charsList = ['a', 'A', '1', '!'];
      const combinations = generator.loadCombinationList(charsList, 2, 2, true);
      combinations.forEach(combination => {
        component.password = combination;
        component.calculatePasswordStrength();
        expect(component.strength).toBe(40);
        expect(component.color).toBe(Colors.accent);
      });
    });

  it('should strength = 60 and color = accent when the password fulfills 3 criteria ',
    () => {
      const charsList = ['a', 'A', '9', '!', '123456'];
      const combinations = generator.loadCombinationList(charsList, 3, 3, true);

      combinations.forEach(combination => {
        const isCharDuplicate = new RegExp(/^.*(.).*\1.*$/);
        if (!isCharDuplicate.test(combination)) {
          component.password = combination;
          component.calculatePasswordStrength();
          expect(component.strength).toBeGreaterThanOrEqual(60);
          expect(component.color).toBe(Colors.accent);
        }
      });
    });

  it('should strength at least 80 and color = accent or primary when the password fulfills 4 criteria ',
    () => {
      const charsList = ['a', 'A', '9', '!', 'bcdef'];
      const combinations = generator.loadCombinationList(charsList, 4, 4, true);

      combinations.forEach(combination => {
        const isCharDuplicate = new RegExp(/^.*(.).*\1.*$/);
        if (!isCharDuplicate.test(combination)) {
          component.password = combination;
          component.calculatePasswordStrength();
          expect(component.strength).toBeGreaterThanOrEqual(80);
          component.strength > 80 ? expect(component.color).toBe(Colors.primary) : expect(component.color).toBe(Colors.accent);
        }
      });
    });

  it('should strength at least 80 and color = accent when the password fulfills 4 criteria and accentThreshold set to 100',
    () => {
      const charsList = ['a', 'A', '9', '!', 'bcdef'];
      const combinations = generator.loadCombinationList(charsList, 4, 4, true);
      const accentThreshold = 100;

      combinations.forEach(combination => {
        const isCharDuplicate = new RegExp(/^.*(.).*\1.*$/);
        if (!isCharDuplicate.test(combination)) {
          component.password = combination;
          component.accentThreshold = accentThreshold;
          component.calculatePasswordStrength();
          expect(component.strength).toBeGreaterThanOrEqual(80);
          component.strength < accentThreshold ? expect(component.color).toBe(Colors.accent) : expect(component.color).toBe(Colors.primary);
        }
      });
    });

  it('should strength equal 100 and color = primary  when the password fulfills all 5 criteria ',
    () => {
      const charsList = ['a', 'A', '9', '!', 'bcdef'];
      const combinations = generator.loadCombinationList(charsList, 5, 5, true);

      combinations.forEach(combination => {
        const isCharDuplicate = new RegExp(/^.*(.).*\1.*$/);
        if (!isCharDuplicate.test(combination)) {
          component.password = combination;
          component.calculatePasswordStrength();
          expect(component.strength).toBe(100);
          expect(component.color).toBe(Colors.primary);
        }
      });
    });

  it('should not validate custom regexp', () => {
    const parseCustomValidatorsRegexSpy = jest.spyOn(component, 'parseCustomValidatorsRegex');
    const charsList = ['a', 'B', '1', '!', 'sdkg', 'ä'];
    const combinations = generator.loadCombinationList(charsList, 5, 5, true);

    combinations.forEach(combination => {
      const isCharDuplicate = new RegExp(/^.*(.).*\1.*$/);
      if (!isCharDuplicate.test(combination)) {
        component.password = combination;
        component.calculatePasswordStrength();
        expect(parseCustomValidatorsRegexSpy).not.toHaveBeenCalled();
      }
    });
  });

  it('should validate custom regexp', () => {
    const parseCustomValidatorsRegexSpy = jest.spyOn(component, 'parseCustomValidatorsRegex');
    const charsList = ['a', 'B', '1', '!', 'sdkg', 'ä'];
    component.password = 'Ad1ds?ßüöääÄ';
    component.customValidator = new RegExp(/^(?=.*?[äöüÄÖÜß])/);
    component.ngOnInit();
    expect(parseCustomValidatorsRegexSpy).toHaveBeenCalled();
    expect(component.strength).toBe(100);
  });

});
