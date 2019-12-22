import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Loading from './Loading';

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
