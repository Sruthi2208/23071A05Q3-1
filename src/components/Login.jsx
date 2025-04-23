import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleLogin(data) {
    console.log(data);
    navigate(`/log/${data.username}`);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="form-control p-4"
        style={{ maxWidth: '400px', width: '100%' }}
        onSubmit={handleSubmit(handleLogin)}
      >
        <h3 className="text-center mb-3">Login</h3>

        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true })}
          className="form-control mb-3"
        />

        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="form-control mb-4"
        />

        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
