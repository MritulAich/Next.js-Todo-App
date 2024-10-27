
let tasks = [];

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { task, date } = req.body;
        const newTask = { id: Date.now(), task, date };
        tasks.push(newTask);
        res.status(201).json(newTask);
    } else if (req.method === 'GET') {
        res.status(200).json(tasks);
    } else if (req.method === 'PUT') {
        const { id, updatedTask } = req.body;
        tasks = tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task));
        res.status(200).json({ message: 'Task updated successfully' });
    } else if (req.method === 'DELETE') {
        const { taskId } = req.body;
        tasks = tasks.filter(task => task.id !== taskId);
        res.status(200).json({ message: 'Task deleted successfully' });
    } else {
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
