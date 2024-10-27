"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/protectedRoute";

function AddList() {
    const [newTask, setNewTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateTask = async () => {
        if (!newTask || !taskDate) {
            setMessage("Please enter a task and a date.");
            return;
        }

        try {
            const response = await fetch('/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: newTask, date: taskDate }),
            });

            if (response.ok) {
                setMessage("Task added successfully!");
                setNewTask('');
                setTaskDate('');
                console.log(newTask, taskDate);
            } else {
                setMessage("Failed to add task.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <ProtectedRoute>
            <div className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                    <input
                        type="date"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className="border p-2 w-full rounded mb-4"
                        required
                    />
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task"
                        className="border p-2 w-full rounded mb-4"
                        required
                    />
                    <button onClick={handleCreateTask} className="bg-blue-500 text-white p-2 rounded w-full">
                        Add Task
                    </button>
                </div>

                {message && (
                    <p className="mt-4 text-center text-sm text-red-500">{message}</p>
                )}
            </div>
        </ProtectedRoute>
    );
}

export default AddList;
