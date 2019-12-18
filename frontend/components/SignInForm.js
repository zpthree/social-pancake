import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './Me';

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
    }
  }
`;

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser, { loading }] = useMutation(SIGN_IN_MUTATION);

  if (loading) return <p>Loading...</p>;

  return (
    <form
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        await createUser({
          variables: { email, password },
          refetchQueries: [{ query: CURRENT_USER_QUERY }],
        });
        Router.push('/');
      }}
    >
      <input
        type="text"
        id="signupEmail"
        name="signupEmail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="signupPassword"
        name="signupPassword"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignInForm;
