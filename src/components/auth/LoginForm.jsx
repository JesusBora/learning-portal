import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('trainer');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError('');

      // Redirect based on the selected role
      if (role === 'trainer') {
        navigate('/trainer-home');
      } else if (role === 'student') {
        navigate('/student-home');
      }
    }, 2000);
  };

  return (
    <div className='login'>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="trainer">I'm a trainer</option>
            <option value="student">I'm a student</option>
          </select>
        </div>
        <Button type="submit" disabled={loading}>
            Login
            {loading ? 'Loading...' : 'Login'}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
