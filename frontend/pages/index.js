import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Page from '../components/Page';
import Recipes from '../components/Recipes';

const RECIPES_QUERY = gql`
  query RECIPES_QUERY {
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
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(RECIPES_QUERY);

  return (
    <Page location="/" loading={loading}>
      {data?.recipes && <Recipes recipes={data.recipes} />}
    </Page>
  );
};

export default IndexPage;
