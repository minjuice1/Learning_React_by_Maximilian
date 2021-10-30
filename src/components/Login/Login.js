import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState("");
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("setTimeout test");
			setFormIsValid(
				enteredEmail.includes("@") && enteredPassword.trim().length > 6,
			);
		}, 500);

		// cleanUp function : useEffect 함수가 실행 될 때마다, 처음 실행되는 경우를 제외하고는
		// cleanUp function이 실행되면서, setTimeout 함수 (side function)가 재실행 됨.
		return () => {
			console.log("cleanUp ");
			clearTimeout(identifier);
		};
		// Dependency(종속성)(enteredEmail, enteredPassword)가 변경될 때마다, 다시 실행 됨.
	}, [enteredEmail, enteredPassword]);

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes("@"));
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(enteredEmail, enteredPassword);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailIsValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={enteredEmail}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordIsValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={enteredPassword}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
