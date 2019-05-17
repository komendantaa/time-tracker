import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, of, Subscription } from 'rxjs';

import { ApiService } from '@tracker/services/api/api.service';
import { StorageService } from '@tracker/services/storage/storage.service';
import { Task } from '@tracker/models/task';
import { ILog } from '@tracker/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  private _task: Task = new Task();
  private _log: ILog = [];

  private _process: Subscription;

  $task = new BehaviorSubject<Task>(this._task);
  $log = new BehaviorSubject<ILog>([]);


  constructor(
      private apiSvc: ApiService,
      private storageSvc: StorageService,
  ) {
    this.initTracker();
  }

  private initTracker() {
    this.getTasks().subscribe((log: ILog) => {
      if (log && log.length) {
        this._log = log;
        this.$log.next(log);
        this.storageSvc.setItem('log', log);

        // Find task in process and continue
        this._task = log.find(task => task.inProcess) || new Task();
        this.$task.next(this._task);
        this.startTracking();
      }
    });
  }

  startTracking(task?: Task) {
    // Add new or duplicate exist
    if (task && (!task.inProcess || task.endDate)) {
      this._task = new Task(task.taskName, task.projectName);
      this._task.inProcess = true;
      this._task.startDate = new Date();
      this._log.push(this._task);
      this.$task.next(this._task);
    }
    if (this._task.inProcess) {
      this._process = interval(1000)
          .subscribe(() => {
            ++this._task.spentTime;
            this.storageSvc.setItem('log', this._log);
          });
    }
  }

  stopTracking() {
    this._process.unsubscribe();
    this.saveTask();
    this._task = new Task();
    this.$task.next(this._task);
  }

  private saveTask() {
    this._task.inProcess = false;
    this._task.endDate = new Date();
    this.storageSvc.setItem('log', this._log);
    // this.postTasks().subscribe();
  }

  private getTasks(): Observable<ILog> {
    if (this.storageSvc.getItem('log')) {
      return of(this.storageSvc.getItemParsed<ILog>('log'));
    } else {
      return this.apiSvc.get('assets/test/pre_tasks.json');
    }
  }

  private postTask(): Observable<Task> {
    return this.apiSvc.post('some/url', this._task);
  }
}
