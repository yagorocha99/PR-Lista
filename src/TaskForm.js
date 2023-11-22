// TaskForm.js
import React from 'react';

const TaskForm = ({ newTask, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default TaskForm;
