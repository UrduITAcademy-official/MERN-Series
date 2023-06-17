import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
function Login() {
  const history=useNavigate();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [cpassword, setcpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
 
      email,
      password,
    
    };
  
    const response = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  if(response.status==400){

    alert("Error")
  }
  else{
    alert("Sucessfull login")
    history("/About")
  }
   
    
    
  };
  

  const inputStyle = {
    margin: '10px 0',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%'
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
    
      <label style={{ display: 'block', marginBottom: '5px' }}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      </label>
     
      <label style={{ display: 'block', marginBottom: '5px' }}>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
      </label>
      
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
}

export default Login;
