import React from 'react';

import UsersList from '../components/UserList';

const Users = () => {

  const USERS = [
    {
      id: 'ul',
      name: 'max schwarz',
      image: 'https://ragnarokaesthetic.com/pages/template%20default/images/david.png',
      places: 3
    },
    {
      id: 'ul',
      name: 'jsidjsidj',
      image: 'https://ragnarokaesthetic.com/pages/template%20default/images/david.png',
      places: 3
    }
  ];

  return (
    <UsersList items={USERS} />
  );
};

export default Users;
