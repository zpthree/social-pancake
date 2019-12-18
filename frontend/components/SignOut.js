import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from './Me';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signOut {
      message
    }
  }
`;

const SignOut = () => {
  const [signOut, { loading, error, data }] = useMutation(SIGN_OUT_MUTATION);

  if (loading) return <p>Loading</p>;
  // if (error) console.error(error);

  return (
    <button
      type="button"
      onClick={() =>
        signOut({ refetchQueries: [{ query: CURRENT_USER_QUERY }] })
      }
    >
      Sign Out
    </button>
  );
};

export default SignOut;
