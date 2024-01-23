const express = require("express")
const app = express();
const PORT = 8080;
const cors = require("cors")
const mongoose = require("mongoose");

const config = require("./config");

const dbUrl = config.dbUrl;

const usersRouter = require("./routes/users");

mongoose.connect(dbUrl, { useNewUrlParser: true });

app.use(express.json());
app.use(cors())
app.use("/users", usersRouter);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})