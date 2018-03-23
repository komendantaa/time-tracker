/**
 * Created by komendant on 21.03.2018.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './item'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getItems() : Observable<Item[]> {
        return this.http.get('pre-projects.json').map(data=>{
            let usersList = data["predefinedList"];
            return usersList.map(function(item:any) {
                return {
                    taskName: item.taskName,
                    projectName: item.projectName,
                    startDate: item.startDate,
                    spentTime: item.spentTime,
                    endDate: item.endDate,
                    inProcess: item.inProcess
                     }
            });
        })
        .catch((err: any)=> { return Observable.of([{
            "taskName": "Working on creating time tracking application",
            "projectName": "timer",
            "startDate": "2018-03-21T17:43:18.919Z",
            "spentTime": 12,
            "endDate": "2018-03-21T17:43:31.563Z",
            "inProcess": false
            }])
        });
    }
}