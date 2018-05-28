<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-material-password-strength/master/demo/src/assets/logo.svg">
</p>

# ngx-material-password-strength - Material password strength meter to indicate how secure is the provided password - Angular v6 supported

[![npm version](https://badge.fury.io/js/ngx-material-password-strength.svg)](https://badge.fury.io/js/ngx-material-password-strength),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-material-password-strength)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-password-strength/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-password-strength?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-material-password-strength/status.svg)](https://david-dm.org/anthonynahas/ngx-material-password-strength)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-material-password-strength/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-material-password-strength#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-material-password-strength.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-material-password-strength.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-material-password-strength/blob/master/LICENSE)

<p align="center">
  <img alt="ngx-material-password-strength" style="text-align: center;"
   src="assets/ngx-material-password-strength/demo_v2.0.1_2.gif">
</p>

<p align="center">
  <img alt="ngx-material-password-strength" style="text-align: center;"
   src="assets/ngx-material-password-strength/demo_v2.0.1.gif">
</p>

## Table of Contents
- [Demo](#demo)
- [Library's components](#components)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Documentation](#documentation)
- [Usage](#usage)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-material-password-strength

<a name="components"/>

## Library's components
- `<ngx-material-password-strength>` used to calculate and display the strength of a provided password

1. strength score less than 20%

<p align="center">
  <img alt="ngx-material-password-strength score less than 20%" style="text-align: center;"
   src="assets/ngx-material-password-strength/v2.1.0/scrore_lesst_than_20.png">
</p>

2. strength score less than 40%

<p align="center">
  <img alt="ngx-material-password-strength score less than 40%" style="text-align: center;"
   src="assets/ngx-material-password-strength/v2.1.0/scrore_lesst_than_40.png">
</p>

1. strength score less than 100%

<p align="center">
  <img alt="ngx-material-password-strength score less than 100%" style="text-align: center;"
   src="assets/ngx-material-password-strength/v2.1.0/scrore_lesst_than_100.png">
</p>

- `<ngx-material-password-strength-info>` used to display more information about the strength of a provided password

<p align="center">
  <img alt="ngx-material-password-strength's info" style="text-align: center;"
   src="assets/ngx-material-password-strength/v2.1.0/ngx-material-strength-password-info.png">
</p>

---

<a name="requirements"/>

## Requirements (peer dependencies):
- [angular animations ](https://www.npmjs.com/package/@angular/animations)
- [angular forms ](https://www.npmjs.com/package/@angular/forms)
- [angular cdk ](https://www.npmjs.com/package/@angular/cdk)
- [angular material ](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

```bash
npm i @angular/cdk @angular/material @angular/animations 
```

---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)


---

<a name="installation"/>

## Installation
Install above dependencies via *npm*. 

Now install `ngx-material-password-strength` via:
```shell
npm install --save ngx-material-password-strength
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-material-password-strength`:
```js
map: {
  'ngx-material-password-strength': 'node_modules/ngx-material-password-strength/bundles/ngx-material-password-strength.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { NgxMaterialPasswordStrengthModule } from 'ngx-material-password-strength';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxMaterialPasswordStrengthModule .forRoot()`):
```js
import { NgxMaterialPasswordStrengthModule } from 'ngx-material-password-strength';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxMaterialPasswordStrengthModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxMaterialPasswordStrengthModule `:

```js
import { NgxMaterialPasswordStrengthModule } from 'ngx-material-password-strength';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxMaterialPasswordStrengthModule, ...], 
})
export class OtherModule {
}
```

<a name="api"/>

## API

### `<ngx-material-password-strength>` used to calculate and display the strength of a provided password

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| password           | Input()  | string    | - |  the password to calculate its strength
| externalError      | Input()  | boolean   | false | used to change the color of the password to warn if an external error occurs
| onStrengthChanged  | Output() | number    | - | emits the strength of the provided password in % e.g: 20%, 40%, 60%, 80% or 100%

### `<ngx-material-password-strength-info>` used to display more information about the strength of a provided password

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| passwordComponent           | Input()  | PasswordStrengthComponent    | - |  the password component used in the template in order to display more info related to the provided password


<a name="documentation"/>

## [Documentation](https://anthonynahas.github.io/ngx-material-password-strength/doc/index.html)

## Usage

add the `ngx-material-password-strength` element to your template:

```html
<ngx-material-password-strength
            [password]="password.value">
          </ngx-material-password-strength>
```

This will display only the material password strength meter in form of a progress without any input fields
or similar.

#### In the following example, we integration a material input container with `ngx-material-password-strength` 's component.

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
  
            <ngx-material-password-strength #passwordComponent
                                            (onStrengthChanged)="onStrengthChanged($event)"
                                            [password]="password.value">
            </ngx-material-password-strength>
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

1. add an input element to your template with an appropriate ngx-material-password-strength's component
2. hold a reference of the ngx-material-password-strength's component by adding `passwordComponentWithValidation` (or whatever you want) inside the element

e.g: 

```html
 <ngx-material-password-strength #passwordComponentWithValidation
                                  [password]="passwordWithValidation.value">
```

3. bind the form controller of the ngx-material-password-strength to the input element 
  - you can access the form controller of ngx-material-password-strength using the chile view --> `passwordComponentWithValidation.passwordFormControl`
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
  <ngx-material-password-strength #passwordComponentWithValidation
                                  (onStrengthChanged)="onStrengthChanged($event)"
                                  [password]="passwordWithValidation.value">
  </ngx-material-password-
  <!--Password's strength info-->
  <ngx-material-password-strength-info
    [passwordComponent]="passwordComponentWithValidation">
  </ngx-material-password-stren
</div>
```

this will looks like -->

<p align="center">
  <img alt="ngx-material-password-strength" style="text-align: center;"
   src="assets/ngx-material-password-strength/v2.1.0/demo_with_validation.gif">
</p>

### Please checkout the full documentation [here](https://anthonynahas.github.io/ngx-material-passowrd-strength/doc/index.html) or follow the official [tutorial](https://anthonynahas.github.io/ngx-material-password-strength/getting-started) 

## Run Demo App Locally

- [clone this repo](https://github.com/AnthonyNahas/ngx-material-password-strength.git) by running
```bash
$ git clone https://github.com/AnthonyNahas/ngx-material-password-strength.git
```

- link the ngx-material-password-strength package
```bash
$ gulp link
```

use gulp locally
```bash
$ npx gulp link
```

for some mac os users, you may use the sudo command with gulp
use gulp with sudo
```bash
$ sudo gulp link
```
or locally 
```bash
$ sudo npx gulp link
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

----


<a name="development"/>

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-contacts](https://github.com/AnthonyNahas/ngx-material-contacts)
- [ngx-material-faq](https://github.com/AnthonyNahas/ngx-material-faq)
- [ngx-combination-generator](https://github.com/AnthonyNahas/combination-generator)

<a name="support"/>

## Support
Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de) and I will help you!

---

<a name="license"/>

## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

