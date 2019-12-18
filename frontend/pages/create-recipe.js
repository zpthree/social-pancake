import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import dynamic from 'next/dynamic'; // (if using Next.js or use own dynamic loader)
import '../public/styles/quill.css';
import Page from '../components/Page';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION($content: String!) {
    createRecipe(content: $content) {
      id
      content
    }
  }
`;

const CreateRecipePage = () => {
  const [content, setContent] = useState('');
  const [createRecipe, { loading }] = useMutation(CREATE_RECIPE_MUTATION);

  return (
    <Page location="create-recipe">
      <h1>Create Recipe</h1>
      <ReactQuill value={content} onChange={data => setContent(data)} />
      <button
        type="submit"
        onClick={() => {
          createRecipe({ variables: { content } });
        }}
      >
        Submit
      </button>
    </Page>
  );
};
export default CreateRecipePage;
