// Import component and then configure it. 
import {Component} from 'angular2/core';

// Our Hero is more than just a name. 
interface Hero {
    id: number;
    name: string;
}

// Your class is a Angular Component. 
// The selector specifies a simple CSS selector for a host HTML element named my-app.
// template: '< h1 > {{title }}</h1>< h2 > {{hero.name }} details!</h2>< div > <label>id: </label>{{hero.id}}</div><div><label>name: </label>{{hero.name}}</div>'
@Component({
    selector: 'my-app',
    template: `
    	<h1>{{title}}</h1>
    	<h2>{{hero.name}} details!</h2>
    	<div><label>id: </label>{{hero.id}}</div>
    	<div>
      		<label>name: </label>
      		<div><input [(ngModel)]="hero.name" placeholder="name"></div>
    	</div>
    	<div>
    		<ul>
    			<li *ngFor="#hero of heroes"> {{hero.id}} - {{hero.name}} </li>
    		</ul>
    	</div>
    		`
})

 
// This is the component that this file exports so that others could use it. 
// The act of exporting turns the file into a module.
// The name of the file is usually the name of the module. Accordingly, 'app.component' is the name of our first module. huh??
// This is how you would import it 
// import {AppComponent} from './app.component'
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    public heroes: Hero[] = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];
}