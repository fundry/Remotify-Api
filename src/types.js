import { gql } from 'apollo-server';

const typeDefs = gql`
  type Team {
    id: Int
    description: String
    name: String
    members: Int
    active: Boolean
    createdAt: Int
  }

  type Staff {
    id: Int
    name: String
    team: Int
    role: String
    joinedAt: Int
  }

  type Company {
    id: Int
    name: String
  }

  type Query {
    info: String
    team: [Team]
    company: [Company]
    staff: [Staff]
    users: [Staff]
  }

  type Mutation {
    createTeam(
      name: String
      members: Int
      active: Boolean
      description: String
    ): Team!
    createCompany(name: String): Company!
    createStaff(name: String, role: Boolean, joinedAt: Int): Staff!
    createGroup(name: String, description: String): Group!
  }
`;

export default typeDefs;
