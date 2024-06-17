import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from "./task/task.model";
import { TaskService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input ({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  
  constructor(private taskService: TaskService) {}

  get filteredTasks() {
    return this.taskService.getFilteredTasks(this.userId);
  }

  onComplete(id: string){
    this.taskService.removeTask(id);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onClose() {
    this.isAddingTask = false;
  }

  onSubmit(taskData: NewTask){
    this.isAddingTask = false;
    this.taskService.addTask(taskData, this.userId);
  }
}
