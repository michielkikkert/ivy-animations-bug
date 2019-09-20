import { Component } from '@angular/core';
import { RevealerAnimation } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [RevealerAnimation]
})
export class AppComponent {
    name = 'Angular';
    list: string[] = [
        'item1',
        'item2',
        'item3'
    ];
    shown: boolean = true;

    addItem() {
        this.list.push('New Item');
    }

    removeItem() {
        this.list.pop();
    }

    toggleItem() {
        this.shown = !this.shown;
    }

}

