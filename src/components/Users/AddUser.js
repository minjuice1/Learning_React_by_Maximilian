import React from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";

const AddUser = () => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text"></input>
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number"></input>
				<button type="submit">Add User</button>
			</form>
		</Card>
	);
};

export default AddUser;
