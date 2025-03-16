import { useState } from "react";

const TodoList = (props) => {
  const [tasks, setTasks] = useState(props.initialTodos);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { name: newTask, priority, done: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: true } : task
    );
    setTasks(updatedTasks);
  };
  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
        <h2>Todo List</h2>
    <p>📝 Total : {tasks.length} | ✅ Terminées : {tasks.filter(task => task.done).length}</p>
    <h3>Rechercher une tâche</h3>
    <input
        type="text"
        placeholder="Rechercher une tâche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h3>Ajouter une tâche</h3>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.name} - {task.priority}
            <button onClick={() => toggleTask(tasks.indexOf(task))}>✔</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
