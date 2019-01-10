# Project info:

Node version: 10.13.0

Angular CLI version: 6.2.6

# To install NodeJS follow this steps:

- Visit the following site -> https://nodejs.org/en/
- Click on downloads
- Scroll down until you find (installing Node.js via package manager) and click it
- Follow the instructions on this page

# To install angular cli run the following command:

npm install -g @angular/cli@6

# To update the angular cli version run the following commands:

npm uninstall -g angular-cli

npm cache clean or npm cache verify (if npm > 5)

npm install -g @angular/cli@latest (or @required_version, for example: @6)

# To install and use this app use the following commands:

npm install 

ng serve

# To deploy this app use the following command:

ng build --prod --aot

Explanation:
- --prod -> means build this project for production
- --aot -> stands for Ahead Of Time compilation

Note:
- Don't forget to redirect all 404 (page not found) to index.html

# This project is using the following:

- AngularFontAwesomeModule (font awesome icons)
- NgxMatSelectSearchModule (select search)
- FlexLayoutModule (flex layout)
- Material design

# Fontawesome usage in Angular

```<fa name="icon_name"></fa>```

# AngularMA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
