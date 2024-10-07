const express = require("express");
const app = express();
const PORT = 3000;

const employees = require("./employees");

// method, path, handler
app.get("/", (req, res) => {});
app.get("/employees", (req, res) => {});
app.get("/employees/:id", (req, res) => {
	const { id } = req.params;

	if (id === "random") {
		const rval = Math.floor(Math.random() * employees.length);
		const employee = employees.filter((e) => e.id == rval)[0];
		res.json(employee);
	} else if (0 <= +id && +id < employees.length) {
		const employee = employees.filter((e) => e.id == +id)[0];
		res.json(employee);
	} else {
		res.status(404).send("The");
	}
});
//app.get("/", (req, res)=>{})

// listen
app.listen(PORT);
