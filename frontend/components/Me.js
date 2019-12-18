import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    me {
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

const Me = ({ children }) => {
  const payload = useQuery(CURRENT_USER_QUERY);

  return children(payload);
};

Me.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Me;
export { CURRENT_USER_QUERY };
