import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { TrackerService } from '@tracker/services/tracker/tracker.service';
import { Task } from '@tracker/models/task';
import { ILog } from '@tracker/interfaces';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit, OnDestroy {

  log: ILog = [];
  task = new Task();
  projects = ['...', 'timer', 'nothing', 'third'];

  constructor(private trackerSvc: TrackerService) {}

  ngOnInit() {
    this.trackerSvc.$task.pipe(untilDestroyed(this)).subscribe(task => this.task = task.inProcess ? task : new Task());
    this.trackerSvc.$log.pipe(untilDestroyed(this)).subscribe(log => this.log = log);
  }

  startTracking(task: Task) {
    this.trackerSvc.startTracking(task);
  }

  stopTracking() {
    this.trackerSvc.stopTracking();
  }

  copyToInput(task: Task) {
    this.task.taskName = task.taskName;
    this.task.projectName = task.projectName;
  }

  ngOnDestroy() {}
}
