import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Page from '../../components/Page';

const USER_QUERY = gql`
  query USER_QUERY($username: String!) {
    user(username: $username) {
      id
      name
      username
      email
      recipes {
        id
        content
      }
    }
  }
`;

const UserPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { username: slug },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <Page>
      <h1>{data?.user?.name}</h1>
    </Page>
  );
};

export default UserPage;
