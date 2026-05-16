import React, { useState, useEffect } from 'react';
import { Plus, Trash2, LogOut, CheckCircle, Circle, Loader } from 'lucide-react';
import api from '../services/api';

const TodoPage = ({ user, onLogout }) => {
    const [tasks, setTasks] = useState([]);
    const [taskname, setTaskname] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await api.get('/tasks');
            setTasks(res.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const createTask = async (e) => {
        e.preventDefault();
        if (!taskname.trim() || !description.trim()) return;
        setCreating(true);
        try {
            const res = await api.post('/tasks', { taskname, description });
            setTasks([res.data.data, ...tasks]);
            setTaskname('');
            setDescription('');
        } catch (err) {
            console.error(err);
        } finally {
            setCreating(false);
        }
    };

    const toggleTask = async (id) => {
        try {
            const res = await api.patch(`/tasks/${id}/toggle`);
            setTasks(tasks.map(t => t._id === id ? res.data.data : t));
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await api.delete(`/tasks/${id}`);
            setTasks(tasks.filter(t => t._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <div className="glass-card p-6 mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Todo List</h1>
                            <p className="text-white/60 mt-1">Welcome, {user?.name}!</p>
                        </div>
                        <button onClick={onLogout} className="btn-secondary flex items-center gap-2"><LogOut className="w-4 h-4" /> Logout</button>
                    </div>
                </div>

                <div className="glass-card p-6 mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Create New Task</h2>
                    <form onSubmit={createTask} className="space-y-4">
                        <input type="text" value={taskname} onChange={(e) => setTaskname(e.target.value)} placeholder="Task title" className="input-glass" disabled={creating} />
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description" className="input-glass" disabled={creating} />
                        <button type="submit" disabled={creating} className="btn-primary flex items-center justify-center gap-2">
                            {creating ? <Loader className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                            {creating ? 'Creating...' : 'Create Task'}
                        </button>
                    </form>
                </div>

                <div className="flex gap-2 mb-6">
                    {['all', 'pending', 'completed'].map(f => (
                        <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg transition-all ${filter === f ? 'bg-purple-600 text-white' : 'glass-morphism text-white/70 hover:bg-white/20'}`}>
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="flex justify-center py-12"><Loader className="w-8 h-8 animate-spin text-purple-400" /></div>
                ) : filteredTasks.length === 0 ? (
                    <div className="glass-card p-12 text-center"><p className="text-white/60">No tasks found. Create your first task!</p></div>
                ) : (
                    <div className="space-y-3">
                        {filteredTasks.map(task => (
                            <div key={task._id} className="glass-card p-4 hover:bg-white/10 transition-all group">
                                <div className="flex items-start gap-4">
                                    <button onClick={() => toggleTask(task._id)} className="mt-1">
                                        {task.completed ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Circle className="w-5 h-5 text-white/60" />}
                                    </button>
                                    <div className="flex-1">
                                        <h3 className={`text-white font-semibold ${task.completed ? 'line-through text-white/50' : ''}`}>{task.taskname}</h3>
                                        <p className={`text-white/60 text-sm ${task.completed ? 'line-through text-white/30' : ''}`}>{task.description}</p>
                                    </div>
                                    <button onClick={() => deleteTask(task._id)} className="opacity-0 group-hover:opacity-100 text-white/40 hover:text-red-400 transition">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoPage;