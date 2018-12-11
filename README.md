<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.rawgit.com/angular-material-extensions/password-strength/master/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/password-strength - Material password strength meter to indicate how secure is the provided password - Angular V7 supported

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fpassword-strength.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fpassword-strength)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/password-strength)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/password-strength/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/password-strength)
[![Build Status](https://travis-ci.org/angular-material-extensions/password-strength.svg?branch=master)](https://travis-ci.org/angular-material-extensions/password-strength)
[![codecov](https://codecov.io/gh/angular-material-extensions/password-strength/branch/master/graph/badge.svg)](https://codecov.io/gh/angular-material-extensions/password-strength)
[![dependency Status](https://david-dm.org/angular-material-extensions/password-strength/status.svg)](https://david-dm.org/angular-material-extensions/password-strength)
[![devDependency Status](https://david-dm.org/angular-material-extensions/password-strength/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/password-strength#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/password-strength.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/password-strength.svg?style=flat-square)](https://github.com/angular-material-extensions/password-strength/blob/master/LICENSE)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)

> This project has been transferred from [ngx-material-password-strength](https://www.npmjs.com/package/ngx-material-password-strength) to [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)

<p align="center">
  <img alt="@angular-material-extensions/password-strength demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v3.2.0/demo.gif">
</p>

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/password-strength/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Components](#components)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/password-strength)

View all the directives and components in action at [https://angular-material-extensions.github.io/password-strength](https://angular-material-extensions.github.io/password-strength)

<a name="components"/>

## Library's components
- `<mat-password-strength>` used to calculate and display the strength of a provided password

1. strength score <=  20%

<p align="center">
  <img alt="@angular-material-extensions/password-strength score less than 20%" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v2.1.0/scrore_lesst_than_20.png">
</p>

2. strength score <= 80%

<p align="center">
  <img alt="@angular-material-extensions/password-strength score less than 40%" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v2.1.0/scrore_lesst_than_40.png">
</p>

1. strength score > 80%

<p align="center">
  <img alt="@angular-material-extensions/password-strength score less than 100%" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v2.1.0/scrore_lesst_than_100.png">
</p>

- `<mat-password-strength-info>` used to display more information about the strength of a provided password

<p align="center">
  <img alt="@angular-material-extensions/password-strength's info" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v2.1.0/ngx-material-strength-password-info.png">
</p>

---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `7.0.2`

---

<a name="peerDependencies"/>

## Requirements (peer dependencies):
- [angular animations v7.x](https://www.npmjs.com/package/@angular/animations)
- [angular forms v7.x](https://www.npmjs.com/package/@angular/forms)
- [angular cdk v7.x](https://www.npmjs.com/package/@angular/cdk)
- [angular material v7.x](https://www.npmjs.com/package/@angular/material)

- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme) 
- [angular material icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

```bash
npm i @angular/cdk @angular/material @angular/animations @angular/forms 
```

or use `angular schematics` like e.g:

```bash
ng add @angular/material 
```

---


<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

<a name="additional-requirements-material-icons"/>

## Additional Requirements - Import the material design icons [learn more](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

- The easiest way to import material design icons is to provide a link in your `index.html` file like below:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

- alternative solution:

1. Install of the official npm module of the material design icons

```bash
npm i -s material-design-icons
```

2. Import them in your `angular.json` file

```json
"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],
```  


----

<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/password-strength/getting-started)

Install above dependencies via *npm*. 

Now install `@angular-material-extensions/password-strength` via:
```shell
npm install --save @angular-material-extensions/password-strength
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/password-strength`:
```js
map: {
  '@angular-material-extensions/password-strength': 'node_modules/@angular-material-extensions/password-strength/bundles/@angular-material-extensions/password-strength.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatPasswordStrengthModule .forRoot()`):
```js
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatPasswordStrengthModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatPasswordStrengthModule `:

```js
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatPasswordStrengthModule, ...], 
})
export class OtherModule {
}
```

<a name="api"/>

## API

### `<mat-password-strength>` used to calculate and display the strength of a provided password

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| password           | Input()  | string    | - |  the password to calculate its strength
| validators           | Input()  | Criteria[]    | see inside the class ;) |  custom form validator used to validate the password
| externalError      | Input()  | boolean   | false | used to change the color of the password to warn if an external error occurs
| enableLengthRule      | Input()  | boolean   | true | whether to validate the length of the password
| enableLowerCaseLetterRule      | Input()  | boolean   | true | whether a lowercase letter is optional
| enableUpperCaseLetterRule      | Input()  | boolean   | true | whether a uppercase letter is optional
| enableDigitRule      | Input()  | boolean   | true | whether a digit char is optional
| enableSpecialCharRule      | Input()  | boolean   | true | whether a special char is optional
| min      | Input()  | number   | 8 | the minimum length of the password
| max      | Input()  | number   | 30 | the maximum length of the password
| onStrengthChanged  | Output() | number    | - | emits the strength of the provided password in % e.g: 20%, 40%, 60%, 80% or 100%

### `<mat-password-strength-info>` used to display more information about the strength of a provided password

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| passwordComponent       | Input()  | PasswordStrengthComponent    | - |  the password component used in the template in order to display more info related to the provided password
| enableScoreInfo         | Input()  | boolean| false |  whether to show the password's score in %
| lowerCaseCriteriaMsg    | Input()  | string | contains at least one lower character   |  an appropriate msg for the lower case %
| upperCaseCriteriaMsg    | Input()  | string | contains at least one upper character   |  an appropriate msg for the upper case %
| digitsCriteriaMsg       | Input()  | string | contains at least one digit character   |  an appropriate msg for the digit case %
| specialCharsCriteriaMsg | Input()  | string | contains at least one special character |  an appropriate msg for the special case %
| minCharsCriteriaMsg     | Input()  | string | contains at least ${this.passwordComponent.min} characters |  an appropriate msg for the minimum number of chars %

---

<a name="usage"/>

## [Usage](https://angular-material-extensions.github.io/password-strength/getting-started)

add the `@angular-material-extensions/password-strength` element to your template:

```html
<mat-password-strength  [password]="password.value">
</mat-password-strength>
```

This will display only the material password strength meter in form of a progress without any input fields
or similar.

#### In the following example, we integration a material input container with `@angular-material-extensions/password-strength` 's component.

NOTE: In order to repaint the mat-form-field correctly after changing the value of the password's strength, please consider
to change the detection strategy for the parent component --> 

```typescript
import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSlideToggleChange} from '@angular/material';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {}
```

```html
<div>
  <mat-form-field appearance="outline" style="width: 100%" [color]="passwordComponent.color">
              <mat-label>Password</mat-label>
              <input matInput #password
                     [type]="inputType"
                     required
                     placeholder="Password">
              <mat-hint align="end" aria-live="polite">
                {{password.value.length}} / 25
              </mat-hint>
            </mat-form-field>
  
            <mat-password-strength #passwordComponent
                                   (onStrengthChanged)="onStrengthChanged($event)"
                                   [password]="password.value">
            </mat-password-strength>
     </div>
```

[learn more about mat-form-field](https://material.angular.io/components/input/overview)

#### Example of how to use the emitted strength of the password in your template

```html
<div fxLayout="row" fxLayoutGap="10px">
   <div *ngIf="passwordComponent.strength === 100; then done else error">
   </div>
   <ng-template #done>
     <mat-icon color="primary">done</mat-icon>
   </ng-template>
   <ng-template #error>
     <mat-icon color="warn">error</mat-icon>
   </ng-template>
   <div>
     <p>Password's strength = {{passwordComponent.strength}} %100</p>
   </div>
</div>
```

#### Client Side password's validation using a built in angular formController

1. add an input element to your template with an appropriate @angular-material-extensions/password-strength's component
2. hold a reference of the @angular-material-extensions/password-strength's component by adding `passwordComponentWithValidation` (or whatever you want) inside the element

e.g: 

```html
 <mat-password-strength #passwordComponentWithValidation
                       [password]="passwordWithValidation.value">
                       </mat-password-strength>
```

3. bind the form controller of the mat-password-strength to the input element 
  - you can access the form controller of @angular-material-extensions/password-strength using the chile view --> `passwordComponentWithValidation.passwordFormControl`
  - bind the form controller to an input element --> `[formControl]="passwordComponentWithValidation.passwordFormControl"`

4. Full example - see below

```html
<div>
  <mat-form-field appearance="outline" style="width: 100%">
    <mat-label>Password</mat-label>
    <input matInput #passwordWithValidation
           [type]="inputType"
           required
           [formControl]="passwordComponentWithValidation.passwordFormControl"
           placeholder="Password">
    <mat-hint align="end" aria-live="polite">
      {{passwordWithValidation.value.length}} / 25
    </mat-hint>
    <mat-error *ngIf="passwordComponentWithValidation.passwordFormControl.hasError('required')">
      Password is required
    </mat-error>
    <mat-error *ngIf="passwordComponentWithValidation.passwordFormControl.hasError('pattern')">
      Password is not valid
    </mat-error>
  </mat-form-field>
  <mat-password-strength #passwordComponentWithValidation
                                  (onStrengthChanged)="onStrengthChanged($event)"
                                  [password]="passwordWithValidation.value">
  </mat-password-strength>
  <!--Password's strength info-->
  <mat-password-strength-info
    [passwordComponent]="passwordComponentWithValidation">
  </mat-password-strength-info>
</div>
```

this will looks like -->

<p align="center">
  <img alt="@angular-material-extensions/password-strength" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v2.1.0/demo_with_validation.gif">
</p>

--- 

#### Supporting custom messages and ngx-translate for the info component please check the example demo [here](https://angular-material-extensions.github.io/password-strength/examples/mat-password-strength-info)

<p align="center">
  <img alt="@angular-material-extensions/password-strength demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v3.4.0/support_translations.png">
</p>

for more examples please visit this URL : [(https://angular-material-extensions.github.io/password-strength/examples]((https://angular-material-extensions.github.io/password-strength/examples)

<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/password-strength/doc/index.html)

Please checkout the full documentation [here](https://angular-material-extensions.github.io//password-strength/doc/index.html) 
or follow the official [tutorial](https://angular-material-extensions.github.io/password-strength/getting-started)

--- 

<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/password-strength.git) by running
```bash
$ git clone https://github.com/angular-material-extensions/password-strength.git
```

- link the **@angular-material-extensions/password-strength** package

```bash
$ gulp link
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`


<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/password-strength.git)
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`
4. Link the library `gulp link`
 5. Navigate to the demo app's directory
  - `cd demo`
  _ `npm i`
  _ `npm start`

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/password-strength/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2018 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

