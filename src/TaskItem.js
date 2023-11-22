// TaskItem.js
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li className="list-group-item">
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
  );
};

export default TaskItem;
