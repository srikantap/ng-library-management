import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() editEvent = new EventEmitter<string>();
  @Input() list: Array<Book> = []
  isEditable: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onChange(name: string, value: boolean) {
    console.log('STR: ', name)
    // this.isEditable[name] = !this.isEditable[name]
    this.isEditable[name] = value
  }

  onEdit(newName: string) {
    this.editEvent.emit(newName)
    // this.isEditable
  }

  ngOnChanges(changes: SimpleChanges) {
    const {currentValue, previousValue} = changes['list']
    if (currentValue !== previousValue) {
      console.log('CHANGED: ', previousValue, currentValue)
    }
    this.list = currentValue;
    console.log('CHANGED LEN: ', this.list.length)
}


}
