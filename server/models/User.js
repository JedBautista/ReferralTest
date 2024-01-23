const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
	{
		givenName: {
			type: String,
		},
		surname: {
			type: String,
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
	},
	{ timestamps: true }
);

let User = mongoose.model("user", userSchema);

module.exports = User;