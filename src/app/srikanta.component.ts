import { Component } from "@angular/core";

@Component({
    selector: 'srikanta',
    templateUrl: './srikanta.html'
})

export class HyperLink {
    myCount = 1;
    url = 'https://www.google.com';

    incrementCount() {
        this.myCount++
        console.log('A', this.myCount)
    }
}
