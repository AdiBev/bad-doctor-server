const express = require("express");
const router = express.Router();
const graphQLCLient = require("./graphql-client");
const searchQuery = require("./query");

router.get("/", async (req, res) => {
  const { limit, term, location } = req.query;
  const variables = {
    term,
    location,
    limit: parseInt(limit),
  };
  try {
    const data = await graphQLCLient.request(searchQuery, variables);
    res.send(JSON.stringify(data));
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
