import React from 'react';
import axios from 'axios';


const Login = ({ setIsLog }) => {

  function handleSubmit(e) {
    e.preventDefault()
    const utilisateur = {
      email: e.target.email.value,
      mdp: e.target.password.value
    }
    axios.post('http://localhost:3001/login', utilisateur)
      .then((response) => {
        console.log(utilisateur);
        console.log(response);
        if (response.data.isLog) {
          setIsLog()
          console.log(response.data.token);
          localStorage.setItem('tokens', JSON.stringify(response.data.token));
          console.log('Connection OK')
        } else {
          console.log('Connection KO')
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