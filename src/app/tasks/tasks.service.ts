import { Injectable } from '@angular/core'; 
import { NewTask } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Train Haki',
        description:
          'Keep working on improving haki efficiency and control, especially Conqueror\'s Haki',
        dueDate: '2025-12-31',
      },
      {
        id: 't2',
        userId: 'u2',
        title: 'Sharpen Swords',
        description:
          'Sharpen Enma, Wado Ichimonji, and Sandai Kitetsu to be able to cut through anything',
        dueDate: '2025-12-31',
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Train Observation Haki',
        description: 'Train Observation Haki to be able to be a better sniper',
        dueDate: '2024-05-31',
      },
      {
        id: 't4',
        userId: 'u4',
        title: 'Make Dinner',
        description: 'Make dinner for Nami, Robin, and the others...',
        dueDate: '2024-05-31',
      },
      {
        id: 't5',
        userId: 'u5',
        title: 'Draw Maps',
        description: 'Continue creating the map of the world',
        dueDate: '2024-05-31',
      },
      {
        id: 't6',
        userId: 'u6',
        title: 'Prepare emergency kits',
        description: 'Prepare medicines, bandages, and other emergency supplies for the crew',
        dueDate: '2024-05-31',
      },     
    ]

    constructor() {
      const fetchedTasks = localStorage.getItem('tasks');
      if (fetchedTasks && fetchedTasks.length > 2) {
        this.tasks = JSON.parse(fetchedTasks);
      } else {
        this.tasks = this.tasks;
      }
    }

    getFilteredTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTask, userId: string){
        this.tasks.unshift({
          id: new Date().getTime().toString(),
          userId: userId,
          title: taskData.title,
          description: taskData.summary,
          dueDate: taskData.date
        });
        this.saveTasks();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
}