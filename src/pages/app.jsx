import AddTask from '../organisms/add-task';
import Header from '../molecules/header';
import Layout from '../templates/Layout';
import TasksGroup from "../organisms/tasks-group"
import React from 'react';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, taskName])
  };

  return (
    <Layout>
      <Header />
      <AddTask onAddClick = {addTask} />
      <TasksGroup taskList={tasks} />
    </Layout>
    
  );
}

export default App;
