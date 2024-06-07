import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

export default function Register() {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: ''
  })
  const [errors, setErrors] = React.useState({})
 const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        email: e.target.email.value,
    };
    const userFood = JSON.parse(localStorage.getItem('userFood')) || [];
    const userExists = userFood.some(user => user.email === formData.email);

    if (userExists) {
        setErrors({
            ...errors,
            email: 'Email is already registered'
        });
    } else {
        userFood.push(formData);
        localStorage.setItem('userFood', JSON.stringify(userFood));
        e.target.reset();
        setErrors({});
        alert('Đăng ký thành công');
        window.location.href = '/login';
    }
};
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <>
    <div id='register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        <div>
          <button type="submit">Register</button>
          <Link to="/login">Bạn đã có tài khoản</Link>
        </div>
      </form>
    </div>
    </>
  )
}
