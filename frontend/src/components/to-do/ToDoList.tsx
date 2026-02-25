import { TaskTarget, type TaskInterface } from "./TaskTarget";

const tasks: TaskInterface[] = [
    {
        id: 1,
        status: false,
        task: "Task 1",
        detail: "Detail 1",
        limitDate: Date.now(),
        finishedAt: {
            date: Date.now(),
            userName: "User 1",
        },
    },
    {
        id: 2,
        status: false,
        task: "Task 2",
        detail: "Detail 2",
        limitDate: Date.now(),
        finishedAt: {    
            date: Date.now(),
            userName: "User 2",
        },
    },
];
export const ToDoList = ()=> {
    return (
        <div>
            {tasks.map((task) => (
                <TaskTarget key={task.id} task={task} />
            ))}
        </div>
    )
};