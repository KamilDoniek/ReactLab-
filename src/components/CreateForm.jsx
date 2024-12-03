import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import AppContext from "../data/AppContext";


function CreateForm() {
  const { dispatch } = useContext(AppContext); 
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const newPerson = {
      id: null, 
      name: data.name,
      birth: data.birthDate,
      eyes: data.eyeColor,
      rating: 0, 
    };

    dispatch({
      type: 'add', 
      person: newPerson,
    });

    navigate('/lab1');
  };

  return (
    <div>
      <h2>Add New Person</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            {...register('birthDate', { required: 'Birth date is required' })}
          />
          {errors.birthDate && <p>{errors.birthDate.message}</p>}
        </div>

        <div>
          <label>Eye Color:</label>
          <input
            type="text"
            {...register('eyeColor', { required: 'Eye color is required' })}
          />
          {errors.eyeColor && <p>{errors.eyeColor.message}</p>}
        </div>

        <Button variant="primary" type="submit">Add Person</Button>
      </form>
    </div>
  );
}

export default CreateForm;

