import React, { useState } from 'react';

const Table = ({ tableData }) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((data, index) => (
        <tr key={index}>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.phoneNumber}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TableExample = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [tableData, setTableData] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding the form data to the table data array
    setTableData([...tableData, { firstName, lastName, phoneNumber }]);
    // Clearing the form after submission
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <Table tableData={tableData} />
    </div>
  );
};

export default TableExample;
