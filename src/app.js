const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const apiV1 = require("./api.v1");

// Add CORS and security related middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/v1", apiV1);

export default app;
