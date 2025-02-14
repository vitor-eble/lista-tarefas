import { Component, OnInit } from '@angular/core';

import { TarefasService } from '../shared/tarefas.service';

@Component({
  selector: 'app-tarefas',
  standalone: false,
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent implements OnInit{
  newTask = ''
  tasks: string[] = [];

  constructor(private tarefaService: TarefasService){ }

  ngOnInit(): void {
      this.tasks = this.tarefaService.showTasks()
  }

  addTask(){
    if (this.newTask){
      this.tarefaService.addTask(this.newTask);
      this.newTask = '';
     this.tasks = this.tarefaService.showTasks()
    }
  }

  deleteTask(index: number){
    this.tarefaService.deleteTask(index)
  }

}
