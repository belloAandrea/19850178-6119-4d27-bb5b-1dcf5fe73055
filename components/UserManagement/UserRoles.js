import React from 'react';

const UserRoles = ({ roles, setRoles }) => {
  const handleChange = (role) => {
    setRoles((prev) => (prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]));
  };

  return (
    <div>
      <label>
        <input type='checkbox' checked={roles.includes('admin')} onChange={() => handleChange('admin')} /> Admin
      </label>
      <label>
        <input type='checkbox' checked={roles.includes('editor')} onChange={() => handleChange('editor')} /> Editor
      </label>
    </div>
  );
};

export default UserRoles;