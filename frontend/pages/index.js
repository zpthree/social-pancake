import React from 'react';
import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      name
    }
  }
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Hello, {data.me?.name}.</h1>
    </div>
  );
};

export default IndexPage;
