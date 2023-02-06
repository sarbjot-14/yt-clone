'use client';

import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import UserCard from '../authentication/UserCard';

const Login = () => {
  fetch('/api/users/1').then((user) =>
    user.json().then((finalUser) => console.log('final user is ', finalUser)),
  );
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign Out of Google</button>
        <UserCard user={session?.user}></UserCard>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => signIn()}>Sign In with Goooooogle</button>
      </>
    );
  }

  return <div>Login</div>;
};

export default Login;
