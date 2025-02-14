import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private storageKey = 'tarefa'

  constructor() {
    this.loadTask()
  }

  private tasks: string[] = [];

  private saveTask() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks))
  }

  private loadTask(){
    const savedTask = localStorage.getItem(this.storageKey)
    if(savedTask){
      this.tasks = JSON.parse(savedTask)
    }
  }

  addTask(task: string){
    this.tasks.push(task);
    this.saveTask()
  }

  showTasks(): string[]{
    return this.tasks
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
    this.saveTask()
  }
}

