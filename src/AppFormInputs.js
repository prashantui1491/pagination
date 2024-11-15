import React, { useState } from 'react';

const TableWithFormValidation = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name === "") {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim() || formData.email === "") {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isEditing !== null) {
      const updatedData = data.map((item, index) =>
        index === isEditing ? formData : item
      );
      setData(updatedData);
      setIsEditing(null);
    } else {
      setData([...data, formData]);
    }

    setFormData({ name: '', email: '' });
    setErrors({});
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setIsEditing(index);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3>{isEditing !== null ? 'Edit Entry' : 'Add New Entry'}</h3>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', width: '100%', maxWidth: '500px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', width: '100%' }}
            />
          </label>
          {errors.name && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.name}</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', width: '100%' }}
            />
          </label>
          {errors.email && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.email}</span>}
        </div>
        <button type="submit" style={{
          padding: '8px 12px',
          borderRadius: '4px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          width: '50%',
          marginLeft:"30%"
        }}>
          {isEditing !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <h2>Data Table</h2>

      <div style={{
        width: '100%',
        maxWidth: '1000px',
        overflowY: 'auto',
        height: '300px', // Fixed height for scroll
        //borderBottom: "1px solid black",
        borderTop: "1px solid black"
      }}>
        <table style={{
          borderCollapse: 'collapse',
          width: '100%',
          textAlign: 'center',
          tableLayout: 'fixed' // Ensures consistent column width
        }} border="1" cellPadding="10">
          <thead style={{ position: 'sticky', top: '0', backgroundColor: '#f2f2f2' }}>
            <tr>
              <th style={{ width: '35%' }}>Name</th>
              <th style={{ width: '35%' }}>Email</th>
              <th style={{ width: '15%' }}>Edit</th>
              <th style={{ width: '15%' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} style={{
                      backgroundColor: '#ffc107',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)} style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithFormValidation;
