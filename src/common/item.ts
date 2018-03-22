/**
 * Created by komendant on 19.03.2018.
 */
export class Item{
    taskName: string;
    projectName: string;
    startDate: any;
    spentTime: number;
    endDate: any;
    inProcess: boolean;

    constructor(taskName: string, projectName: string) {
        this.taskName = taskName;
        this.projectName = projectName;
    }
}