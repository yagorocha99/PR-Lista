// TaskList.js
import React, { useState } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    taskName: '',
    taskDefinition: '',
    deadline: '',
    completedDate: '',
    location: '',
    importance: 'Media', 
  });

  const addTask = () => {
    const formattedTask = {
      ...newTask,
      creationDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    setTasks([...tasks, formattedTask]);
    setNewTask({
      taskName: '',
      taskDefinition: '',
      deadline: '',
      completedDate: '',
      location: '',
      importance: 'Pouca',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const truncatedValue = name === 'taskDefinition' ? value.slice(0, 255) : value;

    setNewTask({ ...newTask, [name]: truncatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <div className="container mb-5">
      <Header />
      <div className="mt-5">
        <h2>Lista de Tarefas</h2>
        <TaskForm
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ul className="list-group mt-3">
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TaskList;
