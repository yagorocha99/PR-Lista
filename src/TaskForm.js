import React, { useState } from 'react';

const TaskForm = ({ newTask, handleChange, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Adicione suas regras de validação aqui
    if (!newTask.taskName) {
      newErrors.taskName = 'Por favor, insira o nome da tarefa.';
      valid = false;
    }

    if (!newTask.taskDefinition) {
      newErrors.taskDefinition = 'Por favor, insira a definição da tarefa.';
      valid = false;
    }

    // Adicione mais regras de validação conforme necessário

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // A lógica de envio do formulário só será executada se o formulário for válido
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Nome da Tarefa:</label>
        <input
          type="text"
          name="taskName"
          value={newTask.taskName}
          onChange={handleChange}
          className={`form-control ${errors.taskName ? 'is-invalid' : ''}`}
        />
        {errors.taskName && <div className="invalid-feedback">{errors.taskName}</div>}
      </div>

      <div className="form-group">
        <label>Definição da Tarefa (até 255 caracteres):</label>
        <textarea
          name="taskDefinition"
          value={newTask.taskDefinition}
          onChange={handleChange}
          maxLength={255}
          className={`form-control ${errors.taskDefinition ? 'is-invalid' : ''}`}
        />
        {errors.taskDefinition && <div className="invalid-feedback">{errors.taskDefinition}</div>}
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
