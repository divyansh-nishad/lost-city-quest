import React, { useEffect, useState } from 'react';
import firebase from '../../components/firebase';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate()

  useEffect(() => {
    // fetch all users from Firestore
    firebase.firestore().collection('users').get().then((snapshot) => {
      const usersArray = [];
      snapshot.docs.forEach(doc => {
        usersArray.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersArray);
    });
  }, []);

  return (
    <div className='admin-dash'>
      <h1>AdminDashboard</h1>
      <table style={{ borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Current Level</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px', wordWrap: "break-word" }}>{user.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.level}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="mx-2" variant='info'
        onClick={() => nav('/')}
      >
        Home
      </Button>
    </div>
  );
};

export default AdminDashboard;
