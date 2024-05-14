import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-form-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-todo.component.html',
  styleUrl: './form-todo.component.css'
})
export class FormTodoComponent {
  name =new FormControl();
  @Output() handleAdd= new EventEmitter()



AddTask() {
  if( this.name.getRawValue().status === "invalide"){


  }else{

    this.handleAdd.emit( this.name.getRawValue())
  }
  }

}
