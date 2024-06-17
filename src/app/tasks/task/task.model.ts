export interface Task {
    id: string;
    userId: string;
    title: string;
    description: string;
    dueDate: string;
}

export interface NewTask {
    title: string;
    summary: string;
    date: string;
}