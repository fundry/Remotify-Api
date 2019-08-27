module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateDepartment {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateLead {
  count: Int!
}

type AggregateOrganization {
  count: Int!
}

type AggregateStaff {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Department {
  id: ID!
  leads(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lead!]
  name: String!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  createdAt: DateTime!
}

type DepartmentConnection {
  pageInfo: PageInfo!
  edges: [DepartmentEdge]!
  aggregate: AggregateDepartment!
}

input DepartmentCreateInput {
  id: ID
  leads: LeadCreateManyInput
  name: String!
  teams: TeamCreateManyInput
}

input DepartmentCreateManyInput {
  create: [DepartmentCreateInput!]
  connect: [DepartmentWhereUniqueInput!]
}

type DepartmentEdge {
  node: Department!
  cursor: String!
}

enum DepartmentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
}

type DepartmentPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
}

input DepartmentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [DepartmentScalarWhereInput!]
  OR: [DepartmentScalarWhereInput!]
  NOT: [DepartmentScalarWhereInput!]
}

type DepartmentSubscriptionPayload {
  mutation: MutationType!
  node: Department
  updatedFields: [String!]
  previousValues: DepartmentPreviousValues
}

input DepartmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DepartmentWhereInput
  AND: [DepartmentSubscriptionWhereInput!]
  OR: [DepartmentSubscriptionWhereInput!]
  NOT: [DepartmentSubscriptionWhereInput!]
}

input DepartmentUpdateDataInput {
  leads: LeadUpdateManyInput
  name: String
  teams: TeamUpdateManyInput
}

input DepartmentUpdateInput {
  leads: LeadUpdateManyInput
  name: String
  teams: TeamUpdateManyInput
}

input DepartmentUpdateManyDataInput {
  name: String
}

input DepartmentUpdateManyInput {
  create: [DepartmentCreateInput!]
  update: [DepartmentUpdateWithWhereUniqueNestedInput!]
  upsert: [DepartmentUpsertWithWhereUniqueNestedInput!]
  delete: [DepartmentWhereUniqueInput!]
  connect: [DepartmentWhereUniqueInput!]
  set: [DepartmentWhereUniqueInput!]
  disconnect: [DepartmentWhereUniqueInput!]
  deleteMany: [DepartmentScalarWhereInput!]
  updateMany: [DepartmentUpdateManyWithWhereNestedInput!]
}

input DepartmentUpdateManyMutationInput {
  name: String
}

input DepartmentUpdateManyWithWhereNestedInput {
  where: DepartmentScalarWhereInput!
  data: DepartmentUpdateManyDataInput!
}

input DepartmentUpdateWithWhereUniqueNestedInput {
  where: DepartmentWhereUniqueInput!
  data: DepartmentUpdateDataInput!
}

input DepartmentUpsertWithWhereUniqueNestedInput {
  where: DepartmentWhereUniqueInput!
  update: DepartmentUpdateDataInput!
  create: DepartmentCreateInput!
}

input DepartmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  leads_every: LeadWhereInput
  leads_some: LeadWhereInput
  leads_none: LeadWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [DepartmentWhereInput!]
  OR: [DepartmentWhereInput!]
  NOT: [DepartmentWhereInput!]
}

input DepartmentWhereUniqueInput {
  id: ID
}

type Group {
  id: ID!
  name: String!
  description: String
  members(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Staff!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  id: ID
  name: String!
  description: String
  members: StaffCreateManyInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
  description: String
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  name: String
  description: String
  members: StaffUpdateManyInput
}

input GroupUpdateManyMutationInput {
  name: String
  description: String
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  members_every: StaffWhereInput
  members_some: StaffWhereInput
  members_none: StaffWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

type Lead {
  id: ID!
  staff(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Staff!]
  team(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type LeadConnection {
  pageInfo: PageInfo!
  edges: [LeadEdge]!
  aggregate: AggregateLead!
}

input LeadCreateInput {
  id: ID
  staff: StaffCreateManyInput
  team: TeamCreateManyInput
}

input LeadCreateManyInput {
  create: [LeadCreateInput!]
  connect: [LeadWhereUniqueInput!]
}

type LeadEdge {
  node: Lead!
  cursor: String!
}

enum LeadOrderByInput {
  id_ASC
  id_DESC
}

type LeadPreviousValues {
  id: ID!
}

input LeadScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LeadScalarWhereInput!]
  OR: [LeadScalarWhereInput!]
  NOT: [LeadScalarWhereInput!]
}

type LeadSubscriptionPayload {
  mutation: MutationType!
  node: Lead
  updatedFields: [String!]
  previousValues: LeadPreviousValues
}

input LeadSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LeadWhereInput
  AND: [LeadSubscriptionWhereInput!]
  OR: [LeadSubscriptionWhereInput!]
  NOT: [LeadSubscriptionWhereInput!]
}

input LeadUpdateDataInput {
  staff: StaffUpdateManyInput
  team: TeamUpdateManyInput
}

input LeadUpdateInput {
  staff: StaffUpdateManyInput
  team: TeamUpdateManyInput
}

input LeadUpdateManyInput {
  create: [LeadCreateInput!]
  update: [LeadUpdateWithWhereUniqueNestedInput!]
  upsert: [LeadUpsertWithWhereUniqueNestedInput!]
  delete: [LeadWhereUniqueInput!]
  connect: [LeadWhereUniqueInput!]
  set: [LeadWhereUniqueInput!]
  disconnect: [LeadWhereUniqueInput!]
  deleteMany: [LeadScalarWhereInput!]
}

input LeadUpdateWithWhereUniqueNestedInput {
  where: LeadWhereUniqueInput!
  data: LeadUpdateDataInput!
}

input LeadUpsertWithWhereUniqueNestedInput {
  where: LeadWhereUniqueInput!
  update: LeadUpdateDataInput!
  create: LeadCreateInput!
}

input LeadWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  staff_every: StaffWhereInput
  staff_some: StaffWhereInput
  staff_none: StaffWhereInput
  team_every: TeamWhereInput
  team_some: TeamWhereInput
  team_none: TeamWhereInput
  AND: [LeadWhereInput!]
  OR: [LeadWhereInput!]
  NOT: [LeadWhereInput!]
}

input LeadWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDepartment(data: DepartmentCreateInput!): Department!
  updateDepartment(data: DepartmentUpdateInput!, where: DepartmentWhereUniqueInput!): Department
  updateManyDepartments(data: DepartmentUpdateManyMutationInput!, where: DepartmentWhereInput): BatchPayload!
  upsertDepartment(where: DepartmentWhereUniqueInput!, create: DepartmentCreateInput!, update: DepartmentUpdateInput!): Department!
  deleteDepartment(where: DepartmentWhereUniqueInput!): Department
  deleteManyDepartments(where: DepartmentWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createLead(data: LeadCreateInput!): Lead!
  updateLead(data: LeadUpdateInput!, where: LeadWhereUniqueInput!): Lead
  upsertLead(where: LeadWhereUniqueInput!, create: LeadCreateInput!, update: LeadUpdateInput!): Lead!
  deleteLead(where: LeadWhereUniqueInput!): Lead
  deleteManyLeads(where: LeadWhereInput): BatchPayload!
  createOrganization(data: OrganizationCreateInput!): Organization!
  updateOrganization(data: OrganizationUpdateInput!, where: OrganizationWhereUniqueInput!): Organization
  updateManyOrganizations(data: OrganizationUpdateManyMutationInput!, where: OrganizationWhereInput): BatchPayload!
  upsertOrganization(where: OrganizationWhereUniqueInput!, create: OrganizationCreateInput!, update: OrganizationUpdateInput!): Organization!
  deleteOrganization(where: OrganizationWhereUniqueInput!): Organization
  deleteManyOrganizations(where: OrganizationWhereInput): BatchPayload!
  createStaff(data: StaffCreateInput!): Staff!
  updateStaff(data: StaffUpdateInput!, where: StaffWhereUniqueInput!): Staff
  updateManyStaffs(data: StaffUpdateManyMutationInput!, where: StaffWhereInput): BatchPayload!
  upsertStaff(where: StaffWhereUniqueInput!, create: StaffCreateInput!, update: StaffUpdateInput!): Staff!
  deleteStaff(where: StaffWhereUniqueInput!): Staff
  deleteManyStaffs(where: StaffWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Organization {
  id: ID!
  createdAt: DateTime!
  name: String!
  Teams: Int
  leads: Int
  type: String
  description: String
  staffs(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Staff!]
  department(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Department!]
}

type OrganizationConnection {
  pageInfo: PageInfo!
  edges: [OrganizationEdge]!
  aggregate: AggregateOrganization!
}

input OrganizationCreateInput {
  id: ID
  name: String!
  Teams: Int
  leads: Int
  type: String
  description: String
  staffs: StaffCreateManyWithoutOrganizationInput
  department: DepartmentCreateManyInput
}

input OrganizationCreateManyWithoutStaffsInput {
  create: [OrganizationCreateWithoutStaffsInput!]
  connect: [OrganizationWhereUniqueInput!]
}

input OrganizationCreateWithoutStaffsInput {
  id: ID
  name: String!
  Teams: Int
  leads: Int
  type: String
  description: String
  department: DepartmentCreateManyInput
}

type OrganizationEdge {
  node: Organization!
  cursor: String!
}

enum OrganizationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  Teams_ASC
  Teams_DESC
  leads_ASC
  leads_DESC
  type_ASC
  type_DESC
  description_ASC
  description_DESC
}

type OrganizationPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  Teams: Int
  leads: Int
  type: String
  description: String
}

input OrganizationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  Teams: Int
  Teams_not: Int
  Teams_in: [Int!]
  Teams_not_in: [Int!]
  Teams_lt: Int
  Teams_lte: Int
  Teams_gt: Int
  Teams_gte: Int
  leads: Int
  leads_not: Int
  leads_in: [Int!]
  leads_not_in: [Int!]
  leads_lt: Int
  leads_lte: Int
  leads_gt: Int
  leads_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [OrganizationScalarWhereInput!]
  OR: [OrganizationScalarWhereInput!]
  NOT: [OrganizationScalarWhereInput!]
}

type OrganizationSubscriptionPayload {
  mutation: MutationType!
  node: Organization
  updatedFields: [String!]
  previousValues: OrganizationPreviousValues
}

input OrganizationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrganizationWhereInput
  AND: [OrganizationSubscriptionWhereInput!]
  OR: [OrganizationSubscriptionWhereInput!]
  NOT: [OrganizationSubscriptionWhereInput!]
}

input OrganizationUpdateInput {
  name: String
  Teams: Int
  leads: Int
  type: String
  description: String
  staffs: StaffUpdateManyWithoutOrganizationInput
  department: DepartmentUpdateManyInput
}

input OrganizationUpdateManyDataInput {
  name: String
  Teams: Int
  leads: Int
  type: String
  description: String
}

input OrganizationUpdateManyMutationInput {
  name: String
  Teams: Int
  leads: Int
  type: String
  description: String
}

input OrganizationUpdateManyWithoutStaffsInput {
  create: [OrganizationCreateWithoutStaffsInput!]
  delete: [OrganizationWhereUniqueInput!]
  connect: [OrganizationWhereUniqueInput!]
  set: [OrganizationWhereUniqueInput!]
  disconnect: [OrganizationWhereUniqueInput!]
  update: [OrganizationUpdateWithWhereUniqueWithoutStaffsInput!]
  upsert: [OrganizationUpsertWithWhereUniqueWithoutStaffsInput!]
  deleteMany: [OrganizationScalarWhereInput!]
  updateMany: [OrganizationUpdateManyWithWhereNestedInput!]
}

input OrganizationUpdateManyWithWhereNestedInput {
  where: OrganizationScalarWhereInput!
  data: OrganizationUpdateManyDataInput!
}

input OrganizationUpdateWithoutStaffsDataInput {
  name: String
  Teams: Int
  leads: Int
  type: String
  description: String
  department: DepartmentUpdateManyInput
}

input OrganizationUpdateWithWhereUniqueWithoutStaffsInput {
  where: OrganizationWhereUniqueInput!
  data: OrganizationUpdateWithoutStaffsDataInput!
}

input OrganizationUpsertWithWhereUniqueWithoutStaffsInput {
  where: OrganizationWhereUniqueInput!
  update: OrganizationUpdateWithoutStaffsDataInput!
  create: OrganizationCreateWithoutStaffsInput!
}

input OrganizationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  Teams: Int
  Teams_not: Int
  Teams_in: [Int!]
  Teams_not_in: [Int!]
  Teams_lt: Int
  Teams_lte: Int
  Teams_gt: Int
  Teams_gte: Int
  leads: Int
  leads_not: Int
  leads_in: [Int!]
  leads_not_in: [Int!]
  leads_lt: Int
  leads_lte: Int
  leads_gt: Int
  leads_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  staffs_every: StaffWhereInput
  staffs_some: StaffWhereInput
  staffs_none: StaffWhereInput
  department_every: DepartmentWhereInput
  department_some: DepartmentWhereInput
  department_none: DepartmentWhereInput
  AND: [OrganizationWhereInput!]
  OR: [OrganizationWhereInput!]
  NOT: [OrganizationWhereInput!]
}

input OrganizationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  department(where: DepartmentWhereUniqueInput!): Department
  departments(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Department]!
  departmentsConnection(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DepartmentConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  lead(where: LeadWhereUniqueInput!): Lead
  leads(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lead]!
  leadsConnection(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeadConnection!
  organization(where: OrganizationWhereUniqueInput!): Organization
  organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization]!
  organizationsConnection(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganizationConnection!
  staff(where: StaffWhereUniqueInput!): Staff
  staffs(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Staff]!
  staffsConnection(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StaffConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  node(id: ID!): Node
}

type Staff {
  id: ID!
  name: String!
  organization(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization!]
  team(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  isLead: Boolean
  role: String
  joinedAt: DateTime!
}

type StaffConnection {
  pageInfo: PageInfo!
  edges: [StaffEdge]!
  aggregate: AggregateStaff!
}

input StaffCreateInput {
  id: ID
  name: String!
  organization: OrganizationCreateManyWithoutStaffsInput
  team: TeamCreateManyWithoutLeadInput
  isLead: Boolean
  role: String
}

input StaffCreateManyInput {
  create: [StaffCreateInput!]
  connect: [StaffWhereUniqueInput!]
}

input StaffCreateManyWithoutOrganizationInput {
  create: [StaffCreateWithoutOrganizationInput!]
  connect: [StaffWhereUniqueInput!]
}

input StaffCreateManyWithoutTeamInput {
  create: [StaffCreateWithoutTeamInput!]
  connect: [StaffWhereUniqueInput!]
}

input StaffCreateWithoutOrganizationInput {
  id: ID
  name: String!
  team: TeamCreateManyWithoutLeadInput
  isLead: Boolean
  role: String
}

input StaffCreateWithoutTeamInput {
  id: ID
  name: String!
  organization: OrganizationCreateManyWithoutStaffsInput
  isLead: Boolean
  role: String
}

type StaffEdge {
  node: Staff!
  cursor: String!
}

enum StaffOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  isLead_ASC
  isLead_DESC
  role_ASC
  role_DESC
  joinedAt_ASC
  joinedAt_DESC
}

type StaffPreviousValues {
  id: ID!
  name: String!
  isLead: Boolean
  role: String
  joinedAt: DateTime!
}

input StaffScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  isLead: Boolean
  isLead_not: Boolean
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  joinedAt: DateTime
  joinedAt_not: DateTime
  joinedAt_in: [DateTime!]
  joinedAt_not_in: [DateTime!]
  joinedAt_lt: DateTime
  joinedAt_lte: DateTime
  joinedAt_gt: DateTime
  joinedAt_gte: DateTime
  AND: [StaffScalarWhereInput!]
  OR: [StaffScalarWhereInput!]
  NOT: [StaffScalarWhereInput!]
}

type StaffSubscriptionPayload {
  mutation: MutationType!
  node: Staff
  updatedFields: [String!]
  previousValues: StaffPreviousValues
}

input StaffSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StaffWhereInput
  AND: [StaffSubscriptionWhereInput!]
  OR: [StaffSubscriptionWhereInput!]
  NOT: [StaffSubscriptionWhereInput!]
}

input StaffUpdateDataInput {
  name: String
  organization: OrganizationUpdateManyWithoutStaffsInput
  team: TeamUpdateManyWithoutLeadInput
  isLead: Boolean
  role: String
}

input StaffUpdateInput {
  name: String
  organization: OrganizationUpdateManyWithoutStaffsInput
  team: TeamUpdateManyWithoutLeadInput
  isLead: Boolean
  role: String
}

input StaffUpdateManyDataInput {
  name: String
  isLead: Boolean
  role: String
}

input StaffUpdateManyInput {
  create: [StaffCreateInput!]
  update: [StaffUpdateWithWhereUniqueNestedInput!]
  upsert: [StaffUpsertWithWhereUniqueNestedInput!]
  delete: [StaffWhereUniqueInput!]
  connect: [StaffWhereUniqueInput!]
  set: [StaffWhereUniqueInput!]
  disconnect: [StaffWhereUniqueInput!]
  deleteMany: [StaffScalarWhereInput!]
  updateMany: [StaffUpdateManyWithWhereNestedInput!]
}

input StaffUpdateManyMutationInput {
  name: String
  isLead: Boolean
  role: String
}

input StaffUpdateManyWithoutOrganizationInput {
  create: [StaffCreateWithoutOrganizationInput!]
  delete: [StaffWhereUniqueInput!]
  connect: [StaffWhereUniqueInput!]
  set: [StaffWhereUniqueInput!]
  disconnect: [StaffWhereUniqueInput!]
  update: [StaffUpdateWithWhereUniqueWithoutOrganizationInput!]
  upsert: [StaffUpsertWithWhereUniqueWithoutOrganizationInput!]
  deleteMany: [StaffScalarWhereInput!]
  updateMany: [StaffUpdateManyWithWhereNestedInput!]
}

input StaffUpdateManyWithoutTeamInput {
  create: [StaffCreateWithoutTeamInput!]
  delete: [StaffWhereUniqueInput!]
  connect: [StaffWhereUniqueInput!]
  set: [StaffWhereUniqueInput!]
  disconnect: [StaffWhereUniqueInput!]
  update: [StaffUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [StaffUpsertWithWhereUniqueWithoutTeamInput!]
  deleteMany: [StaffScalarWhereInput!]
  updateMany: [StaffUpdateManyWithWhereNestedInput!]
}

input StaffUpdateManyWithWhereNestedInput {
  where: StaffScalarWhereInput!
  data: StaffUpdateManyDataInput!
}

input StaffUpdateWithoutOrganizationDataInput {
  name: String
  team: TeamUpdateManyWithoutLeadInput
  isLead: Boolean
  role: String
}

input StaffUpdateWithoutTeamDataInput {
  name: String
  organization: OrganizationUpdateManyWithoutStaffsInput
  isLead: Boolean
  role: String
}

input StaffUpdateWithWhereUniqueNestedInput {
  where: StaffWhereUniqueInput!
  data: StaffUpdateDataInput!
}

input StaffUpdateWithWhereUniqueWithoutOrganizationInput {
  where: StaffWhereUniqueInput!
  data: StaffUpdateWithoutOrganizationDataInput!
}

input StaffUpdateWithWhereUniqueWithoutTeamInput {
  where: StaffWhereUniqueInput!
  data: StaffUpdateWithoutTeamDataInput!
}

input StaffUpsertWithWhereUniqueNestedInput {
  where: StaffWhereUniqueInput!
  update: StaffUpdateDataInput!
  create: StaffCreateInput!
}

input StaffUpsertWithWhereUniqueWithoutOrganizationInput {
  where: StaffWhereUniqueInput!
  update: StaffUpdateWithoutOrganizationDataInput!
  create: StaffCreateWithoutOrganizationInput!
}

input StaffUpsertWithWhereUniqueWithoutTeamInput {
  where: StaffWhereUniqueInput!
  update: StaffUpdateWithoutTeamDataInput!
  create: StaffCreateWithoutTeamInput!
}

input StaffWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  organization_every: OrganizationWhereInput
  organization_some: OrganizationWhereInput
  organization_none: OrganizationWhereInput
  team_every: TeamWhereInput
  team_some: TeamWhereInput
  team_none: TeamWhereInput
  isLead: Boolean
  isLead_not: Boolean
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  joinedAt: DateTime
  joinedAt_not: DateTime
  joinedAt_in: [DateTime!]
  joinedAt_not_in: [DateTime!]
  joinedAt_lt: DateTime
  joinedAt_lte: DateTime
  joinedAt_gt: DateTime
  joinedAt_gte: DateTime
  AND: [StaffWhereInput!]
  OR: [StaffWhereInput!]
  NOT: [StaffWhereInput!]
}

input StaffWhereUniqueInput {
  id: ID
}

type Subscription {
  department(where: DepartmentSubscriptionWhereInput): DepartmentSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  lead(where: LeadSubscriptionWhereInput): LeadSubscriptionPayload
  organization(where: OrganizationSubscriptionWhereInput): OrganizationSubscriptionPayload
  staff(where: StaffSubscriptionWhereInput): StaffSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  members: Int
  description: String
  active: Boolean
  lead(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Staff!]
  createdAt: DateTime!
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  id: ID
  name: String!
  members: Int
  description: String
  active: Boolean
  lead: StaffCreateManyWithoutTeamInput
}

input TeamCreateManyInput {
  create: [TeamCreateInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutLeadInput {
  create: [TeamCreateWithoutLeadInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutLeadInput {
  id: ID
  name: String!
  members: Int
  description: String
  active: Boolean
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  members_ASC
  members_DESC
  description_ASC
  description_DESC
  active_ASC
  active_DESC
  createdAt_ASC
  createdAt_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  members: Int
  description: String
  active: Boolean
  createdAt: DateTime!
}

input TeamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  members: Int
  members_not: Int
  members_in: [Int!]
  members_not_in: [Int!]
  members_lt: Int
  members_lte: Int
  members_gt: Int
  members_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  active: Boolean
  active_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [TeamScalarWhereInput!]
  OR: [TeamScalarWhereInput!]
  NOT: [TeamScalarWhereInput!]
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateDataInput {
  name: String
  members: Int
  description: String
  active: Boolean
  lead: StaffUpdateManyWithoutTeamInput
}

input TeamUpdateInput {
  name: String
  members: Int
  description: String
  active: Boolean
  lead: StaffUpdateManyWithoutTeamInput
}

input TeamUpdateManyDataInput {
  name: String
  members: Int
  description: String
  active: Boolean
}

input TeamUpdateManyInput {
  create: [TeamCreateInput!]
  update: [TeamUpdateWithWhereUniqueNestedInput!]
  upsert: [TeamUpsertWithWhereUniqueNestedInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  set: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyMutationInput {
  name: String
  members: Int
  description: String
  active: Boolean
}

input TeamUpdateManyWithoutLeadInput {
  create: [TeamCreateWithoutLeadInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  set: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutLeadInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutLeadInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput!
  data: TeamUpdateManyDataInput!
}

input TeamUpdateWithoutLeadDataInput {
  name: String
  members: Int
  description: String
  active: Boolean
}

input TeamUpdateWithWhereUniqueNestedInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateDataInput!
}

input TeamUpdateWithWhereUniqueWithoutLeadInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutLeadDataInput!
}

input TeamUpsertWithWhereUniqueNestedInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateDataInput!
  create: TeamCreateInput!
}

input TeamUpsertWithWhereUniqueWithoutLeadInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutLeadDataInput!
  create: TeamCreateWithoutLeadInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  members: Int
  members_not: Int
  members_in: [Int!]
  members_not_in: [Int!]
  members_lt: Int
  members_lte: Int
  members_gt: Int
  members_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  active: Boolean
  active_not: Boolean
  lead_every: StaffWhereInput
  lead_some: StaffWhereInput
  lead_none: StaffWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
}
`
      }
    