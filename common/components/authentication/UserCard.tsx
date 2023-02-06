import React from 'react';
import { DefaultSession } from 'next-auth';
const UserCard = ({ user }: { user: DefaultSession['user'] }) => {
  return (
    <>
      <p>User is </p>
      <h1>User name {user?.name}</h1>
      <h1>User email {user?.email}</h1>
    </>
  );
};

export default UserCard;
