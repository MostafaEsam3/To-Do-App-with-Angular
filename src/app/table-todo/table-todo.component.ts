import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-todo',
  standalone: true,
  imports: [],
  templateUrl: './table-todo.component.html',
  styleUrl: './table-todo.component.css'
})
export class TableTodoComponent {

  @Input() dataOfTask :any;
  @Output()  deleteFromChild = new EventEmitter()

handledelete(id:any){

  this.deleteFromChild.emit(id);

}
}
