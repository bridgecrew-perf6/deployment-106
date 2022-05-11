const express = require("express");
const app = express();
const routes = require("./routes/index");
const pool = require('./db/database')     

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

const PORT=8002



app.listen(PORT, () => {

	console.log(`This users app listening at : http://localhost:${PORT}`);

	

});