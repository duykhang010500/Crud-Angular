import { environment } from './../../../environments/environment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/models/task.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  handleDelete(task: Task) {
    this.onDelete.emit(task);
  }

  onToggle(task: Task) {
    this.toggleReminder.emit(task);
  }
}
