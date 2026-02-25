import { useEffect, useState } from "react";

export interface TaskInterface {
    id: number;
    status: boolean;
    task: string;
    detail: string;
    limitDate: number;
    finishedAt?: {
        date: number;
        userName: string;
    };
}

interface TaskTargetProps {
    task: TaskInterface;
    onToggle?: (id: number, newStatus: boolean) => void;
}

export const TaskTarget = ({ task, onToggle }: TaskTargetProps) => {
    const [isDone, setIsDone] = useState(task.status);

    // sincroniza si el estado cambia desde afuera
    useEffect(() => {
        setIsDone(task.status);
    }, [task.status]);

    const handleDone = () => {
        const newStatus = !isDone;
        setIsDone(newStatus);
        onToggle?.(task.id, newStatus);
    };

    const formattedLimitDate = new Date(task.limitDate).toLocaleDateString();
    const formattedFinishedDate = task.finishedAt?.date
        ? new Date(task.finishedAt.date).toLocaleDateString()
        : null;

    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={handleDone}
                    className="w-4 h-4 cursor-pointer"
                />
                <p className={`font-medium ${isDone ? "line-through text-gray-400" : "text-gray-800"}`}>
                    {task.task}
                </p>
            </div>

            <p className="text-sm text-gray-600 mt-2">{task.detail}</p>

            <div className="text-xs text-gray-500 mt-3 flex justify-between">
                <span>Vence: {formattedLimitDate}</span>
                {isDone && task.finishedAt && (
                    <span>
                        Finalizada el {formattedFinishedDate} por {task.finishedAt.userName}
                    </span>
                )}
            </div>
        </div>
    );
};