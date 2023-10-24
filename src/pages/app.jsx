import React from 'react';

import AddTask from '../organisms/add-task';
import Header from '../molecules/header';
import Layout from '../templates/Layout';
import TasksGroup from "../organisms/tasks-group"

function App() {
  // aca llega el valor de input
  const [tasks, setTasks] = React.useState([]);

  const addTask = (taskName) => {
    const isValidTaskName = tasks.includes(taskName.toLowerCase());

    if (!isValidTaskName && taskName !== '') {
      setTasks([...tasks, taskName.toLowerCase()]);
    }
  };

  const deleteTask = (taskToDelete) => {
    const filteredTasksList = tasks.filter((task) => task !== taskToDelete);

    setTasks(filteredTasksList);
  }

  return (
    <Layout>
      <Header />
      <AddTask onAddClick = {addTask} />
      <TasksGroup taskList={tasks} onDeleteTask = {deleteTask} />
    </Layout>
    
  );
}

export default App;
