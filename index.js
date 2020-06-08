const express = require("express");
require("cross-fetch/polyfill"); /// fix for graphql-request fetch issue
const routeHandler = require("./src/route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/graphql", routeHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
