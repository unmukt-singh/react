import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Task3() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/users');
          setUsers(response.data.users);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);
  return (
    <div className="container">
    <h1 className="m-4 text-center">User Table</h1>
    <table className="table table-striped table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Username</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName} {user.maidenName} {user.lastName}</td>
            <td><img src={`${user.image}`} alt="cxczxcz" style={{'height':'60px'}} /></td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.username}</td>
            <td>{user.address.address}, {user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Task3