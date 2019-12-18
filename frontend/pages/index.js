import React from 'react';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import Page from '../components/Page';

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

  console.log(data?.recipes);

  return (
    <Page location="/">
      {loading ? <p>Loading...</p> : (
        <div>
          <Link href="/u/zpthree">
            <a>Zach Patrick</a>
          </Link>
          {data?.recipes.map(recipe => console.log(recipe) || (
            <div style={{border: "1px solid #cacaca", padding: '2rem', margin: "1rem 0"}}>
              <Link href={`/u/[slug]`} as={`/u/${recipe.user.username}`}>
                <a>
                  {recipe.user.name}
                </a>
              </Link>
              <p>{recipe.title}</p>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </Page>
  );
};

export default IndexPage;
