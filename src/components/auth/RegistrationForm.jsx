import React, { useState } from 'react';
import Button from '../common/Button';
import { endpoints } from '../../utils/api';

const RegistrationForm = ({ maxDate }) => {
  const [role, setRole] = useState('Student');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const generateUsername = () => {
    const formattedDateOfBirth = dateOfBirth.split('-').join('').slice(2);
    let proposedUsername = `${firstName}${lastName}${formattedDateOfBirth}`;

    let count = 1;
    let finalUsername = proposedUsername;

    // Check if the username already exists and increment the number if needed
    while (existingUsernames.includes(finalUsername)) {
      finalUsername = `${proposedUsername}${count}`;
      count++;
    }
    console.log(finalUsername)
    setUsername(finalUsername);
  };

  const generateRandomPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let randomPassword = '';

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomPassword += characters.charAt(randomIndex);
    }
    console.log(randomPassword)
    return randomPassword;
  };

  const existingUsernames = []; // You should populate this array with existing usernames

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!firstName || !lastName) {
      setError('First Name and Last Name are required fields.');
      return;
    }

    // Generate username and password
    generateUsername();
    const generatedPassword = generateRandomPassword();
    setPassword(generatedPassword);

    // Create the payload based on the selected role
    const payload =
      role === 'Student'
        ? {
          firstName,
          lastName,
          dateOfBirth,
          address,
          coursesEnrolled: [], // Empty array for coursesEnrolled for students
          assignedTrainers: [], // Empty array for assignedTrainers for students
          userName: username,
          password: generatedPassword,
        }
        : {
          firstName,
          lastName,
          specialization,
          publishedCourses: [], // Empty array for publishedCourses for trainers
          studentsEnrolled: [], // Empty array for studentsEnrolled for trainers
          userName: username,
          password: generatedPassword,
        };

    try {
      const roleEndpoint = role === 'Student' ? endpoints.students : endpoints.trainers;

      const response = await fetch(roleEndpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Registration failed.');
      }

      // Assuming a successful API response here
      setSuccess(true);
      setError('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error:', error);
    }
  };



  return (
    <div>
      <h2>Registration Form</h2>
      {error && <div className="error">{error}</div>}
      {success && (
        <div className="success">
          Your account has been created successfully. Here are your login details:
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="role">Select Role:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Trainer">Trainer</option>
          </select>
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {role === 'Student' && (
          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              max={maxDate}
            />
          </div>
        )}
        {role === 'Student' && (
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        )}
        {role === 'Trainer' && (
          <div>
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              id="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>
        )}
        <Button label={"Register"} />
      </form>
    </div>
  );
}

export default RegistrationForm;
