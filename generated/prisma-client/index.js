"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Testers",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "EventMember",
    embedded: false
  },
  {
    name: "EventLead",
    embedded: false
  },
  {
    name: "EventTeam",
    embedded: false
  },
  {
    name: "EventDiscusionChannel",
    embedded: false
  },
  {
    name: "EventMessage",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "GroupTeam",
    embedded: false
  },
  {
    name: "GroupMember",
    embedded: false
  },
  {
    name: "Organization",
    embedded: false
  },
  {
    name: "Department",
    embedded: false
  },
  {
    name: "Team",
    embedded: false
  },
  {
    name: "Staff",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://remotify-server-7050e23715.herokuapp.com`
});
exports.prisma = new exports.Prisma();
