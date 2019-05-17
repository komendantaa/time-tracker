import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILog } from '@tracker/interfaces';
import { TrackerService } from '@tracker/services/tracker/tracker.service';
import { Task } from '@tracker/models/task';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  @Input() log: ILog = [];

  @Output() emitClickTask = new EventEmitter<Task>();

  constructor(
      private trackerSvc: TrackerService,
  ) {}

  ngOnInit() {}

  onClickExistedTask(task: Task) {
    this.emitClickTask.emit(task);
  }

  startTracking(task: Task) {
    this.trackerSvc.startTracking(task);
  }
}
