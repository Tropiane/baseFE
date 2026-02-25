import { useState } from "react";

export const AddTask = () => {
    const [task, setTask] = useState("");
    const [detail, setDetail] = useState("");
    const [limitDate, setLimitDate] = useState("");

    const handleCreate = () => {
        if (!task.trim()) return;

        const newTask = {
            task: task.trim(),
            detail: detail.trim(),
            limitDate: limitDate
                ? new Date(limitDate).getTime()
                : null,
            status: false,
        };

        console.log("Task lista para enviar:", newTask);

        // Limpieza del formulario
        setTask("");
        setDetail("");
        setLimitDate("");
    };

    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm mt-4">
            <p className="font-semibold text-gray-800 mb-3">
                Crear tarea
            </p>

            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Título de la tarea"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border rounded-lg p-2 text-sm"
                />

                <textarea
                    placeholder="Detalle (opcional)"
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    className="border rounded-lg p-2 text-sm resize-none"
                />

                <input
                    type="date"
                    value={limitDate}
                    onChange={(e) => setLimitDate(e.target.value)}
                    className="border rounded-lg p-2 text-sm"
                />

                <button
                    onClick={handleCreate}
                    className="bg-nexo-primary text-white rounded-lg py-2 text-sm font-medium hover:opacity-90 transition"
                >
                    Agregar tarea
                </button>
            </div>
        </div>
    );
};