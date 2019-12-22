import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Page from '../../../../components/Page';

const RECIPE_QUERY = gql`
  query RECIPE_QUERY($id: ID!) {
    recipe(id: $id) {
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

const Hello = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  const { loading, data } = useQuery(RECIPE_QUERY, {
    variables: { id: recipeId },
  });

  return (
    <Page location="/u/[slug]/recipe/[recipeId]" loading={loading}>
      {data?.recipe && (
        <>
          <h1>{data.recipe.title}</h1>
          <p>{data.recipe.description}</p>
          <div dangerouslySetInnerHTML={{ __html: data.recipe.content }} />
        </>
      )}
    </Page>
  );
};

export default Hello;
