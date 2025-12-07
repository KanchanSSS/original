import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn:'root'
})

export class TasksService{
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly();
    private loggingService = inject(LoggingService);

    addTask(taskData:{title:string, description:string}){
        const newTask:Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        };
        this.tasks.update((oldTask) => [...oldTask, newTask]);
        this.loggingService.log('ADDED NEW TASK '+taskData.title);
    }

    updateTaskStatus(taskId:string, newStatus:TaskStatus){
        this.tasks.update((oldTasks) => 
            oldTasks.map((task) => (task.id == taskId)? {...task, status: newStatus} : task)
        );
        this.loggingService.log('CHANGED TASK STATUS TO '+newStatus);
    }
}