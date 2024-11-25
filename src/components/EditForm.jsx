import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from "../data/AppContext";

function EditForm() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { dispatch } = useContext(AppContext);

  const { id, birth, eyes } = location.state || {};


  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      birthDate: birth,  
      eyeColor: eyes     
    }
  });

  const onSubmit = (data) => {
    dispatch({
      type: 'updatePerson',
      id,
      birth: data.birthDate,
      eyes: data.eyeColor
    });

    navigate('/lab1');  
  };

  const handleCancelClick = () => {
    navigate('/lab1');  
  };

  return (
    <div>
      <h2>Edit Person</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>data  urodzin:</label>
          <input
            type="date"
            {...register('birthDate', { required: 'data urodzin jest wymagana' })}  
          />
          {errors.birthDate && <p>{errors.birthDate.message}</p>}  
        </div>

        <div>
          <label>kolor oczu:</label>
          <input
            type="text"
            {...register('eyeColor', { required: 'kolor oczu jest wymagany' })}  
          />
          {errors.eyeColor && <p>{errors.eyeColor.message}</p>}  
        </div>

        <Button variant="success" type="submit">Save</Button>
        <Button variant="secondary" onClick={handleCancelClick}>Cancel</Button>
      </form>
    </div>
  );
}

export default EditForm;
