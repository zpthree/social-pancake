import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Page from '../../components/Page';
import Recipes from '../../components/Recipes';

const USER_QUERY = gql`
  query USER_QUERY($username: String!) {
    user(username: $username) {
      id
      name
      username
      email
      recipes {
        id
        title
        description
        content
        createdAt
        user {
          id
          name
          username
        }
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

  if (error) console.error(error);

  return (
    <Page location="/u/[slug]" loading={loading}>
      {data?.user?.recipes && <Recipes recipes={data.user.recipes} />}
    </Page>
  );
};

export default UserPage;
