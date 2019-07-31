import { gql } from 'apollo-server';

const TYPEDEFS = gql`
  type Test {
    _id: String
    status: String
    number: String
  }
`;

export default TYPEDEFS;
