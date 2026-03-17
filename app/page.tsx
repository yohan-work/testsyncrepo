import React, { useState, useEffect } from "react";

// Task 타입 정의 (예시)
interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  dueDate: Date;
  priority: "High" | "Medium" | "Low";
}

const KanbanBoard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const loadTasks = async () => {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                try {
                    const parsedTasks = JSON.parse(savedTasks) as Task[];
                    setTasks(parsedTasks);
                } catch (error) {
                    console.error("로컬 스토리지 데이터 파싱 오류:", error);
                    // 오류 처리 (예: 기본 데이터로 초기화)
                    setTasks([]);
                }
            }
        };

        loadTasks();
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };


    return (
        <div className="flex flex-col h-screen">
            <header className="bg-gray-900 text-white p-4">
                <h1>Kanban Board</h1>
            </header>
            <main className="flex grow">
                <section className="w-1/3 bg-gray-800 p-4">
                    {/* Pending Column */}
                    {tasks.filter(task => task.priority === 'High').map(task => (
                        <div key={task.id} className="bg-white rounded-lg p-4 mb-2">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    ))}
                </section>
                <section className="w-1/3 bg-gray-800 p-4">
                    {/* In Progress Column */}
                    {tasks.filter(task => task.priority === 'Medium').map(task => (
                        <div key={task.id} className="bg-white rounded-lg p-4 mb-2">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    ))}
                </section>
                <section className="w-1/3 bg-gray-800 p-4">
                    {/* Completed Column */}
                    {tasks.filter(task => task.priority === 'Low').map(task => (
                        <div key={task.id} className="bg-white rounded-lg p-4 mb-2">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default KanbanBoard;