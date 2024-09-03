const fs = require('node:fs');
const express = require('express');
const exp = require('node:constants');

const app = express();
const PORT = 4300;

app.listen(PORT, (req, res) => {
    console.log(`Server is listening on PORT ${PORT}...`)
});