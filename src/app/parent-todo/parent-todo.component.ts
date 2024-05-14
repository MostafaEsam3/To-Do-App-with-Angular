import { Component } from '@angular/core';
import { FormTodoComponent } from '../form-todo/form-todo.component';
import { TableTodoComponent } from '../table-todo/table-todo.component';

@Component({
  selector: 'app-parent-todo',
  standalone: true,
  imports: [FormTodoComponent,TableTodoComponent],
  templateUrl: './parent-todo.component.html',
  styleUrl: './parent-todo.component.css'
})
export class ParentTodoComponent {

  arrayOfData : any =[]
push(taskdata:any){

  this.arrayOfData.push({iscomplete:false, taskdata:taskdata})
}


deleteTask(index:any){
  this.arrayOfData.splice(index,1)

}





}

