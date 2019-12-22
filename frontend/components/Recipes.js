import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => (
  <RecipesStyles>
    <h1>Recipes</h1>
    <div className="recipes-wrapper">
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  </RecipesStyles>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const RecipesStyles = styled.div`
  padding: 2rem;

  .recipes-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

export default Recipes;
