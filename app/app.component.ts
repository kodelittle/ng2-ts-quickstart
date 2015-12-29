// Import component and then configure it. 
import {Component} from 'angular2/core';


// Your class is a Angular Component. 
// The selector specifies a simple CSS selector for a host HTML element named my-app.
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})

// This is an empty class. 
// This is the component that this file exports so that others could use it. 
// The act of exporting turns the file into a module.
// The name of the file is usually the name of the module. Accordingly, 'app.component' is the name of our first module. huh??
// This is how you would import it 
// import {AppComponent} from './app.component'
export class AppComponent { }