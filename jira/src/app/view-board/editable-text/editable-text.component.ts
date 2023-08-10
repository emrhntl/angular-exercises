import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent {

  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  edit: boolean = false;

  changeEdit() {
    if (this.value !== "") {
      this.edit = !this.edit;
    }
  }

  updateValue() {
    this.valueChange.emit(this.value);
    this.edit = false;
  }

}
