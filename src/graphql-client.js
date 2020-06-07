const client = require("graphql-request");
const { GraphQLClient } = client;

const endpoint = "https://api.yelp.com/v3/graphql";
const apiToken =
  "rwHmIJ9ipaXySeJ_FpnX9dNMRev40UvFDiGCbq951Vl2lY1Me4ZJU5nWD5peGUxADYzpI0OEes12ZJkWS4hngZhutf45XSXXk2HxF6bwQ9KeUOFKmOCrUapyF4vbXnYx";

const graphQLCLient = new GraphQLClient(endpoint, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${apiToken}`,
  },
});

module.exports = graphQLCLient;
