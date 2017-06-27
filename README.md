# JobroomWorkshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Workshop notes

### Introduction to Angular

### Typescript

* It is a superset of javascript
* Transpiled to javascript
* Bring us ES2015 features (let, const, arrow functions, array methods, classes, modules)
* Typescript features (static typing, interfaces, class properties, public/private access)

Typescript example:

```typescript
interface ICat {
  name:string
  age?:number
}

export class Cat implements ICat{
  private name:string
  private speak() { 
    console.log('My name is: ' + this.name) 
  }
}

let fluffy = new Cat()
console.log(fluffy.name)      //compile-time error
fluffy.speak()                // compile-time error
```

### Angular conceptual overview

![Component hierarchy](doc/component-tree.png)
* Angular is a component based framework
* NgModule is a container for components, directive, pipe and services (services are shared between modules)
