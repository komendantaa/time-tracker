export class Task {
    taskName: string;
    projectName: string;
    startDate: any;
    spentTime: number;
    endDate: any;
    inProcess: boolean;

    constructor(taskName: string = '', projectName: string = '...') {
        this.taskName = taskName;
        this.projectName = projectName;
        this.spentTime = 0;
    }
}
