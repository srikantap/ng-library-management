import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'my-button',
    template: `
        <button type="button" (click)="onClick()">
            {{count}}
        </button>
    `
})
export class MyButton {
    @Input() count = 0;
    @Output() increment: EventEmitter<any> = new EventEmitter();

    onClick() {
        //this.xyz.error()
        this.increment.emit()

    }
    // incrementCount() {
    //     // this.count++;
    // }
}
