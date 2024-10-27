"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [editTaskName, setEditTaskName] = useState('');
  const [editTaskDate, setEditTaskDate] = useState('');

  useEffect(() => {
    if (session) {
      const fetchTasks = async () => {
        const response = await fetch('/api/task');
        const data = await response.json();
        setTasks(data);
      };

      fetchTasks();
    }
  }, [session]);

  // Update a task
  const handleUpdateTask = async (taskId) => {
    const response = await fetch('/api/task', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: taskId, updatedTask: { work: editTaskName, date: editTaskDate } }),
    });

    const updatedTask = await response.json();
    setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task)));
    setEditTask(null);
    setEditTaskName('');
    setEditTaskDate('');
  };

  // Delete a task
  const handleDeleteTask = async (taskId) => {
    await fetch('/api/task', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId }),
    });

    setTasks(tasks.filter(task => task.id !== taskId));
  };

  if (session) {
    return (
      <div>
        <button className="border bg-slate-300 p-1 ml-32" onClick={() => signOut()}>Sign out</button>

        <div className="overflow-x-auto flex justify-center">
          <table className="table bg-emerald-300 border border-black">
            <thead>
              <tr className="border border-black bg-slate-200">
                <th>Date</th>
                <th>Task</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr className="border border-black" key={task.id}>
                    <td className="p-4">
                      {editTask === task.id ? (
                        <input
                          type="date"
                          value={editTaskDate}
                          onChange={(e) => setEditTaskDate(e.target.value)}
                          className="border p-2"
                        />
                      ) : (
                        new Date(task.date).toLocaleDateString()
                      )}
                    </td>
                    <td className="p-6">
                      {editTask === task.id ? (
                        <input
                          type="text"
                          value={editTaskName}
                          onChange={(e) => setEditTaskName(e.target.value)}
                          className="border p-2"
                        />
                      ) : (
                        task.work
                      )}
                    </td>
                    <td className="flex gap-2 p-4">
                      {editTask === task.id ? (
                        <>
                          <button onClick={() => handleUpdateTask(task.id)} className="bg-amber-600 text-slate-100 p-2 rounded-lg">Save</button>
                          <button onClick={() => { setEditTask(null); setEditTaskName(''); setEditTaskDate(''); }} className="bg-red-600 text-slate-100 p-2 rounded-lg">Cancel</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => { setEditTask(task.id); setEditTaskName(task.work); setEditTaskDate(task.date); }} className="bg-amber-600 text-slate-100 p-2 rounded-lg">Update</button>
                          <button onClick={() => handleDeleteTask(task.id)} className="bg-red-600 text-slate-100 p-2 rounded-lg">Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border border-black">
                  <td colSpan="3" className="p-4 text-center">No tasks available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <p className="text-xl">Not signed in</p>
      <button className="border border-black bg-blue-300 p-2" onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}
