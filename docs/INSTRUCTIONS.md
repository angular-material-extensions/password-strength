<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.rawgit.com/angular-material-extensions/password-strength/master/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/password-strength - Material password strength meter to indicate how secure is the provided password - Angular V7 supported

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fpassword-strength.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fpassword-strength)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/password-strength)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://angular-material-extensions.github.io/password-strength/doc/index.html)
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

## Table of Contents
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)


# Additional instructions


<a name="peerDependencies"/>

## Requirements (peer dependencies):
if you are installing the library via schematics `ng add @angular-material-extensions/password-strength` (see the installation section)
the below dependencies will be automatically installed, otherwise please add them to your project 

Note: run the following command if you are not using `angular schematics`
```bash
npm i @angular/animations @angular/forms 
```
- [angular animations v7.x](https://www.npmjs.com/package/@angular/animations)
- [angular forms v7.x](https://www.npmjs.com/package/@angular/forms)

the below requirements can be setup via `ng add @angular/material` (see the`installation section)
- [angular cdk v7.x](https://www.npmjs.com/package/@angular/cdk)
- [angular material v7.x](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme) 
- [angular material icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

Note: run the following command if you are not using `angular schematics`
```bash
npm i @angular/cdk @angular/material
```




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
