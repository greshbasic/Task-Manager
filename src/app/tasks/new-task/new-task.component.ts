import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { NewTask } from '../task/task.model';
import { TaskService } from '../tasks.service';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required: true}) userId!: string;
  @Output() close = new EventEmitter();
  enteredTitle = '';
  enteredDescription = '';
  enteredDueDate = '';

  constructor(private taskService: TaskService) {}

  isValid() {
    if (this.enteredTitle === '') {
      return false;
    }
    return true;
  }

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredDescription,
      date: this.enteredDueDate
    }, this.userId);
    this.close.emit();
  }
}
