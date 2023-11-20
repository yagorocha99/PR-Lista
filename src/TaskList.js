import React, { useState } from 'react';
import moment from 'moment'; //biblioteca para datas
import 'bootstrap/dist/css/bootstrap.min.css'; //adição do bootstrap
import './App.css';
import Header from './Header';
import Footer from './Footer';

const TaskList = () => {
  //estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);
  //estado para armazenar os detalhes da nova tarefa
  const [newTask, setNewTask] = useState({
    taskName: '',
    taskDefinition: '',
    deadline: '',
    completedDate: '',
    location: '',
    importance: 'Pouca', //valor padrão
  });

  //função para adicionar uma nova tarefa à lista
  const addTask = () => {
    const formattedTask = {
      ...newTask,
      creationDateTime: moment().format('YYYY-MM-DD HH:mm:ss'), //adiciona a data e hora de criação
    };

    setTasks([...tasks, formattedTask]);  //atualiza o estado com a nova tarefa
    setNewTask({
      taskName: '',
      taskDefinition: '',
      deadline: '',
      completedDate: '',
      location: '',
      importance: 'Pouca', //reseta para o valor padrão
    });
  };

  //função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;

    //trunca o valor para no máximo 255 caracteres
    const truncatedValue = name === 'taskDefinition' ? value.slice(0, 255) : value;

    setNewTask({ ...newTask, [name]: truncatedValue });
  };

  //função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <div className="container mb-5">
      <Header />
      <div className="mt-5">
        <h2>Lista de Tarefas</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome da Tarefa:</label>
            <input
              type="text"
              name="taskName"
              value={newTask.taskName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Definição da Tarefa (até 255 caracteres):</label>
            <textarea
              name="taskDefinition"
              value={newTask.taskDefinition}
              onChange={handleChange}
              maxLength={255}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Prazo Máximo:</label>
            <input
              type="date"
              name="deadline"
              value={newTask.deadline}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Data Realizada:</label>
            <input
              type="date"
              name="completedDate"
              value={newTask.completedDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Localização:</label>
            <input
              type="text"
              name="location"
              value={newTask.location}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Importância:</label>
            <select
              name="importance"
              value={newTask.importance}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Pouca">Pouca</option>
              <option value="Média">Média</option>
              <option value="Muita">Muita</option>
              <option value="Extrema">Extrema</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Adicionar Tarefa
          </button>
        </form>
        <ul className="list-group mt-3">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              <div className="row">
                <div className="col-12">
                  <p>Data e Hora de Criação: {task.creationDateTime}</p>
                  <p>Nome da Tarefa: {task.taskName}</p>
                  <p className="description-text">Descrição:</p>
                  <p>{task.taskDefinition}</p>
                  <p>Prazo Máximo: {task.deadline}</p>
                  <p>Data Realizada: {task.completedDate}</p>
                  <p>Localização: {task.location}</p>
                  <p>Importância: {task.importance}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TaskList;
