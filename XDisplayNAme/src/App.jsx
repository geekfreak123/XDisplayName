import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="app-container">
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required // Marking field as required
          />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required // Marking field as required
          />
        </div>
        {showError && <p className="error-message">Please fill out this field</p>}
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className="submitted-info">
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;
