import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_USER_QUERY = gql`
  mutation CREATE_USER_QUERY(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser, { loading, error, data }] = useMutation(CREATE_USER_QUERY);

  if (loading) return <p>Loading...</p>;

  return (
    <form
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        const user = await createUser({
          variables: { name, username, email, password },
        });
        console.log(user);
      }}
    >
      <input
        type="text"
        id="signupName"
        name="signupName"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        id="signupUsername"
        name="signupUsername"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
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

export default SignUpForm;
