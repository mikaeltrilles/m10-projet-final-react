import React from 'react';
import axios from 'axios';


const Login = ({ setIsLog }) => {

  function handleSubmit(e) {
    e.preventDefault()
    const utilisateur = {
      email: e.target.email.value,
      mdp: e.target.password.value
    }
    axios.post('http://127.0.0.1:3001/api/auth/login', utilisateur)
      .then((response) => {
        if (response.data.isLog) {
          setIsLog();
          localStorage.setItem('user', JSON.stringify(response.data));
        } else {
        }
      })
  }



  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;