// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // État pour stocker les utilisateurs
  const [listOfUser, setListOfUser] = useState([]);

  // Utilisation de useEffect pour récupérer les données
  useEffect(() => {
    // Faire une requête GET à l'API jsonplaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Enregistrer les utilisateurs dans l'état
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []); // [] signifie que useEffect sera appelé une seule fois au montage du composant

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
