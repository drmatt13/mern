import React from 'react';

import UsersList from '../components/UserList';

const Users = () => {

  const USERS = [
    {
      id: 'ul',
      name: 'max schwarz',
      image: 'url',
      places: 3
    }
  ];

  return (
    <UsersList items={USERS} />
  );
};

export default Users;
