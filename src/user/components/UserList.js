import React from 'react';
import UserItem from './UserItem'
import './UserList.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {
        props.items.map(user => {
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        })
      }
    </ul>
  );

  return (
    <h1>test</h1>
  );

};

export default UsersList;
