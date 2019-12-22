import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const Recipe = ({ recipe }) => (
  <RecipeStyles>
    <Link href="/u/[slug]" as={`/u/${recipe.user.username}`}>
      <a>{recipe.user.name}</a>
    </Link>
    <h3>{recipe.title}</h3>
    <p>{recipe.description}</p>
    <Link
      href="/u/[slug]/recipe/[recipeId]"
      as={`/u/${recipe.user.username}/recipe/${recipe.id}`}
    >
      <a>View Recipe</a>
    </Link>
  </RecipeStyles>
);

const RecipeStyles = styled.div`
  border: 1px solid var(--lightgrey);
  padding: 2rem;
  margin: 0;
`;

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  }),
};

export default Recipe;
