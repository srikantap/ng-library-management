import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public bookName: string;
  @Output() onBookAdd = new EventEmitter<string>();

  constructor() {
    this.bookName = "";
  }

  onType(value: string) {
    // this.bookName = value;
  }

  onSubmit(name: string) {
    console.log('ADDING: ', name, this.bookName);
    this.onBookAdd.emit(name);
  }

  ngOnInit(): void {
  }

}
