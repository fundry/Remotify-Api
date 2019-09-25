"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Team",
    embedded: false
  },
  {
    name: "Group",
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
    name: "Testers",
    embedded: false
  },
  {
    name: "Lead",
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
  endpoint: `http://localhost:4466`,
  secret: `${process.env["APP_SECRET"]}`
});
exports.prisma = new exports.Prisma();
