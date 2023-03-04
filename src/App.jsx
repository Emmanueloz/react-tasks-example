import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
      },
    ]); //Valore que contiene el arreglo, valores nuevos que tendrá el arreglo
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
