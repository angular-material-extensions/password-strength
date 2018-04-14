<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-material-password-strength/master/demo/src/assets/logo.svg">
</p>

# ngx-material-password-strength - Material password strength meter to indicate how secure is the provided password

[![npm version](https://badge.fury.io/js/ngx-material-password-strength.svg)](https://badge.fury.io/js/ngx-material-password-strength),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-material-password-strength)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-password-strength/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-password-strength?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-material-password-strength/status.svg)](https://david-dm.org/anthonynahas/ngx-material-password-strength)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-material-password-strength/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-material-password-strength#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-material-password-strength.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-material-password-strength.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-material-password-strength/blob/master/LICENSE)

<p align="center">
  <img alt="ngx-material-password-strength" style="text-align: center;"
   src="assets/ngx-material-password-strength/ngx-material-password-strength_demo.gif">
</p>

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-material-password-strength

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

### Requirements:
- [angular material ](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular cdk ](https://www.npmjs.com/package/@angular/cdk)
- if you need a built in theme --> please let me know


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

## Usage

add the `ngx-material-password-strength` element to your template:

```html
<ngx-material-password-strength
            [password]="password.value">
          </ngx-material-password-strength>
```

This will display only the material password strength meter in form of a progress without any input conatiner
or else.

In the following example, we integration a material input container with `ngx-material-password-strength` 's component.

```html
<div>
  <mat-input-container floatPlaceholder="auto" style="width: 100%">
         <input matInput #password
                [type]="inputType"
                required
                placeholder="Password">
         <mat-hint align="end" aria-live="polite">
           {{password.value.length}} / 25
         </mat-hint>
       </mat-input-container>
       <ngx-material-password-strength
         [password]="password.value">
       </ngx-material-password-strength>
     </div>
```

[learn more about mat-input-container](https://material.angular.io/components/input/overview)

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

