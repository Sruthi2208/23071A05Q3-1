import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleEvent(obj) {
    console.log(obj);
    navigate(`/welcome/${obj.un}`);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="form-control p-4"
        style={{ maxWidth: '400px', width: '100%' }}
        onSubmit={handleSubmit(handleEvent)}
      >
        <h3 className="text-center mb-3">Register</h3>

        <label htmlFor="un" className="form-label">Username</label>
        <input type="text" id="un" {...register('un', { required: true })} className="form-control mb-3"/>

        <label htmlFor="pw" className="form-label">Password</label>
        <input  type="password" id="pw" {...register('pw', { required: true })} className="form-control mb-3"/>

        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" {...register('email', { required: true })} className="form-control mb-3" />

        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" id="age"{...register('age', { required: true })} className="form-control mb-3" />

        <label htmlFor="city" className="form-label">City</label>
        <input type="text" id="city" {...register('city', { required: true })} className="form-control mb-4" />

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default Register;
