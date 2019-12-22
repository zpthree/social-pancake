import React, { useState } from 'react';
import Head from 'next/head';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import dynamic from 'next/dynamic'; // (if using Next.js or use own dynamic loader)
import Page from '../components/Page';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $title: String!
    $description: String!
    $content: String!
  ) {
    createRecipe(title: $title, description: $description, content: $content) {
      id
      content
    }
  }
`;

const CreateRecipePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [createRecipe, { loading }] = useMutation(CREATE_RECIPE_MUTATION);

  return (
    <Page location="create-recipe">
      <Head>
        <link rel="stylesheet" type="text/css" href="/styles/quill.css" />
      </Head>
      <h1>Create Recipe</h1>
      <label htmlFor="recipeTitle">
        <p>Title</p>
        <input
          id="recipeTitle"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="recipeDescription">
        <p>Description</p>
        <textarea
          id="recipeDescription"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <ReactQuill value={content} onChange={data => setContent(data)} />
      <button
        type="submit"
        onClick={() => {
          createRecipe({ variables: { title, description, content } });
        }}
      >
        Submit
      </button>
    </Page>
  );
};
export default CreateRecipePage;
